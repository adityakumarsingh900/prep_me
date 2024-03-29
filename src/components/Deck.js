import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'
import Card from './Card'
import topics from '../topics'

const colors = [
  '#f9546b',
  '#f5c31a',
  '#42cfca',
  '#f5c',
  '#3560ff',
  '#c0c0c0',
];

// randomize topics array
topics.sort(() => Math.random() - 0.5);
const paginatedTopics = [];
// devide topics into sub arrays. Each array cann have 7 topics.
while (topics.length > 0) {
  paginatedTopics.push(topics.splice(0, 7));
}

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const [currentDeck, setCurrentDeck] = useState(0);
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(paginatedTopics[currentDeck].length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === paginatedTopics[currentDeck].length)
      setTimeout(() => {
        gone.clear();
        setCurrentDeck((o) => {
          if (o === paginatedTopics.length - 1) {
            return 0;
          }
          return o + 1;
        });
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      <a style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
      }} href='https://www.linkedin.com/in/aditya-kumar-singh-a8b584106/' target='_blank' rel='noreferrer' >#happycoding ❤️</a>
      <span style={{
        fontWeight: 'bold',
        textShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
      }}>{currentDeck !== paginatedTopics.length-1 ? 'Fetching next 7 cards...' : 'Reloading'}</span>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundColor: colors[i%(colors.length)],
              // backgroundImage: `url(${cards[i]})`,
            }}
          >
            <Card
              heading={paginatedTopics[currentDeck][i].heading}
              content={paginatedTopics[currentDeck][i].content}
              isClickable={paginatedTopics[currentDeck][i].hasMore}
              id={paginatedTopics[currentDeck][i].id}
            />
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}
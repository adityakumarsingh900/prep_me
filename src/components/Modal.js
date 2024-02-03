import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';

const FullScreenModal = ({ isOpen }) => {
  const[content, setContent] = useState('');

  const toggleModal = () => {
    // remove hash from url
    window.location.hash = '';
    setContent('')
  };

  useEffect(() => {
    // load html file from /topics/<hash>.html
    if (isOpen) {
      const hash = window.location.hash;
      console.log('hash', hash);
      if (hash) {
        fetch(`${process.env.PUBLIC_URL}/topic_examples/${hash.slice(1)}.html`)
          .then((response) => response.text())
          .then((html) => {
            setContent(html);
          });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (content) window.hljs.highlightAll();
  }, [content])

  return (
    <div>
      {isOpen && (
        <div className={styles['madal-backdrop']}>
          <div className={styles['close-btn-wrapper']}>
            <button 
              onClick={toggleModal}
              className={styles['close-btn']}
            >
              X
            </button>
          </div>

          <div className={styles['content-wrapper']}>
            {content && (<span dangerouslySetInnerHTML={{ __html: content }} />)}
            {!content && shimmer}
          </div>
        </div>
      )}
    </div>
  );
};

const shimmer = (
  <div>
      <div className={styles["shimmer-light"]}></div>
      <div className={styles["shimmer"]}></div>
    </div>
);

export default FullScreenModal;
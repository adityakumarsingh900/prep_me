import { useEffect, useState } from 'react';
import Deck from './components/Deck';
import FullScreenModal from './components/Modal';

export default function App() {
  // read hash
  const [showModal, setShowModal] = useState(false);

  // add hash change event listener
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="container">
      <FullScreenModal isOpen={showModal} />
      <Deck />
    </div>
  )
}

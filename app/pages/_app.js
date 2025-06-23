import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { IoTrophyOutline, IoCalendarOutline } from 'react-icons/io5';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const getModalContent = () => {
    if (modalContent === 'tournaments') {
      return (
        <div className="coming-soon-content">
          <div className="coming-soon-icon"><IoTrophyOutline /></div>
          <h1>Sección de Torneos en Desarrollo</h1>
          <p>¡Muy pronto podrás crear y unirte a torneos para llevar a tu equipo a la gloria! Estamos trabajando en ello.</p>
        </div>
      );
    }
    if (modalContent === 'friendly') {
      return (
        <div className="coming-soon-content">
          <div className="coming-soon-icon"><IoCalendarOutline /></div>
          <h1>Sección de Amistosos en Desarrollo</h1>
          <p>Pronto podrás organizar partidos amistosos. ¡Estamos finalizando los detalles!</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar onMenuClick={openModal} />
      <Component {...pageProps} />
      <Footer />
      <Modal isOpen={!!modalContent} onClose={closeModal}>
        {getModalContent()}
      </Modal>
    </>
  );
} 
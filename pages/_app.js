import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { IoCalendarOutline, IoPeopleOutline } from 'react-icons/io5';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const getModalContent = () => {
    if (modalContent === 'tournaments') {
      return (
        <div className="modal-info-content">
          <IoCalendarOutline className="icon" />
          <h1>Torneos</h1>
          <p>Estamos trabajando en una increíble sección de torneos. ¡Vuelve pronto!</p>
        </div>
      );
    }
    if (modalContent === 'friendly') {
      return (
        <div className="modal-info-content">
          <IoPeopleOutline className="icon" />
          <h1>Amistosos</h1>
          <p>Encuentra partidos amistosos y nuevos oponentes. ¡Disponible muy pronto!</p>
        </div>
      );
    }
    return null;
  };

  return (
    <SessionProvider session={session}>
      <Navbar onMenuClick={openModal} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Modal isOpen={!!modalContent} onClose={closeModal}>
        {getModalContent()}
      </Modal>
    </SessionProvider>
  );
} 
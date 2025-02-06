import "react-datepicker/dist/react-datepicker.css";
import { Modal } from './components/Modal';
import { DeleteForm } from './components/DeleteForm';
import { useState } from 'react';
import { ISeminarAction, CrudType } from './interfaces/interfaces';
import { EditForm } from './components/EditForm';
import { SeminarList } from './components/SeminarList';
import { AddButton } from './components/AddButton';
import { Toaster } from "sonner";
import { Footer } from "./components/Footer";



function App() {
  const [activeModal, setActiveModal] = useState<ISeminarAction | null>(null);

  const handleModalClose = () => setActiveModal(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className='container max-w-screen-lg mx-auto flex-grow sm:p-6 lg:p-8 bg-white'>
        <h1 className="text-3xl font-bold mb-10 p-6">Актуальные семинары</h1>
        <SeminarList setActiveModal={setActiveModal} />
        <AddButton onClick={() => setActiveModal({ action: CrudType.CREATE })} />
      </main>
      <Modal isOpen={!!activeModal} onClose={handleModalClose}>
        {activeModal?.action === CrudType.DELETE && activeModal.seminarId && (<DeleteForm onCancel={handleModalClose} seminarId={activeModal.seminarId} />)}
        {activeModal?.action === CrudType.CREATE && (<EditForm onClose={handleModalClose} />)}
        {activeModal?.action === CrudType.EDIT && (<EditForm seminarId={activeModal.seminarId} onClose={handleModalClose} />)}
      </Modal>

      {/** use toast to give user feedback on errors */}

      <Toaster position="bottom-right" richColors />
      <Footer />
    </div>
  )
}

export default App

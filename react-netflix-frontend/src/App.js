
import './app.scss';

import React from 'react'
import { notifySuccess } from './utils/notify/Toster';
import { useGlobalAppContext } from './context/AppGlobalContent';
import ReactPortal from './global/Modal/ReactPortal';
import Homepage from './pages/homePage';

const App = () => {

  const { showHideModal } = useGlobalAppContext()
  return (
    <div className="app">
      <button onClick={showHideModal}>Show Modal</button>
      <ReactPortal ClassName={'class'} ModalContent={Homepage}></ReactPortal>
    </div>
  )
}

export default App
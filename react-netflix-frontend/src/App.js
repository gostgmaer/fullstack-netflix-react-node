
import './app.scss';

import React from 'react'
import { notifySuccess } from './utils/notify/Toster';
import { useGlobalAppContext } from './context/AppGlobalContent';
import ReactPortal from './global/Modal/ReactPortal';
import Homepage from './pages/homePage';
import Router from './router/Router';
import Topbar from './global/Topbar';

const App = () => {

  const { showHideModal } = useGlobalAppContext()
  return (
    <div className="app">
   
     <Router/>
    </div>
  )
}

export default App

import './app.scss';

import React from 'react'
import { notifySuccess } from './utils/notify/Toster';
import { useGlobalAppContext } from './context/AppGlobalContent';
import ReactPortal from './global/Modal/ReactPortal';
import Homepage from './pages/homePage';
import Topbar from './global/Topbar';
import { useGlobalAuthContext } from './context/auth/Authcontext';
import ProtectedRoute, { UnprotectedRoute } from './router/Router';
import { useEffect } from 'react';

const App = () => {
  const { user, setUser, LoginEvent } = useGlobalAuthContext();

  useEffect(() => {
    const userData = window.localStorage.getItem('isloggedIn')
    setUser(userData)

  }, []);

  const { showHideModal } = useGlobalAppContext()
  return (
    <div className="app">

      {user ? <ProtectedRoute /> : <UnprotectedRoute />}
    </div>
  )
}

export default App
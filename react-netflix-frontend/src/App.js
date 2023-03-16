import React from 'react'
import './app.scss';
import { useGlobalAppContext } from './context/AppGlobalContent';
import { useGlobalAuthContext } from './context/auth/Authcontext';
import ProtectedRoute, { UnprotectedRoute } from './router/Router';
import { useEffect } from 'react';
import Loading from './components/loader/Loading';

const App = () => {
  const { user, setUser, LoginEvent } = useGlobalAuthContext();
const {loader} = useGlobalAppContext()

  useEffect(() => {
    const userData = window.localStorage.getItem('isloggedIn')
    setUser(userData)

  }, []);

  const { showHideModal } = useGlobalAppContext()
  return (
    <div className="app">

      {user ? <ProtectedRoute /> : <UnprotectedRoute />}
     {<Loading/>}
    </div>
  )
}

export default App
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify'



const ReactToaster = () => {
    return (
        <Fragment>
          {  ReactDOM.createPortal(<ToastContainer></ToastContainer>, document.getElementById("toaster"))}
        </Fragment>
    )
}

export default ReactToaster
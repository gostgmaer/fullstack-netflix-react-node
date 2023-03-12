import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import ModalOverLay from "./ModalOverLay";
import "./modal.scss";

const ReactPortal = ({ModalContent,ClassName}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverLay ClassName={ClassName}  Content={ModalContent}></ModalOverLay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default ReactPortal;
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import ModalOverLay from "./ModalOverLay";
import "./modal.scss";

const ReactPortal = ({ModalContent,ClassName,color}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverLay ClassName={ClassName} btnColor={color}  Content={ModalContent}></ModalOverLay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default ReactPortal;
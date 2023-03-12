
import React, { useState } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import './modal.scss'

const ModalOverLay = ({ Content, ClassName }) => {
    const { modal, showHideModal } = useGlobalAppContext()

    return (
        <div style={modal ? { display: "block" } : {}} className="modal-overlay">
            {modal && (
                <div className={`modal-overlay-Wrapper ${ClassName}`}>
                    <div className="modalInner">
                        <div className="modalContent text-black">
                            <Content></Content>
                        </div>
                        <div className="modalClose">
                            <button className="btn  btn-primary" onClick={showHideModal}>X</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalOverLay;



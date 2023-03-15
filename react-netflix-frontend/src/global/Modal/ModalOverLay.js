
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import './modal.scss'

const ModalOverLay = ({ Content, ClassName, btnColor }) => {
    const { modal, showHideModal } = useGlobalAppContext()

    return (
        <div style={modal ? { display: "block", zIndex: '9999' } : {}} className="modal-overlay">
            {modal && (
                <div className={`modal-overlay-Wrapper ${ClassName}`}>
                    <div className="modalInner">
                        <div className="modalContent text-black">
                            <Content></Content>
                        </div>
                        <div className="modalClose">
                            <IconButton sx={{ color: btnColor }} className="btn btn-primary" onClick={showHideModal}><Close /></IconButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalOverLay;



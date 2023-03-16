import { Backdrop, Button, CircularProgress } from "@mui/material";
import React from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";

const Loading = () => {
  const [open, setOpen] = React.useState(false);
  const {loader,openModal}= useGlobalAppContext()
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
    
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;

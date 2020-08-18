import React from "react";

class Notification {
  reference = React.createRef();

  close = (key) => {
    if(this.reference.current){
        this.reference.current.closeSnackbar(key);
    }
  };

  success = (message) => {
    if(this.reference.current){
        this.reference.current.enqueueSnackbar(message, {
          preventDuplicate: true,
          variant: "success",
          autoHideDuration: 3000,
        });
    }
  };

  error = (message) => {
    if(this.reference.current){
        this.reference.current.enqueueSnackbar(message, {
          preventDuplicate: true,
          variant: "error",
          autoHideDuration: 3000,
        });
    }
  };
};

const notification = new Notification();
export default notification;

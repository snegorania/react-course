import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ErrorModal = ({title, message, open, onClose}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color='red' onClick={() => onClose()}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ErrorModal;
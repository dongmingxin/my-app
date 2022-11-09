import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface SimpleSnackbarProps {
    status: boolean,
    onClose: (event: React.SyntheticEvent | Event, reason?: string) => void,
    message: string,
    severity?: 'error' | 'warning' | 'info' | 'success'
}

export default function SimpleSnackbar({
    status,
    onClose,
    message,
    severity = 'info'
  }:SimpleSnackbarProps) {

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={onClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
      <Snackbar
        open={status}
        autoHideDuration={4000}
        onClose={onClose}
        action={action}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
         </Alert>
      </Snackbar>
  );
}
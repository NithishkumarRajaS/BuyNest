import React from 'react';
import { Alert } from '@mui/material';

const Notification = ({ message, severity }) => {
  if (!message) return null;
  return <Alert severity={severity || 'info'}>{message}</Alert>;
};

export default Notification;

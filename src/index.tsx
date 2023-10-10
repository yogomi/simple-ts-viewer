import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Button variant='outlined'>Hello, World!!!</Button>
  </React.StrictMode>
);

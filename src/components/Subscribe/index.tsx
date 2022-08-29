import * as React from 'react';
import Box from '@mui/material/Box';

// UI
import { TextField, Button } from '@mui/material';

export default function Subscribe() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 }
      }}
    >
      <TextField
        helperText="Please enter your email"
        className="subscribe-input"
        label="Name"
      />
      <Button variant={'contained'} className="subscribe-button">
        Receive Updates
      </Button>
    </Box>
  );
}

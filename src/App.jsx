import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Input, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const removeInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '300px',
          border: '1px solid black',
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              My Cool Title
            </Typography>
            <IconButton color="inherit" onClick={addInput}>
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            maxHeight: 300,
            overflowY: 'auto',
            padding: 2,
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            {inputs.map((input, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <Input
                  value={input}
                  onChange={(e) => {
                    const newInputs = [...inputs];
                    newInputs[index] = e.target.value;
                    setInputs(newInputs);
                  }}
                  sx={{ color: 'white' }}
                />
                <IconButton color="inherit" onClick={() => removeInput(index)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

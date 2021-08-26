import { h } from 'preact';
import { Box, Button, CssBaseline, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Box component="main">
        <ToggleButtonGroup  exclusive>
            <ToggleButton value="editing" aria-label="Editing">
              TOGGLE BUTTON 1
            </ToggleButton>
            <ToggleButton value="presenting" aria-label="Presenting">
              TOGGLE BUTTON 2
            </ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained">
          <Typography>A BUTTON</Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default App;

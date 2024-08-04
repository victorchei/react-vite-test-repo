import { Button, Stack } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack>
      <Button variant='outlined' onClick={() => setCount((s) => s + 1)}>
        Click me, counts: {count}
      </Button>
    </Stack>
  );
}

export default App;

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: '20px',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '22px',
        }}
      >
        hi, this project is specifically to try out redux toolkit and redux rtk
        library feature.
      </Paper>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{
          textAlign: 'center',
          display: 'block',
        }}
      >
        <Button>
          <Link to="/">Home | local</Link>
        </Button>
        <Button>
          <Link to="/">rtk query</Link>
        </Button>
        <Button>
          <Link to="/">rtk&local</Link>
        </Button>
        <Button>
          <Link to="/">saga side effects</Link>
        </Button>
      </ButtonGroup>
    </>
  );
}

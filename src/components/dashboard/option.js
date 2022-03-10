import {Button, ButtonGroup} from '@mui/material';

export const Options = (props) => (
  <ButtonGroup variant="outlined" aria-label="outlined button group" {...props}>
    <Button>
      UNO
    </Button>
    <Button>
      DOS
    </Button>
  </ButtonGroup>
);

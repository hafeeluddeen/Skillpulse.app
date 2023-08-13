import React,{useState} from 'react'
import GraphModule from './GraphModule';
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide
} from '@mui/material';

import TestModal from '../Components/TestModal'

import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import '../Styles/DashboardStyles.css'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    }
  },
});

function Dashboard() {

  const [open, setOpen] = useState(false); //to open and close the modal

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='Dashboard-Container'>

        <div className='Score-Graph-Representation'>
          <GraphModule />
        </div>

        <Divider style={{position:'absolute', height:'200px 0' }} />


        {/* Predefined score rep json from DATA, also the comments */}
        <div className='Score-Text-Representation'>
          <h3>TAKE ATLEAST ONE TEST TO VIEW ANALYTICS</h3>
        </div> 
        
        
        {/* This should open a fullscreen modal */}
        <div className="Evaluation-Modal">
          <Button variant="outlined"  onClick={handleClickOpen}>
            Take Test
          </Button>

          {/* This opens only on click, evaluation choices will */}
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className='Dialog-Container'
          >
            
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="p">
                  Choose Test Modules
                </Typography>
                <Button color="inherit" variant="p" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>

            {/* You can add your custom content here */}
            <TestModal />

          </Dialog>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Dashboard
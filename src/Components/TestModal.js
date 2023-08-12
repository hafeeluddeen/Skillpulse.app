import React, { useEffect, useState } from 'react';
import { Paper, IconButton, Container, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CarousalModules from './CarousalComponents/CarousalModules';
import CarousalSubjects from './CarousalComponents/CarousalSubjects';
import CarousalTests from './CarousalComponents/CarousalTests'


export default function TextCarousel() {

  const [userChoiceModule,changeChoiceModule] = useState("");

  const changeChoiceModalCallback = (newchoice) =>{
    changeChoiceModule(newchoice);
  }

  return (
    <Container style={{marginTop: '200px'}}>

      <Paper elevation={3} style={{ padding: '20px' }}>

        <CarousalModules changeChoiceModalCallback={changeChoiceModalCallback} />
        <CarousalSubjects userChoiceModule={userChoiceModule} />
        {/* <CarousalTests selectedSubject={userchoice} /> */}

      </Paper>
      
    </Container>
  );
}

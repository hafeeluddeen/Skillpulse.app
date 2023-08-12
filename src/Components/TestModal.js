import React, { useEffect, useState } from 'react';
import { Paper, IconButton, Container, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CarousalModules from './CarousalComponents/CarousalModules';
import CarousalSubjects from './CarousalComponents/CarousalSubjects';
import CarousalTests from './CarousalComponents/CarousalTests'


export default function TextCarousel() {

  const [userChoiceModule,changeChoiceModule] = useState("");
  const [userChoiceSubject,changeChoiceSubject] = useState("");

  const changeChoiceModalCallback = (newchoice) =>{
    changeChoiceModule(newchoice);
  }

  const changeChoiceSubjectCallback = (newchoice) =>{
    changeChoiceSubject(newchoice);
  }

  useEffect(()=>{
    console.log(`updated vals : ${userChoiceModule}`)
  },[userChoiceModule])

  return (
    <Container style={{height:'auto'}}>

      <Paper elevation={3} style={{ padding: '20px' }}>

        <CarousalModules changeChoiceModalCallback={changeChoiceModalCallback} />
        <CarousalSubjects userChoiceModule={userChoiceModule} changeChoiceSubjectCallback={changeChoiceSubjectCallback} />
        <CarousalTests userChoiceSubject={userChoiceSubject} userChoiceModule={userChoiceModule} />

      </Paper>
      
    </Container>
  );
}

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
  const [userChoiceTest,changeChoiceTest] = useState("");

  //this call back goes inside "carousal modules" and gets user input
  //.. then whenever the state of "userChoiceModule" is prints it
  const changeChoiceModuleCallback = (newchoice) =>{
    changeChoiceModule(newchoice);
  }

  //this call back goes inside "carousal subject" and gets user input
  //.. then whenever the state of "userChoiceSubject" is prints it
  const changeChoiceSubjectCallback = (newchoice) =>{
    changeChoiceSubject(newchoice);
  }

  //this call back goes inside "carousal test" and gets user input
  //.. then whenever the state of "userChoicetest" is prints it
  const changeChoiceTestCallback = (newchoice) =>{
    changeChoiceTest(newchoice);
  }

  //whenever update happens, update the input
  useEffect(()=>{
    console.log(`updated vals : Module : ${userChoiceModule}, Subject : ${userChoiceSubject}, Test Chosen : ${userChoiceTest}`)
  },[userChoiceModule,userChoiceSubject,userChoiceTest])

  return (
    <Container style={{height:'auto',marginTop:'20px'}}>

      <Paper elevation={3} style={{ padding: '20px' }}>

        <CarousalModules changeChoiceModuleCallback={changeChoiceModuleCallback} />
        <CarousalSubjects userChoiceModule={userChoiceModule} changeChoiceSubjectCallback={changeChoiceSubjectCallback} />
        <CarousalTests userChoiceSubject={userChoiceSubject} changeChoiceTestCallback={changeChoiceTestCallback} userChoiceModule={userChoiceModule} />

      </Paper>
      
    </Container>
  );
}

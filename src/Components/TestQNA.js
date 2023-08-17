import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, TextField, Button } from '@mui/material';
import TestTitleCard from './TestTitleCard';

import { cnEntryTest } from '../Data/QNA Entry Tests/ALL_ENTRY_TEST';
import { cnExitTest } from '../Data/QNA Entry Tests/ALL_EXIT_TEST'; 
import { useParams } from 'react-router-dom';
import { TestTotalMarks } from '../Data/TestHistory'
import { useNavigate } from 'react-router-dom';

const getQuestionSet = (moduleName,subjectName,testType) =>{


  if(testType === 'entry test'){

    var finalans = [];

    switch(subjectName) {
      case 'cn':
        finalans = cnEntryTest; 
        break;
      default:
        finalans = [];
    }
  }
  
  if(testType === 'exit test'){
    switch(subjectName) {
      case 'cn':
        finalans = cnExitTest; 
        break;
      default:
        finalans = [];
    }
  }

  return finalans;
}


function makeReqObject(questions,subjectName){

  /*
  template response object
  {
    "UserAnswer": 
      {
        "DBMS": 
          {
            "1": "It is a collection of data in some structured manner to enable users to easily access, manage, and store information.",
            "2": "Normalization is employed to standardize database tables or merge values that exhibit similarities based on specified criteria.",
            "3": "The primary key serves as the anchor for a composition. Just as a song revolves around its central theme, a primary key secures the database journey.",
            "4": "Indexes are data structures used to optimize data retrieval speed in a table, working akin to book indexes.",
            "5": "A foreign key is a field that refers to the primary key in another table, creating links between related data."
          }
      }
  }
  */

  var userAnswerObject = {}, tempUserAnswerObject = {}

  var questionNumber = 1;

  for (const entry of questions) {
    const { user_answer } = entry;
    tempUserAnswerObject[questionNumber++] = user_answer;
  }

  console.log(subjectName)

  userAnswerObject = {
    ["UserAnswer"] : {
      [subjectName] : tempUserAnswerObject
    }
  }

  return userAnswerObject;
}

// function updateTheGraphData(data){
//   var subject = Object.keys(data.scores)[0];
//   var sumFinalScores = 0;
//   Object.values(data.scores.final_score).forEach((val)=>{
//     sumFinalScores += val
//   })

//   //since graph prints for 10 only
//   // console.log(((sumFinalScores/5)/100)*10)

//   TestTotalMarks[subject] = (((sumFinalScores/5)/100)*10);
//   handleNavigate();
// }

// function hitServer(reqObj){

//   async function fetchData() {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/GetRating/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reqObj)
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   }
  
//   async function mainReq() {
//     const data = await fetchData();
//     if (data) {
//       console.log('Fetched data Yo :', data);
//       updateTheGraphData(data);
//     }
//   }
  
//   mainReq();
  
// }

const TestQNA = () => {

  const { moduleName, subjectName, testType } = useParams();

  const [questions,setAnswers] = useState([]);

  const navigate = useNavigate();

  function updateTheGraphData(data){
    var subject = Object.keys(data.scores)[0].toUpperCase();

    console.log('subject to access',subject);
    console.log('subject to access test history',TestTotalMarks[subject]);
    var sumFinalScores = 0;
    Object.values(data.scores.final_score).forEach((val)=>{
      sumFinalScores += val
    })


  
    //since graph prints for 10 only
    // console.log(((sumFinalScores/5)/100)*10)

    var retFinalSum = parseInt((((sumFinalScores/5)/100)*10))

    console.log('my marks',retFinalSum);
  
    // assuming m2 only uses backend
    TestTotalMarks.m2[subject] = retFinalSum;
    handleNavigate();
  }
  
  function hitServer(reqObj){
  
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/GetRating/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqObj)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }
    
    async function mainReq() {
      const data = await fetchData();
      if (data) {
        console.log('Fetched data Yo :', data);
        updateTheGraphData(data);
      }
    }
    
    mainReq();
    
  }

  const handleNavigate = () => {
    // Use the navigate function to navigate to a specific route
    navigate('/dashboard');
  };

  useEffect(()=>{
    console.log('params passed : ',moduleName,subjectName,testType);
    //update the questions set
    setAnswers(getQuestionSet(moduleName,subjectName,testType));
  },[])


  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...questions];
    updatedAnswers[index].user_answer = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    //send the request here, loading bar and update in dashboard, connect react chart

    console.log('inside handle submit',subjectName)

    //create a request object
    var reqObj = makeReqObject(questions,subjectName);
    console.log(reqObj," is the request object")

    //major part, hitting the backend endpoint
    var response = hitServer(reqObj);
    console.log('YAYYYY GOT RESPONSE',response)
  };

  return (
    <>
      { questions.length > 0 ? ( 
        <div style={{background:"#F0EBF8", padding: '20px'}}>
          <Container maxWidth="md">
            <TestTitleCard moduleName={moduleName} subjectName={subjectName} testType={testType} />
              {questions.map((question, index) => (
                <Card key={index} style={{ marginBottom: '20px', padding: '10px' }}>
                  <CardContent>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{`Question ${index + 1}: ${question.question}`}</p>
                    <TextField
                      id={`answer-${index}`}
                      label="Your Answer"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={questions[index].user_answer}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      style={{ marginTop: '10px' }}
                    />
                  </CardContent>
                </Card>
              ))}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Container>
        </div>
      ) : 
      (
        <h3>QUESTION SET NOT UPLOADED YET</h3>
      )
    
      }
    </>
  );
};

export default TestQNA;

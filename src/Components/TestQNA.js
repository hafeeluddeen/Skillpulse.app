import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, TextField, Button } from '@mui/material';
import TestTitleCard from './TestTitleCard';

import { cnEntryTest } from '../Data/QNA Entry Tests/ALL_ENTRY_TEST';
import { cnExitTest } from '../Data/QNA Entry Tests/ALL_EXIT_TEST'; 
import { useParams } from 'react-router-dom';

const getQuestionSet = (moduleName,subjectName,testType) =>{

  //console.log(cnEntryTest,moduleName,subjectName,testType)

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

const QuestionForm = () => {

  const { moduleName, subjectName, testType } = useParams();

  const [questions,setAnswers] = useState([]);

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
    console.log('Submitted answers:', questions);
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

export default QuestionForm;

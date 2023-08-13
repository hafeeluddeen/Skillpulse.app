import React, { useState } from 'react';
import { Container, Card, CardContent, TextField, Button } from '@mui/material';
import TestTitleCard from './TestTitleCard';

const QuestionForm = ({ questions }) => {
  const [answers, setAnswers] = useState(questions.map((q) => ({ user_answer: '' })));

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].user_answer = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    console.log('Submitted answers:', answers);
  };

  return (
    <div style={{background:"#F0EBF8"}}>
      <Container maxWidth="md">
        <TestTitleCard  />
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
                value={answers[index].user_answer}
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
    
  );
};

export default QuestionForm;

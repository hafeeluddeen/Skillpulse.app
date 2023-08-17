import React from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';

const testTitleCardStyles = {
  textAlign: 'center',
  borderRadius: '6px',
  borderTop: '10px solid rgb(105, 58, 184)',
  padding: '2px', 
  marginBottom: '10px'
};

const TestTitleCard = ({ moduleName,subjectName,testType }) => {
  
  return (
      <Card style={testTitleCardStyles}>
        <CardContent>
          <Typography variant="h4" component="h1">
            {subjectName.toUpperCase()}
          </Typography>
          <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
          <Typography variant="subtitle1" component="h5">
            <i>
              {moduleName.toUpperCase()} - {testType.toUpperCase()}
            </i>
          </Typography>
        </CardContent>
      </Card>
  );
};

export default TestTitleCard;

import React, { useEffect,useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography } from '@mui/material';
import { TestTotalMarks } from '../Data/TestHistory';

function GraphModule() {

  const [subjects,changeSubjects] = useState([]);
  const [marks,changeMarks] = useState([]);


  useEffect(()=>{
    let emptyIndices = []
    var tempMarks = Object.values(TestTotalMarks?.m1 || {})
    .concat(Object.values(TestTotalMarks?.m2 || {}))
    .filter((val,index) => {
      if(val > -1) emptyIndices.push(index)
      return val > -1;
    });

    var tempSubjects = Object.keys(TestTotalMarks?.m1 || {})
    .concat(Object.keys(TestTotalMarks?.m2 || {}))
    .filter((val,index) => {
      return emptyIndices.includes(index);
    });    

    changeMarks(tempMarks);
    changeSubjects(tempSubjects);
  },[])

  // tests not taken will be represented as -1
  // have to connect that too
  // connect -1 in graph module to testHistory
  // hardcoded marks

  return (
    <Card sx={{margin:'10px'}}>
      <CardContent>
        <div>
          { 
            (subjects.length>0 && marks.length>0) ? (
              <BarChart
                xAxis={[
                {
                    id: 'Score-Graph-Representation',
                    data: subjects,
                    scaleType: 'band',
                },
                ]}
                series={[
                {
                    data: marks,
                },
                ]}
                width={400}
                height={400}
              />
            ) : (<h1>NO Test Taken</h1>)
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default GraphModule
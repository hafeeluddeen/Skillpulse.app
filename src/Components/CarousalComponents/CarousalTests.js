import React, { useEffect, useState } from 'react'
import {TestModulesHistory} from '../../Data/TestHistory'
import ElegantCard from '../ElegantCard'
import '../../Styles/EvaluationStyles.css'
import { Divider } from '@mui/material'

function CarousalTests({userChoiceSubject,userChoiceModule}) {


  const [testAttendance,updateTestAttendance] = useState({entryTest:false,exitTest:false})

  //check the testHistory for selected Subject
  useEffect(()=>{

    // var obj = {
    //   entryTest : TestModulesHistory[userChoiceModule][userChoiceSubject].entryTest,
    //   exitTest : TestModulesHistory[userChoiceModule][userChoiceSubject].exitTest,
    // };

    // updateTestAttendance(obj);
    console.log(userChoiceSubject);

  },[userChoiceSubject])

  return (
    <div>
      <Divider  style={{position:'relative',width:'100%'}} />
      <div className='Carousal-Tests-Holder'>
        {!testAttendance.entryTest ? 
          (
            <div>
              <ElegantCard  cardName={`Entry Test ${userChoiceSubject}`} />
            </div>
          ):
          (
            <div>
              <ElegantCard  cardName={`Entry Test Taken`} />
            </div>
          )
        }
        {!testAttendance.exitTest ? 
          (
            <div>
              <ElegantCard  cardName={`Exit Test ${userChoiceSubject}`} />
            </div>
          ):
          (
            <div>
              <ElegantCard  cardName={`Exit Test Taken`} />
            </div>
          )
        }
          

      </div>
    </div>

  )
}

export default CarousalTests
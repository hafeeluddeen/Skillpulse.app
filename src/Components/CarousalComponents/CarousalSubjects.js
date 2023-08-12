import React, {useState, useEffect } from 'react'
import {modules} from '../../Data/ModulesData'
import ElegantCard from '../ElegantCard'
import '../../Styles/EvaluationStyles.css'
import { Divider } from '@mui/material';

function CarousalSubjects({userChoiceModule,changeChoiceSubjectCallback}) {
  
  const [coreSubjects,updateCoreSubjects] = useState([]);

  //whenever the prop in the parent changes the child also changes
  useEffect(()=>{
    if(userChoiceModule==='m1'){
        updateCoreSubjects(Object.values(modules.m1))
    }
    
    if(userChoiceModule==='m2'){
        updateCoreSubjects(Object.values(modules.m2))
    }
  },[userChoiceModule])

  return (
    <div>
        <Divider  style={{position:'relative',width:'100%'}} />
        <div className='Carousal-Subjects-Holder'>
            
            {coreSubjects!==undefined && coreSubjects.length!==0 ?
                ( 
                    coreSubjects.map((item,index) => (
                        <div key={index} onClick={()=>{
                            changeChoiceSubjectCallback(item)
                        }}>
                            <ElegantCard cardName={item} />
                        </div>
                    ))
                    
                ) : <h3>No modules selected yet</h3>
            }
        </div>
    </div>
  )
}

export default CarousalSubjects
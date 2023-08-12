import React, { useState, useEffect } from 'react'
import ElegantCard from '../ElegantCard'
import {modules} from '../../Data/ModulesData'
import '../../Styles/EvaluationStyles.css'


function CarousalModules({changeChoiceModalCallback}) {

  const [modulesList,updateModulesList] = useState(Object.keys(modules));

  return (
      <div className='Carousal-Modules-Holder'> 
        {modulesList.map((item,index) => (
          <div key={index} onClick={()=>{
            changeChoiceModalCallback(item)
          }}>
            <ElegantCard  cardName={item} />
          </div>
        ))}
      </div>
  )
}

export default CarousalModules
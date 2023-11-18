import React from 'react'
import { useSelector } from 'react-redux'
import { Studentitem } from './Studentitem';
import './studentitem.css';

export const Studentget = () => {
    const studentarray = useSelector( (state)=>state.student.students)
    console.log(studentarray);

  return (
    <div className='card_main'>
{
    studentarray.map( (std,index)=>(

        <div className='studentcard'>
         <Studentitem stdu={std}/>
        </div>

    ))
}
    </div>
  )
}

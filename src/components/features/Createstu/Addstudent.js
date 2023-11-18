import React from 'react';
import "./Addstudent.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addstudent } from '../studentSlice';

export const Addstudent = () => {
    const [newstudent, setnewstudent] = useState({
        firstname:"",
        lastname:" ",
        email:" ",
        phone:" " ,
        address:""
    }) 
    
    let name,value;
    
    const handlestudent =(e)=>{

        name = e.target.name;
        value=e.target.value;
        setnewstudent({...newstudent,[name]:value})
        console.log(newstudent);
        
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handlesubmit =(e)=>{
           dispatch(addstudent(e));
          navigate("/studentget");     
    }



  return (
    <div>
        <div className='form'>

   
    <input type="text" className='input_filed' placeholder='Enter FirstName'name='firstname' onChange={handlestudent} ></input><br></br>

    <input type="text" className='input_filed' placeholder='Enter LastName' name='lastname' onChange={handlestudent} ></input><br></br>

    <input type="email" className='input_filed' placeholder='Enter Email' onChange={handlestudent} name='email'  ></input>

    <input type="tel" className='input_filed' placeholder='Enter Number' onChange={handlestudent} name='phone' required ></input>

    <input type="text" className='input_filed' placeholder='Enter City' onChange={handlestudent} name='address' ></input><br></br>

    <button type='button' className='btn' onClick={()=>handlesubmit(newstudent)} >SUBMIT</button><br></br>

</div>
    </div>
  )
}

import React, { useEffect } from 'react';
import './Onestudent.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import {getstudent,clearstudent} from '../studentSlice'

export const Onestudent = () => {

    const paramid = useParams();
    console.log(paramid)
    const dispatch = useDispatch();          

    const one =useSelector( (state)=>state.student.student);
    console.log(one);

    // const { firstname,lastname,email,phone,address}=one;


    useEffect( ()=>{
      dispatch( getstudent(paramid.id));
         return ()=>{
            dispatch(clearstudent());
         };

    },[]);

  return (

 <div>

<div className='userdata'>

<div className='user_img'>
  <img src='https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'></img>
</div>

<div className='user_details'>
<p> <span>Name :</span> {one.firstname} {one.lastname} <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span> </p>

<p> <span>Email :</span>{one.email} <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash" ></i></span> </p>

<p> <span>Phone :</span>{one.phone}<span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span></p>

<p> <span>Address :</span> {one.address} <span className='edit'><i class="fa-solid fa-pen-to-square"></i></span>  <span><i class="fa-solid fa-trash"></i></span> </p> 
</div>

</div>

    </div>
  )
}

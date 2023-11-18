import React from 'react';
import { useNavigate } from 'react-router-dom';
import './studentitem.css';

export const Studentitem = ({stdu}) => {
    const{ id,firstname,lastname,email,phone,address}=stdu;
    console.log(stdu);

    const navigate = useNavigate();
    
    const gotoread =()=>{
        navigate(`/onestudent/${id}`)
    } 
  return (

    <div >

<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{firstname} {lastname}</h5>
    <p class="card-text">{address} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{email}</li>
    <li class="list-group-item">{phone}</li>
    <li class="list-group-item"><i class="fa-solid fa-eye" onClick={gotoread}></i></li>
    <li class="list-group-item"><i class="fa-solid fa-pen-to-square" ></i></li>
  </ul>
 
</div>

    </div>
  )
}

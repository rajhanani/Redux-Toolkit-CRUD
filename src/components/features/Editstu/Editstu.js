import React from 'react'

export const Editstu = () => {
  return (
    <div>
        <div className='form'>

   
<input type="text" className='input_filed' placeholder='Enter FirstName'name='firstname' onChange={handlestudent} ></input><br></br>

<input type="text" className='input_filed' placeholder='Enter LastName' name='lastname' onChange={handlestudent} ></input><br></br>

<input type="email" className='input_filed' placeholder='Enter Email' onChange={handlestudent} name='email'  ></input>

<input type="tel" className='input_filed' placeholder='Enter Number' onChange={handlestudent} name='phone' required ></input>

<input type="text" className='input_filed' placeholder='Enter City' onChange={handlestudent} name='address' ></input><br></br>

<button type='button' className='btn' onClick={()=>handlesubmit(newstudent)}>SUBMIT</button><br></br>

</div>
    </div>
  )
}

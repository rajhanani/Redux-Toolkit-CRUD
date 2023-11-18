import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const studentSlice = createSlice({
    name:"student",
    initialState:{
        students:[{
            id:1,
            firstname:"raj",
            lastname:"hanani",
            email:"raj@gmail.com",
            phone:9913548243,
            address:"vadodara"
        },{
            id:2,
            firstname:"rakshit",
            lastname:"vadaliya",
            email:"rakshit@gmail.com",
            phone:9913548243,
            address:"junagadh"
        }],
        student:{
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            address:""
        },
    },
    reducers:{
        getstudent:(state,action)=>{
            state.student = state.students.find( (el)=> el.id == action.payload);
            console.log(state.student)
        },
    
         clearstudent:(state)=>{
            state.student ={
                firstname:"",
                lastname:"",
                email:"",
                phone:"",
                address:""
            };
        },

        addstudent:(state,action)=>{
            const newgen =uuidv4()
            const newid = action.payload;
            newid["id"]=newgen;

     state.students=[action.payload,...state.students]
        }
    }
    
});
export const {getstudent,clearstudent,addstudent}= studentSlice.actions;
export default studentSlice.reducer;
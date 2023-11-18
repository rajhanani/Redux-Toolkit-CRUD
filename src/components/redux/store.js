import {configureStore} from '@reduxjs/toolkit';
import studenfindreducer from '../features/studentSlice';

export default configureStore({
    reducer:{
        student:studenfindreducer,
    },
});
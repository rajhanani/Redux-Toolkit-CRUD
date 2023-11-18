import logo from './logo.svg';
import { Studentget } from './components/features/Createstu/Studentget';
import { Studentitem } from './components/features/Createstu/Studentitem';
import { Route, Routes } from 'react-router-dom';
import { Onestudent } from './components/features/Readstu/Onestudent';
import { Addstudent } from './components/features/Createstu/Addstudent';

function App() {
  return (
    <div >
    
     <Routes>
     <Route path='/' element={<Addstudent/>}></Route>
     <Route path='/studentget' element={<Studentget/>}></Route>
     <Route path='/onestudent/:id' element={<Onestudent/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

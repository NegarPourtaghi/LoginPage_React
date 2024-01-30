import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './assets/SignUp';
import Login from './assets/Login'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Navigate to="/SignUp" />} />
    </Routes>
    </div>
  );
};

export default App;
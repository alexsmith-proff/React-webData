import Header from './components/Header';
import RoutesApp from './routes/RoutesApp';
import { useDispatch, useSelector } from 'react-redux'
import allEndpoints from './services/api';

import './App.css'
import { useEffect } from 'react';
import { setEmail_, setFirstName_, setId_, setIsAuth_, setLastName_ } from './feature/user/userSlice';


function App() {
  const dispatch = useDispatch()

  const checkAuth = async() => {
    if(localStorage.getItem('accessToken')){
      const response = await allEndpoints.auth.getProfile()
      dispatch(setFirstName_(response.data.firstName))
      dispatch(setLastName_(response.data.lastName))
      dispatch(setEmail_(response.data.email))
      dispatch(setId_(response.data.id))
      dispatch(setIsAuth_(true))
    }
  }
  useEffect(() =>{
    checkAuth()   
  },[])
  return (
    <div className="App">
      <Header />
      
      <RoutesApp />
    </div>

  );
}

export default App;

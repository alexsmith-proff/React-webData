import { useEffect } from 'react';
import Header from './components/Header';
import RoutesApp from './routes/RoutesApp';
import { useDispatch } from 'react-redux'
import { getUserData } from './feature/user/userSlice';
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getUserData())
  },[])

  return (
    <div className="App">
      <Header />
      
      <RoutesApp />
    </div>

  );
}

export default App;

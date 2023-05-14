import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Routers from './Router';

function App() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token')

  

  useEffect(() => {
    if(!isAuthenticated) navigate('/login')


    
  }, [isAuthenticated])

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;

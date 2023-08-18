import { Box, Button, Container, Switch, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Finalscreen from './pages/Finalscreen';
import Questions from './pages/Questions';
import Setting from './pages/Setting';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <Router>
        <Container>
          <Box textAlign='center'>
            <Typography variant='h2' fontWeight='bold' >Quizz App</Typography>
            <Switch  onChange={toggleTheme} />
            <Routes>
              <Route path='/' element={<Setting />} />
              <Route path='/questions' element={<Questions />} />
              <Route path='/finalscreen'element={<Finalscreen />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;

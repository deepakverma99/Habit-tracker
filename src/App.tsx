
import { Box, Container, Typography } from '@mui/material';
import './App.css'
import useHabitStore from './store/store'
import AddHabitForm from './components/addHabitForm';
import HabitList from './components/habitList';
import { useEffect } from'react';


function App() {
  const {fetchHabits} = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, [])
  

  const store = useHabitStore()
  console.log(store);
  return <Container>
    <Box>
      <Typography variant='h2' component="h1" gutterBottom align='center'>
        Habit Tracker
        {/* form */}
        <AddHabitForm/>
        {/* list  */}
        <HabitList/>
        {/* stats  */}

      </Typography>
    </Box>
  </Container>
}

export default App

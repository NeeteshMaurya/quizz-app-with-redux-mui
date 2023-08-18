
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'

const Finalscreen = () => {
  const {score} = useSelector((state)=>state.questiondetails)


  return (
    <div>
      <Box>
        <Typography variant='h4'>Your Final Score is -</Typography>
        <Typography variant='h4'>{score}</Typography>
      </Box>
    </div>
  )
}

export default Finalscreen
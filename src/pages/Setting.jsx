import { Button, CircularProgress, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { Box } from '@mui/system'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'

const Setting = () => {
    const navigate = useNavigate()

    const{response, error, isLoading} = useAxios('/api_category.php')
  
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/questions")
    }
    const difficultyOptions = [
        {id:"easy", name:"Easy"},
        {id:"medium", name:"Medium"},
        {id:"hard", name:"Hard"},
    ]
    const typeOptions = [
        {id:"multiple", name:"Multiple choice"},
        {id:"boolean", name:"True/False"},
    ]
  if(isLoading){
    return(
        <Box marginTop='50px'>
            <CircularProgress />
        </Box>
    )
  }
  if(error){
    return(
        <Typography variant='h3'>
            Something Went Wrong
        </Typography>
    )
  }
  return (
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Types" />
            <TextFieldComp label="Number of Questions" />
            <Box width='50%' marginTop='15px'>
                <Button type='submit' size='large' fullWidth variant='contained'>Get Started</Button>
            </Box>
        </form>
  )
}

export default Setting
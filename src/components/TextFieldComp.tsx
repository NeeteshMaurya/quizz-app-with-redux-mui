import { FormControl, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch } from 'react-redux'
import { setAmountOfQuestion } from '../redux/questionGenSlice'

type FieldProps ={
  label:string
}
const TextFieldComp = (props:FieldProps) => {
  const dispatch = useDispatch()
  const handleChange = (e:any) =>{
    switch(props.label){
      case 'Number of Questions':
          dispatch(setAmountOfQuestion(e.target.value))
          break;
      default:
        return
    }
  }

  return (
    <Box marginTop='10px' width='50%'>
      <FormControl fullWidth sx={{"& .MuiOutlinedInput-notchedOutline" : {
            borderColor : "white",
         },}}>
        <TextField onChange={handleChange} label={props.label} type='number'/>
      </FormControl>
    </Box>
  )
}

export default TextFieldComp
import { Box, MenuItem } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { setQuestionCategory,setQuestionDifficulty,setQuestionType } from '../redux/questionGenSlice'

type FieldProps ={
    options:[{
        id: number,
        name:string
    }]
    label:string
    
}
const SelectField = (props:FieldProps) => {
    const dispatch = useDispatch()
    // const [value, setValue] = useState('')
    const handleChange = (e:any)=>{
        switch(props.label){
            case 'Category':
                dispatch(setQuestionCategory(e.target.value))
                break;
            case 'Difficulty':
                dispatch(setQuestionDifficulty(e.target.value))
                break;
            case 'Types':
                dispatch(setQuestionType(e.target.value))
                break;
            default:
                return
        }
    }
  return (
    <Box width="50%">
        <FormControl className='formcontrol' sx={{marginTop:'10px',"& .MuiOutlinedInput-notchedOutline" : {
            borderColor : "white",
         },}} fullWidth>
            <InputLabel sx={{color:'white'}}>{props.label}</InputLabel>
            <Select sx={{color:'white'}} label={props.label} onChange={handleChange}>
                {props.options.map(({id, name})=>(
                    <MenuItem value={id} key={id}>{name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField
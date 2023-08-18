/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { Button,CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import useAxios from '../hooks/useAxios'
import { useSelector, useDispatch } from "react-redux"
import { setScore } from '../redux/questionGenSlice'


//Random number generator     this will be use to randomise correct option from 0-3 in answers array
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};


const Questions = () => {
  const {question_category,question_difficulty,question_type,amount_of_question,score} = 
    useSelector((state)=>state.questiondetails)

  let apiUrl = `/api.php?amount=${amount_of_question}`

  if(question_category){
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty){
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type){
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const{response, isLoading} = useAxios(apiUrl)
  console.log(response)
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(()=>{
    if(response?.results.length){
      const question = response.results[questionIndex]
      const answers = [...question.incorrect_answers]
      //this function will place the correct answer at random place from 0-3 in answers array
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
    }
  },[response,questionIndex])


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAnswerClick = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(setScore(score + 1));
    }
    //change question after click
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else{
      navigate("/finalscreen")
    }
  }

  if(isLoading){
    return(
      <Box marginTop='50px'>
          <CircularProgress />
      </Box>
  )
  }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{border:'1px solid white',width:'450px',zIndex:'3',boxShadow:'5px 5px 5px 5px #000000'}}>
      <Box sx={{margin:'20px'}}>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography variant="h6" marginTop='15px'>{response.results[questionIndex].question}</Typography>
        {options.map((data, index)=>(
          <Box marginTop='15px' >
            <Button onClick={handleAnswerClick} variant="contained">{data}</Button>
          </Box>
        ))}
        <Box marginTop='15px'>
          <Typography>Score {score}/{response.results.length}</Typography>
        </Box>
    </Box>
      </div>
    </div>
  )
}

export default Questions
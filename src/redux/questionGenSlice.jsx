/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        question_category: '',
        question_difficulty: '',
        question_type: '',
        amount_of_question: 50,
        score: 0
}



export const questionGenSlice = createSlice({
    name: 'questionGenSlice',
    initialState,
    reducers: {
        setQuestionCategory: (state, action)=>{   
            return {
                ...state,
                question_category:action.payload
            }
        },
        setQuestionDifficulty: (state, action)=>{   
            return {
                ...state,
                question_difficulty:action.payload
            }
        },
        setQuestionType: (state, action)=>{   
            return {
                ...state,
                question_type:action.payload
            }
        },
        setAmountOfQuestion: (state, action)=>{   
            return {
                ...state,
                amount_of_question:action.payload
            }
        },
        setScore: (state, action)=>{   
            return {
                ...state,
                score:action.payload
            }
        }
    }
})

//export actions to use it in components
export const {setQuestionCategory,setQuestionDifficulty,setQuestionType,setAmountOfQuestion,setScore} = questionGenSlice.actions

//export reducer to use it in store..
export default questionGenSlice.reducer
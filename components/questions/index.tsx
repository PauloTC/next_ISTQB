import Question from "../question"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export default function Questions({questions}: any) {

  const [ answers, setAnswers] = useState<any[]>([]);
  
  let responses: any[] = []
  let correctAnswers: any[] = []
  

  const handleSelect = (select: any) => {
    const { question, answer } = select
    responses[question] = answer;
  }
  

  questions.forEach((element: any) => correctAnswers.push(element.answer))

  const handleSubmit = () => {

    let solutions: any[] = []

    responses.forEach((res: any, index: number) => {
      if(res === correctAnswers[index]){
        solutions.push({
          severity: 'success',
          text: 'Respuesta correcta 😄',
        })
      } else {
        solutions.push({
          severity: 'error',
          text: `Incorrecto, la respuesta es: ${correctAnswers[index]}`,
        })
      }
    })
    setAnswers(solutions)
  }


  return(
    <>
      {
        questions.map( (question: any, index: number) => (
          <Question 
            key={index}
            index={index}
            answer={answers[index]}
            question={question}
            handleSelect={handleSelect}></Question>
        ))
      }
      <Box width='100%' my={3} >
        <Button fullWidth size='large' onClick={handleSubmit}  variant="contained">Continuar</Button>
      </Box>      
    </>
  ) 
}
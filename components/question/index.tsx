import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';

export default function Question({question,answer,index,handleSelect}: any) {

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

    handleSelect({ 
      question: index,
      answer: event.target.defaultValue})
  };

  
  return(
    <Box p={3} component={Card} my={4} display='flex' flexDirection='column' alignItems='flex-start' >
      <Typography variant="h6" gutterBottom>
        {`${index + 1} - ${question.title}`}
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
          value={value}
        >
          {
            question?.options?.map((o: any) => (
              <FormControlLabel key={o.id} value={o.letter} control={<Radio />} label={o.text} />
            ))
          }
        </RadioGroup>
      </FormControl>
      {
        answer && (
          <Box mt={3} display='flex' justifyContent='flex-end' width='100%' >
            <Alert severity={answer?.severity}>{answer?.text}</Alert>
          </Box>
        )
      }
    </Box>
  ) 
}
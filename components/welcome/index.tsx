import { Box, Typography } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import Button from '@mui/material/Button';

const Welcome = () => {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  return (
    <>
      <Box my={4} textAlign='center'  >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Nivel</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Nivel"
              onChange={handleChange}
          >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box width='100%' my={3} >
          <Button fullWidth size='large' variant="contained">Continuar</Button>
        </Box> 
      </Box>
    </>
  )

}

export default Welcome
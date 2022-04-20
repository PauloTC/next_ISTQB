import { Box, Typography } from "@mui/material"

type Template = {
  title: string,
  children: any
}


const Template = ({title, children} : Template) => (
  <>
    <Box my={4} textAlign='center'  >
      <Typography variant="h4" gutterBottom>{title}</Typography>
    </Box>
    {children}
  </>
)

export default Template
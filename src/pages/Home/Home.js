import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import './Home.css' 

function Home () {
    return (
        <Grid container xs={12} direction='column'justifyContent="center"
        alignItems="center" >
            
                <Box>
                    <img src="https://imageup.me/images/a919fd59-3e1b-4d32-bde4-d02f0cd2782d.png" className='cog'/>
                </Box>
           
        </Grid>
    )

}

export default Home;
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import './Home.css' 

function Home () {
    return (
        <Grid container xs={12} direction='column'justifyContent="center"
        alignItems="flex-start" >
            <Grid xs={12}>
                <Box>
                    <img src='https://mobimg.b-cdn.net/v3/fetch/d1/d198ca935f58dcd2d1f9eef823da1a4f.jpeg' className='cog'/>
                </Box>
            </Grid>
        </Grid>
    )

}

export default Home;
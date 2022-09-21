import { AppBar, Grid, Box, Toolbar, Typography, Link, IconButton, Button } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';
import './Navbar.css';
import { Stack } from '@mui/system';

function Navbar() {

    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container direction='row'>
                   
                    <Grid xs={1}>
                        <Box >
                            <IconButton>
                                <AccessibleIcon className='cade' />
                            </IconButton>
                        </Box>
                    </Grid >
                    <Grid xs={1}  >
                        <Typography className='textteemo'>
                            Loja do Teemo
                        </Typography>
                    </Grid>
                    
                    <Grid xs={10} justifyContent='flex-end'>
                        <Stack spacing={2} direction='row' justifyContent='flex-end'>
                            <Button color='inherit' href='/'> Home </Button>
                            <Button color='inherit' > Produtos</Button>
                            <Button color='inherit'> Cadastrar Produtos</Button>
                            <Button color='inherit'> Sobre Nós</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>

    )
}

export default Navbar;
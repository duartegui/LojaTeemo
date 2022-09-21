import { AppBar, Grid, Box, Toolbar, Typography, Link, IconButton, Button } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';
import './Navbar.css';
import { Stack } from '@mui/system';

function Navbar () {

    return (
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <AccessibleIcon/>           
                    </IconButton>
                    <Typography>
                        Loja do Teemo
                    </Typography>
                    <Stack spacing={2} direction='row' justifyContent='flex-end'>
                        <Button color='inherit' href='/'> Home </Button>  
                        <Button color='inherit' > Produtos</Button>
                        <Button color='inherit'> Cadastrar Produtos</Button>
                        <Button color='inherit'> Sobre Nós</Button>                      
                    </Stack>
                </Toolbar>

            </AppBar>

    )
}

export default Navbar;
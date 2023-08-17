import { Box, Toolbar } from '@mui/material'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const drawerWidth = 280;

export default function JournalLayout({children}) {
  return (
    <Box
    sx={{display: 'flex'}}
    >
        <NavBar
        drawerWidth = {drawerWidth}
        ></NavBar>
        <SideBar
        drawerWidth = {drawerWidth}   
        >

        </SideBar>

        <Box component='main'
        sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar';

const drawerWidth = 240;

export default function JournalLayout({children}) {
  return (
    <Box
    sx={{display: 'flex'}}
    >
        <NavBar
        drawerWidth = {drawerWidth}
        ></NavBar>
        {/* Sidebar drawerWidth*/}

        <Box component='main'
        sx={{flexGrow: 1, p: 3}}
        >
            {/* ToolBar */}
            {children}
        </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}
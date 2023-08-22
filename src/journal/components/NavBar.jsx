import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";

export default function NavBar({drawerWidth}) {
    const dispath = useDispatch()

    const onLogout = () => {
        dispath(logout())
    }

  return (
    <AppBar
    position='fixed'
    sx={{
        width:{sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{mr: 2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
                <Typography
                    variant="h6"
                    noWrap
                    component='div'
                > JournalApp </Typography>
                <IconButton color="error">
                  <LogoutOutlined
                    onClick={onLogout}
                  />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}

NavBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}

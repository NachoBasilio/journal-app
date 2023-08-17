import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function SideBar({drawerWidth}) {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>Aguara guazu</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"].map((month) => (
                        <ListItem key={month} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={month}/>
                                    <ListItemText secondary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit efficitur laoreet. Aliquam et finibus urna. Mauris sed feugiat neque. Nam iaculis, odio ut interdum convallis, elit velit pulvinar mauris, a volutpat nibh lacus vestibulum sapien. Maecenas ac dignissim mauris, id viverra erat."}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}

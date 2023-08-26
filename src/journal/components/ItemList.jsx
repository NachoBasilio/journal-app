import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'

export default function ItemList({note}) {
    const newTitle = useMemo(()=>{
        return note.title.length > 15 ? note.title.slice(0, 15) + '...' : note.title
    }, [note.title])

  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot></TurnedInNot>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={note.body}/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}


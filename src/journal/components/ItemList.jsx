import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'

export default function ItemList({note}) {
    const dispatch = useDispatch()
    const newTitle = useMemo(()=>{
        return note.title.length > 15 ? note.title.slice(0, 15) + '...' : note.title
    }, [note.title])

    const onActiveNote = () => {
        dispatch(setActiveNote(
            note
        ))
    }

  return (
    <ListItem disablePadding>
        <ListItemButton
            onClick={onActiveNote}
        >
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


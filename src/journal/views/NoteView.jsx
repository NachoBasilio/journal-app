import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";

export default function NoteView() {
  const {active} = useSelector(state => state.journal)
  const dispatch = useDispatch()
  const {title, body,  date, onInputChange, formState} = useForm(active)

  const dateString = useMemo(()=>{
    const newDate = new Date(date)

    return newDate.toUTCString()
  }, [date])

  useEffect(()=>{
    dispatch(setActiveNote(formState))
  },[formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }



  return (
    <Grid 
    container direction='row' 
    justifyContent="space-between" 
    alignItems="center" 
    sx={{mb:1}}
    className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
          <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
      </Grid>
      <Grid item>
        <Button 
        onClick={onSaveNote}
        color="primary" 
        sx={{padding: 2}}>
          <SaveOutlined/>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{border: 'none', mb: 1}}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio el dia de hoy?"
          label="Hoy..."
          name="body"
          value={body}
          onChange={onInputChange}
          minRows={7}
        />
        <ImageGallery/>
      </Grid>
    </Grid>
  )
}

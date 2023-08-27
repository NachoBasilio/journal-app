import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField, IconButton } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

export default function NoteView() {
  const {active, messageSaved, isSaving} = useSelector(state => state.journal)
  const dispatch = useDispatch()
  const {title, body,  date, onInputChange, formState} = useForm(active)

  const fileInputRef = useRef()

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

  useEffect(()=>{
    if(messageSaved.length > 0){
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  },[messageSaved])

  const onFileInputChange = ({target})=>{
    if(target.files === 0 ) return;
    dispatch(startUploadingFiles(target.files))
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

        <input type="file" 
        multiple
        onChange={onFileInputChange}
        style={{display: 'none'}}
        ref={fileInputRef}
        />

        <IconButton
        color="primary"
        disabled={isSaving}
        onClick={()=>fileInputRef.current.click()}
        >
            <UploadOutlined/>
        </IconButton>

        <Button 
        onClick={onSaveNote}
        color="primary" 
        sx={{padding: 2}}
        disabled={isSaving}
        >
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
        <ImageGallery images={active.imageUrls}/>
      </Grid>
    </Grid>
  )
}

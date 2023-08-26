import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useSelector } from "react-redux";

export default function NoteView() {
  const {active} = useSelector(state => state.journal)
  console.log(active)
  return (
    <Grid 
    container direction='row' 
    justifyContent="space-between" 
    alignItems="center" 
    sx={{mb:1}}
    className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
          <Typography fontSize={39} fontWeight="light">{active.date}</Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{padding: 2}}>
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
          value={active.title}
          sx={{border: 'none', mb: 1}}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio el dia de hoy?"
          label="Hoy..."
          value={active.body}
          minRows={7}
        />
        <ImageGallery/>
      </Grid>
    </Grid>
  )
}

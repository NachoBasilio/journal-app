import {Link as RouterLink } from "react-router-dom";

import { Grid, TextField, Button, Link } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";


export default function Registe() {
  return (
    <AuthLayout titulo="Registro">
    <form action="">
      <Grid container
      >
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
          id=""
          label="Nombre"
          type="text"
          placeholder="Juan Perez"
          fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
            id=""
            label="Correo"
            type="email"
            placeholder="Correo electronico"
            fullWidth
          />

        </Grid>
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
          id=""
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          fullWidth
          />
        </Grid>
        <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12} sm={12} >
            <Button variant="contained" fullWidth>
              Registrarme
            </Button>
          </Grid>

        </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link 
            component={RouterLink}
            color="inherit"
            to="/auth/login"
            > ¿Ya tienes cuenta?</Link>
          </Grid>
      </Grid>
    </form>
  </AuthLayout>
  )
}

import {Link as RouterLink } from "react-router-dom";

import { Grid, TextField, Button, Link } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import {useState } from "react";

const formaValidations = {
  email: [(value) => value.includes("@"), "El correo debe contener un @"],
  password: [(value) => value.length > 5, "La contraseña debe tener al menos 6 caracteres"],
  displayName: [(value) => value.length > 2, "El nombre debe tener al menos 3 caracteres"],
}
  

export default function Registe() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {email, password, displayName, onInputChange, formState, emailValid , passwordValid, displayNameValid, isFormValid} = useForm({
    email: "",
    password: "",
    displayName: ""
  },formaValidations)

  console.log(emailValid, passwordValid, displayNameValid);

  const onSubmit = (e)=>{
    e.preventDefault();
    setFormSubmitted(true)
  }
  




  return (
    <AuthLayout titulo="Registro">
    <form action="">
      <Grid container
      >
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
          id="Nombre"
          label="Nombre"
          type="text"
          placeholder="Juan Perez"
          name = "displayName"
          value={displayName}
          onChange={(e)=>onInputChange(e)}
          fullWidth
          error={!!displayNameValid && formSubmitted}
          helperText={displayNameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
            id="Correo"
            label="Correo"
            type="email"
            placeholder="Correo electronico"
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            fullWidth
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
          />

        </Grid>
        <Grid item xs={12} sx={{mt:2}}
        >
          <TextField
          id="Contraseña"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={(e)=>onInputChange(e)}
          fullWidth
          error={!!passwordValid && formSubmitted}
          helperText={passwordValid}
          />
        </Grid>
        <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12} sm={12} >
            <Button 
            type="submit"
            variant="contained" 
            fullWidth
            onClick={onSubmit}

            >
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

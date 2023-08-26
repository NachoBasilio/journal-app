import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Link, Alert } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import {checkingAuth, startGoogleSingIn, startLoginWithMailSingIn} from "../../store/auth/thunks";
import { useMemo } from "react";


export default function Login() {
  const dispatch = useDispatch()
  const {
    status,
    errorMessage
  } = useSelector(state => state.auth)

  const {email, password, onInputChange, formState} = useForm({
    email: "",
    password: ""
  })

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(startLoginWithMailSingIn({
      email,
      password
    }))
   
  }



  const isAuthenticating = useMemo(()=> status === "chequeando", [status])

  const onGoogleSingIn = (e)=>{
    e.preventDefault();
    dispatch(startGoogleSingIn())
  }

  return (  
      <AuthLayout titulo="Login">
        <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}
        >
          <Grid container
          >
            <Grid item xs={12} sx={{mt:2}}
            >
              <TextField
                id="email"
                label="Correo"
                type="email"
                placeholder="Correo electronico"
                name="email"
                value={email}
                onChange={onInputChange}
                fullWidth
              />

            </Grid>
            <Grid item xs={12} sx={{mt:2}}
            >
              <TextField
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={8} >
                <Button  
                disabled={isAuthenticating}
                variant="contained" 

                fullWidth 
                type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button 
                disabled={isAuthenticating}
                onClick={onGoogleSingIn} 
                variant="contained" 
                fullWidth>
                  <Google/>
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}
            sx={{
            display: errorMessage !== null ? "block" : "none",
            }}
            >
          <Alert
            severity="error"
          >
            {errorMessage}
          </Alert>
        </Grid>

              <Grid container direction="row" justifyContent="end">
                <Link 
                component={RouterLink}
                color="inherit"
                to="/auth/register"
                > Create una cuenta</Link>
              </Grid>
          </Grid>
        </form>
      </AuthLayout>

  )
}

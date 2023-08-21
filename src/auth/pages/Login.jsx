import { useDispatch } from "react-redux";
import {Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Link } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import {checkingAuth, startGoogleSingIn} from "../../store/auth/thunks";


export default function Login() {
  const dispatch = useDispatch()

  const {email, password, onInputChange, formState} = useForm({
    email: "zorro_patas_largas@gmail.com",
    password: "3731504430"
  })

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(checkingAuth())
    console.log(formState);
  }

  const onGoogleSingIn = (e)=>{
    e.preventDefault();
    dispatch(startGoogleSingIn())
    console.log("Google Sing In");
  }

  return (  
      <AuthLayout titulo="Login">
        <form 
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
                <Button variant="contained" fullWidth type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button onClick={onGoogleSingIn} variant="contained" fullWidth>
                  <Google/>
                </Button>
              </Grid>
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

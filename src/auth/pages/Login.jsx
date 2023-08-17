import {Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Link } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";


export default function Login() {
  return (  
      <AuthLayout titulo="Login">
        <form action="">
          <Grid container
          >
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
              <Grid item xs={12} sm={8} >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" fullWidth>
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

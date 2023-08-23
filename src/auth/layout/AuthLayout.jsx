import { Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function AuthLayout({children, titulo = ""}) {
  return (
    <Grid
    
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={
      {
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4
      }
    }
    >
        <Grid item
        className="box-shadow"
        xs={3}
        sx={{
            width:{md: 450},
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2
        }}
    >
        <Typography variant="h5"
            sx={{
            mb: 1
            }}
        >
        {titulo}
        </Typography>
            {children}
        </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    titulo: PropTypes.string
}

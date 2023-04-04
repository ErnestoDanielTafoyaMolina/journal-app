import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, TextField, Link, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth";



const formData = {
  displayName:'',
  email:'',
  password:''
};

const formValidations = {
  email:[(value)=>value.includes('@'), 'el correo debe tener una @'],
  password:[(value)=>value.length >=6, 'la contraseña requiere un minimo de 6 caracteres'],
  displayName:[(value)=>value.length >=1, 'el nombre es obligatorio'],

};



export const RegisterPage = () => {
  
  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( state=>state.auth );

  const isCheckingAuthentication = useMemo(()=>status==='checking',[ status ]);

  const { formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid } 
    = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited(true);
    if ( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }
  return (
    <AuthLayout title="Crear cuenta">
      <h1> { isFormValid ? 'Valido': 'Incorrecto' } </h1>
          <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>

            <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Nombre completo" 
                  type="text" 
                  placeholder="escribe tu nombre"
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSubmited }
                  helperText={ displayNameValid }
                  />
              </Grid>

              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.com"
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  error={ !!emailValid && formSubmited }
                  helperText={ emailValid }
                  />
              </Grid>

              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder="contrseña"
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  error={ !!passwordValid && formSubmited }
                  helperText={ passwordValid }
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }} >

                <Grid 
                  item 
                  xs={ 12 }
                  display={ !!errorMessage ? '':'none' }
                  >
                  <Alert severity='error'>{ errorMessage }</Alert>
                </Grid>

                <Grid item xs={ 12 }>
                  <Button 
                    disabled={ isCheckingAuthentication }
                    variant='contained'
                    type="submit" 
                    fullWidth 
                    onClick={ onSubmit }>
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
                <Link component={ RouterLink } color="inherit" to="/auth/login" >
                  ¿Ya tienes una cuenta?
                </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}

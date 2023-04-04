import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb:1 }} alignItems='center' className='animate__animated animate__fadeIn animate__faster' >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >
                28 de agosto de 2023
            </Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{ padding:2 }} >
                <SaveOutlined sx={{ fontSize:30, mr:1 }} />Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                sx={{ border:'none',mb:1 }}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Qué sucedió hoy?'
                minRows={ 5 }
            />
        </Grid>
        {/* ImageGalery */}
        <ImageGalery />
    </Grid>
  )
}

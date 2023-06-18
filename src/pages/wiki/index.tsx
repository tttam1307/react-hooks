import { Box, Grid, Tooltip } from '@mui/material'
import { Text, ButtonIcon, TextField, InputPassword, InputEmail, InputNumber } from '../../components/common/'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './style.css'

export const Wiki: React.FC = () => {
  return (
    <React.Fragment>
      <Box className="box-container">
        <Text variant="h1" gutterBottom>
          h1. Heading
        </Text>
        <Text variant="h2" gutterBottom>
          h2. Heading
        </Text>
        <Text variant="h3" gutterBottom>
          h3. Heading
        </Text>
        <Text variant="h4" gutterBottom>
          h4. Heading
        </Text>
        <Text variant="h5" gutterBottom>
          h5. Heading
        </Text>
        <Text variant="h6" gutterBottom>
          h6. Heading
        </Text>
        <Text variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Text>
        <Text variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Text>
        <Text variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Text>
        <Text variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Text>
        <Text variant="button" display="block" gutterBottom>
          button text
        </Text>
        <Text variant="caption" display="block" gutterBottom>
          caption text
        </Text>
        <Text variant="overline" display="block" gutterBottom>
          overline text
        </Text>
      </Box>

      <Box className="box-container">
        <Text variant="h5" gutterBottom>
          ButtonIcon
        </Text>
        <ButtonIcon colors={'#FBC400'} icon={<InfoOutlinedIcon />} />
        <ButtonIcon icon={<InfoOutlinedIcon />} />
      </Box>

      <Box className="box-container">
        <Text variant="h5" gutterBottom>
          Input
        </Text>
        <Grid container gap={2} >
          <Grid item xs={3}>
            <div className='input-form'>
              <Text variant='caption'>Input Text</Text>
              <TextField />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='input-form'>
              <Text variant='caption'>Input Password</Text>
              <InputPassword />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='input-form'>
              <Text variant='caption'>Input Email</Text>
              <InputEmail />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='input-form'>
              <Text variant='caption'>Input Number</Text>
              <InputNumber />
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
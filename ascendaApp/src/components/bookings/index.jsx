import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./booking.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import { send } from 'emailjs-com';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import PickDate from "./pageComponents/datePicker";

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
  });
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
});

export default function SignUp() {

  const [data, setData] = useState({ //to database
    uid: generateUUID(),
    title: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    emailAddress: "",
    specialRequest: "",
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvvCvc: "",
    address: "",
    city: "",
    zipCode: "",
    country: ""
  })

  const [toSend, setToSend] = useState({ //to email
    emailAddress:'',
    title:'',
    firstName:'',
    lastName:'',
    countryCode:'',
    phoneNumber:'',
    specialRequest:'',
  });

  function handleChange(e){
    const newdata = {...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    // console.log(newdata)
  }

  function handleSubmit(event){
    event.preventDefault();
    let url = "http://localhost:8000/api/bookings"

    const info = {
      uid: data.uid,
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      specialRequest: data.specialRequest,
      cardNumber: data.cardNumber,
      nameOnCard: data.nameOnCard,
      expiryDate: data.expiryDate.toString(),
      cvvCvc: data.cvvCvc,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country
    }
    console.log(info);
    Axios.post(url, info ,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    send(
      //'SERVICE ID','TEMPLATE ID',toSend,'User ID/public key'
      'service_jojfdl8','template_047mlnm', toSend, 'TCvmrc841BXV5uJ2X'
    )
    .then(res=>{
      console.log(res.data)
      console.log('SUCCESS!', res.status, res.text);
    })
    .catch((err) =>{
      console.log('FAILED...', err);
    });
    routeChange();
  };

  let navigate = useNavigate();
  const routeChange = () =>{
    navigate('/confirmationDetails', { state: data });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Card
          sx ={{
            color: 'text.secondary',
            borderRadius: 3,
            boxShadow: 1,
          }
          }
        >
          <CssBaseline />
          <Box
            sx={{
              marginLeft: 2,
              marginRight: 2,
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AirlineSeatReclineExtraIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align = "left">
              Primary Guest
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2} columns={60}>
                <Grid item xs={60} sm={12}>
                  <FormControl fullWidth>
                      <InputLabel>Title</InputLabel>
                      <Select
                        onChange = {(e) => handleChange(e)}
                        value={toSend.title}
                        autoComplete="title"
                        name="title"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                      >
                        <MenuItem className='menuItem' value={'Mr'}>Mr</MenuItem>
                        <MenuItem className='menuItem' value={'Mrs'}>Mrs</MenuItem>
                        <MenuItem className='menuItem' value={'Ms'}>Ms</MenuItem>
                        <MenuItem className='menuItem' value={'Dr'}>Dr</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={60} sm={24}>
                  <TextField
                    onChange = {(e) => handleChange(e)}
                    value={toSend.firstName}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={60} sm={24}>
                  <TextField
                    onChange = {(e) => handleChange(e)}
                    value={toSend.lastName}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={60} sm={30}>
                  <TextField
                    onChange = {(e) => handleChange(e)}
                    value={toSend.countryCode}
                    required
                    fullWidth
                    id="countryCode"
                    label="Country Code"
                    name="countryCode"
                    autoComplete="Country Code"
                  />
                </Grid>
                <Grid item xs={60} sm={30}>
                  <TextField
                    onChange = {(e) => handleChange(e)}
                    value={toSend.phoneNumber}
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    type="phoneNumber"
                    id="phoneNumber"
                    autoComplete="Phone Number"
                  />
                </Grid>
                <Grid item xs={120} sm={"true"} >
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      value={toSend.emailAddress}
                      required
                      fullWidth
                      id="emailAddress"
                      label="Email Address"
                      name="emailAddress"
                      autoComplete="email-address"
                      autoFocus
                    />
                </Grid>
                <Grid item xs={60}>
                  <TextField
                    onChange = {(e) => handleChange(e)}
                    value={toSend.specialRequest}
                    required
                    fullWidth
                    name="specialRequest"
                    label="Special Request"
                    type="specialRequest"
                    id="specialRequest"
                    autoComplete="Special Request"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          
          <br>
          </br>
          <Box
            sx={{
              marginLeft: 2,
              marginRight: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Typography component="h1" variant="h5">
                Payment Details
            </Typography>

            <Box>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2} columns={60}>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      autoComplete="card-number"
                      name="cardNumber"
                      required
                      fullWidth
                      id="cardNumber"
                      label="Card Number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      required
                      fullWidth
                      id="nameOnCard"
                      label="Name On Card"
                      name="nameOnCard"
                      autoComplete="name-on-card"
                    />
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField 
                        onChange = {(e) => handleChange(e)}
                        type="date"
                        required
                        fullWidth
                        id="expiryDate"
                        name="expiryDate"
                    />      
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      required
                      fullWidth
                      id="cvvCvc"
                      label="CVV/CVC"
                      name="cvvCvc"
                      autoComplete="cvv-cvc"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box> 
          </Box>

          <Box
            sx={{
              marginLeft: 2,
              marginRight: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
                Billing Address
            </Typography>

            <Box>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2} columns={60}>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      value={toSend.address}
                      autoComplete="address"
                      name="address"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      value={toSend.city}
                      required
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="city"
                    />
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      value={toSend.zipCode}
                      required
                      fullWidth
                      id="zipCode"
                      label="Zip/Post Code"
                      name="zipCode"
                      autoComplete="zipCode"
                    />
                  </Grid>
                  <Grid item xs={60} sm={30}>
                    <TextField
                      onChange = {(e) => handleChange(e)}
                      value={toSend.country}
                      required
                      fullWidth
                      id="country"
                      label="Country"
                      name="country"
                      autoComplete="country"
                    />
                  </Grid>
                  <Grid item xs={60}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" id="checkBox"/>}
                      label="I agree to the Cancellation Policy and Ascenda's Terms of Use and Privacy policy"
                    />
                  </Grid>
                </Grid>

                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Button type="submit" variant="outlined" id="confirmButton">
                    Confirm Booking
                  </Button>
                </Stack>
                
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Card>
      </Container>
    </ThemeProvider>
  );
}


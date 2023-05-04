import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './registation.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const Registation = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <>
            <div className='signin'>

                <h3>Sign In / Sign Up</h3>

            </div>


            <form className='form'>

                <h4 className='entry'>Full-Name :</h4>
                <Box className='name'
                    sx={{
                        width: 900,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Frist-Name :" id="fullWidth" placeholder='Enter Your Fristname' />
                </Box>
                <Box className='name'
                    sx={{
                        width: 900,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Last-Name :" id="fullWidth" placeholder='Enter Your Lastname' />
                </Box>

                <FormControl >
                    <h4 className='entry'>Gender :</h4>
                    <RadioGroup className='entry'
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />

                    </RadioGroup>
                </FormControl>

                <h4 className='entry'>Age :</h4>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Age"
                        >
                            <MenuItem value={10}>10-18</MenuItem>
                            <MenuItem value={21}>18-24</MenuItem>
                            <MenuItem value={22}>24-30</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <h4 className='entry'>Address :</h4>

                <Box className='address'
                    sx={{
                        width: 900,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Address" id="fullWidth" placeholder='Enter Your Address' />
                </Box>

                <h4 className='entry'>Phone No :</h4>

                <Box className='entry'
                    sx={{
                        width: 300,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Phone No" type='number' id="fullWidth" placeholder='Enter Your Number' />
                </Box>

                <h4 className='entry'>E-mail :</h4>

                <Box className='entry'
                    sx={{
                        width: 700,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="E-mail" id="fullWidth" placeholder='Enter Your E-mail' />
                </Box>

                <h4 className='entry'>Membership Plans :</h4>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Plans</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            onChange={handleChange}
                            autoWidth
                            label="Plan"
                        >
                            <MenuItem value={10}>4999/-</MenuItem>
                            <MenuItem value={21}>9999/-</MenuItem>
                            <MenuItem value={22}>14999/-</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <FormGroup className='entry' >

                    <FormControlLabel required control={<Checkbox />} label="Do You Agree With Terms And Condition" />

                </FormGroup>


                <Stack spacing={2} direction="row" className='entry'>
                    <Button variant="contained" onClick={SubmitEvent}>Submit</Button>
                    <Button variant="outlined">Reset</Button>
                </Stack>
            </form>

        </>
    )
}

export default Registation


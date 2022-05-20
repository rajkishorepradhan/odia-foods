import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login () {
    return (
        <>
            <div>
                <span>Log in</span>
                <div className="grid space-y-4">
                <TextField id="outlined-basic" label="User Name" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained">Log in</Button>


                  </div>
            </div>
        </>
    )
}
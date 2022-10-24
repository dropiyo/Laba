import { Button, TextField } from "@mui/material";

export default function AuthForm() {
    return <div style={{
        backgroundColor: "FFFFFF",
        padding: 50,
        width: 200,
    }}>
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField id="filled-basic" label="password" variant="filled" type="password" />
        <Button variant="input">input</Button>
    </div>
}

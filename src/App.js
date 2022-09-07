import * as React from "react";
import "./App.css";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Select,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [countryCode, setCountryCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <div className="App">
      <div className="Column">
        <p className="Bold">WhatsApp Fastlink</p>
        <p className="Title">
          Start a WhatsApp conversation before you can save a contact
        </p>
      </div>

      <div className="Middle">
        <p className="Bold">Start Chatting with</p>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <FormControl variant="standard">
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <>
                    <InputLabel id="country-code-label">
                      Country Code
                    </InputLabel>
                    <Select
                      labelId="country-code-label"
                      id="country-code"
                      value={countryCode}
                      onChange={(event) => setCountryCode(event.target.value)}
                    >
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </>
                </Grid>
                <Grid xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </div>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Button variant="contained" disableElevation endIcon={<SendIcon />}>
            Go To WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

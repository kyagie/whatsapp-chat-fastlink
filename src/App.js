import * as React from "react";
import "./App.css";
import {
  FormControl,
  Button,
  TextField,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { countryCodeData } from "./data/countryCodeData";

function App() {
  const [countryCode, setCountryCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorMessages, setErrorMessages] = React.useState({});

  const handleChange = (event) => {
    //Remove zero as leading character
    setPhoneNumber(event.target.value.replace(/^0+/, ""));
  };

  //On Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    //Check if validation passes
    if (handleValidation()) {
      console.log(countryCode, phoneNumber);
    }
  };

  //Handle Validation
  const handleValidation = () => {
    let isValid = false;

    if (countryCode && phoneNumber) {
      isValid = true;
    } else {
      setErrorMessages({
        countryCode: !countryCode ? "Country Code is required" : "",
        phoneNumber: !phoneNumber ? "Phone Number is required" : "",
      });
    }

    //Check if phone number is valid
    if (phoneNumber) {
      const regex = new RegExp(/^[0-9\b]+$/);
      if (!regex.test(phoneNumber)) {
        setErrorMessages({
          phoneNumber: "Phone Number is invalid",
        });
        isValid = false;
      } else {
        setErrorMessages({
          phoneNumber: "",
        });
        isValid = true;
      }
    }
    return isValid;
  };

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
            <FormControl
              variant="standard"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <>
                <InputLabel id="country-code-label">Code</InputLabel>
                <Select
                  labelId="country-code-label"
                  id="country-code-select"
                  value={countryCode}
                  label="Code"
                  sx={{
                    width: 100,
                  }}
                  onChange={(e) => setCountryCode(e.target.value)}
                  error={errorMessages.countryCode ? true : false}
                >
                  {/* Map Country codes to MenuItem  */}
                  {countryCodeData.map((item) => (
                    <MenuItem key={item.code} value={item.dial_code}>
                      {item.flag} {item.dial_code}
                    </MenuItem>
                  ))}
                </Select>
              </>
              <TextField
                id="telephone"
                label=" "
                placeholder="Phone Number"
                variant="standard"
                fullWidth
                error={errorMessages.phoneNumber ? true : false}
                helperText={errorMessages.phoneNumber}
                value={phoneNumber}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={handleChange}
                sx={{
                  width: 180,
                  marginLeft: 2,
                }}
              />
            </FormControl>
          </Box>
        </div>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            disableElevation
            endIcon={<SendIcon />}
          >
            Go To WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

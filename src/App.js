import * as React from "react";
import "./App.css";
import { Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function App() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  //On Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="App">
      <div className="Column">
        <p className="Bold">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WhatsAppIcon />
          </span>
          WhatsApp Fastlink
        </p>
        <p className="Title">
          📲 Initiate a WhatsApp conversation before you can save a contact.
        </p>
      </div>

      <div className="Middle">
        <p className="Bold">Start Chat 💬 with</p>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <PhoneInput
              country={"ug"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              enableSearch={true}
              inputStyle={{
                fontFamily: "Arvo",
                fontSize: "1.2rem",
                height: "3.5rem",
              }}
              dropdownStyle={{
                color: "black",
                fontFamily: "Arvo",
              }}
              searchStyle={{
                fontFamily: "Arvo",
              }}
            />
            <p>💡 Include the Country Code.</p>
          </Box>
        </div>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Button
            id="submit"
            variant="contained"
            onClick={handleSubmit}
            disableElevation
            disabled={phoneNumber.length < 10}
            endIcon={<SendIcon />}
          >
            Open Chat
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="Footer">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/kyagie_"
            target="_blank"
            rel="noreferrer"
          >
            @kyagie_
          </a>{" "}
          🇺🇬
        </p>
        <p>
          It's Open Source!{" "}
          <a
            href="https://github.com/kyagie/whatsapp-chat-fastlink"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contactpage() {
  return (
    <div id="contact" className="section">
      <Box
        mt="3rem"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography variant="h3" m="2rem 2rem" fontWeight="700">
            Contact 
          </Typography>
          <Typography variant="h4" m="0rem 2rem">
            Help is just a click away
          </Typography>
          <Typography variant="h5" m="1rem 2rem">
            Call me anytime between 10am - 7pm
          </Typography>
        </div>
        <div>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 column on small screens, 2 on medium+
              gap: 3,
              width: "100%", // Ensure proper centering
              maxWidth: "800px", // Prevents excessive width
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "row",
                margin: "1rem 0rem",
                padding: "1rem 0rem",
                boxShadow: "0px 0px 3px 2px ",
                transition: "all ease 1s",
              }}
              className="contactCard"
            >
              <CardActionArea>
                <CardContent component="a" href="mailto:tshyambabu1@gmail.com">
                  <MailOutlineIcon sx={{ fontSize: "8rem", color: "red" }} />
                  <Button sx={{ textTransform: "lowercase" }}>
                    <Typography variant="h5" sx={{ color: "blue" }}>
                      tshyambabu1@gmail.com
                    </Typography>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "row",
                margin: "1rem 0rem",
                padding: "1rem 0rem",
                boxShadow: "0px 0px 3px 2px ",
                transition: "all ease 1s",
              }}
              className="contactCard"
            >
              <CardActionArea>
                <CardContent component="a" href="tel:+919441155685">
                  <PhoneIcon sx={{ fontSize: "7.5rem", color: "red" }} />
                  <Button>
                    <Typography variant="h4" sx={{ color: "blue" }}>
                      +91-9441155685
                    </Typography>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      </Box>
    </div>
  );
}

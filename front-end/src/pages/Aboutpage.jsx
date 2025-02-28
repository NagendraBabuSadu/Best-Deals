import { Box, Container, CssBaseline, Grid2, Typography } from "@mui/material";
import { Fragment } from "react";
import bgHouse from "../assets/images/interior-home2.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import hyderabad from "../assets/images/Hyderabad.jpg";
import junction from "../assets/images/junction.png";
import Vijayawada from "../assets/images/vijayawada.jpg";
import tiruvuru from "../assets/images/Tiruvuru.png";
import Marquee from "react-fast-marquee";
import { Card, CardMedia } from "@mui/material";
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import logo7 from "../assets/logos/logo-7.png";
import logo8 from "../assets/logos/logo-8.png";
import logo9 from "../assets/logos/logo-9.jpg";

export default function Aboutpage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const images = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];

  return (
    <div id="about" className="section">
      <div
        className="container-text"
        maxWidth="100%"
        style={{
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={bgHouse}
          alt="bg house"
          sx={{
            objectFit: "cover", // Better for maintaining aspect ratio
            width: "100%",
            height: "40vh",
          }}
          p="0rem 1rem"
        />
        <Box
          sx={{
            m: "0rem 20rem",
            p: "0rem 1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: "3rem",
                       color: "var(--red-color)"
            }}
          >
            <strong>How it Started</strong>
          </Typography>
          <Typography
            variant="body1"
            fontSize="1rem"
            sx={{
              display: "flex",
              textAlign: "center",
              pt: "2rem",
              color: "grey"
            }}
          >
            <strong>Shyam's</strong> journey from a plywood business to becoming
            a successful interior designer in just 4 years is a testament to
            his dedication and vision. Starting with a deep understanding of
            materials, he gradually expanded his expertise by exploring the art
            of interior design. His relentless efforts took him to places like
            Rajahmundry, Vijayawada, and Hyderabad, where he connected with
            people, built relationships, and grew his network. Through these
            experiences, he gained valuable insights into client preferences,
            market trends, and the intricacies of design execution.
          </Typography>
          <Typography
            variant="body1"
            fontSize="1rem"
            sx={{
              display: "flex",
              textAlign: "center",
              pt: "2rem",
              color: "grey"
            }}
          >
            Today, as the founder of Best Deals, Shyam has not only mastered
            interior design but also ventured into house construction, providing
            end-to-end solutions for dream homes. For anyone aspiring to become
            an interior designer, experience, hard work, and dedication play a
            crucial role. One can start by learning about materials, colors, and
            design principles through practical exposure, even if they don’t
            have a formal degree. Working on small projects, collaborating with
            professionals, and continuously improving creativity can lead to
            expertise in the field. Networking with architects, suppliers, and
            clients helps in gaining opportunities and understanding real-world
            challenges. With persistence and a willingness to learn, anyone with
            a passion for design can build a successful career in this field,
            just like him.
          </Typography>
        </Box>
      </div>
      <div className="container-places">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            m: "2rem 2rem",
            color: "var(--green-color)"
          }}
        >
          Designing homes across Telugu states
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Grid2
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
          >
            <Grid2
              size={2}
              border="7px solid black"
              sx={{ height: "200px", position: "relative", overflow: "hidden" }}
            >
              <Item>Vijayawada</Item>
              <img
                src={Vijayawada}
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  objectFit: "fill",
                }}
              />
            </Grid2>
            <Grid2
              size={2}
              border="7px solid black"
              sx={{ height: "200px", position: "relative", overflow: "hidden" }}
            >
              <Item>Hyderabad</Item>
              <img
                src={hyderabad}
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  objectFit: "fill",
                }}
              />
            </Grid2>
            <Grid2
              size={2}
              border="7px solid black"
              sx={{ height: "200px", position: "relative", overflow: "hidden" }}
            >
              <Item>H.Junction</Item>
              <img
                src={junction}
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  objectFit: "fill",
                }}
              />
            </Grid2>
            <Grid2
              size={2}
              border="7px solid black"
              sx={{ height: "200px", position: "relative", overflow: "hidden" }}
            >
              <Item>Tiruvuru</Item>
              <img
                src={tiruvuru}
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                }}
              />
            </Grid2>
          </Grid2>
        </Box>
        <Typography></Typography>
      </div>
      <div className="container-partners">
        <Box
          sx={{ width: "100%", overflow: "hidden", mt: 2, textAlign: "center" }}
        >
          <Typography variant="h4" m="1rem 5rem" fontWeight="600" color="darkgreen">
            Partners
          </Typography>
          <Marquee pauseOnHover speed={50}>
            {images.map((img, index) => (
              <Card key={index} sx={{ minWidth: 200, mx: 1 }}>
                <CardMedia component="img" height="90" image={img} />
              </Card>
            ))}
          </Marquee>
        </Box>
        <br />
      </div>
    </div>
  );
}

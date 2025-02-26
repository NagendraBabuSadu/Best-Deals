import * as React from "react";

import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import "react-phone-input-2/lib/style.css";
import modernHouse from "../assets/images/modern-house.jpg";

export default function Homepage() {

    
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{10,15}$/, "Enter a valid phone number"),
  });

  const [phone, setPhone] = React.useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // ✅ Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          padding: 0,
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={modernHouse}
          alt="Modern House"
          sx={{
            objectFit: "cover",
            width: "100vw",
            marginLeft: "-20px",
            height: "1000px",
            display: "flex",
            position: "relative",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "300px",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(1, 1, 1, 0))",
          }}
        >
          {/* Text Content */}
          <Container
            sx={{
              textAlign: "left",
              textWrap: "pretty",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              variant="h2"
              mt="40px"
              sx={{
                color: "white",
              }}
            >
              Transform Your Space, <br />
              <strong style={{ color: "var(--primary-red-color)" }}>
                Elevate Your Life
              </strong>
            </Typography>
          </Container>
          <Container
            sx={{
              textAlign: "left",
              textWrap: "pretty",
              position: "absolute",
              top: "50%",
              left: "70%",
              transform: "translate(-50%, 0%)",
              display: "flex",
              border: "2px solid white",
              width: "400px",
              backgroundColor: "var(--background-color)",
              flexDirection: "column",
              pb: "2rem",
            }}
          >
            <Typography
              variant="h4"
              m="30px 0px"
              sx={{
                color: "black",
              }}
            >
              Login to Explore
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormControl
                sx={{ pb: "2rem", width: "100%",}}
                error={Boolean(errors.name)}
              >
                <InputLabel htmlFor="user-nameInput">Name</InputLabel>
                <Input id="user-nameInput" {...register("name")} />
                <FormHelperText style={{ color: "red" }}>
                  {errors.name?.message}
                </FormHelperText>
              </FormControl>

              <div style={{ marginBottom: "2rem", color: "black" }}>
                <InputLabel sx={{ mb: 1 }}>Phone Number</InputLabel>
                <PhoneInput
                  country={"in"} // Default country as India
                  // type="number"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    setValue("phone", value); // Sync with react-hook-form
                  }}
                  inputStyle={{
                    width: "100%", // Make it full-width
                    height: "56px", // Match MUI TextField height
                    borderRadius: "4px", // Smooth corners
                    borderColor: errors.phone ? "red" : "#ccc",
                    paddingLeft: "50px", // Adjust for country code
                    color: "black", // Ensure text is black
                  }}
                />
                <FormHelperText style={{ color: "red" }}>
                  {errors.phone?.message}
                </FormHelperText>
              </div>
              <Button variant="contained" color="success" type="submit">
                NEXT
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}

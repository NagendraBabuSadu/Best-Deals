import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import "react-phone-input-2/lib/style.css";
import modernHouse from "../assets/images/modern-house.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/user/userSlice";

export default function Homepage() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    // phone: yup
    //   .string()
    //   .required("Phone number is required")
    //   .matches(/^\d{10,15}$/, "Enter a valid phone number"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Enter a valid email"
      ),
    message: yup.string().required("Message is required"),
    // .matches(
    //  "Please enter your place and details here."
    // ),
  });

  // const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.storedData.userData);

  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [sentMail, setSentMail] = useState(false);

  const onSubmit = (data) => {
    data.preventDefault;

    if (errors.name || errors.email || errors.message) return;
    const templateParams = {
      to_name: "Admin",
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    };
    emailjs
      .send(
        "service_w805v94",
        "template_zurmhu4",
        templateParams,
        "Zi3abysgbcMjj6Ysa"
      )
      .then((response) => {
        console.log("email sent successfully. ", response);
        setSentMail(true);
        // alert("Email Sent!");
      })
      .catch((error) => {
        console.error("Something is wrong:", error);
      });

    dispatch(setData(data));
    console.log("data payload:", data);
    reset();
  };

  console.log("errors", errors);
  useEffect(() => {
    console.log("storedData", storedData);
  }, [storedData]);

  // Dailog Box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setSentMail(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      id="home"
      className="section"
      style={{
        backgroundImage: `url(${modernHouse})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "80vh",
          background:
          "linear-gradient(to top, rgba(0,1, 1, 0), rgba(0, 0, 1,1))",
          opacity: 0.7, 
          zIndex: 0, 
        }}
      />
      <Container
        sx={{
          textAlign: "center",
          textWrap: "pretty",
          position: "absolute",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            mt: "6rem",
          }}
        >
          Transform Your Space <br />
          <strong style={{ color: "red" }}>Elevate Your Life</strong>
        </Typography>
      </Container>

      <Container
        sx={{
          textAlign: "left",
          textWrap: "pretty",
          position: "absolute",
          top: "20%",
          left: "70%",
          transform: "translate(-50%, 0%)",
          display: "flex",
          border: "0.5rem solid var(--green-color)",
          backgroundColor: "white",
          width: "22%",
          flexDirection: "column",
          p: "1.6rem 2rem",
          borderRadius: "2rem 2rem",
          boxShadow: "0rem 0rem 3rem 1rem",
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="h4"
            m="1rem 0rem"
            fontWeight="600"
            sx={{
              color: "var(--red-color)",
            }}
          >
            Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormControl
              sx={{ pb: "1.4rem", width: "100%" }}
              error={Boolean(errors.name)}
            >
              <TextField
                id="user-nameInput"
                label="Name"
                variant="outlined"
                placeholder="Enter Your Name"
                fullWidth
                {...register("name")}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            </FormControl>
            <FormControl
              sx={{ pb: "1.4rem", width: "100%" }}
              error={Boolean(errors.email)}
            >
              <TextField
                id="user-emailInput"
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter Your Email"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </FormControl>
            <FormControl
              sx={{ pb: "1.4rem", width: "100%" }}
              error={Boolean(errors.message)}
            >
              <TextField
                id="user-emailInput"
                label="Details"
                variant="outlined"
                placeholder="Enter Your Details"
                multiline
                minRows={3}
                InputProps={{
                  sx: {
                    padding: "1rem 0.8rem", // Adjust padding as needed
                    textWrap: "pretty",
                  },
                }}
                fullWidth
                {...register("message")}
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
              />
            </FormControl>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleClickOpen}
            >
              Submit
            </Button>
            {sentMail === true ? (
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Email has been sent successfully.
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Email Success.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            ) : (
              <div></div>
            )}

            <Typography variant="body2" mt="10px">
              By submitting this form, you agree to the{" "}
              <span>
                <a href="">privacy policy </a>
              </span>
              &{" "}
              <span>
                <a
                  href="
                  "
                >
                  terms and conditions
                </a>
              </span>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

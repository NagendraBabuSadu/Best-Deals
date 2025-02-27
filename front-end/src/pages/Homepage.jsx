import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
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

  
  console.log("------ register", register)

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   // message: ""
  // });

  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value})
  // }

  const [sentMail, setSentMail] = useState(false);

  const onValid = (data) => {
    console.log("Valid Data:", data);
    onSubmit(data);
  };

  const onInvalid = (errors) => {
    console.log("Validation Errors:", errors);
  };


  const onSubmit = (data) => {
    data.preventDefault;

    if(errors.name ||
       errors.email ||
       errors.message
    ) return;
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

  console.log("errors", errors)
  useEffect(() => {
    console.log("storedData", storedData);
  }, [storedData]);

  // Dailog Box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setSentMail(false)
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const isValid = !v

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className="form-container"
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
            objectFit: "cover", // Better for maintaining aspect ratio
            width: "100vw",
            height: "100vh", // Adjust to make it full screen
            position: "relative",
            left: "-5%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: -10,
            width: "100vw",
            height: "40%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
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
              mt="4rem"
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
              top: "60%",
              left: "70%",
              transform: "translate(-50%, 0%)",
              display: "flex",
              border: "1rem solid white",
              width: "22%",
              backgroundColor: "var(--background-color)",
              flexDirection: "column",
              pb: "2rem",
              borderRadius: "0rem 5rem",
              boxShadow: "0rem 0rem 3rem 1rem",
            }}
          >
            <Typography
              variant="h4"
              m="2rem 0rem"
              fontWeight="600"
              textTransform="uppercase"
              sx={{
                color: "var(--text-greenType-color)",
              }}
            >
              Talk to Us
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
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
                  // value={formData.name}
                  // onChange={handleChange}
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
                  // value={formData.email}
                  // onChange={handleChange}
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
                  // value={formData.email}
                  // onChange={handleChange}
                  {...register("message")}
                  error={Boolean(errors.message)}
                  helperText={errors.message?.message}
                />
              </FormControl>

              {/* <div style={{ marginBottom: "1rem", color: "black" }}>
                <InputLabel sx={{ mb: 1 }}>Phone Number</InputLabel>
                <PhoneInput
                  country={"in"} // Default country as India
                  enableSearch={true}
                  variant="outlined"
                  label="Phone"
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
              </div> */}
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={handleClickOpen}
                // disabled = {errors}
              >
                Send Email
              </Button>

              {/* Dailogue Box  */}
              {/* <Button variant="outlined" >
                Open alert dialog
              </Button> */}
              {sentMail === true ? (
                <div>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Use Google's location service?"}
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
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}

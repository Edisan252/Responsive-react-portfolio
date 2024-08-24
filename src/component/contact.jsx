import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardHeader, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const Contact = () => {
  const darkTheme = {
    backgroundColor: "#15243b",
  };
  const colors = {
    color: "white",
  };

  return (
    <Container fluid maxWidth="xl" id="CONTACT" style={darkTheme}>
      <Grid container sx={{ paddingTop: 7, paddingBottom: 7 }}>
        <Grid md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: { md: "flex", lg: "flex", sm: "flex", xs: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginTop: 2, marginBottom: 2, lineHeight: 3 }}
              style={colors}
              component="div"
            >
              Contact{" "}
              <item style={{ color: "#59B2F4", fontWeight: 560 }}> Me</item>
            </Typography>
          </Box>
        </Grid>
        <Grid lg={6} md={12} sm={12} xs={12}>
          <Card sx={{ margin: 3 }}>
            <Typography
              component={"iframe"}
              sx={{ width: "100%", height: 400 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4242.608692279499!2d78.74488024491103!3d10.311154910738033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007c0aeaec6f69%3A0x4bd279452465829b!2sMamarathupatti%2C%20Tamil%20Nadu%20622422!5e1!3m2!1sen!2sin!4v1724382841308!5m2!1sen!2sin"  width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"            ></Typography>
          </Card>
        </Grid>
        <Grid lg={6}>
          <Box component="form">
            <Card sx={{ margin: 3 }}>
              <CardHeader title="Contact" />
              <CardContent>
                <Grid container>
                  <Grid lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ width: "90%", margin: 1 }}
                      type="text"
                      label="Enter Your Name"
                    />
                  </Grid>
                  <Grid lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ width: "90%", margin: 1 }}
                      type="text"
                      label="Enter Your Email Id"
                    />
                  </Grid>
                  {/*  */}
                  <Grid lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ width: "90%", margin: 1 }}
                      type="text"
                      label="Enter Your Mobile Number"
                    />
                  </Grid>
                  <Grid lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      sx={{ width: "90%", margin: 1 }}
                      type="text"
                      label="Enter Subject of The Email"
                    />
                  </Grid>
                  <Grid lg={12} md={12} sm={12} xs={12}>
                    <Box sx={{ width: "95%", margin: 1 }}>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Enter Your Message Here..."
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>
                    </Box>
                  </Grid>
                  <Grid
                    lg={12}
                    xs={12}
                    md={12}
                    sm={12}
                    sx={{ textAlign: "center" }}
                  >
                    <Button
                      variant="primary"
                      style={{ width: "50%", marginTop: 10 }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

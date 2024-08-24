import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import cal from "../assets/calculator.png";
import guess from "../assets/guess.png";
import bakery from "../assets/backery.png";
import travel from "../assets/1.jpeg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Project = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const lightDheme = {
    backgroundColor: "#262840",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container fluid maxWidth="xl" id="PROJECTS" style={lightDheme}>
      <Grid container sx={{ paddingBottom: 6, paddingTop: 7 }}>
        <Grid xs={12} md={12} sm={12}>
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
              My{" "}
              <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                Projects
              </item>
            </Typography>
          </Box>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
              title='Calculator'
            />

            <a href="https://bucolic-gnome-223ec1.netlify.app" style={{textDecoration:'none'}}>
            <CardContent>
            <img src={cal} style={{ width: 150 }} alt="calculator" />
              <Typography variant="body2" color="text.secondary"  style={{textAlign:'justify'}}>
              The Calculator Project is a simple yet functional web application designed toperformbasicarithmetic operations. It is built using HTML for structure, CSS for styling, and JavaScript for functionality.
              The project serves as a practical example of how these technologies can be integrated to create an interactive and user-friendly tool.
              </Typography>
            </CardContent></a>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
             title='Guess The Number Game'
            />

            <a href="https://cosmic-monstera-7b15f1.netlify.app" style={{textDecoration:'none'}}>
            <CardContent>
            <img src={guess} style={{ width: 250 ,height:220}} alt="calculator" />
              <Typography variant="body2" color="text.secondary" style={{textAlign:'justify'}}>
              The Guess the Number Game is an interactive web application where the player attempts toguessarandomly generated number within a specified range. 
              This project is built using HTMLfor structure, CSSfor styling, and JavaScript for game logic and interactivity.
              </Typography><br />
            </CardContent></a>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
              title='Bakery Template'
            />

            <a href="https://regal-khapse-b430f9.netlify.app/" style={{textDecoration:'none'}}>
            <CardContent>
            <img src={bakery} style={{ width: 300 }} alt="Bakery Template" />
              <Typography variant="body2" color="text.secondary"  style={{textAlign:'justify'}}>
              The Bakery Project is a web-based application designed to showcase the offerings of abakery,providing users with an engaging and user-friendly interface.
              The project utilizes HTMLfor thestructure,CSS for styling, and JavaScript for interactivity.
              This project demonstrates the integration of front-endwebtechnologies to create a functional, attractive, and engaging website for a bakery, aimed at enhancingtheuser experience and promoting the bakery's products and services.
              </Typography>
            </CardContent></a>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
              title='Travel And Tourisum Management System'
            />

            
            <CardContent>
            <img src={travel} style={{ width: 220 }} alt="Bakery Template" />
              <Typography variant="body2" color="text.secondary"  style={{textAlign:'justify'}}>
              The Bakery Project is a web-based application designed to showcase the offerings of abakery,providing users with an engaging and user-friendly interface.
              The project utilizes HTMLfor thestructure,CSS for styling, and JavaScript for interactivity.
              This project demonstrates the integration of front-endwebtechnologies to create a functional, attractive, and engaging website for a bakery, aimed at enhancingtheuser experience and promoting the bakery's products and services.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Project;

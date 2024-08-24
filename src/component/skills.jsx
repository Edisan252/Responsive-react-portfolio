import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {FaHtml5,FaCss3Alt,FaJsSquare,FaBootstrap,FaDatabase,FaReact ,FaNode} from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';

const Skills = () => {
const lightDheme = {
    backgroundColor: "#15243b",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container fluid maxWidth="xl" id="SKILLS" style={lightDheme}>
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
                Skills
              </item>
            </Typography>
          </Box>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
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
              Technical{" "}
              <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                Skills
              </item>
            </Typography>
          </Box>
          <Grid xs={12} md={12} sm={12}>
          <Box
            sx={{
              display: { md: "flex", lg: "flex", sm: "flex", xs: "flex" },
              justifyContent: "center",
            }}
          >
          <div className="skills-container">
                    <div className="skill" >
                    <FaHtml5 className="a6"/>
                    <h3>HTML</h3>
                    <div className="skill-bar">
                        <div className="skill-level"  style={{"width": "90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaCss3Alt className="a6"/>
                    <h3>CSS</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width":" 90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaJsSquare  className="a6"/>
                    <h3>JavaScript</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "80%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaBootstrap className="a6"/>
                    <h3>Bootstrap</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaDatabase className="a6"/>
                    <h3>SQL</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "80%"}}></div>
                    </div>
                    </div><br/>
                    <div className="skill">
                    <FaReact className="a6"/>
                    <h3>React Js</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "75%"}}></div>
                    </div>
                    </div><br/>
                    <div className="skill">
                    <FaNode className="a6"/>
                    <h3>Node Js</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "70%"}}></div>
                    </div>
                    </div><br/>
            </div>
            </Box>
            </Grid>
        </Grid>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
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
              Soft{" "}
              <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                Skills
              </item>
            </Typography>
          </Box>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={12} md={6} sx={{marginTop:'50px'}}>
  <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " #59B2F4",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Leadership</h3>
                                </div>
  </Grid>
  <Grid xs={12} md={6} sx={{marginTop:'50px'}}>
  <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={90} text={`${75}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " #59B2F4",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Creativity</h3>
                                </div>
  </Grid>
  <Grid xs={12} md={6} sx={{marginTop:'50px'}}>
  <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={90} text={`${70}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " #59B2F4",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Communication</h3>
                                </div>
  </Grid>
  <Grid xs={12} md={6} sx={{marginTop:'50px'}}>
  <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " #59B2F4",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Problem-solving</h3>
                                </div>
  </Grid>
</Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;

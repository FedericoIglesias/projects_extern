import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Project } from "../vite-env";
import styled from "styled-components";

const Alink = styled.a`
text-decoration: none;
`

const CardProject = (project: Project) => {
  return (
    <Alink href={project.url} target="_blank" >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt={project.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Alink>
  );
};

export default CardProject;

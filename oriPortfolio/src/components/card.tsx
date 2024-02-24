import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Project } from "../vite-env";


const CardProject = (project: Project) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <a href={project.url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.alt}
          />
          </a>
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
  );
};

export default CardProject;

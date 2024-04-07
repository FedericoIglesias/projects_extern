import { Repo } from "../vite-env";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const CardProject = (repo) => {
  const repositorio: Repo = repo.repositorio;
  const date: string = repositorio.created_at.substring(0,10);

  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {repositorio.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Created {date}
        </Typography>

        <Typography variant="body2">{repositorio.description}</Typography>
      </CardContent>
      <CardActions>
        <a href={repositorio.html_url} target="_blank">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<GitHubIcon />}
          >
            Repo
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default CardProject;

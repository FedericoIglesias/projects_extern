import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Resume from '../files/Resume.pdf'

export default function InputFileUpload() {
  return (
      <a
  href={Resume}
  download="Oriana Rassello Resume "
  target="_blank"
  rel="noreferrer"
>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudDownloadIcon />}
    >
      Download Resume
    </Button>
      </a>
  );
}


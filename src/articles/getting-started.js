import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function GettingStarted() {
    return (
		<>
        <Typography variant="h3" component="h1" gutterBottom>
            Getting Started
        </Typography>
        <Typography paragraph>
          The purpose of this website is to document what has been taught in the KEA AP
          Computer Science course up until the point at which the first mandatory assignment
          requirements were showcased.
          Therefore, the information contained herein may be brief or incomplete for the sake of brevity.
          If you want to learn about JavaScript, NodeJS or Express.js, please consider
          checking out their official documentations.
        </Typography>

        <Typography variant="subtitle" component="h2" gutterBottom>
            Requirements
        </Typography>
        <ul>
          <li>Basic computer literacy</li>
          <li>A terminal such as Git Bash or PowerShell</li>
          <li>A code editor such as Vim or Visual Studio Code</li>
          <li>A <Link href="https://nodejs.org/en/download" target="_blank">NodeJS installation</Link>, preferably version 14+</li>
        </ul>
        <Typography paragraph>
          Once you are ready, feel free to use the sidebar to the left to navigate the website.
        </Typography>
		</>
	);
}

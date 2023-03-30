import Typography from '@mui/material/Typography';

import Image from 'next/image'

export default function Intro() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Introduction to Express.js
            </Typography>
            <Image src="/images/express.png" alt="JS logo" width="256" height="64"></Image>

            <Typography variant="subtitle" component="h2" gutterBottom>
                What is it?
            </Typography>
            <Typography paragraph>
                Express is a back-end web app framework for building REST APIs with Node.js. It is FOSS 
                and minimalistic, and considered the de-facto standard server framework for Node.js.
            </Typography>
		</>
	);
}
import Typography from '@mui/material/Typography';

import Image from 'next/image'

export default function Intro() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Introduction to NodeJS
            </Typography>
            <Image src="/images/node.png" alt="JS logo" width="256" height="128"></Image>
            <Typography paragraph>
                Node.js is a back-end JavaScript runtime environment. It runs on the V8 JavaScript Engine 
                and executes JS code outside of a web browser.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                Usage
            </Typography>
            <Typography paragraph>
                It allows developers to write command line tools for server-side scripting. Since it allows 
                one to write JavaScript both in the front-end and in the back-end, it unifies web-application 
                development around a single programming language.
            </Typography>
		</>
	);
}
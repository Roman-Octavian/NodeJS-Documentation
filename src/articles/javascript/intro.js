import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Image from 'next/image'

export default function Intro() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Introduction to JavaScript
            </Typography>
            <Image src="/images/js2.png" alt="JS logo" width="64" height="64"></Image>
            <Typography paragraph>
                One cannot possibly discuss NodeJS, Express, or any similar technologies without first
                having a basic understanding of JavaScript. JavaScript is a high-level, prototype-based language
                with dynamic typing. It is multi-paradigm, single-threaded programming language with a runtime model 
                based on a non-blocking event loop.

            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                Why JavaScript?
            </Typography>
            <Typography paragraph>
                JavaScript is used in roughly 98% of current websites. That is because it is the only language
                which conforms to the ECMAScript standard which ensures interoperability of web pages across browsers.
                An alternative called WebAssembly exists, but it has seen very little adoption, which means that JavaScript
                holds a monopoly over programming languages on web browsers.
            </Typography>
            <Typography paragraph>
                However, it is not only on web browsers where JS (abbreviation for Javascript) is relevant. JavaScript engines 
                are embedded in a variety of both server-side and non-browser applications. For example NodeJS, one of the topics of this documentation,
                is a JavaScript server-side environment.
            </Typography>
		</>
	);
}

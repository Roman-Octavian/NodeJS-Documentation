import Typography from '@mui/material/Typography';
import Image from 'next/image'

export default function BasicUsage() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Basic Express Usage
            </Typography>
            <Typography paragraph>
                Express needs to be included as a dependency in Node.js with "package.json".
                Here is the express server running this site:
            </Typography>
            <Image src="/images/expressCode.png" alt="Express code" width="480" height="507"></Image>

		</>
	);
}
import Typography from '@mui/material/Typography';

import Image from 'next/image'

export default function Intro() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                package.json
            </Typography>
            
            <Typography paragraph>
                Node.js has a special file called "package.json" which is used to include name, version, description,
                license of the current package. It also has scripts to automate starting, testing, building, etc. 
                And lastly, it contains a list of dependencies that are required to run the package. 
                "package.json" cannot be empty, at least curly braces must be provided, since it is a JSON file.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                Here is an example of a package.json file:
            </Typography>

            <Image src="/images/package.png" alt="JS logo" width="386" height="521"></Image>
		</>
	);
}
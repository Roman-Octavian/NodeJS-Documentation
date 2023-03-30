import Typography from '@mui/material/Typography';
import Image from 'next/image'

export default function Functions() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Javascript Functions
            </Typography>
            <Typography paragraph>
                Functions are pieces of code that can be reused. In JavaScript, they are actually objects under the hood.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                Different ways to write functions:
            </Typography>

            <Image src="/images/functions.png" alt="functions" width="953" height="293"></Image>

            <Typography paragraph>
                This is how variables used to be declared before ES6 (ECMAScript version 6 released in 2015).
                They have largely fallen out of use outside legacy projects due to scoping issues, as declaring
                variables this way always puts them in global scope.
            </Typography>
		</>
	);
}

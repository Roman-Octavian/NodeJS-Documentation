import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


import Image from 'next/image'
import { display, fontSize, padding, width } from '@mui/system';

export default function DataTypes() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Javascript Data Types
            </Typography>
            <Typography paragraph>
                There are eight data types in Javascript:
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                1: String
            </Typography>
            <Typography paragraph>
                Represents sequence of characters.
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                const thisIsAString = "Here goes a String";
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                2: Number
            </Typography>
            <Typography paragraph>
                Represents numeric values, can be floating point too due to dynamic typing
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                const thisIsANumber = 42.02515;
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                3: Bigint
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                const bigIntNumber = 9007199254740991n;
            </Typography>
            <Typography paragraph>
                Represents whole numbers larger than 2<sup>53</sup> - 1.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                4: Boolean
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                const hereIsABoolean = true;
            </Typography>
            <Typography paragraph>
                Binary values, can only be true or false.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                5: Undefined
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                let noValue;
            </Typography>
            <Typography paragraph>
                Variables with empty values are undefined.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                6: Null
            </Typography>
            <Typography paragraph>
                Funnily enough, this is supposed to represet nothing, but it actually returns "object".
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                7: Symbol
            </Typography>
            <Typography component="code" sx={{ 
                backgroundColor: 'rgba(220,220,220,.5)', 
                display: 'inline-block',
                overflowX: 'auto',
                maxWidth: '100%',
                marginBottom: 4,
                padding: 1,
                fontFamily: 'source-code-pro'
                }}>
                const sym = Symbol("foo");
            </Typography>
            <Typography paragraph>
                Unique and immutable primitive value. Also an object, but guaranteed to be unique.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                8: Object
            </Typography>
            <Typography paragraph>
                Mutable values, a collection of properties. Equivalent to key value pairs. 
            </Typography>
		</>
	);
}
import Typography from '@mui/material/Typography';

export default function Variables() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Javascript Variables
            </Typography>
            <Typography paragraph>
                There are four ways to declare variables in Javascript:
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                1: "var" Keyword
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
                var variableName = variableValue;
            </Typography>
            <Typography paragraph>
                This is how variables used to be declared before ES6 (ECMAScript version 6 released in 2015).
                They have largely fallen out of use outside legacy projects due to scoping issues, as declaring
                variables this way always puts them in global scope.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                2: "let" Keyword
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
                let variableName = variableValue;
            </Typography>
            <Typography paragraph>
                "let" has been a replacement for "var" since ES6. It fixes all scoping issues and behaves as expected of 
                a variable declared in a modern language. However, it is not the most widely adopted.
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                3: "const" Keyword
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
                const variableName = variableValue;
            </Typography>
            <Typography paragraph>
                "const" is how variables are usually declared in JavaScript nowadays. A good rule of thumb is to declare 
                everything with "const", and only change it to "let" if there is an error. The unique characteristics of "const"
                are that once declared, it cannot be re-declared and/or re-assigned, and, 
                as a result of that, it must also be intialized with an explicit value.
            </Typography>
            <Typography variant="subtitle" component="h2" gutterBottom>
                4: totalGlobalVariable
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
                totalGlobalVariable = "Never ever do this";
            </Typography>
            <Typography paragraph>
                Variables can be declared with no keyword in total global scope. This should never be used.
            </Typography>
		</>
	);
}

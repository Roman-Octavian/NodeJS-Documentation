import Typography from '@mui/material/Typography';

export default function BasicUsage() {
    return (
		<>
            <Typography variant="h3" component="h1" gutterBottom>
                Basic Node Usage
            </Typography>
            <Typography paragraph>
                After installing Node.js, here are some basic commands:
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                1: Run the Node REPL
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
                node
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                2: Print current Node version
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
                node -version
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                3: Execute Node code from file
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
                node filename.js
            </Typography>
            <Typography variant="subtitle" component="h2" gutterBottom>
                4: Execute the current Node package defined in package.json
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
                npm start
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                5: Install packages
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
                npm install packageName OR npm i packageName
            </Typography>

            <Typography variant="subtitle" component="h2" gutterBottom>
                6: Uninstall packages
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
                npm uninstall packageName
            </Typography>
		</>
	);
}
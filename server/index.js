const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
.then(() => {
    const app = express();

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(PORT, (error) => {
        if (error) throw error;
        console.log("Server is running on port", PORT);
    });
})
.catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
});

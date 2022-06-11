import express from "express";
// ^ express ^

const app = express();
const port = 3000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

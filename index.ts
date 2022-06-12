import express from "express";
// ^ express ^

import routes from "./routes"

const app = express();
const port = 3000;

app.use("/api", routes)

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })

import express from "express";
// ^ express ^
import client from "./Connection/index"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello")
})
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
        client.connect()
            .then(res => {
                console.log(res)
            })
    })

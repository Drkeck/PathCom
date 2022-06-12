import client from "../../../Connection";
import express from "express";
import credentials from "../../../Connection/credentials";
// ^ dependencies ^ //

const router = express.Router();
// ^ define router ^ //

router.get("/", async (req, res) => {
    // ^ get all jobs ^ //
    try {
        await client.connect();
        const db = client.db(credentials.cluster)
        const col = db.collection(credentials.collection);
        const get = await col.find();
        console.log(get);
        res.send(get)
    } catch(err) {
        console.log(err);
        res.status(400).json({ message: "Unknown failure."})
    } finally {
        client.close();
    }
})

router.post("/", (req, res) => {
    // ^ post a job ^ //
    try {
        client.connect();
        const db = client.db(credentials.cluster);
        const col = db.collection(credentials.collection);
        // will be building a way of posting to this operation.
    } catch(error) {
        console.log(error);
    } finally {
        client.close()
    }
})

export default router;
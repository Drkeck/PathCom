import client from "../../../Connection";
import express from "express";
import { credentials } from "../../../Connection/credentials";
// ^ dependencies ^ //

const router = express.Router();
// ^ define router ^ //

router.get("/", (req, res) => {
    try {
        client.connect();
        const db = client.db(credentials.cluster)
        const col = db.collection(credentials.collection);
        const get = col.find();
        console.log(get);
    } catch(err) {
        console.log(err);
    } finally {
        client.close();
    }
})
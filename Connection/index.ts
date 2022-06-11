import { MongoClient, ServerApiVersion } from "mongodb";
import { credentials } from "./credentials";
const uri = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.cluster}.jq203po.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {serverApi: ServerApiVersion.v1});
export default client

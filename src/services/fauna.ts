import { Client } from "faunadb";

export const fauna = new Client({
    domain:'db.us.fauna.com',
    secret: process.env.FAUNADB_KEY
})
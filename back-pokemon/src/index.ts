import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { pokemonRouter } from "./routes/pokemonRoutes";

dotenv.config();

export const app = express();

app.use(cors());

app.use(express.json());

app.use('/pokemon', pokemonRouter);

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server running on http:\\localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
});
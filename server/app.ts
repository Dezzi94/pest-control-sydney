import express from "express";
import { registerRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
registerRoutes(app);

export default app;

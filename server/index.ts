import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// In production, serve static files from dist/public
if (process.env.NODE_ENV === "production") {
  const publicDir = path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(publicDir));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });
}

const port = parseInt(process.env.PORT || "5000", 10);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});

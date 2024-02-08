import express, { IRouterHandler, Router } from "express";

export const startServer = (...routers: Router[]) => {
  const app = express();
  const port = process.env.EXPRESS_API_PORT || 3000;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  if (routers.length > 0) {
    app.use("/", ...routers);
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

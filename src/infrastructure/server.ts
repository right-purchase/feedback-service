import express, { IRouterHandler, Router } from "express";

export const startServer = (...routers: Router[]) => {
  const app = express();
  const port = process.env.EXPRESS_API_PORT || 80;

  app.get("/", (_req, res) => {
    res.send("Hello World!");
  });

  if (routers.length > 0) {
    app.use("/", ...routers);
  }

  // Add this default route here
  app.use("*", (req, res) => {
    console.log(`Unsuccessful attempt: ${req.method} ${req.originalUrl}`);
    res.status(404).send("Sorry, that route does not exist.");
  });

  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
};

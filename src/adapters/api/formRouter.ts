import express from "express";
import { FormApi } from "./FormApi";
const formRouter = express.Router();
const formApi = new FormApi();

formRouter.get("/form/url", (_req, res) => {
  const response = formApi.getUrl();
  res.status(response.status).json(response.message);
});

export default formRouter;

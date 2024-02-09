import formRouter from "./adapters/api/formRouter";
import { startServer } from "./infrastructure/server";
import { initDotenv } from "./config/initDotenv";

initDotenv();

startServer(formRouter);

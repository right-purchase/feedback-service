import { configDotenv } from "dotenv";

export function initDotenv() {
  // Define the order of the .env files
  const envFiles: string[] = [];
  if (process.env.NODE_ENV !== undefined) {
    envFiles.push(
      `.env.${process.env.NODE_ENV}.local`,
      `.env.${process.env.NODE_ENV}`
    );
  }
  if (process.env.NODE_ENV !== "test") {
    envFiles.push(".env.local");
  }
  envFiles.push(".env");

  configDotenv({ path: envFiles });
}

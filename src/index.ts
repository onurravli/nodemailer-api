import express, { Application } from 'express';
import dotenv from 'dotenv';
import { mailRouter } from './routers';

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT as string) || 3000;

async function main() {
  try {
    app.use(express.json());
    app.use('/', mailRouter);
    app.listen(port, () => {
      console.log(`Listening on ${port}.`);
    });
  } catch (error) {
    console.error(`An error occurred: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();

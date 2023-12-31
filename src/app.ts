import 'express-async-errors';
import express, { json, Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { authenticationRouter, usersRouter, handbookRouter } from '@/routers';
import { handleApplicationErrors } from '@/middlewares';

const app = express();
app
  .use(cors())
  .use(json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/signup', usersRouter)
  .use('/handbook', handbookRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;

import express from 'express';
import { createServer } from 'http';
// import { connectToDatabase } from './utils/database';
import app from './app';

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
  });
}).catch((error) => {
  console.error('Failed to connect to database', error);
  process.exit(1);
});

import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { loggingMiddleware } from './middleware';
import { auth } from 'express-openid-connect';

dotenv.config();
const app = express();

app.use(helmet());
app.use(loggingMiddleware);
app.set('trust proxy', true);
app.use(auth());

app.get('/', (req, res) => {
  res.send(`Hello ${req.oidc?.user?.name}`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

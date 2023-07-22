import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes/index.routes';

const app = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set security HTTP headers
app.use(helmet());

// Enable CORS - Cross Origin Resource Sharing
app.use(cors());

// HTTP request logger
app.use(morgan('tiny'));

// Compression
app.use(compression());

// Routes
app.use('/api', routes);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any, promise) => {
    console.error(`Error: ${err.message}`);
    // Close server & exit process
    process.exit(1);
});

export default app;

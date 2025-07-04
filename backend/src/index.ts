import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
console.log('Importing authRoutes...');
import authRoutes from './routes/auth';

console.log('Importing companyRoutes...');
import companyRoutes from './routes/company';

console.log('Importing tenderRoutes...');
import tenderRoutes from './routes/tender';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: ['http://localhost:3000','https://b2b-beta-weld.vercel.app','https://b2b-p2l126w0v-sivapriyaas-projects.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));
  
  app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/auth', authRoutes);
app.use('/companies', companyRoutes);
app.use('/tenders', tenderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('🔥 Unhandled Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  });
  

  
  
  
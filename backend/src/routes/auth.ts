import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../db'; 

const router = Router();


router.post('/register', async (req, res) => {
  const { email, password, company_name } = req.body;
  console.log('Registering:', req.body);

  if (!email || !password || !company_name) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const [company] = await db('companies').insert({ name: company_name,email }).returning('*');
    const [user] = await db('users').insert({ email, password_hash: hash, company_id: company.id }).returning('*');
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
    res.status(201).json({ token });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('[LOGIN]', email, password); 
  
    const user = await db('users').where({ email }).first();
    if (!user) {
      console.log('[LOGIN] User not found');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      console.log('[LOGIN] Password mismatch');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
    res.json({ token });
  });
  

  

export default router;

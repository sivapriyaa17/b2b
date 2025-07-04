import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../db'; 

const router = Router();


router.post('/register', async (req, res) => {
  const { name, industry, services, location, email, password } = req.body;

  if (!name || !industry || !services || !location || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);

    const [company] = await db('companies')
      .insert({
        name,
        industry,
        services,
        location,
        email,
        password: password_hash,
      })
      .returning('*');

    const token = jwt.sign({ companyId: company.id }, process.env.JWT_SECRET!);
    res.json({ token });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});


  

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('[LOGIN]', email, password); 
  
    const user = await db('companies').where({ email }).first();
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

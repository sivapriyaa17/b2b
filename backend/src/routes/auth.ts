import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../db'; 

const router = Router();


router.post('/register', async (req, res) => {
    const { email, password, company_name } = req.body;
  
    if (!email || !password || !company_name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const hash = await bcrypt.hash(password, 10);
    const [company] = await db('companies').insert({ name: company_name }).returning('*');
    const [user] = await db('users').insert({ email, password_hash: hash, company_id: company.id }).returning('*');
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
    res.json({ token });
   
  });
  

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db('users').where({ email }).first();
  if (!user || !(await bcrypt.compare(password, user.password_hash)))
    return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
  res.json({ token });
});


  

export default router;

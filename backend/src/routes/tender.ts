
import express from 'express';
import db from '../db';
const router = express.Router();
router.post('/', async (req, res) => {
    try {
      const { title, description, deadline, budget, companyid } = req.body;
  
      if (!title || !description || !deadline || !budget || companyid) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      await db('tenders').insert({
        title,
        description,
        deadline,
        budget,
        companyid,
      }).returning('*');
  
      res.status(201).json({ message: 'Tender created successfully' });
    } catch (error) {
      console.error('Tender creation error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/', async (req, res) => {
    try {
      console.log('🔍 Fetching tenders...');
      const tenders = await db('tenders').select('*');
      console.log('✅ Tenders fetched:', tenders);
      res.json(tenders);
    } catch (err) {
      console.error('❌ Error fetching tenders:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  export default router;

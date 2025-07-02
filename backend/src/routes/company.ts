import express from 'express';
import db from '../db';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const companies = await db('companies').select('*');
    res.json(companies);
  } catch (err) {
    console.error('Error fetching companies:', err);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});


router.get('/search', async (req, res) => {
  const { name, industry, services } = req.query;

  try {
    let query = db('companies');

    if (name) query = query.whereILike('name', `%${name}%`);
    if (industry) query = query.whereILike('industry', `%${industry}%`);
    if (services) query = query.whereILike('services', `%${services}%`);

    const results = await query.select('*');
    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Get company by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const company = await db('companies').where({ id }).first();

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json(company);
  } catch (err) {
    console.error('Error fetching company by ID:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;


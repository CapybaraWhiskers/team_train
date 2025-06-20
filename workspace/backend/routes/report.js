import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
  res.json({ message: 'report saved' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `get report ${req.params.id}` });
});

export default router;

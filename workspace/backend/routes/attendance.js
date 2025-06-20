import { Router } from 'express';
const router = Router();

router.post('/clock-in', (req, res) => {
  res.json({ message: 'clock in recorded' });
});

router.post('/clock-out', (req, res) => {
  res.json({ message: 'clock out recorded' });
});

export default router;

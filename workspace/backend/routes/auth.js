import { Router } from 'express';
const router = Router();

router.post('/login', (req, res) => {
  // TODO: integrate Azure AD
  res.json({ message: 'login placeholder' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'logout placeholder' });
});

export default router;

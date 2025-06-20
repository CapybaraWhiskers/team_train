import express from 'express';
import morgan from 'morgan';
import { Pool } from 'pg';
import authRouter from './routes/auth.js';
import attendanceRouter from './routes/attendance.js';
import reportRouter from './routes/report.js';

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool();
app.set('db', pool);

app.use(morgan('dev'));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/attendance', attendanceRouter);
app.use('/report', reportRouter);

app.get('/', (req, res) => {
  res.send('Attendance System API');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

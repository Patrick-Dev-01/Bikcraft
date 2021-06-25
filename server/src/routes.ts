import express from 'express';
import { createBudget } from './controllers/BudgetController';
import { createDoubts } from './controllers/DoubtController';

const routes = express.Router();

routes.post('/budget', createBudget);
routes.post('/doubt', createDoubts)

export { routes }
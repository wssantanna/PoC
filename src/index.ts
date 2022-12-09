
import Express, { Router, Request, Response } from 'express';

const api = Express();

api.use(Express.json());

api.listen(3333, () => 'server running on port 3333');
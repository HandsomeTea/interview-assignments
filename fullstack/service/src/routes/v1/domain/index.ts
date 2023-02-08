import express from 'express';

import base from './base';
import search from './search';

const router = express.Router();

/** /api/v1/domain */
router.use(search, base);

export default router;

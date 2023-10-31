import express from 'express';

import { text } from '../controller/user.controller.js'

const router = express.Router();

router.get('/',text)

export default router;
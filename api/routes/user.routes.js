import express from 'express';

import { text } from '../controller/user.controller.js'

const router = express.Router();

// import userController from '../controller/user.controller.js'

router.get('/',text)

export default router;
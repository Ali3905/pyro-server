import { Router } from 'express';
import { createForm} from '../controllers/form.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.post('/', upload, createForm); // Use multer's upload middleware

export default router;






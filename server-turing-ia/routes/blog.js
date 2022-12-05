
import { Router } from 'express';
import { check } from 'express-validator'

// carpeta de controlladores
import { 
        blogsGet, 
        blogsPut, 
        blogsPost, 
        blogsDelete, 
        blogsGetById
      } from '../controllers/blogs.js';

// carpeta middlewares
import { fieldsValidator } from '../middlewares/fields-validator.js';


const router = Router();


router.get('/', blogsGet);

router.get('/:id', blogsGetById);

router.put('/:id',[
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('description', 'Una descripción es requerida').not().isEmpty(),
    fieldsValidator
], blogsPut);

router.post('/', [
  check('title', 'El titulo es requerido').not().isEmpty(),
  check('description', 'Una descripción es requerida').not().isEmpty(),
  fieldsValidator
],blogsPost);

router.delete('/:id', blogsDelete);







export default router;

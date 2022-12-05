import { Router } from 'express';
import { check } from 'express-validator'

// carpeta de controlladores
import { 
        contactGet, 
        contactPut, 
        contactPost, 
        contactDelete, 
        contactGetById
      } from '../controllers/contact.js';

// carpeta middlewares
import { fieldsValidator } from '../middlewares/fields-validator.js';


const router = Router();


router.get('/', contactGet);

router.get('/:id', contactGetById);

router.put('/:id',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('message', 'Un mensaje es requerido').not().isEmpty(),
    check('email', 'Un email es requerido').not().isEmpty(),
    check('email', 'El email no tiene un formato correcto').isEmail(),
    fieldsValidator
], contactPut);

router.post('/', [
  check('name', 'El nombre es requerido').not().isEmpty(),
  check('message', 'Un mensaje es requerido').not().isEmpty(),
  check('email', 'Un email es requerido').not().isEmpty(),
  check('email', 'El email no tiene un formato correcto').isEmail(),
  fieldsValidator
],contactPost);

router.delete('/:id', contactDelete);




export default router;

const router=require('express').Router();
const {createUser,deleteUser}=require('../controllers/user');

router.post('/',createUser);
router.delete('/',deleteUser);

module.exports=router;
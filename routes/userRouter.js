const express = require('express');
const router=express.Router();
const userData = require('../controllers/selectController');
const validateUser = require('../validation/userValidation.js');
const validateSelectMaster = require('../validation/selectmasterValidation');
const {addData,updateData,prac,deletedata}=require('../controllers/selectController');
// router.route('/addData').get(addData);
// router.route('/updateData').get(updateData);
// router.route('/prac').get(prac);
// router.route('/deletedata').get(deletedata);

router.route('/prac').get(userData.prac);
router.route('deletedata').delete(userData.deletedata);
router.route('/insertData').get(validateUser,userData.insertData);
router.route('/adddata').get(validateSelectMaster,userData.addData);
router.route('/updateData').get(userData.updateData);
module.exports = router;
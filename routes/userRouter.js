const express = require('express');
const router=express.Router();
const {addData,updateData,prac,deletedata}=require('../controllers/selectController');
router.route('/addData').get(addData);
// router.route('/getData').get(getData);
router.route('/updateData').get(updateData);
router.route('/prac').get(prac);
router.route('/deletedata').get(deletedata);

module.exports = router;
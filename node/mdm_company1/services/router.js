const express = require('express');
const router = new express.Router();
const company_id = require('../controllers/get_cmat_info.js');
//const company_cmat_id = require('../controllers/get_ib_info.js');

// Company details routes starts  
router.route('/')
  .get(company_id.get);
// Company details routes ends  

/*
router.route('/company_cmat_id/:id?')
  .get(company_cmat_id.get);
  
router.route('/pricing_qe/serialnumber/:id?')
  .get(serialNumber.get);
*/

module.exports = router;
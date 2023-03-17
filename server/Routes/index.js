const express = require('express');
const router = express.Router();
const Controller = require('../Controller/calculator');

router.get("/getResult",Controller.controlData); 
                        
                        
                        
                        

module.exports = router;
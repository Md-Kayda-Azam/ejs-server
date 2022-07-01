const express = require('express');
const { getAllStudents, createStudents, getSingleStudent, showStudentsForm, deleteStudent, showEditStudentForm, editStudent } = require('../controllers/getAllStudents');
const router = express.Router();
const multer = require('multer');
const path = require('path')

/// multer config
const storage = multer.diskStorage({
     destination  :( req, file, cb) => {
       cb(null, path.join(__dirname, '../assets/upload/'))
     }, 
     filename : (req, file, cb) => {
          cb(null, Date.now()+'_'+ file.originalname )
     }
});


// load multer
const studetMulter = multer({
    storage : storage
}).single('photo');



///students route
router.get('/', getAllStudents);
router.post('/', studetMulter, createStudents);
router.get('/create', showStudentsForm);
router.get('/:id', getSingleStudent);
router.get('/delete/:id', deleteStudent);


router.get('/edit/:id', showEditStudentForm);
router.post('/edit/:id', studetMulter,  editStudent);

// editStudent




/// export router
module.exports = router;
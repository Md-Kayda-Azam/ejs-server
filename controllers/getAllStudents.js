const student = require("../models/studentModel")

/**
 * 
 * @desc Get All students data
 * @name  Get /studdents/
 * @access public
 */
const getAllStudents = async (req, res) => {
   
  let students = await student.find();
  res.render('index', { 
    students : students  
  });


  
}

/**
 * 
 * @desc Get All students data
 * @name  Get /studdents/
 * @access public
 */
 const getSingleStudent = async (req, res) => {
  let id = req.params.id;

  let singleData = await student.findById(id);

  res.render('show', { singleData })

}



/**
 * 
 * @desc Get All students data
 * @name  Get /studdents/
 * @access public
 */
const showStudentsForm = (req, res) => {
  res.render('create')

}


/**
 * 
 * @desc Get All students data
 * @name  Get /studdents/
 * @access public
 */
const createStudents = (req, res) => {

  /// store data to DB
  student.create({
    ...req.body,
    photo : req.file.filename
  })

  ///redireact to home page
  res.redirect('/student');

}


/**
 * Delete Student Data
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudent = async (req, res) => {

  let id = req.params.id;

  await student.findByIdAndDelete(id);

  res.redirect('/student');

}


const showEditStudentForm = async (req, res) => {

 let update = await student.findById( req.params.id );

 res.render('edit', {
  update : update
});


}

const editStudent = async  (req, res) => {

let id = req.params.id;

await student.findByIdAndUpdate(id, { ...req.body,
photo : req.file.filename},{
  new : true
})

res.redirect('/student');

}



/// export controllers
module.exports = {
    getAllStudents,
    createStudents,
    getSingleStudent,
    showStudentsForm,
    deleteStudent,
    showEditStudentForm,
    editStudent
}
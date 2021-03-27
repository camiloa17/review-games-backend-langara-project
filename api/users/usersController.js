const { queryAsync } = require('../../database/asyncQuery');

exports.getUsers = async (req, res, next) => {
  try {
    const employees = await queryAsync(
      'select * from employee'
    );
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

exports.getAUser = async (req, res, next) => {
  try {
    const { employeeid } = req.params;
    const employee = await queryAsync(
      'select * from employee where employeeID=? ',
      [employeeid]
    );
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

exports.createAUser = async (req, res, next) => {
  try {
    const data = req.body;
    const insertEmployee = await queryAsync(
      'insert into employee(employeename,age,yearsofexperience) values(?,?,?)',
      [data.employeename,data.age,data.experience]
    );

    res.json(insertEmployee);
  } catch (err) {
    next(err);
  }
};

exports.deleteAUser = async (req, res, next) => {
  try {
    const { employeeid } = req.params;
    const deletedEmployee = await queryAsync('delete from employee where employeeID=? ', [
        employeeid,
    ]);
    res.json(deletedEmployee);
  } catch (err) {
    next(err);
  }
};

exports.updateAUser = async (req, res, next) => {
  try {
    const { employeeid } = req.params;
    const data = req.body;

    const updateEmployee = await queryAsync(
      'update employee set employeename=?, age=?,yearsofexperience=? where employeeID=?',
      [data.employeename,data.age,data.experience, employeeid]
    );
    res.json(updateEmployee);
  } catch (err) {
    next(err);
  }
};
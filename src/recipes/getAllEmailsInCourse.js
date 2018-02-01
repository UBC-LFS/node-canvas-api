const options = require('../options')
const get = require('../get')

const getAllEmailsInCourse = async (accountId, deptName, courseCode) => {
  const subAccounts = await get.getSubaccounts(accountId)
  const depts = await subAccounts.map(({ id, name }) => ({ id, name }))
  const dept = await depts.find(dept => dept.name === deptName)
  const allCoursesInDept = await get.getCourses(dept.id)
  const course = await allCoursesInDept.find(course => course.course_code === courseCode)
  const students = await get.getUsersInCourse(course.id, options.users.include.email)
  const emails = await students.map(student => student.email)
  return emails
}

module.exports.getAllEmailsInCourse = getAllEmailsInCourse
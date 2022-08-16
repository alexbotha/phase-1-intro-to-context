function createEmployeeRecord(array) {
    const obj = {
    "firstName": array[0],
    "familyName": array[1],
    "title": array[2],
    "payPerHour": array[3],
    "timeInEvents": [],
    "timeOutEvents": []
}
return obj
}

function createEmployeeRecords(array){
  return array.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(array, event) {
let [date, hour] = event.split(" ")
let eventObj = {
  type: "TimeIn",
  hour: parseInt(hour, 10),
  date 
}
array.timeInEvents.push(eventObj)
return array
}

function createTimeOutEvent(array, event){
let [date, hour] = event.split(" ")
let eventObj = {
  type: "TimeOut",
  hour: parseInt(hour, 10),
  date 
}
array.timeOutEvents.push(eventObj)
return array
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(event => event.date === date)
  const timeOut = employee.timeOutEvents.find(event => event.date === date) 
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(employee, date){
  const hours = hoursWorkedOnDate(employee, date)
  return (employee.payPerHour) * hours
}

function calculatePayroll(x) {
  let total = 0
  for (const employee of x) {
    total = allWagesFor(employee) + total
  }
  return total
  
}

function allWagesFor(obj) {
  const eligibleDates = obj.timeInEvents.map(function (e){
    return e.date
  })
  const reducer = eligibleDates.reduce(function (previous, current){
    return previous + wagesEarnedOnDate(obj, current)
  },0)
  console.log(reducer)
  return reducer
}
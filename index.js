/* Your Code Here */
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(employeeData){
    return employeeData.map(function(array){
        return createEmployeeRecord(array)
    })
}
function createTimeInEvent(dateTimeStamp){
    const [date, hour] = dateTimeStamp.split(" ")
    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour),
        date,
    })
    return this
}
function createTimeOutEvent(dateTimeStamp){
    const [date, hour] = dateTimeStamp.split(" ")
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour),
        date,
    })
    return this
}
function hoursWorkedOnDate(caculateHours){
    let workSignin = this.timeInEvents.find(function(event){
        return event.date === caculateHours
    })
    let workSignout = this.timeOutEvents.find(function(event){
        return event.date === caculateHours
    })
    return (workSignout.hour - workSignin.hour) /100
}
function wagesEarnedOnDate(calculateWage){
    let wage = hoursWorkedOnDate.call(this, calculateWage) * this.payPerHour
    return parseFloat(wage.toString())
}
function findEmployeeByFirstName(array, firstName) {
    return array.find(function(record){
      return record.firstName === firstName
    })
}
function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


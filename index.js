/* Your Code Here */
const employeesArray = [
    ['Gray', 'Worm', 'Security', 1],
    ['moe', 'sizlak', 'barkeep', 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];
  
  const employees = createEmployeeRecords(employeesArray);
  console.log(employees);

  function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  };
  
 
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((e) => e.date === date);
    const timeOut = this.timeOutEvents.find((e) => e.date === date);
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100;
    } else {
      return 0;
    }  };
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const payOwed = hoursWorked * this.payPerHour;
    return payOwed;
  }
  


  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((e) => e.firstName === firstName);
  }
  
  function calculatePayroll(arr) {
    const totalPayroll = arr.reduce(
      (total, employee) => total + allWagesFor.call(employee),
      0
    );
    return totalPayroll;
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


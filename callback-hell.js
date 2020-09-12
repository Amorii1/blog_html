function getSalary(callback) {
  setTimeout(() => {
    callback(1000);
  }, 1000);
}

function subTax(salary, callback) {
  setTimeout(() => {
    callback(salary - salary * 0.2);
  }, 1000);
}

function subRent(salary, callback) {
  setTimeout(() => {
    callback(salary - 500);
  }, 1000);
}

function getMoney(callback) {
  getSalary((salary) => {
    subTax(salary, (salary) => {
      subRent(salary, (salary) => {
        callback(salary);
      });
    });
  });
}

getMoney((m) => {
  console.log(m);
});

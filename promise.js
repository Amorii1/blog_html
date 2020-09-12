function getSalary() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let x=1000;
      if(x>=1000) resolve(x);
      else reject("ERROR HAPPENED !");
    }, 1000);
  });
}

function subTax(salary) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(salary - salary * 0.2);
    }, 1000);
  });
}

function subRent(salary) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(salary - 500);
    }, 1000);
  });
}

//////////////////////////////////////////////////////////////////////////////////////

function getMoneyThen() {
  return new Promise((resolve, reject) => {
    getSalary()
    .then((salary) => {
      subTax(salary)
      .then((salary) => {
        subRent(salary)
        .then((salary) => {
          resolve(salary);
        });
      });
    });
  });
}

getMoneyThen()
.then((money) => {
  console.log(money);
});

//////////////////////////////////////////////////////////////////////////////////////

function getMoneyThenNew() {
  const salary= getSalary()
  .then(subTax)
  .then(subRent);
  return salary;
}

getMoneyThenNew()
.then((salary) => {
  console.log(salary);
});

//////////////////////////////////////////////////////////////////////////////////////

async function getMoneyAwait() {
  try {
    var salary = await getSalary();
    salary = await subTax(salary);
    salary = await subRent(salary);
    return salary;}

   catch (error) {
    console.log(error); }
}
getMoneyAwait().then((s) => {
  console.log(s);
});

// let m = await getMoneyAwait(); // will work if it was inside async function

//////////////////////////////////////////////////////////////////////////////////////

async function getMoney3Emploise() {
  let salary1 = getSalary();
  let salary2 = getSalary();
  let salary3 = getSalary();

  let salaryArr = await Promise.all([salary1, salary2, salary3]);
  return salaryArr; // or complete the calculations
}

getMoney3Emploise().then((r)=>{
  console.log(r);
});
const op = require('operation-strint');

const DEBUG = false;
const snumpat = /^\d+$/;

const ErrorValidsnum = (snum) => {
  if (!snum) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum)) {
    return `Numbers must be numbers`;
  }
  return false
};

const IsDivisibleBy2 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  return /[02468]$/.test(snum);
}

const IsDivisibleBy3 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  while (true) {
    let remove0369 = snum.replace(/[0369]/g, ``);
    if (remove0369.length == 0) return true;
    if (remove0369.length == 1) return remove0369 == `0`;
    snum = op.sum(
      remove0369.split(``).slice(0, -1).join(""),
      remove0369.split(``).at(-1)
    );
    if (/^[12]$/.test(snum)) {
      return false;
    }
  }
};

const IsDivisibleBy4 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  if (snum.length <= 2) return parseInt(snum) % 4 === 0;
  const snumArr = snum.split(``);
  snum = snumArr.slice(snumArr.length - 2).join(``);
  return parseInt(snum) % 4 === 0;
};

const IsDivisibleBy5 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  return /[50]$/.test(snum);
}

const IsDivisibleBy7 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  if (snum.length <= 2) return parseInt(snum) % 7 === 0;
  const snumArr = snum.split(``);
  const snumArr1 = snumArr.slice(0, snumArr.length-1).join(``);
  const snumArr2 = snumArr.at(-1);
  return IsDivisibleBy7(
    snumArr2 == 0 ? snumArr1 : op.minus(snumArr1, op.multiply(snumArr2, "2"))
  );
};

const IsDivisibleBy10 = (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  return /[0]$/.test(snum);
};

module.exports = {
  ErrorValidsnum,
  IsDivisibleBy2,
  IsDivisibleBy3,
  IsDivisibleBy4,
  IsDivisibleBy5,
  IsDivisibleBy7,
  IsDivisibleBy10,
};

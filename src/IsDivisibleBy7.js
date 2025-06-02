import op from "operation-strint"
import ErrorValidsnum from "./ErrorValidsnum.js";

function IsDivisibleBy7(snum) {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  if (snum.length <= 2) return parseInt(snum) % 7 === 0;
  const snumArr = snum.split('');
  const snumArr1 = snumArr.slice(0, snumArr.length - 1).join('');
  const snumArr2 = snumArr.at(-1);
  return IsDivisibleBy7(
    snumArr2 == 0 ? snumArr1 : op.minus(snumArr1, op.multiply(snumArr2, "2"))
  );
}

export default IsDivisibleBy7;

import op from "operation-strint"
import ErrorValidsnum from "./ErrorValidsnum";

export default (snum) => {
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

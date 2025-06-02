import ErrorValidsnum from "./ErrorValidsnum";

export default (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  return /[50]$/.test(snum);
};

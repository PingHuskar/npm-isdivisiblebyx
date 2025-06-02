import ErrorValidsnum from './ErrorValidsnum';

export default (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  return /[02468]$/.test(snum);
};

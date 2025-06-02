import ErrorValidsnum from './ErrorValidsnum';

export default (snum) => {
  if (ErrorValidsnum(snum)) return ErrorValidsnum(snum);
  
  if (snum.length <= 2) return parseInt(snum) % 4 === 0;
  
  const snumArr = snum.split('');
  const last2digit = snumArr.slice(snumArr.length - 2).join('');
  return parseInt(last2digit) % 4 === 0;
};

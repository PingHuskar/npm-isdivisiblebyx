import snumpat from "./snumpat";

export default (snum) => {
  if (!snum) {
    return `Numbers cannot be empty`;
  }
  if (!snumpat.test(snum)) {
    return `Numbers must be numbers`;
  }
  return false;
};
// shorten numbers to k,m,b
export const shortenNumber = (num: number) => {
  if (num < 1000) return num.toString();
  if (num < 1000_000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  if (num < 1000_000_000) {
    return `${(num / 1000_000).toFixed(1)}m`;
  }
  return `${(num / 1000_000_000).toFixed(1)}b`;
};

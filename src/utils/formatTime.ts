export const formatTime = (ms: number) => {
  const milliseconds = ms % 1000;
  const seconds = Math.floor((ms % 60000) / 1000);
  const mins = Math.floor(ms / 60000);

  const millis = milliseconds.toString().padStart(3, '0');
  const ss = seconds.toString().padStart(2, '0');
  const mm = mins.toString().padStart(2, '0');

  const long: string = `${mm}m${ss}s${millis}`;
  // const leadingZeroes = long.match(/^[0:ms]+/i);
  // const activeChars = long.slice(leadingZeroes[0].length);
  const inactiveValues = long.match(/^[0ms]+/);
  const activeFrom = inactiveValues ? inactiveValues[0].length : 0;

  const format = {
    long,
    activeFrom,
  };
  return format;
};

export const formatTime = (ms: number) => {
  const milliseconds = ms % 1000;
  const seconds = Math.floor((ms % 60000) / 1000);
  const mins = Math.floor(ms / 60000);

  const millis = milliseconds.toString().padStart(3, '0');
  const ss = seconds.toString().padStart(2, '0');
  const mm = mins.toString().padStart(2, '0');

  const full = `${mm}m${ss}s${millis}`;
  // const leadingZeroes = joined.match(/^[0:ms]+/i);
  // const activeChars = joined.slice(leadingZeroes[0].length);

  return [full, seconds];
};

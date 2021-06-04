Number.prototype.pad = function(size) {
  let s = String(this);
  while (s.length < (size || 2)) {s = '0' + s;}
  return s;
};

export const formatTime = (arg) => {
  if(!arg || arg === 'abc' || typeof arg === 'function' || arg < 0) {
    return null;
  } else {
    const secs = Math.floor(arg % 60);
    const min = Math.floor((arg/60) % 60);
    const hours = Math.floor(arg/3600);
    const formattedTime = `${hours.pad(2)}:${min.pad(2)}:${secs.pad(2)}`;
    return formattedTime;
  }
};


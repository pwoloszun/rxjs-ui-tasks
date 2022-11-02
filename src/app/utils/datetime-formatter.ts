import { map, padStart } from 'lodash';

const hour = 3600_000;
const min = 60_000;
const sec = 1_000;

export function toTimeStr(ms: number, withMs = false): string {
  const fullH = Math.floor(ms / hour);
  const minLeft = ms - fullH * hour;
  const fullM = Math.floor(minLeft / min);
  const secLeft = minLeft - fullM * min;
  const fullS = Math.floor(secLeft / sec);
  const timeParts = [fullH, fullM, fullS];
  const hmsPart = map(timeParts, (part) => {
    return padStart(part.toString(), 2, '0');
  }).join(':');

  if (withMs) {
    const msLeft = secLeft % sec;
    const msPart = padStart(msLeft.toString(), 3, '0');
    return `${hmsPart}.${msPart}`;
  } else {
    return hmsPart;
  }
}

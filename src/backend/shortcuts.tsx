export function random(min: number, max: number, places: number = 0) { // MIN INCLUSIVE, MAX EXCLUSIVE
    if (typeof places !== 'number' || places < 0 || min > max) {
        console.error('Invalid input.');
        return null;
      }
    const dp = Math.trunc(places)
    return min + (Math.round((Math.random()*(max-min)) * (10**dp)) / 10**dp)
}

export function round(value: number, places: number = 0) {
    const dp = Math.trunc(places)
    return Math.round(value * (10**dp)) / (10**dp)
  }
  
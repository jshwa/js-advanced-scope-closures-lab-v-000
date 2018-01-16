function produceDrivingRange(max) {
  return function withinRange(start, end) {
    let dist = Math.abs(end-start)
    if (dist < max) {
      return `within range by ${max - dist}`;
    else {
      return `Out of range by ${dist - max}`;
      }
    }
  }
}
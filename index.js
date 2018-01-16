function produceDrivingRange(max) {
  return function withinRange(start, end) {
    let dist = Math.abs(parseInt(end)-parseInt(start))
    if (dist < max) {
      return `within range by ${max - dist}`;
    }
    else {
      return `${dist - max} blocks out of range`;
    }
  }
}

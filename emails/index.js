function quick(arr) {
  let val = arr[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (val < arr[i]) {
      right.push(val);
    } else if (val > arr[i]) {
      left.push(val);
    }
  }

  let res = [];
  return res.concat(quick(left), val, quick[right]);
}

quick([2, 1, 3, 5, 4]);

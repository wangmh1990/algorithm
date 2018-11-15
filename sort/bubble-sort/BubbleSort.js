function bubbleSort(sortArr) {
  let newArr = [...sortArr];
  const len = newArr.length;
  let changed = false;
  for(let i = 1; i < len; i++) {
    changed = false;
    for(let j = 0; j < len - i; j++) {
      if(newArr[j] > newArr[j + 1]) {
        changed = true;
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
    if(!changed) {
      return newArr;
    }
  }
  return newArr;
}
function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
      let reg = arr[i];
      let x;
  
      for (x = i - 1; x >= 0 && arr[x] > reg; x--) {
        arr[x + 1] = arr[x];
      }
  
      arr[x + 1] = reg;
    }
    return arr;
  }
  
  console.log(insertion([5, 8, 1, 4, 2, 3, 6]));
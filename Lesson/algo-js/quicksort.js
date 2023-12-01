function quicksort(data, start, end) {
  if (start < end) {
    function partition(data, start, end) {
      function swap(a, b) {
        [data[a], data[b]] = [data[b], data[a]];
      }
      const pivot = data[end];
      let center = start;

      for(let i = start ; i < end; i++){
        if(data[i] < pivot){
          swap(center, i);
          center++;
        }
      }
      swap(center,end);
      return center;
    }

    const center = partition(data, start, end);
    quicksort(data, start, center - 1);
    quicksort(data, center + 1, end);
  }
}

let numbers = [5, 100, 2, 8, 7, 1];
console.log(numbers);
quicksort(numbers, 0, numbers.length - 1);
console.log(numbers);

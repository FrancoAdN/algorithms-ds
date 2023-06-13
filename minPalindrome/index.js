function minPalindrome(products) {
  let n = products.length;
  let mid = n % 2 === 0 ? n / 2 : (n + 1) / 2;
  let left = 0;
  let right = n - 1;
  let count = 0;
  while (left < mid) {
    if (products[left] === products[right]) {
      left++;
      right--;
    } else if (products[left] < products[right]) {
      count += products[right] - products[left];
      for (let i = left; i < mid; i++) {
        products[i] = products[right];
      }
      right--;
    } else {
      return -1;
    }
  }
  return count;
}

module.exports = minPalindrome;

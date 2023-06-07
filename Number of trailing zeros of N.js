function zeros(n) {
    let count = 0;
    
    // Divide n by powers of 5 and count the multiples of 5
    while (n >= 5) {
      n = Math.floor(n / 5);
      count += n;
    }
    
    return count;
  }
  
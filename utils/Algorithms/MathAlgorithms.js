// Greatest Common Divisor (GCD

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

// Prime Check

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
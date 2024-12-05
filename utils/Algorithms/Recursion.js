// Factorial

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }

// Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
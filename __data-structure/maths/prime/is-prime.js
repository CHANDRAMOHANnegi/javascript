function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
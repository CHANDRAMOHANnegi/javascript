function getPrimesInRange(start, end) {
    const primes = [];

    function isPrime(num) {
        if (num < 2) return false; // 0 and 1 are not prime numbers
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = Math.max(start, 2); i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Example usage:
const start = 10;
const end = 50;
console.log(getPrimesInRange(start, end));

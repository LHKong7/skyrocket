const bitCount = (x) => {
    let cnt = 0;
    while (x) {
        cnt += (x % 2);
        x >>= 1;
    }
    return cnt;
}

console.log("bitCount(5): ", bitCount(5));


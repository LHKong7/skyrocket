
// BF algo

// RK algo

// BM algo

// 1. Bad character rule
const generateBadCharMap = (pattern) => {
    const hashStore = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];

        hashStore.set(char, i);
    }

    return hashStore;
}
const badCharMatch = (main, pattern) => {
    const n = main.length;
    const m = pattern.length;
    const hashStore = generateBadCharMap(pattern);

    let i = 0; // i表示主串与模式串对齐的第一个字符

    while (i < n - m + 1) {
        let j;

        for (j = m - 1; j >= 0; j--) {
            if (main[i + j] !== pattern[j]) break;
        }

        if (j < 0) return i;

        // 这里等同于将模式串往后滑动j-bc[(int)a[i+j]]位
        const lift = hashStore.get(main[i + j]) ?  j - hashStore.get(main[i + j]) : m;
        i = i + lift;
    }

    return -1;
}


// 2. Good suffix rule
const generateGS = (pattern) => {
    const m = pattern.length; // 模式串长度
    const suffix = new Array(m).fill(-1); // suffix[i]表示以i为下标的后缀子串与模式串前缀子串相同的最大长度
    const prefix = new Array(m).fill(false); // prefix[i]表示以i为下标的后缀子串是否能匹配模式串的前缀子串

    for (let i = 0; i < m - 1; i++) { // pattern[0, i]
        let j = i;
        let k = 0; // 公共后缀子串长度

        while (j >= 0 && pattern[j] === pattern[m - 1 - k]) { // 与pattern[0, m-1]求公共后缀子串
            j--; // j表示公共后缀子串的起始下标
            k++; // k表示公共后缀子串的长度
            suffix[k] = j + 1; // j+1表示公共后缀子串在pattern[0, i]中的起始下标
        }

        if (j === -1) prefix[k] = true; // 如果公共后缀子串也是模式串的前缀子串
    }

    return { suffix, prefix };
}
console.log(generateGS('cabcab'))


// KMP algo
const KMPAlgo = () => {
    
}
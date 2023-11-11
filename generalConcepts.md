# General Concepts

## Introduction

## Main Concepts

### Concept 1: 计算字符串的子串数量：
当我们面对Leetcode的一些算法题时，有时候需要计算出一个字符串中所有的子串数量或者依赖子串的概念来帮助我们更好地理解题目与解题。

**子串定义**：从原始字符串中取出连续的一段字符形成的字符串。对于字符串`abc`子串包括：`a`, `b`, `c`, `ab`, `bc`, `abc`,

给定字符串长度为`n`, 计算子串的数量：
- 长度为1的子串数量为： `n`
- 长度为2的子串数量为：`n-1`
- 长度为3的子串数量为：`n-3`
  
因此所有子串的总数为：

`∑ i=1 ... n = 1+2+3+⋯+(n−1)+n`, 子串总数： `(n*(n+1)) / 2`
```js
function getAllSubstrings(str) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}
```
当处理数组或字符串的子结构长度时，如果想知道长度为k的子数组或子串可以从长度为n的主数组或字符串得到多少次，答案为: `n - k + 1`，一个长度为4的子串在长度为6的字符串中可以找到 3 次。




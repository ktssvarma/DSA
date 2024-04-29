function longestIdealString(s, k) {
    const n = s.length;
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) <= k) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

longestIdealString("acfgbd", 2);
longestIdealString("abcd", 3);

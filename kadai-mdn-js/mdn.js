const now = new Date();
const year = now.getFullYear(); // 年
const month = now.getMonth() + 1; // 月 (0から始まるので+1)
const date = now.getDate(); // 日
console.log(year+'年'+month+'月'+date+'日'); // 例: 2025-6-23

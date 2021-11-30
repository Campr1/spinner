const animation = [
"\r|   ",
"\r/   ",
"\r-   ",
"\r\\   ",
"\r/  ",
"\r-   ",
"\r|   ",
"\n   ",
];


let timeout = 0;

for (const char of animation) {
setTimeout(() => {
  process.stdout.write(char);
}, timeout);
timeout += 200;
}
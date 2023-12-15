for (let i = 1; i < 10; i++) {
  for (let j = 10; j >= i; j--) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  for (let j = 10; j >= i; j--) {
    process.stdout.write(" *");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  console.log();
}

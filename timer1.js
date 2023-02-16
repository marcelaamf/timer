const args = process.argv.slice(2);

const timer = (args) => {
  if (args.length === 0) {
    return;
  }
  let validTimer = args.filter(item => item >= 0 && !isNaN(item)).map((delay) => delay * 1000);
  // console.log(validTimer)
  for (let time of validTimer) {
    setTimeout(() => {
      console.log(`Beep at ${time / 1000} seconds`);
      process.stdout.write('\x07');
    }, time);
  }
};

timer(args);
const argumentList = process.argv
const parameters = argumentList.slice(2);

for (let arg = 0; arg < parameters.length; arg++) {
  setTimeout(() => {
    process.stdout.write('Imagine a sound (ding)' + '\n');
  }, parameters[arg] * 1000)
};


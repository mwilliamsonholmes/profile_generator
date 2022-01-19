const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    const activity = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      const music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        const faveMeal = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          const faveFoodItem = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            const faveSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
              const superpower = answer;
              { console.log(`${name} loves to listen to ${music} while ${activity}, eating ${faveFoodItem} for ${faveMeal}. ${name}'s favourite sport is ${faveSport}, and is amazing at ${superpower}.`) };
              rl.close();
            });
          });
        });
      });
    });
  });
});

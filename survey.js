const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question(`What's your name? Nicknames are also acceptable: `, (answer) => {
  profile.push(`My name is ${answer}.`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    profile.push(`I like doing ${answer}.`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.push(`I like listening to ${answer}.`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        profile.push(`My favourite meal is ${answer}.`);
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          profile.push(`I like eating ${answer}.`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.push(`I like playing ${answer}.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.push(`My superpower is ${answer}.`);
              console.log(profile.join(" "));
              rl.close();
            });
          });
        });
      });
    });
  });
});
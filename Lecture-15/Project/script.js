const { resolve } = require("dns");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function getUserData(link) {
  const data = await fetch(link);
  const actual_data = await data.json();
  return actual_data;
}

async function ask(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function formatData(data) {
  const formated_data = [];
  data.forEach((element) => {
    const dataSchema = {
      username: element.login,
      url: element.url,
      type: element.type,
      events_url: element.events_url,
    };
    formated_data.push(dataSchema);
  });
  return formated_data;
}

async function display_data(list) {
  let count = 1;
  console.log(`${list.length} user data fetched in total........`);
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    if(i === list.length-1){
        rl.close();
        break;
    };
    if (count == 5){
        const key_press = await ask("If you want more press Enter or type exit to Exit: ");
        if (key_press.toLowerCase() === "exit") {
            console.log("Goodbyye");
            rl.close();
            break;
        }
        else if (key_press === "") {
            count = 0;
      } else
            console.log(`Invalid input
                        Exiting programm.
                        `);
  }
  count++;
}
}

const main = () => {
  rl.question("Enter the url: ", async (input_url) => {
    const raw_data = await getUserData(input_url);
    const list = formatData(raw_data);
    await display_data(list);
  });
};

main();

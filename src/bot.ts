import {Client} from 'discord.js';
import chalk from 'chalk';

const client = new Client();

client.on('ready', (...args: any[]) => {
    console.log(chalk`{greenBright Logged in as {blueBright ${client.user.tag}}!}`);
});

client.on('message', msg => {
    console.log(chalk`{cyan Message received: {white ${msg.content}}}`);
});

client.login(process.env.BOT_TOKEN).catch(err => {
    console.log(chalk.red(err));
    process.exit(1);
});

const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    // Bot User OAuth Access Token
    token: 'xoxb-376044037860-375725885313-RBsuhAcvDnk4KkxOQoZ5CSrq',
    name: 'jokebot'
});

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel('general', 'Get Ready To Laugh With @Jokebot!', params);
});


// Error
bot.on('error', (err) => console.log(err));


// Message Handler
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }
    console.log(data);
});
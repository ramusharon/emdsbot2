var builder = require('botbuilder');
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata 
});
var bot = new builder.UniversalBot(connector);
bot.dialog('/', function (session) 
    {
    session.send
    ('Hello World, I am version 1.0 of the Microsoft Chatbot. Unfortunately Im not very smart just yet');
});
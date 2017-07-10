'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.34a5e780-74f7-4c6e-9d10-602eceda0369";

var SKILL_NAME = "Comic Book Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a comic fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Spider-man first appeared August 1962",
    "Eddie Brock is the original venom, one of Spider-man's enemy.",
    "Carnage first appeared as Cletus Kasady in The Amazing Spider-Man #344 in March 1991",
    "The Sinister Six consists of Doctor Octopus, Vulture, Electro, Kraven the Hunter, Mysterio, and Sandman.",
    "In 1966 Joe Simon sued the owners of Marvel Comics, asserting that he – not Marvel – was legally entitled to renew the copyright upon the expiration of the original 28-year term.",
    "Thor has stated that Rogers is one of the very few humans he will take orders from and follow through the gates of Hades.",
    "Captain America has used multiple shields throughout his history, the most prevalent of which is a nigh-indestructible disc-shaped shield made from an experimental alloy of steel and the fictional vibranium.",
    "Captain America's uniform is made of a fire-retardant material, and he wears a lightweight, bulletproof duralumin scale armor beneath his uniform for added protection.",
    "Comic books were first popularized in the United States during the 1930s.",
    "In 1964, Richard Kyle coined the term graphic novel.",
    "Comics are published with a sequential number. The first issue of a long-running comic book series is commonly the rarest and most desirable to collectors.",
    "Many of the X-Men's stories delve into time travel either in the sense of the team traveling through time on a mission, villains travelling through time to alter history, or certain characters traveling from the past or future in order to join the present team.",
    "The conflict between mutants and normal humans is often compared to real-world conflicts experienced by minority groups in America such as African Americans, Jews, various religious or non-religious groups, Communists, the LGBT community, etc."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

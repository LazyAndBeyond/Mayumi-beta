module.exports = {
    "name": "eval",
    "dm": false,
    "args": true,
    "usage": "<code>",
    "aliases": ["evaluate"],
    "permLevel": "Bot Admin",
    "nsfw": false,
    "enabled": true,
    "cooldown": 5,
    "category": "Owner / Admins",
    "description": "evaluate scripts",
    execute(message, args, level) {
        const Bot = message.client
        const then = Date.now()

        const code = message.content.split(/\s+/g).slice(1).join(" "); //Define command

        try {

            let ev = require('util').inspect(eval(code));

            if (ev.length > 1950) {
                ev = ev.substr(0, 1950);
            }

            let token = message.client.config.token.replace(/\./g, "\.") //replace the token with <token>
            let re = new RegExp(token, 'g')
            ev = ev.replace(re, "<token>");

            message.channel.send("**Input:**```js\n" + code + "```**Eval:**```js\n" + ev + "```" + "**Time:**\n" + (Date.now() - then) + "ms.")

        } catch (err) {

            message.channel.send('```js\n' + err + "```")

        }
    }
}
var HOST_IP = '192.168.0.30';
var Bot = (function () {
    function Bot(config) {
        this.config = config;
    }
    Bot.prototype.showConfig = function () {
        return this.config;
    };
    return Bot;
}());
var config = {
    comfy: {
        bot: 'BOT_NAME_HERE',
        oauth: 'OAUTH_HERE',
        channel: 'CHANNEL_NAME_HERE'
    },
    osc: {
        server: {
            host: HOST_IP,
            port: 5000
        },
        clients: [
            {
                name: 'IPAD',
                host: HOST_IP,
                port: 5001
            }
        ]
    }
};
var bot = new Bot(config);
console.log(bot.config);
//# sourceMappingURL=test.js.map
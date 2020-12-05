const fetch = require('node-fetch');


async function getPubliIp(provider){
const myip = await fetch(provider);
    let ip = await myip.text();
    return ip.trim()
}
module.exports.templateTags = [{
    name: 'mypublicip',
    displayName: 'My Public Ip',
    description: 'Get public ip',
    args: [{
            displayName: 'Provider',
            description: 'Url that will return ip',
            type: 'string',
            defaultValue: 'https://checkip.amazonaws.com/'
        }
    ],
    async run(context, provider) {
        console.log(provider)
        return getPubliIp(provider);
    }
}];
var redis = require("redis");
var client = redis.createClient();
var client = redis.createClient({
    legacyMode: true
});

client.connect('error', err => {
    console.log('Redis err')
    console.log(err)
});

// single value write & read
client.set('my_key', "hello World!")
client.get('my_key', function(err, reply) {
    console.log(reply);
});

// multiple value write & read
client.mSet('header', 0,'left', 0,'article', 0,'right', 0,'footer', 0)
client.mGet(['header', 'left', 'article', 'right', 'footer'], function(err, value){
    console.log(value);
});

//client.quit()
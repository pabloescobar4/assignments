const app = require('./index');

const connect =  require('./configs/db');

app.listen(2551, async function(){
    await connect();
    console.log('Listening on port 2551')
});
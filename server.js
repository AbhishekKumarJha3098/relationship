const app = require('./index');

const connect = require('./configs/db');

app.listen(2003, async (req, res) => {
    await connect();
    console.log('listening to port 2003');
});
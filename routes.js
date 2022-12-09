const {homePage, userPage, createUser} = require('./pages');
module.exports = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(homePage);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split("=")[1];
            console.log(data);
            res.setHeader('Content-Type', 'text/html');
            res.write(createUser);
            return res.end();
        });
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(userPage);
        return res.end();
    }
};
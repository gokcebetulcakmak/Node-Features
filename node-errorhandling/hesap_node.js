const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 8080;

function sayiBol(bolen, bolunen) {
    if (bolen == 0) {
        throw new Error('Sifirla bölemezsin!');
    }
    return bolunen / bolen;
}
const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url, true);

    if (req.method === 'GET' && pathname === '/') {
        fs.readFile('hesap.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server tarafinda bir hata oluştu');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    } else if (req.method === 'POST' && pathname === '/bol') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { bolunen, bolen } = JSON.parse(body);
            try {
                const sonuc = sayiBol(parseFloat(bolen), parseFloat(bolunen));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ sonuc }));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: error.message }));

            }
        })

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Bulunamadi.');
    }

});
server.listen(port, hostname, () => {
    console.log(`Server http://${hostname}:${port}/ da çalışıyor`);

})
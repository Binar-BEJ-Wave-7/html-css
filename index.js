const http = require('http')
const fs = require('fs')

const requestListener = (req, res) => {
    if (req.url === '/css/style.css') {
        const data = fs.readFileSync('./public/style.css')
        res.end(data.toString());
        return
    } else if (req.url === '/' || req.url === '/index' || req.url === '') {
        const data = fs.readFileSync('./public/index.html')
        res.end(data.toString());
        return
    } else {
        res.writeHead(404)
        res.end("Route not found")
        return
    }
}

const server = http.createServer(requestListener)

const PORT = 8000
const host = 'localhost'

server.listen(PORT, host, () => {
    console.log(`server running on http://${host}:${PORT}`)
})
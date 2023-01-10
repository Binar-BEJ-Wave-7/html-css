const http = require('http')
const fs = require('fs')

const requestListener = (req, res) => {
    const data = fs.readFileSync('./public/index.html')

    res.end(data.toString());
}

const server = http.createServer(requestListener)

const PORT = 8000
const host = 'localhost'

server.listen(PORT, host, () => {
    console.log(`server running on http://${host}:${PORT}`)
})
// impotar librerias
const http = require('http');

//definir constantes
const host = 'localhost'
const port = 8080;

//crear servidor
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        //Cabecera
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        //preparar paquete para enviar al cliente
        response.write('<h1>Servidor creado con Node.js</h1>')
        //enviar paquete al cliente
        response.end()
    }
})

//iniciar servidor
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

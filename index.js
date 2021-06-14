const { response, request } = require("express")
const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(express.static('build'))

app.use(express.json())

//app.use(morgan('tiny'))
morgan.token('content', function (req, res) { return( JSON.stringify(req.body) ) } )
app.use(morgan( (tokens, req, res) => {
    if(req.method == "POST") {
        return[
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['content'](req, res)
        ].join(' ')
    } else {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
        ].join(' ')
    }
}))

let phonebook = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/', (request, response) => {
    response.send()
})

app.get('/info', (request, response) => {
    response.send(`
    <p>Phonebook has info for ${phonebook.length} people</p>
    <p>${Date()}</p>
    `)
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const entry = phonebook.find( entry => entry.id === id )

    if(entry) {
        response.json(entry)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter( entry => entry.id !== id)
    response.status(204).end()
})

const generateId = (max) => {
    return Math.floor( Math.random() * max )
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name) {
        return response.status(400).json({
            error: "name missing"
        })
    } else if(!body.number) {
        return response.status(400).json({
            error: "number missing"
        })
    }

    if(phonebook.find( entry => entry.name === body.name )) {
        return response.status(400).json({
            error: `entry already exists for ${body.name}`
        })
    }

    const entry = {
        name: body.name,
        number: body.number,
        id: generateId(9999999)
    }

    phonebook = phonebook.concat(entry)
    response.json(entry)
})

const unkownEndpoint = (request, response) => {
    response.status(404).send( { error : 'unknown endpoint'} )
  }
  app.use(unkownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const port = process.PORT || 8081

// ativar cors
app.use(cors())

// parser json
app.use(express.json())

// log de requests
app.use(morgan('tiny'))

// mapeia endpoints
app.use('/api', require('./apis').default)

// endpoint de fallback
app.use((_, res: express.Response) => res.status(501).send({
  error_description: 'Endpoint não implementado/encontrado'
}))

// inicia servidor
app.listen(port, () => console.log(`Servidor mock iniciado na porta ${port}`))

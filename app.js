import express from 'express'
import { sequelize } from './databases/dbconection.js'
import cors from "cors"
import routes from './routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conection_db() {
  try {
    await sequelize.authenticate();
    console.log('Sucessfull Conection');
    await sequelize.sync({alter: true}); 
  } catch (error) {
    console.error('Database conection error: ', error);
  }
}
conection_db()


app.get('/', (req, res) => {
  res.send('API')
})

app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})
import express from'express'
const app = express();
import bodyParser from 'body-parser'
const PORT = 3000 |process.env.PORT
import mainRouter from'../routes/index'
import {connect} from'../utils/connect'
import options from'../config/options'

app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

connect(options.URL, {useUnifiedTopology: true})

app.use('/', mainRouter)


app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}` )
})
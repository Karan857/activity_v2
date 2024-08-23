import express from 'express'
import 'dotenv/config'

const app = express()
app.use(express.json())

import auth from './routes/auth.js'
import user from './routes/user.js'
import activity from './routes/activity.js'
import admin from './routes/admin.js'

app.use('/auth', auth)
app.use('/user', user)
app.use('/activity', activity)
app.use('/admin', admin)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server on port 3000'))
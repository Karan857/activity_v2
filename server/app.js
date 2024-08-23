import express from 'express'
import 'dotenv/config'

const app = express()
app.use(express.json())

import auth from './routes/auth.js'
import user from './routes/user.js'
import activity from './routes/activity.js'
import admin from './routes/admin.js'
import manage from './routes/manage.js'
import news from './routes/news.js'
import notify from './routes/notify.js'
import section from './routes/section.js'
import status from './routes/status.js'
import student from './routes/student.js'
import teacher from './routes/teacher.js'
// import forgotPassword from './routes/forgotPassword.js'

app.use('/auth', auth)
app.use('/user', user)
app.use('/activity', activity)
app.use('/admin', admin)
app.use('/manage', manage)
app.use('/news', news)
app.use('/notify', notify)
app.use('/section', section)
app.use('/status', status)
app.use('/student', student)
app.use('/teacher', teacher)
// app.use('/forgotPassword', forgotPassword)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server on port 3000'))
const express = require('express')
const path = require('path')
const DB = require('./data')
const app = express()
app.use(express.static(path.join(__dirname, 'user')))

app.use(express.urlencoded({ extended: false }))


app.get('/api/getPage', (req, res) => {
  // console.log(req.query)
  DB.getPage(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function (data) {
    // console.log(data)
    if (data) {
      res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: data
      })
    }
  })
})

app.post('/api/add', (req, res) => {
  console.log(req.body)
  let newUser = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies
  }
  DB.addOne(newUser, function (data) {
    // console.log(data)
    if (data) {
      res.status(200).send({
        code: 200,
        msg: '数据添加成功',
        data: data
      })
    }
  })
})



app.listen(5000, function () {
  console.log('请打开http://localhost:5000')
})
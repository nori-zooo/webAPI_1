const express = require('express')
const app = express()
const port = 3000
let booklog = {}

app.use(express.json())

// POST
app.post('/booklog', (req, res) => {
    booklog = req.body

    // 入力チェック
    if (!(booklog.name && booklog.text)) {
        return res.json({
            "ok": false,
            "error": "invalid parameter"
        })    
    }

    // 正常処理
    res.json({
        "ok": true,
        "booklog": booklog
    })
})

// GET
app.get('/booklog', (req, res) => {
    // 正常処理
    res.json({
        "ok": true,
        "booklog": [
            booklog
        ]
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

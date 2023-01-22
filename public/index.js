const ex = require('express')
const app = ex()
app.use(ex.static('public'))
app.listen(3000, function(){
    console.log('On it...')
})
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
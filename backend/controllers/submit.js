app.use(express.json)

app.post('/submit' , (req, res) => {
    const data = req.body;
    res.json({

    
        message: 'data recieved',
        data: data
})
});
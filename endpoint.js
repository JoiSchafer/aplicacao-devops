data = {'integrantes':[

    {'nome':'Afonso Fagundes'},
    {'nome':'Joice Denise Schafer'},
    {'nome': 'Bianca Vopato'}
    
    ]}

    app.get('/integrantes', (req, res) => {
    
    res.json(data)
    
    })
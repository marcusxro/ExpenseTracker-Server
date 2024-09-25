const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const UserCollection = require('./collections/Accounts')

app.get('/', (req, res) => {
    res.send("connected to db")
})

app.post('/CreateAccount', async (req, res) => {
    const { Email, Password, Username, Uid } = req.body

    console.log(Email, Password, Username, Uid)
    if (!Email || !Password || !Username || !Uid) {
        return res.status(500).json({ error: 'Please fill up all inputs!' })
    }
    

    
    try {
        //tanginaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

      
        const AccountInformation = new UserCollection({
            Email,
            Password,
            Username,
            Uid
        })
        await AccountInformation.save()
        res.status(201).json({ message: 'Account Created!' })
    }
    catch (error) {
        console.error('Error Saving Account!', error)
        res.status(500).json({ error: 'Error Saving Account!' })
    }
})

app.listen('8080', () => {
    console.log('server is running')
})
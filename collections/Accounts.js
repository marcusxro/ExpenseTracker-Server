const mongoose = require('mongoose')
require('dotenv').config();
const atlasURI = import.meta.env.VITE_ATLAS_URI

mongoose.connect(atlasURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log("connected to account collection")
})
.catch((err) => {
    console.log(err)
})

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Uid: {
        type: String,
        required: true
    },
})

const UserCollection = mongoose.model('Accounts', userSchema)

module.exports = UserCollection
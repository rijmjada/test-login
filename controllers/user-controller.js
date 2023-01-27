
const { response } = require('express');

const Login = (req, res = response) => {
    res.sendFile('./public/index.html')
}



module.exports = {
    Login
};
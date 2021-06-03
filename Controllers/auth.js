const HttpStatus = require('http-status-codes')
const bcrypt = require('bcrypt')
const { createTkn } = require('../utilities');
const config = require('../config')

module.exports = router => {

  // router.method(path, function);
  // request la /auth/register
  router.post('/auth/register', async ({ req, res, body: payload }) => {
    try {
      const existingUser = await req.db.User.findOne({
        email: payload.email
      })
      //exista deja un utilizator cu adresa de email
      if (existingUser) {
        return res.json(HttpStatus.BAD_REQUEST, {
          success: false,
          message: `Already an user with the email ${payload.email}`
        })
      }
      //criptez parola si pun parola noua in payload
      const password = await bcrypt.hash(payload.password, 10)

      const user = (await req.db.User.create({
        ...payload,
        password,
      }))
  
      if (!user) {
        throw Error('Error on getting user')
      }
      //user creat
      return res.json(HttpStatus.OK, {
        success: true
      })
    } catch (error) {
      console.log(error);
      return res.json(HttpStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: 'Unable to create user'
      })
    }
  });
  //request la /auth/login
 router.post('/auth/login', async ({ req, res, body }) => {
    try {
      //luam email si parola
      const { email, password } = body
      let user = (await req.db.User.findOne({ email }))
      //nu exista user-ul cu email-ul respectiv
      if (!user) {
        return res.json(HttpStatus.NOT_FOUND, {
          success: false,
          message: `Unable to find user ${email}`
        })
      }
  
      user = user.toObject()
      //daca nu se potrivesc parolele -> parola gresita
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (!passwordMatch) {
        return res.json(HttpStatus.UNAUTHORIZED, {
          success: false,
          message: 'Wrong password'
        })
      }
      //sterg parola encriptata de user , creez token
      //salvez token-ul in local storage si ma folosesc de el
      delete user.password
      const token = createTkn({ ...user }, config.secret)
  
      return res.json(HttpStatus.OK, {
        success: true,
        user: user._id,
        token
      })
    } catch (error) {
      console.log(error)
      return res.json(HttpStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: 'Unable to login user'
      })
    }
  });
}

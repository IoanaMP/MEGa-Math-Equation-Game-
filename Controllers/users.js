const HttpStatus = require('http-status-codes')
const { mongo: { ObjectId } } = require('mongoose');

module.exports = router => {
  //afisarea paginii users.html 
  router.get('/user', async ({ req, res }) => {
    try {
      const user = req.decode();
  
      if (user.role !== 'admin') {
        return res.json(HttpStatus.UNAUTHORIZED, {
          success: false,
          message: 'You do not have permission'
        })
      }

      const users = await req.db.User.find({}, { password: 0, role: 0 })
      return res.json(HttpStatus.OK, {
        users,
        success: true
      })
    } catch (error) {
      console.log(error)
      return res.json(HttpStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: 'Unable to get users'
      })
    }
  });
  //stergerea unui utilizator , daca nu ai rol de admin -> nu ai permisiune
  router.delete('/user', async ({ req, res, body }) => {
    try {
      const user = req.decode();

      if (user.role !== 'admin') {
        return res.json(HttpStatus.UNAUTHORIZED, {
          success: false,
          message: 'You do not have permission'
        })
      }

      await req.db.User.deleteOne({ _id: ObjectId(body.id) });

      return res.json(HttpStatus.OK, {
        success: true
      })

    } catch (error) {
      console.log(error)
      return res.json(HttpStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: 'Unable to remove users'
      })
    }
  });
}

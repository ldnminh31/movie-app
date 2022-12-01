const AccountService = require("../services/account.service")
const ApiError = require("../api-error")

// User controller
exports.signIn = async (req, res, next) => {
  try {
    const accountService = new AccountService()
    const username = req.body.username
    const password = req.body.password

    const isExisted = await accountService.findByUsername(username)

    if (isExisted) {
      const isSignin = password === isExisted.password
      if (isSignin) {
        res.send({ message: 'Login successfully', user_id: isExisted.user_id, username, role: isExisted.role })
      }
      else {
        res.send({ message: 'Wrong password', role: null })
      }
    }
    else {
      res.send({ message: 'Username is invalid', role: null })
    }
  }
  catch (err) {
    console.log(err)
    res.send({ message: 'Hem dang nhap duoc!!!' })
  }
}
exports.signUp = async (req, res, next) => {
  try {
    const accountService = new AccountService();
    const username = req.body.username

    const isExisted = await accountService.findByUsername(username)

    if (!isExisted) {
      const account = await accountService.create(req.body)
      res.send({ message: "Create successfully", account})
    }
    else {
      res.send({ message: 'Ten dang nhap ton tai roi m' })
    }
  }
  catch (err) {
    console.log(err);
    res.send({ message: 'Hem dang ky duoc!!!' })
  }
}

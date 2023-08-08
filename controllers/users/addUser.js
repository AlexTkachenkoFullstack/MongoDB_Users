const {User}=require('../../models/user')
const addUser=async (req, res, next) => {
      const body = req.body;
      const newContact = await User.create(body);
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          newContact,
        },
      });
  }

  module.exports=addUser
const {User}=require('../../models/user')
const getAll=async (req, res, next) => {
      const allContacts = await User.find({}, '-createdAt -updatedAt');
      res.json({
        status: "success",
        code: 200,
        data: { allContacts },
      });
  }

  module.exports=getAll
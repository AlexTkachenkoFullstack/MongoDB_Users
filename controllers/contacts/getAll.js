const User=require('../../models')
const getAll=async (req, res, next) => {
      const allContacts = await User.find({});
      res.json({
        status: "success",
        code: 200,
        data: { allContacts },
      });
  }

  module.exports=getAll
const {User}=require('../../models/user')
const {HttpError} =require('../../helpers')
const getById=async (req, res, next) => {
      const { id } = req.params;
      // const oneContact = await User.findOne({_id: id});
      const oneContact = await User.findById(id)
      console.log(oneContact)
      if (!oneContact) {
        throw HttpError(404, "Not found contact");
      }
      return res.json({
        status: "success",
        code: 200,
        data: {
          oneContact,
        },
      });
  }

  module.exports=getById
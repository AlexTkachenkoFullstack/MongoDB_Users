const {User}=require('../../models/user')
const {HttpError} =require('../../helpers')
const deleteById=async (req, res, next) => {
      const { id } = req.params;
      const deletedContact = await User.findByIdAndRemove(id);
      if (!deletedContact) {
        throw HttpError(404, "Not found contact");
      }
      res.json({ message: "contact deleted" });
  }

  module.exports=deleteById
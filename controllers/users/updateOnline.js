const {User}=require('../../models/user')
const {HttpError} =require('../../helpers')
const updateOnline=async (req, res, next) => {
      const {id}=req.params;
      const {online}=req.body;
      const updatedContact=await User.findByIdAndUpdate(id, {online:online}, {new: true})
      if(!updatedContact){
        throw HttpError(404, "Not found contact");
      }
      res.json({
        status:'success',
        code:200,
        data:{
          updatedContact
        }
      })
    }

    module.exports=updateOnline
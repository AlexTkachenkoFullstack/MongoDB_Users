const {User}=require('../../models/user')
const {HttpError} =require('../../helpers')
const updateById=async (req, res, next) => {
      const {id}=req.params;
      const body=req.body;
      const updatedContact=await User.findByIdAndUpdate(id, body, {new: true})
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

    module.exports=updateById
const getAll=require('./users/getAll')
const getById=require('./users/getById')
const addUser=require('./users/addUser')
const deleteById=require('./users/deleteById')
const updateById=require('./users/updateById')
const updateOnline=require('./users/updateOnline')

module.exports={
    getAll,
    getById,
    addUser,
    deleteById,
    updateById,
    updateOnline
}
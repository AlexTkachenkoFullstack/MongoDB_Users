const {handleMongooseError} =require('../helpers')
const Joi = require('joi');

const {Schema, model} =require ('mongoose')
const onlineList=[true, false]
const emailRegexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp=/^\+?(\d{1,4})?\s?(\d{3,4})?\s?(\d{2,4})\s?(\d{2})\s?(\d{2})$/

const userSchema= new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    match: [emailRegexp, 'Enter correct email'],
    required:true,
  },
  phone:{
    type:String,
    match: [phoneRegexp, 'Enter number in format "+3809322..." or "3809322..."'],
    required:true
  },
  online:{
    type:Boolean,
    enum:onlineList,
    default: false,
  }
}, {versionKey: false, timestamps: true})

userSchema.post('save', handleMongooseError)

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().min(5).max(16). pattern(phoneRegexp).required(),
  online: Joi.boolean()
      })

const updateOnlineSchema=Joi.object({
  online:Joi.boolean().required()
})

const User=model('user', userSchema)

const schemas={
  addSchema,
  updateOnlineSchema
}

module.exports = {
  User,
  schemas
}


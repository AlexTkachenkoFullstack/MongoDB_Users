// Alex
// kKHXDDRWBhcU62PJ

const app = require('./app')
// импортируем библиотеку для работы с Mongodb
const mongoose = require('mongoose');
const {DB_HOST, PORT=3000}=process.env
// console.log(process.env)
// добавляем пароль и перед ? добавляем название базы данных, к которой хотим подключиться
// const DB_HOST='mongodb+srv://Alex:kKHXDDRWBhcU62PJ@cluster0.u3myxu4.mongodb.net/users_reader?retryWrites=true&w=majority'
// запускаем метод библиотеки
mongoose.connect(DB_HOST)
.then(()=>{
  console.log('Connected')
  app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 3000")
})
})
.catch(error=>{
  console.log(error.message)
  // чтоб отменить все запущенные процессы
  process.exit(1)
})

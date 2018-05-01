const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

// Returns newly updated object
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
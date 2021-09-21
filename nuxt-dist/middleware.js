const middleware = {}

middleware['auth-student'] = require('../middleware/auth-student.js')
middleware['auth-student'] = middleware['auth-student'].default || middleware['auth-student']

middleware['auth-teacher'] = require('../middleware/auth-teacher.js')
middleware['auth-teacher'] = middleware['auth-teacher'].default || middleware['auth-teacher']

export default middleware

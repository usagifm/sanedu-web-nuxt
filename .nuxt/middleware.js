const middleware = {}

middleware['auth-student'] = require('../middleware/auth-student.js')
middleware['auth-student'] = middleware['auth-student'].default || middleware['auth-student']

export default middleware

import moment from 'moment'

import 'moment-timezone'

moment.tz.setDefault('Asia/Jakarta')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}

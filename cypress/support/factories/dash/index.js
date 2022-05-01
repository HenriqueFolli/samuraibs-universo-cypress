
import _ from 'underscore'

exports.customer = {
    name: 'Nikki Sixx',
    email: 'sixx@motleycrue.com',
    password: 'pwd123',
    is_provider: false
}

exports.provider = {
    name: 'Ramon Valdes',
    email: 'ramon@televisa.com',
    password: 'pwd123',
    is_provider: true
}

exports.appointment = {
    hour: _.sample(['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'])
}



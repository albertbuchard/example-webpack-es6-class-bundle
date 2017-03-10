// const One = require('./src/class1')
// const Two = require('./src/class2')
// const Three = require('./src/class3')

import { One } from './src/class1'
import { Two } from './src/class2'
import Three from './src/class3'

/*
 * The moral of the story is:
 *  + either export default class and import class from
 *  + or name the export { class } and import {class } from
 *
 * Everything beautiful is hard to get... ;)
 */


export { One, Two, Three }

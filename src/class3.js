// class One {
//   constructor() {
//     this.isGreat = true
//   }
//
//   whatIsGreat() {
//     return (this)
//   }
// }
//
// module.exports.One = One
const Three = class Three {
  constructor() {
    this.isHorrible = true
  }

  whatIsHorrible() {
    return (this)
  }
}

export { Three }

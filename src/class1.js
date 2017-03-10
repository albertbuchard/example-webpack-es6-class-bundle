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
const One = class One {
  constructor() {
    this.isHorrible = true
  }

  whatIsHorrible() {
    return (this)
  }
}

export { One }

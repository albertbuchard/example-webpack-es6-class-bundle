// class Two {
//   constructor() {
//     this.isHorrible = true
//   }
//
//   whatIsHorrible() {
//     return (this)
//   }
// }
//
// module.exports.Two = Two
const Two = class Two {
  iMSoFat() {
    this.fatness = 88
    return (this.fatness)
  }
}

export { Two }

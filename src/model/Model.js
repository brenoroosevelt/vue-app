export default class Model {
  toBackEnd() {
    let data = {}
    for (let key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        data[key] = this[key]
      }
    }

    return data
  }

  static fromBackEnd(data) {
    throw 'Error: method `fromBackEnd` should be implemented in ' + this.constructor.name
  }
}

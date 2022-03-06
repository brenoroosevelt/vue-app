export default class Model {
  toBackEnd() {
    let data = {}
    let keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
      data[keys[i]] = obj[keys[i]];
    }

    return data
  }

  static fromBackEnd(data) {
    throw 'Error: method `fromBackEnd` should be implemented in ' + this.constructor.name
  }
}

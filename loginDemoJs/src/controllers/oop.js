class Lib {
  constructor(init) {
    this._init = init;
  }
  increase() {
    this._init += 1;
  }
  decrease() {
    this._init -= 1;
  }
  getInit() {
    return this._init;
  }
}
const lib = new Lib(1);
module.exports = {
  Lib,
  lib,
};

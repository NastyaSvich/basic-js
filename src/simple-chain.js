const chainMaker = {
values: [],
  getLength() {
      return this.values.length;
  },
  addLink(value) {
    if (value == null)
    {
      this.values.push('null');
      return this;
    }
      this.values.push(value);
      return this;
  },
  removeLink(position) {
    if (position>0 && position < this.values.length && typeof (position) == 'number')
    {
    this.values.splice(position - 1, 1);
    return this;
    }
    this.values = [];
    throw new Error();
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    var itog = '( ' + this.values.join(' )~~( ') + ' )';
    this.values = [];
    return itog;
  }
};

module.exports = chainMaker;

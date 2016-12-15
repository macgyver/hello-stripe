import Ember from 'ember';

export function fmtTel(input) {
  let tel = (''+input).replace(/[^\d]/g, '');

  if (tel.length === 0) {
    return '';
  }

  // http://electronics.howstuffworks.com/question659.htm
  let area = tel.substring(0, 3);
  let prefix = tel.substring(3, 6);
  let line = tel.substring(6, 10);

  if (tel.length < 3) {
    return `(${area}`;
  }

  if (tel.length < 4) {
    return `(${area}) `;
  }

  if (tel.length < 6) {
    return `(${area}) ${prefix}`;
  }

  if (tel.length < 7) {
    return `(${area}) ${prefix}-`;
  }

  return `(${area}) ${prefix}-${line}`;
}

export default Ember.Component.extend({
  input: '',

  formattedNumber: Ember.computed('input', function() {
    return fmtTel(this.get('input'));
  }),

  keyDown(e) {
    // detect invalid keys and prevent
    let k = e.keyCode;
    let isDigit = (k >= 48 && k <= 57);
    // let isHyphen = (e.keycode === 189);
    let isParen = (k === 57 || k === 48);
    // let isSpace = (k === 32);
    let isCursor = (k >= 37 && k <= 40);
    let isDelete = (k === 8);
    let isTab = (k === 9);

    if (!isDigit && !isParen && !isCursor && !isDelete && !isTab) {
      return false;
    }
  },

  keyUp(e) {
    this.set('input', e.target.value);
  }
});

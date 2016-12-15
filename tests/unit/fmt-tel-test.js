import { fmtTel } from 'stripe-hello/components/telephone-input';
import { module, test } from 'qunit';

module('Unit | Helper | fmtTel');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(fmtTel('1', '(1'));
  assert.ok(fmtTel('123', '(123) '));
  assert.ok(fmtTel('1234', '(123) 4'));
  assert.ok(fmtTel('123456', '(123) 456-'));
  assert.ok(fmtTel('1234567', '(123) 456-7'));
  assert.ok(fmtTel('1234567890', '(123) 456-7890'));
  assert.ok(fmtTel('1234567890123', '(123) 456-7890'));


  assert.ok(fmtTel(1234567890, '(123) 456-7890'), 'with number input');

  assert.ok(fmtTel('123abdd45--())3498🚀67890ø', '(123) 456-7890'), 'with garbage input');

});

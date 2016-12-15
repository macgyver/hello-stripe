import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('telephone-input', 'Integration | Component | telephone input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{telephone-input}}`);
  assert.equal(this.$('.the-input').attr('type'), 'tel', 'with the correct semantics');
});

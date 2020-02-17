import { test } from 'qunit';
import moduleForAcceptance from 'ember-boilerplate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list plants');

test('visiting /list-plants', function(assert) {
  visit('/list-plants');

  andThen(function() {
    assert.equal(currentURL(), '/list-plants');
  });
});

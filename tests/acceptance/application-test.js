import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('enabled flags are shown', async function(assert) {
    await visit('/');
    assert.dom('.enabled_foo').exists();
    assert.dom('.enabled_foo').hasText('ENABLED_FOO!! \\o/')
  });

  // test('enabled flags are shown for unless helper', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.unless_disabled_foo').length, 1);
  //     assert.equal(find('.unless_disabled_foo').text(), 'DISABLED_FOO!! \\o/');
  //   });
  // });

  // test('disabled flags are not shown', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.enabled_bar').length, 0);
  //   });
  // });

  // test('disabled else blocks are shown', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.disabled_bar').length, 1);
  //     assert.equal(find('.disabled_bar').text(), 'DISABLED_BAR!! \\o/');
  //   });
  // });

  // test('enabled else blocks are not shown', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.disabled_foo').length, 0);
  //   });
  // });

  // test('new style flag enabled blocks are shown', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.new_flag_enabled_foo').length, 1);
  //     assert.equal(find('.new_flag_disabled_foo').length, 0);
  //   });
  // });

  // test('new style unless flag enabled blocks are shown', function(assert) {
  //   visit('/');

  //   andThen(function() {
  //     assert.equal(find('.new_flag_unless_enabled_bar').length, 1);
  //     assert.equal(find('.new_flag_unless_disabled_bar').length, 0);
  //   });
  // });

});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | article/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Article::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Article::Image>
        template block text
      </Article::Image>
    `);

    assert.dom().hasText('template block text');
  });
});

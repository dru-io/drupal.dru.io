<?php
/**
 * @file
 * Theme and preprocess functions for nodes
 */

use Drupal\Component\Utility\Html;

/**
 * Implements hook_preprocess_node().
 */
function classier_preprocess_node__article(&$variables) {
  // Get a convenient $node variable;
  $node = $variables['node'];

  // Get the tags and their values.
  $field_tags = $node->field_tags;
  foreach ($field_tags->referencedEntities() as $tag) {
    $variables['attributes']['class'][] = Html::getClass('term-' . $tag->name->value);
  }
}

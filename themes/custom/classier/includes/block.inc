<?php
/**
 * @file
 * Theme and preprocess functions for blocks.
 */

/**
 * Implements hook_preprocess_block().
 */
function classier_preprocess_block(&$variables) {
  $provider = $variables['configuration']['provider'];
  if ($provider === 'block_content') {
    $block_content = $variables['content']['#block_content'];
    $block_id = $block_content->id();
    // This is done for optimization purposes. We don't need this JS which is
    // written only for specific blocks.
    $animated_block_ids = [7, 1, 13, 8, 9, 10];
    if (in_array($block_id, $animated_block_ids)) {
      $variables['#attached']['library'][] = 'classier/animations';
    }
  }

  if ($provider == 'system') {
    // Main menu navigation block.
    if ($variables['plugin_id'] == 'system_menu_block:main') {
      $variables['#attached']['library'][] = 'classier/menu';
    }
  }
}

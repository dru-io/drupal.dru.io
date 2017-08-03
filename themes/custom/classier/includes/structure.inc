<?php

/**
 * @file
 * Theme and preprocess functions for breadcrumbs, messages, tabs..etc
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function classier_preprocess_html(&$variables) {
  $path = \Drupal::service('path.current')->getPath();
  $path_args = explode('/', $path);
  if (isset($path_args[1]) && isset($path_args[2]) && ($path_args[1] == 'node') && (is_numeric($path_args[2]))) {
    $variables['attributes']['class'][] = 'page-node-' . $path_args[2];
  }
}

/**
 * Implements hook_preprocess_HOOK().
 */
function classier_preprocess_status_messages(&$variables) {
  $variables['#attached']['library'][] = 'classier/message';
}

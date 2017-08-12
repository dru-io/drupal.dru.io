<?php

/**
 * @file
 * Hook description defined byt this module.
 */

/**
 * Alter configuration information during export single configuration.
 *
 * This is called during export configurations for opensource database. Used to
 * clean sensetive data stored in configurations.
 *
 * @param array $data
 *   Configuration information.
 * @param string $name
 *   Configuration name.
 */
function hook_druio_opensource_config_alter(&$data, $name) {
  switch ($name) {
    case 'webform.webform.ask_a_question':
      $data['handlers']['email']['settings']['to_mail'] = 'example@example.com';
      break;
  }
}

/**
 * Alter configuration information during export configuration collection.
 *
 * This is called during export configurations for opensource database. Used to
 * clean sensetive data stored in configurations.
 *
 * @param array $data
 *   Configuration information.
 * @param string $name
 *   Configuration name.
 */
function hook_druio_opensource_config_collection_alter(&$data, $name) {
  switch ($name) {
    case 'webform.webform.ask_a_question':
      $data['handlers']['email']['settings']['to_mail'] = 'example@example.com';
      break;
  }
}

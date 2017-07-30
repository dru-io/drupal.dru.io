<?php

namespace Drupal\promo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "promo_ask_block_conditional",
 *   admin_label = @Translation("Ask a question"),
 * )
 */
class AskBlockConditional extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $request = \Drupal::request();
    $is_with_form = $request->query->get('with-form');
    if ($is_with_form) {
      $block_data = \Drupal\block_content\Entity\BlockContent::load('3');
      $block = \Drupal::entityTypeManager()->getViewBuilder('block_content')->view($block_data);
    }
    else {
      $block = [];
    }
    return $block;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    return [
      'url.query_args:with-form',
    ];
  }

}

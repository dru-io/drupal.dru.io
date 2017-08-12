<?php

namespace Drupal\druio_opensource\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * {@inheritdoc}
 */
class Settings extends ConfigFormBase {

  /**
   * Gets the configuration names that will be editable.
   *
   * @return array
   *   An array of configuration object names that are editable if called in
   *   conjunction with the trait's config() method.
   */
  protected function getEditableConfigNames() {
    return [];
  }

  /**
   * Returns a unique string identifying the form.
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'druio_opensource_db_settings';
  }

  /**
   * Build settings form.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['database'] = [
      '#title' => $this->t('Database'),
      '#type' => 'textfield',
      '#required' => TRUE,
      '#default_value' => \Drupal::state()
        ->get('druio_opensource_db.settings.database', ''),
    ];

    $form['username'] = [
      '#title' => $this->t('Username'),
      '#type' => 'textfield',
      '#required' => TRUE,
      '#default_value' => \Drupal::state()
        ->get('druio_opensource_db.settings.username', ''),
    ];

    $form['password'] = [
      '#title' => $this->t('Password'),
      '#type' => 'password',
      '#default_value' => \Drupal::state()
        ->get('druio_opensource_db.settings.password', ''),
    ];

    $form['host'] = [
      '#title' => $this->t('Host'),
      '#type' => 'textfield',
      '#required' => TRUE,
      '#default_value' => \Drupal::state()
        ->get('druio_opensource_db.settings.host', 'localhost'),
    ];

    $form['port'] = [
      '#title' => $this->t('Port'),
      '#type' => 'textfield',
      '#required' => TRUE,
      '#default_value' => \Drupal::state()
        ->get('druio_opensource_db.settings.port', '3306'),
    ];

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['actions']['save'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save settings'),
      '#submit' => ['::save'],
      '#button_type' => 'primary',
      '#dropbutton' => 'save',
    ];

    $form['actions']['save_and_create'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save and create dump'),
      '#submit' => ['::save', '::createDump'],
      '#dropbutton' => 'save',
    ];

    return $form;
  }

  /**
   * Save settings.
   */
  public function save(array $form, FormStateInterface $form_state) {
    $state = \Drupal::state();
    $state->set('druio_opensource_db.settings.database', $form_state->getValue('database'));
    $state->set('druio_opensource_db.settings.username', $form_state->getValue('username'));
    if ($form_state->getValue('password')) {
      $state->set('druio_opensource_db.settings.password', $form_state->getValue('password'));
    }
    $state->set('druio_opensource_db.settings.host', $form_state->getValue('host'));
    $state->set('druio_opensource_db.settings.port', $form_state->getValue('port'));
  }

  /**
   * Create cleaned database dump.
   */
  public function createDump(array $form, FormStateInterface $form_state) {
    druio_opensource_create();
  }

}

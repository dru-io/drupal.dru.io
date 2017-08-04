<?php

namespace Drupal\druio_opensource_db\Service;

use Drupal\Core\Database\Database;

/**
 * {@inheritdoc}
 */
class Connector {

  /**
   * Information about second database connection.
   */
  private $connectionInfo;

  /**
   * Store connection object.
   * @var $database \Drupal\Core\Database\Connection;
   */
  private $database;

  /**
   * Connector constructor.
   */
  public function __construct() {
    $state = \Drupal::state();
    $this->connectionInfo = [
      'database' => $state->get('druio_opensource_db.settings.database', ''),
      'username' => $state->get('druio_opensource_db.settings.username', ''),
      'password' => $state->get('druio_opensource_db.settings.password', ''),
      'host' => $state->get('druio_opensource_db.settings.host', 'localhost'),
      'port' => $state->get('druio_opensource_db.settings.port', '3306'),
      'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
      'driver' => 'mysql',
    ];
    $this::addConnectionInfo();
  }

  /**
   * Add information to Drupal about second database.
   */
  public function addConnectionInfo() {
    Database::addConnectionInfo('druio_opensource_db', 'default', $this->connectionInfo);
  }

  /**
   * Set second database as current active. Return connection for it for
   * further query execution.
   */
  public function setSecondDatabaseActive() {
    Database::setActiveConnection('druio_opensource_db');
    $this->database = Database::getConnection();
    return $this->database;
  }

  /**
   * Set main database as active.
   */
  public function setMainDatabaseActive() {
    Database::setActiveConnection();
    $this->database = Database::getConnection();
    return $this->database;
  }

  /**
   * Return connection object for currently available database.
   */
  public function getConnection() {
    return $this->database;
  }

}

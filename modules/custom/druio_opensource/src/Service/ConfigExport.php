<?php

namespace Drupal\druio_opensource\Service;

use Drupal\Core\Config\StorageInterface;

/**
 * Export configurations from second database.
 */
class ConfigExport {

  /**
   * @var \Drupal\Core\Config\StorageInterface
   */
  protected $configStorage;

  /**
   * @var \Drupal\Core\Config\StorageInterface
   */
  protected $configStorageSync;

  /**
   * {@inheritdoc}
   */
  public function __construct(StorageInterface $configStorage, StorageInterface $configStorageSync) {
    $this->configStorage = $configStorage;
    $this->configStorageSync = $configStorageSync;
  }

  /**
   * Starts all processes to export configurations.
   */
  public function export() {
    // Prepare storage.
    $source_storage = $this->getConfigStorage();
    $destination_storage = $this->getConfigStorageSync();

    // Export configurations.
    foreach ($source_storage->listAll() as $name) {
      $data = $source_storage->read($name);
      \Drupal::moduleHandler()->alter('druio_opensource_config', $data, $name);
      $destination_storage->write($name, $data);
    }

    // Export configuration collections.
    foreach ($this->getConfigStorage()->getAllCollectionNames() as $collection) {
      $source_storage = $source_storage->createCollection($collection);
      $destination_storage = $destination_storage->createCollection($collection);
      foreach ($source_storage->listAll() as $name) {
        $data = $source_storage->read($name);
        \Drupal::moduleHandler()->alter('druio_opensource_config_collection', $data, $name);
        $destination_storage->write($name, $data);
      }
    }
  }

  /**
   * @return \Drupal\Core\Config\StorageInterface
   */
  public function getConfigStorage() {
    return $this->configStorage;
  }

  /**
   * @return \Drupal\druio_opensource\Service\Connector
   */
  public function getConnector() {
    return $this->connector;
  }

  /**
   * @return \Drupal\Core\Config\StorageInterface
   */
  public function getConfigStorageSync() {
    return $this->configStorageSync;
  }

}

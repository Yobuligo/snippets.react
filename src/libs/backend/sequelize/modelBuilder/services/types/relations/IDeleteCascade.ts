/**
 * Represents a configuration to define if related target entities should be automatically deleted when the source entity is deleted.
 */
export interface IDeleteCascade {
  /**
   * Determines whether the related target entity should be automatically deleted when the source entity is deleted.
   */
  deleteCascade?: boolean;
}

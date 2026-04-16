import { DataTypes, ModelAttributeColumnOptions } from "sequelize";
import { EncryptService } from "../../encryption/EncryptService";

/**
 * Creates a column {@link column} that will be encrypted by the given {@link encryptionKey} while saving and decrypted while loading.
 */
export const createEncryptedColumn = <T>(
  column: keyof T,
  allowNull: boolean,
  length: number,
  encryptionKey: string,
): ModelAttributeColumnOptions<any> => {
  return {
    allowNull,
    type: DataTypes.STRING(length),
    get() {
      const encryptedPropValue: string | undefined = this.getDataValue(column);
      if (encryptedPropValue) {
        return EncryptService.decrypt(encryptedPropValue, encryptionKey);
      }
    },
    set(propValue: string) {
      const encryptedPropValue = EncryptService.encrypt(
        propValue,
        encryptionKey,
      );
      this.setDataValue(column, encryptedPropValue);
    },
  };
};

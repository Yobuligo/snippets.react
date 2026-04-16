import crypto, { randomBytes } from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // 96 bit für GCM

export class EncryptService {
  static createRandomBase64(length: number = 32): string {
    return randomBytes(length).toString("base64");
  }

  static encrypt(plainText: string, base64Key: string): string {
    const keyBuf = Buffer.from(base64Key, "base64");
    const keyParam = keyBuf;
    const ivBuf = crypto.randomBytes(IV_LENGTH);
    const ivParam = ivBuf;
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      keyParam as any,
      ivParam as any
    );
    const part1 = cipher.update(plainText, "utf8") as Buffer;
    const part2 = cipher.final() as Buffer;
    const encrypted = Buffer.concat([part1, part2]);
    const authTag = cipher.getAuthTag();

    const payload = {
      iv: ivBuf.toString("base64"),
      authTag: authTag.toString("base64"),
      data: encrypted.toString("base64"),
    };

    return Buffer.from(JSON.stringify(payload)).toString("base64");
  }

  static decrypt(encryptedBase64: string, base64Key: string): string {
    const json = Buffer.from(encryptedBase64, "base64").toString("utf8");
    const { iv, authTag, data } = JSON.parse(json) as {
      iv: string;
      authTag: string;
      data: string;
    };
    const keyBuf = Buffer.from(base64Key, "base64");
    const keyParam = keyBuf;
    const ivBuf = Buffer.from(iv, "base64");
    const ivParam = ivBuf;
    const authTagBuf = Buffer.from(authTag, "base64");
    const authTagParam = authTagBuf;
    const encryptedData = Buffer.from(data, "base64");

    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      keyParam as any,
      ivParam as any
    );
    decipher.setAuthTag(authTagParam as any);

    const decPart1 = decipher.update(encryptedData) as Buffer;
    const decPart2 = decipher.final() as Buffer;
    const decrypted = Buffer.concat([decPart1, decPart2]);

    return decrypted.toString("utf8");
  }
}

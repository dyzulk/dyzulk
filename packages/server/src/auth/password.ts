import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

/**
 * Hashes a plaintext password using scrypt.
 * @param password Plaintext password
 * @returns Combined string formatted as `salt.hash` in hex
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${salt}.${derivedKey.toString("hex")}`;
}

/**
 * Verifies a plaintext password against a stored scrypt hash.
 * @param password Plaintext password
 * @param hash Stored hash in `salt.hash` format
 * @returns True if password is valid, false otherwise
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const parts = hash.split(".");
  const salt = parts[0];
  const key = parts[1];
  if (!salt || !key) return false;
  
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  const hashBuffer = Buffer.from(key, "hex");
  
  return timingSafeEqual(hashBuffer, derivedKey);
}

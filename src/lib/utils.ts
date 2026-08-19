import { type ClassValue, clsx } from "clsx";

/** Merge conditional class names. (No Tailwind-merge dependency needed —
 *  we don't generate conflicting utility combinations dynamically here.) */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

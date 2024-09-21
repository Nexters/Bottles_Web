import { Profile, ProfileSelect } from '@/models/profile';
import { alcoholTextMap } from '@/models/profile/alcohol';
import { smokingTextMap } from '@/models/profile/smoking';

/**
 * @description checks if both arrays have the same items, while ignoring the order
 * @returns boolean
 */
export function isSameArray(array1: string[], array2: string[]) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every(keyword => array2.includes(keyword));
}

/**
 * @param converts ProfileSelect to Profile interface
 * @returns Profile
 */
export function convertProfileSelectToProfile(profile: ProfileSelect): Profile {
  return { ...profile, smoking: smokingTextMap[profile.smoking], alcohol: alcoholTextMap[profile.alcohol] };
}

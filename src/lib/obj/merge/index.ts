/**
 * Merges two objects into one.
 * @param {Object} target the target object to merge into
 * @param {Object} source the source object to merge from
 * @returns the same reference of the target object
 */
export const std = <T extends object, U extends object>(target: T, source: U): T & U => Object.assign(target, source);


/**
 * Merges two objects into one, by specifying a unique key
 * 
 * @param {Object} target the target object to merge into
 * @param {Object} source the source object to merge from
 * @param {string} key the key to use
 * @returns the same reference of the target object
 */
export const byUniqueKey = <T extends object, U extends object>(target: T, source: U, key: string): T & U => Object.assign(target, source, {[key]: source})
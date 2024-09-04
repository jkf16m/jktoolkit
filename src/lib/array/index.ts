import jk, { Box } from '@src/index';

/**
 * @param {(T) => boolean} primitiveFn Primitive function, when true, the item will be deleted
 * @returns the same reference of the passed array
 */
export const filter = <T>(arr: T[],primitiveFn: (t: T, index: number) => boolean)=> {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (primitiveFn(arr[i], i)) {
            arr[i] = arr[arr.length - 1];
            arr.length--;
        }
    }
    return arr;
}

/**
 * @param {(T) => U} transformPc Function that will transform each item of the array
 * @returns the same reference of the passed array
 */
export const map = <T>(arr: Box<T>[], transformPc: (t: Box<T>, index:number) => void) => {
    for (let i = 0; i < arr.length; i++) {
        transformPc(arr[i], i);
    }
}


/**
 * @param {T[]} arr The array to box
 * @returns An array of boxed values
 */
export const box = <T>(arr: T[]): Box<T>[] => {
    return arr.map(jk.box);
}


/**
 * @param {T[]} arr The array to unbox
 * @returns An array of unboxed values
 */
export const unbox = <T>(arr: Box<T>[]): T[] => {
    return arr.map(jk.unbox);
}

/**
 * @param {T[]} arr1 The first array to merge
 * @param {T[]} arr2 The second array to merge
 */
export const merge = <T>(arr1: T[], arr2: T[]) => {
    arr1.push(...arr2);
    return arr1;
}
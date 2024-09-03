import wh, { Box } from '@src/index';

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
    return arr.map(wh.box);
}


/**
 * @param {T[]} arr The array to unbox
 * @returns An array of unboxed values
 */
export const unbox = <T>(arr: Box<T>[]): T[] => {
    return arr.map(wh.unbox);
}
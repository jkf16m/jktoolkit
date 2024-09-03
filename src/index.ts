import * as obj from './lib/obj';
import * as array from './lib/array';

export type Box<T> = {
    v: T,
}

const box = <T>(v: T): Box<T> => ({ v });
const unbox = <T>(obj: Box<T>): T => obj.v


export default {
    obj,
    array,
    box,
    unbox,
}
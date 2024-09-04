import * as obj from './lib/obj';
import * as array from './lib/array';
import * as result from './lib/result';
import * as pipe from './lib/pipe';

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
    result,
    pipe,
}
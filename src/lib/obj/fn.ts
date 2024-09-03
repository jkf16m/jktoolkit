export const deepClone = <T>(obj: T): T =>{
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const clone: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}
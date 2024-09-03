export type ResultSuccess<T> = {
    ok: true,
    fail: false,
    value: T,
}
export type ResultError<T> = {
    ok: false,
    fail: true,
    error: T
}

export type Result<T, E> = ResultSuccess<T> | ResultError<E>

export const success = <T>(value: T): Result<T, never> =>({
    ok: true,
    fail: false,
    value,
})

export const error = <T>(error: T): Result<never, T> =>({
    ok: false,
    fail: true,
    error
})
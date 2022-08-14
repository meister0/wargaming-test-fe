declare type ValueOf<T> = T extends {} ? T[keyof T] : unknown

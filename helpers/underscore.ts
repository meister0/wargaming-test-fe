export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

type ObjectEntries = <A extends {}>(a: A) => Entries<A>

export const entries: ObjectEntries = Object.entries

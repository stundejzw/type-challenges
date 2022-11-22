// type MyOmit<T, K> = any

type MyOmit<T, K> = {
  // 获取 T 中不在 K 中的 key 名
  // T[P] 对应 key 的类型
  [P in keyof T as (P extends K ? never : P)]: T[P]
}
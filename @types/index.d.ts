declare type Float = number
declare type bool = boolean
declare type Integer = number

interface HMR {
  accept: (cb?: () => void) => void
  dispose: (cb?: () => void) => void
}

declare namespace module {
  const hot: HMR
}

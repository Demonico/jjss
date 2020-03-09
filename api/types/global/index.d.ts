//! from https://stackoverflow.com/questions/41717006/node-js-global-variable-and-typescript
declare namespace NodeJS {
  interface Global {
    __basedir: string
  }
}

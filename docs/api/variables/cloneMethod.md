# Variable: cloneMethod

> > `const` **cloneMethod**: unique `symbol`

Defined in: [packages/fast-check/src/check/symbols.ts:14](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/symbols.ts#L14)

Generated instances having a method [cloneMethod]
will be automatically cloned whenever necessary

This is pretty useful for statefull generated values.
For instance, whenever you use a Stream you directly impact it.
Implementing [cloneMethod] on the generated Stream would force
the framework to clone it whenever it has to re-use it
(mainly required for chrinking process)

## Remarks

Since 1.8.0

# Type Alias: RecordValue\<T, K\>

> > **RecordValue**\<`T`, `K`\> = `Prettify`\<`Partial`\<`T`\> & `Pick`\<`T`, `K` & keyof `T`\>\>

Defined in: [packages/fast-check/src/arbitrary/record.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/record.ts#L39)

Infer the type of the Arbitrary produced by record
given the type of the source arbitrary and constraints to be applied

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` |

## Remarks

Since 2.2.0

# Type Alias: UniqueArrayConstraints\<T, U\>

> > **UniqueArrayConstraints**\<`T`, `U`\> = [`UniqueArrayConstraintsRecommended`](UniqueArrayConstraintsRecommended.md)\<`T`, `U`\> \| [`UniqueArrayConstraintsCustomCompare`](UniqueArrayConstraintsCustomCompare.md)\<`T`\> \| [`UniqueArrayConstraintsCustomCompareSelect`](UniqueArrayConstraintsCustomCompareSelect.md)\<`T`, `U`\>

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:165](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L165)

Constraints implying known and optimized comparison function
to be applied on [uniqueArray](../functions/uniqueArray.md)

The defaults relies on the defaults specified by [UniqueArrayConstraintsRecommended](UniqueArrayConstraintsRecommended.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Remarks

Since 2.23.0

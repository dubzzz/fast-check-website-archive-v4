# Type Alias: CloneValue\<T, N, Rest\>

> > **CloneValue**\<`T`, `N`, `Rest`\> = \[`number`\] *extends* \[`N`\] ? `T`[] : `Rest`\[`"length"`\] *extends* `N` ? `Rest` : `CloneValue`\<`T`, `N`, \[`T`, `...Rest`\]\>

Defined in: [packages/fast-check/src/arbitrary/clone.ts:9](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/clone.ts#L9)

Type of the value produced by [clone](../functions/clone.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `N` *extends* `number` | - |
| `Rest` *extends* `T`[] | \[\] |

## Remarks

Since 2.5.0

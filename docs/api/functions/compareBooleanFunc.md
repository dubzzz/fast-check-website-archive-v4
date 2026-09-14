# Function: compareBooleanFunc()

> > **compareBooleanFunc**\<`T`\>(): [`Arbitrary`](../classes/Arbitrary.md)\<(`a`, `b`) => `boolean`\>

Defined in: [packages/fast-check/src/arbitrary/compareBooleanFunc.ts:16](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/compareBooleanFunc.ts#L16)

For comparison boolean functions

A comparison boolean function returns:
- `true` whenever `a < b`
- `false` otherwise (ie. `a = b` or `a > b`)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<(`a`, `b`) => `boolean`\>

## Remarks

Since 1.6.0

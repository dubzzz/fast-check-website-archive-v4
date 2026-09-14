# Function: compareFunc()

> > **compareFunc**\<`T`\>(): [`Arbitrary`](../classes/Arbitrary.md)\<(`a`, `b`) => `number`\>

Defined in: [packages/fast-check/src/arbitrary/compareFunc.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/compareFunc.ts#L21)

For comparison functions

A comparison function returns:
- negative value whenever `a < b`
- positive value whenever `a > b`
- zero whenever `a` and `b` are equivalent

Comparison functions are transitive: `a < b and b < c => a < c`

They also satisfy: `a < b <=> b > a` and `a = b <=> b = a`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<(`a`, `b`) => `number`\>

## Remarks

Since 1.6.0

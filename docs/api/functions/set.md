# Function: set()

> > **set**\<`T`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Set`\<`T`\>\>

Defined in: [packages/fast-check/src/arbitrary/set.ts:58](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L58)

For sets of values coming from `arb`

All the values in the set are unique. Comparison of values relies on `SameValueZero`
which is the same comparison algorithm used by `Set`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the set |
| `constraints` | [`SetConstraints`](../type-aliases/SetConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Set`\<`T`\>\>

## Remarks

Since 4.4.0

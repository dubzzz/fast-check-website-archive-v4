# Function: sparseArray()

> > **sparseArray**\<`T`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:95](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L95)

For sparse arrays of values coming from `arb`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the sparse array |
| `constraints` | [`SparseArrayConstraints`](../interfaces/SparseArrayConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

## Remarks

Since 2.13.0

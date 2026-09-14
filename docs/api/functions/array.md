# Function: array()

> > **array**\<`T`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/array.ts:78](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L78)

For arrays of values coming from `arb`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the array |
| `constraints` | [`ArrayConstraints`](../interfaces/ArrayConstraints.md) | Constraints to apply when building instances (since 2.4.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

## Remarks

Since 0.0.1

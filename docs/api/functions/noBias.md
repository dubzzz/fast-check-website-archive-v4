# Function: noBias()

> > **noBias**\<`T`\>(`arb`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/noBias.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/noBias.ts#L35)

Build an arbitrary without any bias.

The produced instance wraps the source one and ensures the bias factor will always be passed to undefined meaning bias will be deactivated.
All the rest stays unchanged.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | The original arbitrary used for generating values. This arbitrary remains unchanged. |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

## Remarks

Since 3.20.0

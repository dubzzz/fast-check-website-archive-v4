# Function: noShrink()

> > **noShrink**\<`T`\>(`arb`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/noShrink.ts:37](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/noShrink.ts#L37)

Build an arbitrary without shrinking capabilities.

NOTE:
In most cases, users should avoid disabling shrinking capabilities.
If the concern is the shrinking process taking too long or being unnecessary in CI environments,
consider using alternatives like `endOnFailure` or `interruptAfterTimeLimit` instead.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | The original arbitrary used for generating values. This arbitrary remains unchanged, but its shrinking capabilities will not be included in the new arbitrary. |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

## Remarks

Since 3.20.0

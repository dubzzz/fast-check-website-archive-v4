# Function: infiniteStream()

> > **infiniteStream**\<`T`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<[`Stream`](../classes/Stream.md)\<`T`\>\>

Defined in: [packages/fast-check/src/arbitrary/infiniteStream.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/infiniteStream.ts#L35)

Produce an infinite stream of values

WARNING: By default, infiniteStream remembers all values it has ever
generated. This causes unbounded memory growth during large tests.
Set noHistory to disable.

WARNING: Requires Object.assign

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values |
| `constraints?` | `InfiniteStreamConstraints` | Constraints to apply when building instances (since 4.3.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<[`Stream`](../classes/Stream.md)\<`T`\>\>

## Remarks

Since 1.8.0

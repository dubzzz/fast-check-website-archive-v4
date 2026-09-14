# Function: map()

> > **map**\<`K`, `V`\>(`keyArb`, `valueArb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Map`\<`K`, `V`\>\>

Defined in: [packages/fast-check/src/arbitrary/map.ts:57](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L57)

For Maps with keys produced by `keyArb` and values from `valueArb`

## Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`K`\> | Arbitrary used to generate the keys of the Map |
| `valueArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`V`\> | Arbitrary used to generate the values of the Map |
| `constraints` | [`MapConstraints`](../interfaces/MapConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Map`\<`K`, `V`\>\>

## Remarks

Since 4.4.0

# Function: tuple()

> > **tuple**\<`Ts`\>(...`arbs`): [`Arbitrary`](../classes/Arbitrary.md)\<`Ts`\>

Defined in: [packages/fast-check/src/arbitrary/tuple.ts:12](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/tuple.ts#L12)

For tuples produced using the provided `arbs`

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` *extends* `unknown`[] |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`arbs` | \{ \[K in string \| number \| symbol\]: Arbitrary\<Ts\[K\]\> \} | Ordered list of arbitraries |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Ts`\>

## Remarks

Since 0.0.1

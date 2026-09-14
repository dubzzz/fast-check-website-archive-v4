# Function: func()

> > **func**\<`TArgs`, `TOut`\>(`arb`): [`Arbitrary`](../classes/Arbitrary.md)\<(...`args`) => `TOut`\>

Defined in: [packages/fast-check/src/arbitrary/func.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/func.ts#L23)

For pure functions

## Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |
| `TOut` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`TOut`\> | Arbitrary responsible to produce the values |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<(...`args`) => `TOut`\>

## Remarks

Since 1.6.0

# Type Alias: LetrecLooselyTypedTie

> > **LetrecLooselyTypedTie** = (`key`) => [`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:43](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L43)

Loosely typed type for the `tie` function passed by [letrec](../functions/letrec.md) to the `builder` function we pass to it.
You may want also want to use its strongly typed version [LetrecTypedTie](../interfaces/LetrecTypedTie.md).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

## Remarks

Since 3.0.0

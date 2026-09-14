# Type Alias: LetrecTypedBuilder\<T\>

> > **LetrecTypedBuilder**\<`T`\> = (`tie`) => [`LetrecValue`](LetrecValue.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:34](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L34)

Strongly typed type for the `builder` function passed to [letrec](../functions/letrec.md).
You may want also want to use its loosely typed version [LetrecLooselyTypedBuilder](LetrecLooselyTypedBuilder.md).

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tie` | [`LetrecTypedTie`](../interfaces/LetrecTypedTie.md)\<`T`\> |

## Returns

[`LetrecValue`](LetrecValue.md)\<`T`\>

## Remarks

Since 3.0.0

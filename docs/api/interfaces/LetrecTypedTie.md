# Interface: LetrecTypedTie()\<T\>

> Defined in: [packages/fast-check/src/arbitrary/letrec.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L23)

Strongly typed type for the `tie` function passed by [letrec](../functions/letrec.md) to the `builder` function we pass to it.
You may want also want to use its loosely typed version [LetrecLooselyTypedTie](../type-aliases/LetrecLooselyTypedTie.md).

## Remarks

Since 3.0.0

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Call Signature

> **LetrecTypedTie**\<`K`\>(`key`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\[`K`\]\>

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L24)

Strongly typed type for the `tie` function passed by [letrec](../functions/letrec.md) to the `builder` function we pass to it.
You may want also want to use its loosely typed version [LetrecLooselyTypedTie](../type-aliases/LetrecLooselyTypedTie.md).

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\[`K`\]\>

### Remarks

Since 3.0.0

## Call Signature

> **LetrecTypedTie**(`key`): [`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L25)

Strongly typed type for the `tie` function passed by [letrec](../functions/letrec.md) to the `builder` function we pass to it.
You may want also want to use its loosely typed version [LetrecLooselyTypedTie](../type-aliases/LetrecLooselyTypedTie.md).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

### Remarks

Since 3.0.0

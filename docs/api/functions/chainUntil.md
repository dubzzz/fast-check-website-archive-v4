# Function: chainUntil()

> > **chainUntil**\<`T`\>(`startArb`, `chainer`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/chainUntil.ts:155](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/chainUntil.ts#L155)

Build an arbitrary by iteratively chaining arbitraries until the chainer returns undefined.

Starting from a value produced by `startArb`, the `chainer` function is called with the current value
to produce the next arbitrary. This process repeats until `chainer` returns `undefined`.
The final value in the chain is the one produced by this arbitrary.

The implementation is fully iterative (non-recursive) and supports shrinking.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | The starting arbitrary producing the initial value |
| `chainer` | (`prev`) => [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> \| `undefined` | A function called with the current value that returns either the next arbitrary to generate from or undefined to stop the chain |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

An arbitrary producing the last value in the chain

## Remarks

Since 4.8.0

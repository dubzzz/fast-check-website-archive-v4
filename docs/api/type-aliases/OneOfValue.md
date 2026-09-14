# Type Alias: OneOfValue\<Ts\>

> > **OneOfValue**\<`Ts`\> = `{ [K in keyof Ts]: Ts[K] extends MaybeWeightedArbitrary<infer U> ? U : never }`\[`number`\]

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:42](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L42)

Infer the type of the Arbitrary produced by [oneof](../functions/oneof.md)
given the type of the source arbitraries

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` *extends* [`MaybeWeightedArbitrary`](MaybeWeightedArbitrary.md)\<`unknown`\>[] |

## Remarks

Since 2.2.0

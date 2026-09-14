# Interface: WeightedArbitrary\<T\>

> Defined in: [packages/fast-check/src/arbitrary/oneof.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L15)

Conjonction of a weight and an arbitrary used by [oneof](../functions/oneof.md)
in order to generate values

## Remarks

Since 1.18.0

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### arbitrary {#arbitrary}

> **arbitrary**: [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L25)

Instance of Arbitrary

#### Remarks

Since 0.0.7

***

### weight {#weight}

> **weight**: `number`

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L20)

Weight to be applied when selecting which arbitrary should be used

#### Remarks

Since 0.0.7

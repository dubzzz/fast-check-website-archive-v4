# Interface: StringSharedConstraints

> Defined in: [packages/fast-check/src/arbitrary/\_shared/StringSharedConstraints.ts:8](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_shared/StringSharedConstraints.ts#L8)

Constraints to be applied on arbitraries for strings

## Remarks

Since 2.4.0

## Properties

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_shared/StringSharedConstraints.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_shared/StringSharedConstraints.ts#L20)

Upper bound of the generated string length (included)

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.4.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_shared/StringSharedConstraints.ts:14](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_shared/StringSharedConstraints.ts#L14)

Lower bound of the generated string length (included)

#### Default Value

```ts
0
```

#### Remarks

Since 2.4.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/\_shared/StringSharedConstraints.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_shared/StringSharedConstraints.ts#L25)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

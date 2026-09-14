# Type Alias: BigIntArrayConstraints

> > **BigIntArrayConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:84](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L84)

Constraints to be applied on typed arrays for big int values

## Remarks

Since 3.0.0

## Properties

### max? {#max}

> `optional` **max?**: `bigint`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:108](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L108)

Upper bound for the generated int (included)

#### Default Value

```ts
highest possible value for this type
```

#### Remarks

Since 3.0.0

***

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:96](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L96)

Upper bound of the generated array size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 3.0.0

***

### min? {#min}

> `optional` **min?**: `bigint`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:102](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L102)

Lower bound for the generated int (included)

#### Default Value

```ts
smallest possible value for this type
```

#### Remarks

Since 3.0.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:90](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L90)

Lower bound of the generated array size

#### Default Value

```ts
0
```

#### Remarks

Since 3.0.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:113](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L113)

Define how large the generated values should be (at max)

#### Remarks

Since 3.0.0

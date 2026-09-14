# Type Alias: IntArrayConstraints

> > **IntArrayConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:47](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L47)

Constraints to be applied on typed arrays for integer values

## Remarks

Since 2.9.0

## Properties

### max? {#max}

> `optional` **max?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:71](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L71)

Upper bound for the generated int (included)

#### Default Value

```ts
highest possible value for this type
```

#### Remarks

Since 2.9.0

***

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:59](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L59)

Upper bound of the generated array size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.9.0

***

### min? {#min}

> `optional` **min?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:65](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L65)

Lower bound for the generated int (included)

#### Default Value

```ts
smallest possible value for this type
```

#### Remarks

Since 2.9.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:53](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L53)

Lower bound of the generated array size

#### Default Value

```ts
0
```

#### Remarks

Since 2.9.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/TypedIntArrayArbitraryBuilder.ts:76](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/TypedIntArrayArbitraryBuilder.ts#L76)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

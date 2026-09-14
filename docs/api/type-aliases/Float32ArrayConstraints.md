# Type Alias: Float32ArrayConstraints

> > **Float32ArrayConstraints** = `object` & [`FloatConstraints`](../interfaces/FloatConstraints.md)

Defined in: [packages/fast-check/src/arbitrary/float32Array.ts:13](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float32Array.ts#L13)

Constraints to be applied on [float32Array](../functions/float32Array.md)

## Type Declaration

### maxLength?

> `optional` **maxLength?**: `number`

Upper bound of the generated array size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.9.0

### minLength?

> `optional` **minLength?**: `number`

Lower bound of the generated array size

#### Default Value

```ts
0
```

#### Remarks

Since 2.9.0

### size?

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

## Remarks

Since 2.9.0

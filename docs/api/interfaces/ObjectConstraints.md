# Interface: ObjectConstraints

> Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:16](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L16)

Constraints for [anything](../functions/anything.md) and [object](../functions/object.md)

## Properties

### depthSize? {#depthsize}

> `optional` **depthSize?**: [`DepthSize`](../type-aliases/DepthSize.md)

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L22)

Limit the depth of the object by increasing the probability to generate simple values (defined via values)
as we go deeper in the object.

#### Remarks

Since 2.20.0

***

### key? {#key}

> `optional` **key?**: [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:45](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L45)

Arbitrary for keys

#### Default Value

[string](../functions/string.md)

#### Remarks

Since 0.0.7

***

### maxDepth? {#maxdepth}

> `optional` **maxDepth?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:28](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L28)

Maximal depth allowed

#### Default Value

Number.POSITIVE_INFINITY — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 0.0.7

***

### maxKeys? {#maxkeys}

> `optional` **maxKeys?**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:34](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L34)

Maximal number of keys

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 1.13.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L39)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

***

### stringUnit? {#stringunit}

> `optional` **stringUnit?**: `"grapheme"` \| `"grapheme-composite"` \| `"grapheme-ascii"` \| `"binary"` \| `"binary-ascii"` \| [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:120](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L120)

Replace the default unit for strings.

#### Default Value

```ts
undefined
```

#### Remarks

Since 3.23.0

***

### values? {#values}

> `optional` **values?**: [`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>[]

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:51](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L51)

Arbitrary for values

#### Default Value

[boolean](../functions/boolean.md), [integer](../functions/integer.md), [double](../functions/double.md), [string](../functions/string.md), null, undefined, Number.NaN, +0, -0, Number.EPSILON, Number.MIN_VALUE, Number.MAX_VALUE, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY

#### Remarks

Since 0.0.7

***

### withBigInt? {#withbigint}

> `optional` **withBigInt?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:87](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L87)

Also generate BigInt

#### Default Value

```ts
false
```

#### Remarks

Since 1.26.0

***

### withBoxedValues? {#withboxedvalues}

> `optional` **withBoxedValues?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:57](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L57)

Also generate boxed versions of values

#### Default Value

```ts
false
```

#### Remarks

Since 1.11.0

***

### withDate? {#withdate}

> `optional` **withDate?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:93](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L93)

Also generate Date

#### Default Value

```ts
false
```

#### Remarks

Since 2.5.0

***

### withMap? {#withmap}

> `optional` **withMap?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:69](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L69)

Also generate Map

#### Default Value

```ts
false
```

#### Remarks

Since 1.11.0

***

### withNullPrototype? {#withnullprototype}

> `optional` **withNullPrototype?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:81](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L81)

Also generate object with null prototype

#### Default Value

```ts
false
```

#### Remarks

Since 1.23.0

***

### withObjectString? {#withobjectstring}

> `optional` **withObjectString?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:75](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L75)

Also generate string representations of object instances

#### Default Value

```ts
false
```

#### Remarks

Since 1.17.0

***

### withSet? {#withset}

> `optional` **withSet?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L63)

Also generate Set

#### Default Value

```ts
false
```

#### Remarks

Since 1.11.0

***

### withSparseArray? {#withsparsearray}

> `optional` **withSparseArray?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:106](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L106)

Also generate sparse arrays (arrays with holes)

#### Default Value

```ts
false
```

#### Remarks

Since 2.13.0

***

### withTypedArray? {#withtypedarray}

> `optional` **withTypedArray?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:100](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L100)

Also generate typed arrays in: (Uint|Int)(8|16|32)Array and Float(32|64)Array
Remark: no typed arrays made of bigint

#### Default Value

```ts
false
```

#### Remarks

Since 2.9.0

***

### ~~withUnicodeString?~~ {#withunicodestring}

> `optional` **withUnicodeString?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/QualifiedObjectConstraints.ts:114](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/QualifiedObjectConstraints.ts#L114)

Replace the arbitrary of strings defaulted for key and values by one able to generate unicode strings with non-ascii characters.
If you override key and/or values constraint, this flag will not apply to your override.

#### Deprecated

Prefer using `stringUnit` to customize the kind of strings that will be generated by default.

#### Default Value

```ts
false
```

#### Remarks

Since 3.19.0

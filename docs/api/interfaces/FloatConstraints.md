# Interface: FloatConstraints

> Defined in: [packages/fast-check/src/arbitrary/float.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L23)

Constraints to be applied on [float](../functions/float.md)

## Remarks

Since 2.6.0

## Properties

### max? {#max}

> `optional` **max?**: `number`

Defined in: [packages/fast-check/src/arbitrary/float.ts:42](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L42)

Upper bound for the generated 32-bit floats (included)

#### Default Value

```ts
Number.POSITIVE_INFINITY, 3.4028234663852886e+38 when noDefaultInfinity is true
```

#### Remarks

Since 2.8.0

***

### maxExcluded? {#maxexcluded}

> `optional` **maxExcluded?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/float.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L49)

Should the upper bound (aka max) be excluded?
Note: Excluding max=Number.POSITIVE_INFINITY would result into having max set to 3.4028234663852886e+38.

#### Default Value

```ts
false
```

#### Remarks

Since 3.12.0

***

### min? {#min}

> `optional` **min?**: `number`

Defined in: [packages/fast-check/src/arbitrary/float.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L29)

Lower bound for the generated 32-bit floats (included)

#### Default Value

```ts
Number.NEGATIVE_INFINITY, -3.4028234663852886e+38 when noDefaultInfinity is true
```

#### Remarks

Since 2.8.0

***

### minExcluded? {#minexcluded}

> `optional` **minExcluded?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/float.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L36)

Should the lower bound (aka min) be excluded?
Note: Excluding min=Number.NEGATIVE_INFINITY would result into having min set to -3.4028234663852886e+38.

#### Default Value

```ts
false
```

#### Remarks

Since 3.12.0

***

### noDefaultInfinity? {#nodefaultinfinity}

> `optional` **noDefaultInfinity?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/float.ts:56](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L56)

By default, lower and upper bounds are -infinity and +infinity.
By setting noDefaultInfinity to true, you move those defaults to minimal and maximal finite values.

#### Default Value

```ts
false
```

#### Remarks

Since 2.8.0

***

### noInteger? {#nointeger}

> `optional` **noInteger?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/float.ts:69](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L69)

When set to true, Number.isInteger(value) will be false for any generated value.
Note: -infinity and +infinity, or NaN can stil be generated except if you rejected them via another constraint.

#### Default Value

```ts
false
```

#### Remarks

Since 3.18.0

***

### noNaN? {#nonan}

> `optional` **noNaN?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/float.ts:62](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L62)

When set to true, no more Number.NaN can be generated.

#### Default Value

```ts
false
```

#### Remarks

Since 2.8.0

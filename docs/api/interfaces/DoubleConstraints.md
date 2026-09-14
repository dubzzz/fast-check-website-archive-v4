# Interface: DoubleConstraints

> Defined in: [packages/fast-check/src/arbitrary/double.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L24)

Constraints to be applied on [double](../functions/double.md)

## Remarks

Since 2.6.0

## Properties

### max? {#max}

> `optional` **max?**: `number`

Defined in: [packages/fast-check/src/arbitrary/double.ts:43](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L43)

Upper bound for the generated 64-bit floats (included, see maxExcluded to exclude it)

#### Default Value

```ts
Number.POSITIVE_INFINITY, 1.7976931348623157e+308 when noDefaultInfinity is true
```

#### Remarks

Since 2.8.0

***

### maxExcluded? {#maxexcluded}

> `optional` **maxExcluded?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/double.ts:50](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L50)

Should the upper bound (aka max) be excluded?
Note: Excluding max=Number.POSITIVE_INFINITY would result into having max set to Number.MAX_VALUE.

#### Default Value

```ts
false
```

#### Remarks

Since 3.12.0

***

### min? {#min}

> `optional` **min?**: `number`

Defined in: [packages/fast-check/src/arbitrary/double.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L30)

Lower bound for the generated 64-bit floats (included, see minExcluded to exclude it)

#### Default Value

```ts
Number.NEGATIVE_INFINITY, -1.7976931348623157e+308 when noDefaultInfinity is true
```

#### Remarks

Since 2.8.0

***

### minExcluded? {#minexcluded}

> `optional` **minExcluded?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/double.ts:37](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L37)

Should the lower bound (aka min) be excluded?
Note: Excluding min=Number.NEGATIVE_INFINITY would result into having min set to -Number.MAX_VALUE.

#### Default Value

```ts
false
```

#### Remarks

Since 3.12.0

***

### noDefaultInfinity? {#nodefaultinfinity}

> `optional` **noDefaultInfinity?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/double.ts:57](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L57)

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

Defined in: [packages/fast-check/src/arbitrary/double.ts:70](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L70)

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

Defined in: [packages/fast-check/src/arbitrary/double.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L63)

When set to true, no more Number.NaN can be generated.

#### Default Value

```ts
false
```

#### Remarks

Since 2.8.0

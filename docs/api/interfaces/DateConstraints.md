# Interface: DateConstraints

> Defined in: [packages/fast-check/src/arbitrary/date.ts:18](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/date.ts#L18)

Constraints to be applied on [date](../functions/date.md)

## Remarks

Since 3.3.0

## Properties

### max? {#max}

> `optional` **max?**: `Date`

Defined in: [packages/fast-check/src/arbitrary/date.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/date.ts#L30)

Upper bound of the range (included)

#### Default Value

```ts
new Date(8640000000000000)
```

#### Remarks

Since 1.17.0

***

### min? {#min}

> `optional` **min?**: `Date`

Defined in: [packages/fast-check/src/arbitrary/date.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/date.ts#L24)

Lower bound of the range (included)

#### Default Value

```ts
new Date(-8640000000000000)
```

#### Remarks

Since 1.17.0

***

### noInvalidDate? {#noinvaliddate}

> `optional` **noInvalidDate?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/date.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/date.ts#L36)

When set to true, no more "Invalid Date" can be generated.

#### Default Value

```ts
false
```

#### Remarks

Since 3.13.0

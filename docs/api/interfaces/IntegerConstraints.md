# Interface: IntegerConstraints

> Defined in: [packages/fast-check/src/arbitrary/integer.ts:11](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/integer.ts#L11)

Constraints to be applied on [integer](../functions/integer.md)

## Remarks

Since 2.6.0

## Properties

### max? {#max}

> `optional` **max?**: `number`

Defined in: [packages/fast-check/src/arbitrary/integer.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/integer.ts#L23)

Upper bound for the generated integers (included)

#### Default Value

```ts
0x7fffffff
```

#### Remarks

Since 2.6.0

***

### min? {#min}

> `optional` **min?**: `number`

Defined in: [packages/fast-check/src/arbitrary/integer.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/integer.ts#L17)

Lower bound for the generated integers (included)

#### Default Value

```ts
-0x80000000
```

#### Remarks

Since 2.6.0

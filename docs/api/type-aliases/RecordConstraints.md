# Type Alias: RecordConstraints\<T\>

> > **RecordConstraints**\<`T`\> = `object`

Defined in: [packages/fast-check/src/arbitrary/record.ts:12](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/record.ts#L12)

Constraints to be applied on [record](../functions/record.md)

## Remarks

Since 0.0.12

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

### noNullPrototype? {#nonullprototype}

> `optional` **noNullPrototype?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/record.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/record.ts#L29)

Do not generate records with null prototype

#### Default Value

```ts
false
```

#### Remarks

Since 3.13.0

***

### requiredKeys? {#requiredkeys}

> `optional` **requiredKeys?**: `T`[]

Defined in: [packages/fast-check/src/arbitrary/record.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/record.ts#L23)

List keys that should never be deleted.

Remark:
You might need to use an explicit typing in case you need to declare symbols as required (not needed when required keys are simple strings).
With something like `{ requiredKeys: [mySymbol1, 'a'] as [typeof mySymbol1, 'a'] }` when both `mySymbol1` and `a` are required.

#### Default Value

```ts
Array containing all keys of recordModel
```

#### Remarks

Since 2.11.0

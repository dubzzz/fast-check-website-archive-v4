# Function: record()

> > **record**\<`T`, `K`\>(`model`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<\{ \[K in string \| number \| symbol\]: (Partial\<T\> & Pick\<T, K & keyof T\>)\[K\] \}\>

Defined in: [packages/fast-check/src/arbitrary/record.ts:56](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/record.ts#L56)

For records following the `recordModel` schema

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `K` *extends* `string` \| `number` \| `symbol` | keyof `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | \{ \[K in string \| number \| symbol\]: Arbitrary\<T\[K\]\> \} | - |
| `constraints?` | [`RecordConstraints`](../type-aliases/RecordConstraints.md)\<`K`\> | Contraints on the generated record |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<\{ \[K in string \| number \| symbol\]: (Partial\<T\> & Pick\<T, K & keyof T\>)\[K\] \}\>

## Example

```typescript
record({ x: someArbitraryInt, y: someArbitraryInt }, {requiredKeys: []}): Arbitrary<{x?:number,y?:number}>
// merge two integer arbitraries to produce a {x, y}, {x}, {y} or {} record
```

## Remarks

Since 0.0.12

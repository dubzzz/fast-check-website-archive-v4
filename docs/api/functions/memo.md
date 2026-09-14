# Function: memo()

> > **memo**\<`T`\>(`builder`): [`Memo`](../type-aliases/Memo.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/memo.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/memo.ts#L33)

For mutually recursive types

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `builder` | (`maxDepth`) => [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary builder taken the maximal depth allowed as input (parameter `n`) |

## Returns

[`Memo`](../type-aliases/Memo.md)\<`T`\>

## Example

```typescript
// tree is 1 / 3 of node, 2 / 3 of leaf
const tree: fc.Memo<Tree> = fc.memo(n => fc.oneof(node(n), leaf(), leaf()));
const node: fc.Memo<Tree> = fc.memo(n => {
  if (n <= 1) return fc.record({ left: leaf(), right: leaf() });
  return fc.record({ left: tree(), right: tree() }); // tree() is equivalent to tree(n-1)
});
const leaf = fc.nat;
```

## Remarks

Since 1.16.0

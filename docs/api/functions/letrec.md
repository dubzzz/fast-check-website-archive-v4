# Function: letrec()

> > **letrec**\<`T`\>(`builder`): [`LetrecValue`](../type-aliases/LetrecValue.md)\<`T`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:90](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L90)

For mutually recursive types

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `builder` | `T` *extends* `Record`\<`string`, `unknown`\> ? [`LetrecTypedBuilder`](../type-aliases/LetrecTypedBuilder.md)\<`T`\> : `never` | Arbitraries builder based on themselves (through `tie`) |

### Returns

[`LetrecValue`](../type-aliases/LetrecValue.md)\<`T`\>

### Example

```typescript
type Leaf = number;
type Node = [Tree, Tree];
type Tree = Node | Leaf;
const { tree } = fc.letrec<{ tree: Tree, node: Node, leaf: Leaf }>(tie => ({
  tree: fc.oneof({depthSize: 'small'}, tie('leaf'), tie('node')),
  node: fc.tuple(tie('tree'), tie('tree')),
  leaf: fc.nat()
}));
// tree is 50% of node, 50% of leaf
// the ratio goes in favor of leaves as we go deeper in the tree (thanks to depthSize)
```

### Remarks

Since 1.16.0

## Call Signature

> **letrec**\<`T`\>(`builder`): [`LetrecValue`](../type-aliases/LetrecValue.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/letrec.ts:110](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/letrec.ts#L110)

For mutually recursive types

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `builder` | [`LetrecLooselyTypedBuilder`](../type-aliases/LetrecLooselyTypedBuilder.md)\<`T`\> | Arbitraries builder based on themselves (through `tie`) |

### Returns

[`LetrecValue`](../type-aliases/LetrecValue.md)\<`T`\>

### Example

```typescript
const { tree } = fc.letrec(tie => ({
  tree: fc.oneof({depthSize: 'small'}, tie('leaf'), tie('node')),
  node: fc.tuple(tie('tree'), tie('tree')),
  leaf: fc.nat()
}));
// tree is 50% of node, 50% of leaf
// the ratio goes in favor of leaves as we go deeper in the tree (thanks to depthSize)
```

### Remarks

Since 1.16.0

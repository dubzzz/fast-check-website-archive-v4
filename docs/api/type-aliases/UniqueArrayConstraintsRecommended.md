# Type Alias: UniqueArrayConstraintsRecommended\<T, U\>

> > **UniqueArrayConstraintsRecommended**\<`T`, `U`\> = [`UniqueArraySharedConstraints`](UniqueArraySharedConstraints.md) & `object`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:92](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L92)

Constraints implying known and optimized comparison function
to be applied on [uniqueArray](../functions/uniqueArray.md)

## Type Declaration

### comparator?

> `optional` **comparator?**: `"SameValue"` \| `"SameValueZero"` \| `"IsStrictlyEqual"`

The operator to be used to compare the values after having applied the selector (if any):
- SameValue behaves like `Object.is` — [https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue)
- SameValueZero behaves like `Set` or `Map` — [https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero)
- IsStrictlyEqual behaves like `===` — [https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal)
- Fully custom comparison function: it implies performance costs for large arrays

#### Default Value

```ts
'SameValue'
```

#### Remarks

Since 2.23.0

### selector?

> `optional` **selector?**: (`v`) => `U`

How we should project the values before comparing them together

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `T` |

#### Returns

`U`

#### Default Value

```ts
(v =&gt; v)
```

#### Remarks

Since 2.23.0

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Remarks

Since 2.23.0

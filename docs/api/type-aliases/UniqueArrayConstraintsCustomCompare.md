# Type Alias: UniqueArrayConstraintsCustomCompare\<T\>

> > **UniqueArrayConstraintsCustomCompare**\<`T`\> = [`UniqueArraySharedConstraints`](UniqueArraySharedConstraints.md) & `object`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:121](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L121)

Constraints implying a fully custom comparison function
to be applied on [uniqueArray](../functions/uniqueArray.md)

WARNING - Imply an extra performance cost whenever you want to generate large arrays

## Type Declaration

### comparator

> **comparator**: (`a`, `b`) => `boolean`

The operator to be used to compare the values after having applied the selector (if any)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`boolean`

#### Remarks

Since 2.23.0

### selector?

> `optional` **selector?**: `undefined`

How we should project the values before comparing them together

#### Remarks

Since 2.23.0

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Remarks

Since 2.23.0

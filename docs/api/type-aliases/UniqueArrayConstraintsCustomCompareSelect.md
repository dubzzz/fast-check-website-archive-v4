# Type Alias: UniqueArrayConstraintsCustomCompareSelect\<T, U\>

> > **UniqueArrayConstraintsCustomCompareSelect**\<`T`, `U`\> = [`UniqueArraySharedConstraints`](UniqueArraySharedConstraints.md) & `object`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:143](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L143)

Constraints implying fully custom comparison function and selector
to be applied on [uniqueArray](../functions/uniqueArray.md)

WARNING - Imply an extra performance cost whenever you want to generate large arrays

## Type Declaration

### comparator

> **comparator**: (`a`, `b`) => `boolean`

The operator to be used to compare the values after having applied the selector (if any)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `U` |
| `b` | `U` |

#### Returns

`boolean`

#### Remarks

Since 2.23.0

### selector

> **selector**: (`v`) => `U`

How we should project the values before comparing them together

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `T` |

#### Returns

`U`

#### Remarks

Since 2.23.0

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Remarks

Since 2.23.0

# Function: uniqueArray()

> > **uniqueArray**\<`T`, `U`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:179](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L179)

For arrays of unique values coming from `arb`

### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the array |
| `constraints?` | [`UniqueArrayConstraintsRecommended`](../type-aliases/UniqueArrayConstraintsRecommended.md)\<`T`, `U`\> | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

### Remarks

Since 2.23.0

## Call Signature

> **uniqueArray**\<`T`\>(`arb`, `constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:192](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L192)

For arrays of unique values coming from `arb`

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the array |
| `constraints` | [`UniqueArrayConstraintsCustomCompare`](../type-aliases/UniqueArrayConstraintsCustomCompare.md)\<`T`\> | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

### Remarks

Since 2.23.0

## Call Signature

> **uniqueArray**\<`T`, `U`\>(`arb`, `constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:202](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L202)

For arrays of unique values coming from `arb`

### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the array |
| `constraints` | [`UniqueArrayConstraintsCustomCompareSelect`](../type-aliases/UniqueArrayConstraintsCustomCompareSelect.md)\<`T`, `U`\> | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

### Remarks

Since 2.23.0

## Call Signature

> **uniqueArray**\<`T`, `U`\>(`arb`, `constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:215](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L215)

For arrays of unique values coming from `arb`

### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values inside the array |
| `constraints` | [`UniqueArrayConstraints`](../type-aliases/UniqueArrayConstraints.md)\<`T`, `U`\> | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

### Remarks

Since 2.23.0

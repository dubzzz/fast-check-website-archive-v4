# Function: constantFrom()

> > **constantFrom**\<`T`\>(...`values`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/constantFrom.ts:19](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/constantFrom.ts#L19)

For one `...values` values - all equiprobable

**WARNING**: It expects at least one value, otherwise it should throw

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `never` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`values` | `T`[] | Constant values to be produced (all values shrink to the first one) |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

### Remarks

Since 0.0.12

## Call Signature

> **constantFrom**\<`TArgs`\>(...`values`): [`Arbitrary`](../classes/Arbitrary.md)\<`TArgs`\[`number`\]\>

Defined in: [packages/fast-check/src/arbitrary/constantFrom.ts:31](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/constantFrom.ts#L31)

For one `...values` values - all equiprobable

**WARNING**: It expects at least one value, otherwise it should throw

### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] \| \[`any`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`values` | `TArgs` | Constant values to be produced (all values shrink to the first one) |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`TArgs`\[`number`\]\>

### Remarks

Since 0.0.12

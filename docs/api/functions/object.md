# Function: object()

> > **object**(): [`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `unknown`\>\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/object.ts:31](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/object.ts#L31)

For any objects

You may use [sample](sample.md) to preview the values that will be generated

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `unknown`\>\>

### Example

```javascript
{}, {k: [{}, 1, 2]}
```

### Remarks

Since 0.0.7

## Call Signature

> **object**(`constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `unknown`\>\>

Defined in: [packages/fast-check/src/arbitrary/object.ts:47](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/object.ts#L47)

For any objects following the constraints defined by `settings`

You may use [sample](sample.md) to preview the values that will be generated

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`ObjectConstraints`](../interfaces/ObjectConstraints.md) | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `unknown`\>\>

### Example

```javascript
{}, {k: [{}, 1, 2]}
```

### Remarks

Since 0.0.7

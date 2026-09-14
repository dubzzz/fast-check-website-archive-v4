# Function: anything()

> > **anything**(): [`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/anything.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/anything.ts#L21)

For any type of values

You may use [sample](sample.md) to preview the values that will be generated

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

### Example

```javascript
null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
```

### Remarks

Since 0.0.7

## Call Signature

> **anything**(`constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

Defined in: [packages/fast-check/src/arbitrary/anything.ts:52](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/anything.ts#L52)

For any type of values following the constraints defined by `settings`

You may use [sample](sample.md) to preview the values that will be generated

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`ObjectConstraints`](../interfaces/ObjectConstraints.md) | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`unknown`\>

### Examples

```javascript
null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
```

```typescript
// Using custom settings
fc.anything({
    key: fc.string(),
    values: [fc.integer(10,20), fc.constant(42)],
    maxDepth: 2
});
// Can build entries such as:
// - 19
// - [{"2":12,"k":15,"A":42}]
// - {"4":[19,13,14,14,42,11,20,11],"6":42,"7":16,"L":10,"'":[20,11],"e":[42,20,42,14,13,17]}
// - [42,42,42]...
```

### Remarks

Since 0.0.7

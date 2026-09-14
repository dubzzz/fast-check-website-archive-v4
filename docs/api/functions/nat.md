# Function: nat()

> > **nat**(): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/nat.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/nat.ts#L25)

For positive integers between 0 (included) and 2147483647 (included)

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

### Remarks

Since 0.0.1

## Call Signature

> **nat**(`max`): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

Defined in: [packages/fast-check/src/arbitrary/nat.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/nat.ts#L35)

For positive integers between 0 (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | Upper bound for the generated integers |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

### Remarks

You may prefer to use `fc.nat({max})` instead.

## Call Signature

> **nat**(`constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

Defined in: [packages/fast-check/src/arbitrary/nat.ts:44](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/nat.ts#L44)

For positive integers between 0 (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`NatConstraints`](../interfaces/NatConstraints.md) | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

### Remarks

Since 2.6.0

## Call Signature

> **nat**(`arg?`): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

Defined in: [packages/fast-check/src/arbitrary/nat.ts:53](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/nat.ts#L53)

For positive integers between 0 (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arg?` | `number` \| [`NatConstraints`](../interfaces/NatConstraints.md) | Either a maximum number or constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

### Remarks

Since 2.6.0

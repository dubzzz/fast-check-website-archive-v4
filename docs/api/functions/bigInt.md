# Function: bigInt()

> > **bigInt**(): [`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:64](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L64)

For bigint

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

### Remarks

Since 1.9.0

## Call Signature

> **bigInt**(`min`, `max`): [`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:74](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L74)

For bigint between min (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `bigint` | Lower bound for the generated bigints (eg.: -5n, 0n, BigInt(Number.MIN_SAFE_INTEGER)) |
| `max` | `bigint` | Upper bound for the generated bigints (eg.: -2n, 2147483647n, BigInt(Number.MAX_SAFE_INTEGER)) |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

### Remarks

Since 1.9.0

## Call Signature

> **bigInt**(`constraints`): [`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:83](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L83)

For bigint between min (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`BigIntConstraints`](../interfaces/BigIntConstraints.md) | Constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

### Remarks

Since 2.6.0

## Call Signature

> **bigInt**(...`args`): [`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:92](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L92)

For bigint between min (included) and max (included)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[\] \| \[`bigint`, `bigint`\] \| \[[`BigIntConstraints`](../interfaces/BigIntConstraints.md)\] | Either min/max bounds as an object or constraints to apply when building instances |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`bigint`\>

### Remarks

Since 2.6.0

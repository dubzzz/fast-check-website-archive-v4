# Function: webUrl()

> > **webUrl**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L63)

For web url

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) and
[WHATWG URL Standard](https://url.spec.whatwg.org/)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints?` | [`WebUrlConstraints`](../interfaces/WebUrlConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

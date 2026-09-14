# Function: webPath()

> > **webPath**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/webPath.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webPath.ts#L30)

For web path

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) and
[WHATWG URL Standard](https://url.spec.whatwg.org/)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints?` | [`WebPathConstraints`](../interfaces/WebPathConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 3.3.0

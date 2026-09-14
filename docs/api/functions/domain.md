# Function: domain()

> > **domain**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/domain.ts:115](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/domain.ts#L115)

For domains
having an extension with at least two lowercase characters

According to [RFC 1034](https://www.ietf.org/rfc/rfc1034.txt),
[RFC 1035](https://www.ietf.org/rfc/rfc1035.txt),
[RFC 1123](https://www.ietf.org/rfc/rfc1123.txt) and
[WHATWG URL Standard](https://url.spec.whatwg.org/)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`DomainConstraints`](../interfaces/DomainConstraints.md) | Constraints to apply when building instances (since 2.22.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

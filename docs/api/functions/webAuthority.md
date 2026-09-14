# Function: webAuthority()

> > **webAuthority**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:103](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L103)

For web authority

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) - `authority = [ userinfo "@" ] host [ ":" port ]`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints?` | [`WebAuthorityConstraints`](../interfaces/WebAuthorityConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

# Function: emailAddress()

> > **emailAddress**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/emailAddress.ts:73](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/emailAddress.ts#L73)

For email address

According to [RFC 2821](https://www.ietf.org/rfc/rfc2821.txt),
[RFC 3696](https://www.ietf.org/rfc/rfc3696.txt) and
[RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`EmailAddressConstraints`](../interfaces/EmailAddressConstraints.md) | Constraints to apply when building instances (since 2.22.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

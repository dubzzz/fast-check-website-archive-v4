# Function: webFragments()

> > **webFragments**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/webFragments.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webFragments.ts#L30)

For fragments of an URI (web included)

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

eg.: In the url `https://domain/plop?page=1#hello=1&world=2`, `?hello=1&world=2` are query parameters

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`WebFragmentsConstraints`](../interfaces/WebFragmentsConstraints.md) | Constraints to apply when building instances (since 2.22.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

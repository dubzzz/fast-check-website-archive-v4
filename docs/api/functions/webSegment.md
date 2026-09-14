# Function: webSegment()

> > **webSegment**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/webSegment.ts:31](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webSegment.ts#L31)

For internal segment of an URI (web included)

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

eg.: In the url `https://github.com/dubzzz/fast-check/`, `dubzzz` and `fast-check` are segments

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`WebSegmentConstraints`](../interfaces/WebSegmentConstraints.md) | Constraints to apply when building instances (since 2.22.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.14.0

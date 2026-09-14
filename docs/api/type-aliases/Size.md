# Type Alias: Size

> > **Size** = `"xsmall"` \| `"small"` \| `"medium"` \| `"large"` \| `"xlarge"`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/MaxLengthFromMinLength.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/MaxLengthFromMinLength.ts#L29)

The size parameter defines how large the generated values could be.

The default in fast-check is 'small' but it could be increased (resp. decreased)
to ask arbitraries for larger (resp. smaller) values.

## Remarks

Since 2.22.0

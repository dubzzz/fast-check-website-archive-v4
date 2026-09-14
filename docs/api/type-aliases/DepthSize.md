# Type Alias: DepthSize

> > **DepthSize** = `RelativeSize` \| [`Size`](Size.md) \| `"max"` \| `number` \| `undefined`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/MaxLengthFromMinLength.ts:68](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/MaxLengthFromMinLength.ts#L68)

Superset of [Size](Size.md) to override the default defined for size.
It can either be based on a numeric value manually selected by the user (not recommended)
or rely on presets based on size (recommended).

This size will be used to infer a bias to limit the depth, used as follow within recursive structures:
While going deeper, the bias on depth will increase the probability to generate small instances.

When used with [Size](Size.md), the larger the size the deeper the structure.
When used with numeric values, the larger the number (floating point number &gt;= 0),
the deeper the structure. `+0` means extremelly biased depth meaning barely impossible to generate
deep structures, while `Number.POSITIVE_INFINITY` means "depth has no impact".

Using `max` or `Number.POSITIVE_INFINITY` is fully equivalent.

## Remarks

Since 2.25.0

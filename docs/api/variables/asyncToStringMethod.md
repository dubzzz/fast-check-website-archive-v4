# Variable: asyncToStringMethod

> > `const` **asyncToStringMethod**: unique `symbol`

Defined in: [packages/fast-check/src/utils/stringify.ts:67](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/utils/stringify.ts#L67)

Use this symbol to define a custom serializer for your instances.
Serializer must be a function returning a promise of string (see [WithAsyncToStringMethod](../type-aliases/WithAsyncToStringMethod.md)).

Please note that:
1. It will only be useful for asynchronous properties.
2. It has to return barely instantly.

## Remarks

Since 2.17.0

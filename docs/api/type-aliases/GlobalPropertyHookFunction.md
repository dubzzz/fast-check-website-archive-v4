# Type Alias: GlobalPropertyHookFunction

> > **GlobalPropertyHookFunction** = () => `void`

Defined in: [packages/fast-check/src/check/runner/configuration/GlobalParameters.ts:13](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/GlobalParameters.ts#L13)

Type of legal hook function that can be used in the global parameter `beforeEach` and/or `afterEach`
Prefer `beforeEach` and/or `afterEach` plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })`

## Returns

`void`

## Remarks

Since 2.3.0

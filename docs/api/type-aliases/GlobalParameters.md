# Type Alias: GlobalParameters

> > **GlobalParameters** = `Pick`\<[`Parameters`](../interfaces/Parameters.md)\<`unknown`\>, `Exclude`\<keyof [`Parameters`](../interfaces/Parameters.md)\<`unknown`\>, `"path"` \| `"examples"` \| `"plugins"`\>\> & `object`

Defined in: [packages/fast-check/src/check/runner/configuration/GlobalParameters.ts:27](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/GlobalParameters.ts#L27)

Type describing the global overrides

## Type Declaration

### ~~afterEach?~~

> `optional` **afterEach?**: [`GlobalPropertyHookFunction`](GlobalPropertyHookFunction.md)

Specify a function that will be called after each execution of a property.
It behaves as-if you manually called `afterEach` method on all the properties you execute with fast-check.

The function will be used for both fast-check#property and fast-check#asyncProperty.
This global override should never be used in conjunction with `asyncAfterEach`.

#### Deprecated

Prefer the life-cycle plugins: `fc.installGlobalPlugin(fc.afterEach(fn))`

#### Remarks

Since 2.3.0

### ~~asyncAfterEach?~~

> `optional` **asyncAfterEach?**: [`GlobalAsyncPropertyHookFunction`](GlobalAsyncPropertyHookFunction.md)

Specify a function that will be called after each execution of an asynchronous property.
It behaves as-if you manually called `afterEach` method on all the asynchronous properties you execute with fast-check.

The function will be used only for fast-check#asyncProperty. It makes synchronous properties created by fast-check#property unable to run.
This global override should never be used in conjunction with `afterEach`.

#### Deprecated

Prefer the life-cycle plugins: `fc.installGlobalPlugin(fc.afterEach(fn))`

#### Remarks

Since 2.3.0

### ~~asyncBeforeEach?~~

> `optional` **asyncBeforeEach?**: [`GlobalAsyncPropertyHookFunction`](GlobalAsyncPropertyHookFunction.md)

Specify a function that will be called before each execution of an asynchronous property.
It behaves as-if you manually called `beforeEach` method on all the asynchronous properties you execute with fast-check.

The function will be used only for fast-check#asyncProperty. It makes synchronous properties created by fast-check#property unable to run.
This global override should never be used in conjunction with `beforeEach`.

#### Deprecated

Prefer the life-cycle plugins: `fc.installGlobalPlugin(fc.beforeEach(fn))`

#### Remarks

Since 2.3.0

### baseSize?

> `optional` **baseSize?**: [`Size`](Size.md)

Define the base size to be used by arbitraries.

By default arbitraries not specifying any size will default to it (except in some cases when used defaultSizeToMaxWhenMaxSpecified is true).
For some arbitraries users will want to override the default and either define another size relative to this one,
or a fixed one.

#### Default Value

`"small"`

#### Remarks

Since 2.22.0

### ~~beforeEach?~~

> `optional` **beforeEach?**: [`GlobalPropertyHookFunction`](GlobalPropertyHookFunction.md)

Specify a function that will be called before each execution of a property.
It behaves as-if you manually called `beforeEach` method on all the properties you execute with fast-check.

The function will be used for both fast-check#property and fast-check#asyncProperty.
This global override should never be used in conjunction with `asyncBeforeEach`.

#### Deprecated

Prefer the life-cycle plugins: `fc.installGlobalPlugin(fc.beforeEach(fn))`

#### Remarks

Since 2.3.0

### defaultSizeToMaxWhenMaxSpecified?

> `optional` **defaultSizeToMaxWhenMaxSpecified?**: `boolean`

When set to `true` and if the size has not been defined for this precise instance,
it will automatically default to `"max"` if the user specified a upper bound for the range
(applies to length and to depth).

When `false`, the size will be defaulted to `baseSize` even if the user specified
a upper bound for the range.

#### Remarks

Since 2.22.0

## Remarks

Since 1.18.0

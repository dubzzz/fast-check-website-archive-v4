# Interface: OptionConstraints\<TNil\>

> Defined in: [packages/fast-check/src/arbitrary/option.ts:14](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L14)

Constraints to be applied on [option](../functions/option.md)

## Remarks

Since 2.2.0

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TNil` | `null` |

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: `string` \| [`DepthIdentifier`](../type-aliases/DepthIdentifier.md)

Defined in: [packages/fast-check/src/arbitrary/option.ts:48](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L48)

Depth identifier can be used to share the current depth between several instances.

By default, if not specified, each instance of option will have its own depth.
In other words: you can have depth=1 in one while you have depth=100 in another one.

#### Remarks

Since 2.14.0

***

### depthSize? {#depthsize}

> `optional` **depthSize?**: [`DepthSize`](../type-aliases/DepthSize.md)

Defined in: [packages/fast-check/src/arbitrary/option.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L33)

While going deeper and deeper within a recursive structure (see [letrec](../functions/letrec.md)),
this factor will be used to increase the probability to generate nil.

#### Remarks

Since 2.14.0

***

### freq? {#freq}

> `optional` **freq?**: `number`

Defined in: [packages/fast-check/src/arbitrary/option.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L20)

The probability to build a nil value is of `1 / freq`.

#### Default Value

```ts
6
```

#### Remarks

Since 1.17.0

***

### maxDepth? {#maxdepth}

> `optional` **maxDepth?**: `number`

Defined in: [packages/fast-check/src/arbitrary/option.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L39)

Maximal authorized depth. Once this depth has been reached only nil will be used.

#### Default Value

Number.POSITIVE_INFINITY — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.14.0

***

### nil? {#nil}

> `optional` **nil?**: `TNil`

Defined in: [packages/fast-check/src/arbitrary/option.ts:26](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L26)

The nil value

#### Default Value

```ts
null
```

#### Remarks

Since 1.17.0

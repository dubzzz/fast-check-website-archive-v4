# Interface: LoremConstraints

> Defined in: [packages/fast-check/src/arbitrary/lorem.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/lorem.ts#L21)

Constraints to be applied on [lorem](../functions/lorem.md)

## Remarks

Since 2.5.0

## Properties

### maxCount? {#maxcount}

> `optional` **maxCount?**: `number`

Defined in: [packages/fast-check/src/arbitrary/lorem.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/lorem.ts#L30)

Maximal number of entities:
- maximal number of words in case mode is 'words'
- maximal number of sentences in case mode is 'sentences'

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.5.0

***

### mode? {#mode}

> `optional` **mode?**: `"words"` \| `"sentences"`

Defined in: [packages/fast-check/src/arbitrary/lorem.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/lorem.ts#L39)

Type of strings that should be produced by [lorem](../functions/lorem.md):
- words: multiple words
- sentences: multiple sentences

#### Default Value

```ts
'words'
```

#### Remarks

Since 2.5.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/lorem.ts:44](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/lorem.ts#L44)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

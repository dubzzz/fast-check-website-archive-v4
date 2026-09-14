# Interface: WebUrlConstraints

> Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L20)

Constraints to be applied on [webUrl](../functions/webUrl.md)

## Remarks

Since 1.14.0

## Properties

### authoritySettings? {#authoritysettings}

> `optional` **authoritySettings?**: [`WebAuthorityConstraints`](WebAuthorityConstraints.md)

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:32](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L32)

Settings for [webAuthority](../functions/webAuthority.md)

#### Default Value

```ts
&#123;&#125;
```

#### Remarks

Since 1.14.0

***

### size? {#size}

> `optional` **size?**: `RelativeSize` \| [`Size`](../type-aliases/Size.md)

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L49)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

***

### validSchemes? {#validschemes}

> `optional` **validSchemes?**: `string`[]

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:26](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L26)

Enforce specific schemes, eg.: http, https

#### Default Value

```ts
['http', 'https']
```

#### Remarks

Since 1.14.0

***

### withFragments? {#withfragments}

> `optional` **withFragments?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:44](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L44)

Enable fragments in the generated url

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

***

### withQueryParameters? {#withqueryparameters}

> `optional` **withQueryParameters?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webUrl.ts:38](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webUrl.ts#L38)

Enable query parameters in the generated url

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

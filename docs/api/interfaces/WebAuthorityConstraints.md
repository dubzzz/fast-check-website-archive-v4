# Interface: WebAuthorityConstraints

> Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:55](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L55)

Constraints to be applied on [webAuthority](../functions/webAuthority.md)

## Remarks

Since 1.14.0

## Properties

### size? {#size}

> `optional` **size?**: `RelativeSize` \| [`Size`](../type-aliases/Size.md)

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:90](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L90)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0

***

### withIPv4? {#withipv4}

> `optional` **withIPv4?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:61](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L61)

Enable IPv4 in host

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

***

### withIPv4Extended? {#withipv4extended}

> `optional` **withIPv4Extended?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:73](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L73)

Enable extended IPv4 format

#### Default Value

```ts
false
```

#### Remarks

Since 1.17.0

***

### withIPv6? {#withipv6}

> `optional` **withIPv6?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:67](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L67)

Enable IPv6 in host

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

***

### withPort? {#withport}

> `optional` **withPort?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:85](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L85)

Enable port suffix

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

***

### withUserInfo? {#withuserinfo}

> `optional` **withUserInfo?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/webAuthority.ts:79](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/webAuthority.ts#L79)

Enable user information prefix

#### Default Value

```ts
false
```

#### Remarks

Since 1.14.0

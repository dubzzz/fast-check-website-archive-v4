# Interface: UuidConstraints

> Defined in: [packages/fast-check/src/arbitrary/uuid.ts:13](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uuid.ts#L13)

Constraints to be applied on [uuid](../functions/uuid.md)

## Remarks

Since 3.21.0

## Properties

### version? {#version}

> `optional` **version?**: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| (`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15`)[]

Defined in: [packages/fast-check/src/arbitrary/uuid.ts:19](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uuid.ts#L19)

Define accepted versions in the [1-15] according to [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562#name-version-field)

#### Default Value

```ts
[1,2,3,4,5,6,7,8]
```

#### Remarks

Since 3.21.0

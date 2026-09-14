# Class: Random

> Defined in: [packages/fast-check/src/random/generator/Random.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L17)

Wrapper around an instance of a `pure-rand`'s random number generator
offering a simpler interface to deal with random with impure patterns

## Constructors

### Constructor

> **new Random**(`sourceRng`): `Random`

Defined in: [packages/fast-check/src/random/generator/Random.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L25)

Create a mutable random number generator by cloning the passed one and mutate it

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceRng` | [`RandomGenerator`](../type-aliases/RandomGenerator.md) | Immutable random generator from pure-rand library, will not be altered (a clone will be) |

#### Returns

`Random`

## Methods

### clone() {#clone}

> **clone**(): `Random`

Defined in: [packages/fast-check/src/random/generator/Random.ts:32](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L32)

Clone the random number generator

#### Returns

`Random`

***

### getState() {#getstate}

> **getState**(): readonly `number`[] \| `undefined`

Defined in: [packages/fast-check/src/random/generator/Random.ts:91](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L91)

Extract the internal state of the internal RandomGenerator backing the current instance of Random

#### Returns

readonly `number`[] \| `undefined`

***

### ~~next()~~ {#next}

> **next**(`bits`): `number`

Defined in: [packages/fast-check/src/random/generator/Random.ts:41](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L41)

Generate an integer having `bits` random bits

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bits` | `number` | Number of bits to generate |

#### Returns

`number`

#### Deprecated

Prefer [nextInt](#nextint) with explicit bounds: `nextInt(0, (1 << bits) - 1)`

***

### nextBigInt() {#nextbigint}

> **nextBigInt**(`min`, `max`): `bigint`

Defined in: [packages/fast-check/src/random/generator/Random.ts:74](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L74)

Generate a random bigint between min (included) and max (included)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `bigint` | Minimal bigint value |
| `max` | `bigint` | Maximal bigint value |

#### Returns

`bigint`

***

### ~~nextBoolean()~~ {#nextboolean}

> **nextBoolean**(): `boolean`

Defined in: [packages/fast-check/src/random/generator/Random.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L49)

Generate a random boolean

#### Returns

`boolean`

#### Deprecated

Prefer [nextInt](#nextint) with explicit bounds: `nextInt(0, 1) === 1`

***

### ~~nextDouble()~~ {#nextdouble}

> **nextDouble**(): `number`

Defined in: [packages/fast-check/src/random/generator/Random.ts:82](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L82)

Generate a random floating point number between 0.0 (included) and 1.0 (excluded)

#### Returns

`number`

#### Deprecated

Prefer [nextInt](#nextint) with explicit bounds

***

### nextInt() {#nextint}

#### Call Signature

> **nextInt**(): `number`

Defined in: [packages/fast-check/src/random/generator/Random.ts:57](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L57)

Generate a random integer (32 bits)

##### Returns

`number`

##### Deprecated

Prefer [nextInt](#nextint) with explicit bounds: `nextInt(-2147483648, 2147483647)`

#### Call Signature

> **nextInt**(`min`, `max`): `number`

Defined in: [packages/fast-check/src/random/generator/Random.ts:64](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/random/generator/Random.ts#L64)

Generate a random integer between min (included) and max (included)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Minimal integer value |
| `max` | `number` | Maximal integer value |

##### Returns

`number`

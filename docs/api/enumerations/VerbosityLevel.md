# Enumeration: VerbosityLevel

> Defined in: [packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts:6](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts#L6)

Verbosity level

## Remarks

Since 1.9.1

## Enumeration Members

### None {#none}

> **None**: `0`

Defined in: [packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts:16](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts#L16)

Level 0 (default)

Minimal reporting:
- minimal failing case
- error log corresponding to the minimal failing case

#### Remarks

Since 1.9.1

***

### Verbose {#verbose}

> **Verbose**: `1`

Defined in: [packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts:26](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts#L26)

Level 1

Failures reporting:
- same as `VerbosityLevel.None`
- list all the failures encountered during the shrinking process

#### Remarks

Since 1.9.1

***

### VeryVerbose {#veryverbose}

> **VeryVerbose**: `2`

Defined in: [packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/VerbosityLevel.ts#L36)

Level 2

Execution flow reporting:
- same as `VerbosityLevel.None`
- all runs with their associated status displayed as a tree

#### Remarks

Since 1.9.1

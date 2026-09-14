# Interface: RunDetailsCommon\<Ts\>

> Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:91](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L91)

Shared part between variants of RunDetails

## Remarks

Since 2.2.0

## Extended by

- [`RunDetailsFailureProperty`](RunDetailsFailureProperty.md)
- [`RunDetailsFailureTooManySkips`](RunDetailsFailureTooManySkips.md)
- [`RunDetailsFailureInterrupted`](RunDetailsFailureInterrupted.md)
- [`RunDetailsSuccess`](RunDetailsSuccess.md)

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Properties

### counterexample {#counterexample}

> **counterexample**: `Ts` \| `null`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:136](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L136)

In case of failure: the counterexample contains the minimal failing case (first failure after shrinking)

#### Remarks

Since 0.0.7

***

### counterexamplePath {#counterexamplepath}

> **counterexamplePath**: `string` \| `null`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:149](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L149)

In case of failure: path to the counterexample

For replay purposes, it can be forced in [assert](../functions/assert.md), [check](../functions/check.md), [sample](../functions/sample.md) and [statistics](../functions/statistics.md) using `Parameters`

#### Remarks

Since 1.0.0

***

### errorInstance {#errorinstance}

> **errorInstance**: `unknown`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:141](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L141)

In case of failure: it contains the error that has been thrown if any

#### Remarks

Since 3.0.0

***

### executionSummary {#executionsummary}

> **executionSummary**: [`ExecutionTree`](ExecutionTree.md)\<`Ts`\>[]

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:172](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L172)

Execution summary of the run

Traces the origin of each value encountered during the test and its execution status.
Can help to diagnose shrinking issues.

You must enable verbose with at least `Verbosity.Verbose` in `Parameters`
in order to have values in it:
- Verbose: Only failures
- VeryVerbose: Failures, Successes and Skipped

#### Remarks

Since 1.9.0

***

### failed {#failed}

> **failed**: `boolean`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:96](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L96)

Does the property failed during the execution of [check](../functions/check.md)?

#### Remarks

Since 0.0.7

***

### failures {#failures}

> **failures**: `Ts`[]

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:158](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L158)

List all failures that have occurred during the run

You must enable verbose with at least `Verbosity.Verbose` in `Parameters`
in order to have values in it

#### Remarks

Since 1.1.0

***

### interrupted {#interrupted}

> **interrupted**: `boolean`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:101](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L101)

Was the execution interrupted?

#### Remarks

Since 1.19.0

***

### numRuns {#numruns}

> **numRuns**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:110](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L110)

Number of runs

- In case of failed property: Number of runs up to the first failure (including the failure run)
- Otherwise: Number of successful executions

#### Remarks

Since 1.0.0

***

### numShrinks {#numshrinks}

> **numShrinks**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:124](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L124)

Number of shrinks required to get to the minimal failing case (aka counterexample)

#### Remarks

Since 1.0.0

***

### numSkips {#numskips}

> **numSkips**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:119](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L119)

Number of skipped entries due to failed pre-condition

As `numRuns` it only takes into account the skipped values that occured before the first failure.
Refer to [pre](../functions/pre.md) to add such pre-conditions.

#### Remarks

Since 1.3.0

***

### runConfiguration {#runconfiguration}

> **runConfiguration**: [`Parameters`](Parameters.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:186](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L186)

Configuration of the run

It includes both local parameters set on [check](../functions/check.md) or [assert](../functions/assert.md)
and global ones specified using [configureGlobal](../functions/configureGlobal.md)

#### Remarks

Since 1.25.0

***

### seed {#seed}

> **seed**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:131](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L131)

Seed that have been used by the run

It can be forced in [assert](../functions/assert.md), [check](../functions/check.md), [sample](../functions/sample.md) and [statistics](../functions/statistics.md) using `Parameters`

#### Remarks

Since 0.0.7

***

### verbose {#verbose}

> **verbose**: [`VerbosityLevel`](../enumerations/VerbosityLevel.md)

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:177](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L177)

Verbosity level required by the user

#### Remarks

Since 1.9.0

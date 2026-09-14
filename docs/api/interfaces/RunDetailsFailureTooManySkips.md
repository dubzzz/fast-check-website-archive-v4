# Interface: RunDetailsFailureTooManySkips\<Ts\>

> Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:45](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L45)

Run reported as failed because
too many retries have been attempted to generate valid values

Refer to [RunDetailsCommon](RunDetailsCommon.md) for more details

## Remarks

Since 1.25.0

## Extends

- [`RunDetailsCommon`](RunDetailsCommon.md)\<`Ts`\>

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Properties

### counterexample {#counterexample}

> **counterexample**: `null`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:48](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L48)

In case of failure: the counterexample contains the minimal failing case (first failure after shrinking)

#### Remarks

Since 0.0.7

#### Overrides

[`RunDetailsCommon`](RunDetailsCommon.md).[`counterexample`](RunDetailsCommon.md#counterexample)

***

### counterexamplePath {#counterexamplepath}

> **counterexamplePath**: `null`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L49)

In case of failure: path to the counterexample

For replay purposes, it can be forced in [assert](../functions/assert.md), [check](../functions/check.md), [sample](../functions/sample.md) and [statistics](../functions/statistics.md) using `Parameters`

#### Remarks

Since 1.0.0

#### Overrides

[`RunDetailsCommon`](RunDetailsCommon.md).[`counterexamplePath`](RunDetailsCommon.md#counterexamplepath)

***

### errorInstance {#errorinstance}

> **errorInstance**: `null`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:50](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L50)

In case of failure: it contains the error that has been thrown if any

#### Remarks

Since 3.0.0

#### Overrides

[`RunDetailsCommon`](RunDetailsCommon.md).[`errorInstance`](RunDetailsCommon.md#errorinstance)

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

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`executionSummary`](RunDetailsCommon.md#executionsummary)

***

### failed {#failed}

> **failed**: `true`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:46](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L46)

Does the property failed during the execution of [check](../functions/check.md)?

#### Remarks

Since 0.0.7

#### Overrides

[`RunDetailsCommon`](RunDetailsCommon.md).[`failed`](RunDetailsCommon.md#failed)

***

### failures {#failures}

> **failures**: `Ts`[]

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:158](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L158)

List all failures that have occurred during the run

You must enable verbose with at least `Verbosity.Verbose` in `Parameters`
in order to have values in it

#### Remarks

Since 1.1.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`failures`](RunDetailsCommon.md#failures)

***

### interrupted {#interrupted}

> **interrupted**: `false`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:47](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L47)

Was the execution interrupted?

#### Remarks

Since 1.19.0

#### Overrides

[`RunDetailsCommon`](RunDetailsCommon.md).[`interrupted`](RunDetailsCommon.md#interrupted)

***

### numRuns {#numruns}

> **numRuns**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:110](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L110)

Number of runs

- In case of failed property: Number of runs up to the first failure (including the failure run)
- Otherwise: Number of successful executions

#### Remarks

Since 1.0.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`numRuns`](RunDetailsCommon.md#numruns)

***

### numShrinks {#numshrinks}

> **numShrinks**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:124](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L124)

Number of shrinks required to get to the minimal failing case (aka counterexample)

#### Remarks

Since 1.0.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`numShrinks`](RunDetailsCommon.md#numshrinks)

***

### numSkips {#numskips}

> **numSkips**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:119](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L119)

Number of skipped entries due to failed pre-condition

As `numRuns` it only takes into account the skipped values that occured before the first failure.
Refer to [pre](../functions/pre.md) to add such pre-conditions.

#### Remarks

Since 1.3.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`numSkips`](RunDetailsCommon.md#numskips)

***

### runConfiguration {#runconfiguration}

> **runConfiguration**: [`Parameters`](Parameters.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:186](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L186)

Configuration of the run

It includes both local parameters set on [check](../functions/check.md) or [assert](../functions/assert.md)
and global ones specified using [configureGlobal](../functions/configureGlobal.md)

#### Remarks

Since 1.25.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`runConfiguration`](RunDetailsCommon.md#runconfiguration)

***

### seed {#seed}

> **seed**: `number`

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:131](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L131)

Seed that have been used by the run

It can be forced in [assert](../functions/assert.md), [check](../functions/check.md), [sample](../functions/sample.md) and [statistics](../functions/statistics.md) using `Parameters`

#### Remarks

Since 0.0.7

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`seed`](RunDetailsCommon.md#seed)

***

### verbose {#verbose}

> **verbose**: [`VerbosityLevel`](../enumerations/VerbosityLevel.md)

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:177](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L177)

Verbosity level required by the user

#### Remarks

Since 1.9.0

#### Inherited from

[`RunDetailsCommon`](RunDetailsCommon.md).[`verbose`](RunDetailsCommon.md#verbose)

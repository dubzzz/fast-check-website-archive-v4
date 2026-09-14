# Interface: Parameters\<T\>

> Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:12](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L12)

Customization of the parameters used to run the properties

## Remarks

Since 0.0.6

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

## Properties

### ~~asyncReporter?~~ {#asyncreporter}

> `optional` **asyncReporter?**: (`runDetails`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:228](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L228)

Replace the default reporter handling errors by a custom one

Reporter is responsible to throw in case of failure: default one throws whenever `runDetails.failed` is true.
But you may want to change this behaviour in yours.

Only used when calling [assert](../functions/assert.md)
Cannot be defined in conjonction with `reporter`
Not compatible with synchronous properties: runner will throw

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runDetails` | [`RunDetails`](../type-aliases/RunDetails.md)\<`T`\> |

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
// Prefer a plugin relying on the `onAllRunsComplete` hook.
const reporterPlugin: fc.Plugin<unknown> = () => ({
  onAllRunsComplete: async (runDetails) => {
    if (runDetails.failed) {
      throw new Error(fc.asyncDefaultReportMessage(runDetails));
    }
  },
});
await fc.assert(asyncProperty, { plugins: [reporterPlugin] });
```

#### Remarks

Since 1.25.0

#### Deprecated

Prefer a plugin relying on an asynchronous `onAllRunsComplete` hook: `fc.assert(asyncProperty, { plugins: [reporterPlugin] })`

***

### endOnFailure? {#endonfailure}

> `optional` **endOnFailure?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:175](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L175)

Stop run on failure

It makes the run stop at the first encountered failure without shrinking.

When used in complement to `seed` and `path`,
it replays only the minimal counterexample.

#### Remarks

Since 1.11.0

***

### examples? {#examples}

> `optional` **examples?**: `T`[]

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:164](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L164)

Custom values added at the beginning of generated ones

It enables users to come with examples they want to test at every run

#### Remarks

Since 1.4.0

***

### ~~ignoreEqualValues?~~ {#ignoreequalvalues}

> `optional` **ignoreEqualValues?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:128](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L128)

Discard runs corresponding to already tried values.

WARNING:
Discarded runs will not be replaced.
In other words, if you ask for 100 runs and have 2 discarded runs you will only have 98 effective runs.

NOTE: Relies on `fc.stringify` to check the equality.

#### Remarks

Since 2.14.0

#### Deprecated

Prefer the `ignoreEqualValues` plugin: `fc.assert(property, { plugins: [fc.ignoreEqualValues()] })`

***

### includeErrorInReport? {#includeerrorinreport}

> `optional` **includeErrorInReport?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:240](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L240)

By default the Error causing the failure of the predicate will not be directly exposed within the message
of the Error thown by fast-check. It will be exposed by a cause field attached to the Error.

The Error with cause has been supported by Node since 16.14.0 and is properly supported in many test runners.

But if the original Error fails to appear within your test runner,
Or if you prefer the Error to be included directly as part of the message of the resulted Error,
you can toggle this flag and the Error produced by fast-check in case of failure will expose the source Error
as part of the message and not as a cause.

***

### ~~interruptAfterTimeLimit?~~ {#interruptaftertimelimit}

> `optional` **interruptAfterTimeLimit?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:94](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L94)

Interrupt test execution after a given time limit: disabled by default

NOTE: Relies on `Date.now()`.

NOTE:
Useful to avoid having too long running processes in your CI.
Replay capability (see `seed`, `path`) can still be used if needed.

WARNING:
If the test got interrupted before any failure occured
and before it reached the requested number of runs specified by `numRuns`
it will be marked as success. Except if `markInterruptAsFailure` has been set to `true`

#### Remarks

Since 1.19.0

#### Deprecated

Prefer the `interruptAfterTimeLimit` plugin: `fc.assert(property, { plugins: [fc.interruptAfterTimeLimit(timeMs)] })`

***

### ~~markInterruptAsFailure?~~ {#markinterruptasfailure}

> `optional` **markInterruptAsFailure?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:101](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L101)

Mark interrupted runs as failed runs if preceded by one success or more: disabled by default
Interrupted with no success at all always defaults to failure whatever the value of this flag.

#### Remarks

Since 1.19.0

#### Deprecated

Prefer the `failOnInterrupt` option of the `interruptAfterTimeLimit` plugin: `fc.interruptAfterTimeLimit(timeMs, { failOnInterrupt: true })`

***

### maxSkipsPerRun? {#maxskipsperrun}

> `optional` **maxSkipsPerRun?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:52](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L52)

Maximal number of skipped values per run

Skipped is considered globally, so this value is used to compute maxSkips = maxSkipsPerRun * numRuns.
Runner will consider a run to have failed if it skipped maxSkips+1 times before having generated numRuns valid entries.

See [pre](../functions/pre.md) for more details on pre-conditions

#### Remarks

Since 1.3.0

***

### numRuns? {#numruns}

> `optional` **numRuns?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:41](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L41)

Number of runs before success: 100 by default

#### Remarks

Since 1.0.0

***

### path? {#path}

> `optional` **path?**: `string`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:134](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L134)

Way to replay a failing property directly with the counterexample.
It can be fed with the counterexamplePath returned by the failing test (requires `seed` too).

#### Remarks

Since 1.0.0

***

### plugins? {#plugins}

> `optional` **plugins?**: [`Plugin`](../type-aliases/Plugin.md)\<`T`\>[]

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:253](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L253)

Set of plugins extending the way the property gets executed by the runner

Each plugin is instantiated once per run.
They can be leveraged to control and enrich the execution flow of each predicate.

They come after the plugins installed globally via [installGlobalPlugin](../functions/installGlobalPlugin.md).
At execution time, the first plugin of the resulting array is entered first while the last one is the closest to the predicate.
Plugins are instantiated in order.

#### Remarks

Since 4.10.0

***

### randomType? {#randomtype}

> `optional` **randomType?**: [`RandomType`](../type-aliases/RandomType.md) \| ((`seed`) => [`RandomGenerator`](../type-aliases/RandomGenerator.md))

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L36)

Random number generator: `xorshift128plus` by default

Random generator is the core element behind the generation of random values - changing it might directly impact the quality and performances of the generation of random values.
It can be one of: 'mersenne', 'congruential', 'congruential32', 'xorshift128plus', 'xoroshiro128plus'
Or any function able to build a `RandomGenerator` based on a seed

As required since pure-rand v6.0.0, when passing a builder for [RandomGenerator](../type-aliases/RandomGenerator.md),
the random number generator must generate values between -0x80000000 and 0x7fffffff.

#### Remarks

Since 1.6.0

***

### ~~reporter?~~ {#reporter}

> `optional` **reporter?**: (`runDetails`) => `void`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:201](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L201)

Replace the default reporter handling errors by a custom one

Reporter is responsible to throw in case of failure: default one throws whenever `runDetails.failed` is true.
But you may want to change this behaviour in yours.

Only used when calling [assert](../functions/assert.md)
Cannot be defined in conjonction with `asyncReporter`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runDetails` | [`RunDetails`](../type-aliases/RunDetails.md)\<`T`\> |

#### Returns

`void`

#### Example

```typescript
// Prefer a plugin relying on the `onAllRunsComplete` hook.
const reporterPlugin: fc.Plugin<unknown> = () => ({
  onAllRunsComplete: (runDetails) => {
    if (runDetails.failed) {
      throw new Error(fc.defaultReportMessage(runDetails));
    }
  },
});
fc.assert(property, { plugins: [reporterPlugin] });
```

#### Remarks

Since 1.25.0

#### Deprecated

Prefer a plugin relying on the `onAllRunsComplete` hook: `fc.assert(property, { plugins: [reporterPlugin] })`

***

### seed? {#seed}

> `optional` **seed?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L23)

Initial seed of the generator: `Date.now()` by default

It can be forced to replay a failed run.

In theory, seeds are supposed to be 32-bit integers.
In case of double value, the seed will be rescaled into a valid 32-bit integer (eg.: values between 0 and 1 will be evenly spread into the range of possible seeds).

#### Remarks

Since 0.0.6

***

### skipAllAfterTimeLimit? {#skipallaftertimelimit}

> `optional` **skipAllAfterTimeLimit?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:76](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L76)

Skip all runs after a given time limit: disabled by default

NOTE: Relies on `Date.now()`.

NOTE:
Useful to stop too long shrinking processes.
Replay capability (see `seed`, `path`) can resume the shrinking.

WARNING:
It skips runs. Thus test might be marked as failed.
Indeed, it might not reached the requested number of successful runs.

#### Remarks

Since 1.15.0

***

### ~~skipEqualValues?~~ {#skipequalvalues}

> `optional` **skipEqualValues?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:115](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L115)

Skip runs corresponding to already tried values.

WARNING:
Discarded runs will be retried. Under the hood they are simple calls to `fc.pre`.
In other words, if you ask for 100 runs but your generator can only generate 10 values then the property will fail as 100 runs will never be reached.
Contrary to `ignoreEqualValues` you always have the number of runs you requested.

NOTE: Relies on `fc.stringify` to check the equality.

#### Remarks

Since 2.14.0

#### Deprecated

Prefer the `skipEqualValues` plugin: `fc.assert(property, { plugins: [fc.skipEqualValues()] })`

***

### ~~timeout?~~ {#timeout}

> `optional` **timeout?**: `number`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:60](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L60)

Maximum time in milliseconds for the predicate to answer: disabled by default

WARNING: Only works for async code (see [asyncProperty](../functions/asyncProperty.md)), will not interrupt a synchronous code.

#### Remarks

Since 0.0.11

#### Deprecated

Prefer the `timeout` plugin: `fc.assert(property, { plugins: [fc.timeout(timeMs)] })`

***

### ~~unbiased?~~ {#unbiased}

> `optional` **unbiased?**: `boolean`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:145](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L145)

Force the use of unbiased arbitraries: biased by default

#### Remarks

Since 1.1.0

#### Deprecated

Prefer the `unbiased` plugin: `fc.assert(property, { plugins: [fc.unbiased()] })`

***

### verbose? {#verbose}

> `optional` **verbose?**: `boolean` \| [`VerbosityLevel`](../enumerations/VerbosityLevel.md)

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:156](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L156)

Enable verbose mode: [VerbosityLevel.None](../enumerations/VerbosityLevel.md#none) by default

Using `verbose: true` is equivalent to `verbose: VerbosityLevel.Verbose`

It can prove very useful to troubleshoot issues.
See [VerbosityLevel](../enumerations/VerbosityLevel.md) for more details on each level.

#### Remarks

Since 1.1.0

## Methods

### logger()? {#logger}

> `optional` **logger**(`v`): `void`

Defined in: [packages/fast-check/src/check/runner/configuration/Parameters.ts:139](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/Parameters.ts#L139)

Logger (see [statistics](../functions/statistics.md)): `console.log` by default

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

#### Returns

`void`

#### Remarks

Since 0.0.6

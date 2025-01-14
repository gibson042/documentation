# Smart Contract Basics

Before we look at how to make a contract such as the one in [the
basic dapp](../getting-started/) in the previous section, let's cover some basics.

A contract is defined by a JavaScript module that exports a `start` function
that implements the contract's API.

<<< @/../snippets/zoe/src/01-hello.js#start

Let's start with a contract with a simple `greet` function:

<<< @/../snippets/zoe/src/01-hello.js#greet

The `start` function can expose the `greet` function
as part of the contract API by making it
a method of the contract's `publicFacet`:

<<< @/../snippets/zoe/src/01-hello.js#publicFacet

We mark it `Far(...)` to allow callers to use it from outside the contract
and give it a suggestive interface name for debugging.
_We'll discuss [Far in more detail](../js-programming/far) later._

Putting it all together:

<<< @/../snippets/zoe/src/01-hello.js#contract

## Using, testing a contract

Let's use some tests to explore how a contract is used.

Agoric contracts are typically tested
using the [ava](https://github.com/avajs/ava) framework.
They start with `@endo/init` to establish a [Hardened JavaScript](../js-programming/hardened-js) environment:

<<< @/../snippets/zoe/contracts/test-zoe-hello.js#test-imports

_We'll talk more about [using `E()` for async method calls](../js-programming/eventual-send) later._

A test that the `greet` method works as expected looks like:

<<< @/../snippets/zoe/contracts/test-zoe-hello.js#test1

See also:

- [\$LOCKDOWN_OPTIONS for better diagnositcs](https://github.com/Agoric/agoric-sdk/wiki/Developing-with-better-error-diagnostics)
- [\$DEBUG](https://github.com/Agoric/agoric-sdk/blob/master/docs/env.md#debug)
- [\$TRACK_TURNS](https://github.com/Agoric/agoric-sdk/blob/master/docs/env.md#track_turns)

## State

Contracts can use ordinary variables and data structures for state.

<<< @/../snippets/zoe/src/02-state.js#startfn

Using `makeRoom` changes the results of the following call to `getRoomCount`:

<<< @/../snippets/zoe/contracts/test-zoe-hello.js#test-state

::: tip Heap state is persistent

Ordinary heap state persists between contract invocations.

We'll discuss more explicit state management for
large numbers of objects (_virtual objects_) and
objects that last across upgrades ([durable objects](./contract-upgrade#durability)) later.

:::

## Access Control with Objects

We can limit the `publicFacet` API to read-only by omitting the `set()` method.

The `creatorFacet` is provided only to the caller who creates the contract instance.

<<< @/../snippets/zoe/src/03-access.js

Trying to `set` using the `publicFacet` throws, but
using the `creatorFacet` works:

<<< @/../snippets/zoe/contracts/test-zoe-hello.js#test-access

Note that the `set()` method has no access check inside it.
Access control is based on separation of powers between
the `publicFacet`, which is expected to be shared widely,
and the `creatorFacet`, which is closely held.
_We'll discuss this [object capabilities](../js-programming/hardened-js#object-capabilities-ocaps) approach more later._

Next, let's look at minting and trading assets with [Zoe](../zoe/).

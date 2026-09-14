"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9684"],{4419(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>h,frontMatter:()=>a,contentTitle:()=>l,toc:()=>u,assets:()=>o});var n=JSON.parse('{"id":"tutorials/detect-race-conditions/multiple-batches-of-calls","title":"Multiple batches of calls","description":"Third iteration, not only one batch firing all queries but multiple batches","source":"@site/docs/tutorials/detect-race-conditions/multiple-batches-of-calls.mdx","sourceDirName":"tutorials/detect-race-conditions","slug":"/tutorials/detect-race-conditions/multiple-batches-of-calls/","permalink":"/docs/tutorials/detect-race-conditions/multiple-batches-of-calls/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Nicolas DUBIEN","lastUpdatedAt":1787085713000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/tutorials/detect-race-conditions/multiple-batches-of-calls/","description":"Third iteration, not only one batch firing all queries but multiple batches"},"sidebar":"tutorialSidebar","previous":{"title":"One step closer to real usages","permalink":"/docs/tutorials/detect-race-conditions/one-step-closer-to-real-usages/"},"next":{"title":"The missing part","permalink":"/docs/tutorials/detect-race-conditions/the-missing-part/"}}'),r=s(61058),i=s(24801),c=s(24479);let a={sidebar_position:3,slug:"/tutorials/detect-race-conditions/multiple-batches-of-calls/",description:"Third iteration, not only one batch firing all queries but multiple batches"},l="Multiple batches of calls",o={},u=[{value:"Zoom on previous test",id:"zoom-on-previous-test",level:2},{value:"The choice of integer",id:"the-choice-of-integer",level:3},{value:"The array version",id:"the-array-version",level:3},{value:"Towards next test",id:"towards-next-test",level:2},{value:"Your turn!",id:"your-turn",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"multiple-batches-of-calls",children:"Multiple batches of calls"})}),"\n",(0,r.jsx)(t.h2,{id:"zoom-on-previous-test",children:"Zoom on previous test"}),"\n",(0,r.jsx)(t.h3,{id:"the-choice-of-integer",children:"The choice of integer"}),"\n",(0,r.jsxs)(t.p,{children:["In the previous part, we suggested to run the test against an arbitrary number of calls to ",(0,r.jsx)(t.code,{children:"call"}),". The option we recommend and implemented is based on ",(0,r.jsx)(t.code,{children:"integer"})," arbitrary. We use it to give us the number of calls we should do."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const queued = queue(s.scheduleFunction(call));\nfor (let id = 0; id !== numCalls; ++id) {\n  expectedAnswers.push(id);\n  pendingQueries.push(queued(id).then((v) => seenAnswers.push(v)));\n}\nawait s.waitFor(Promise.all(pendingQueries));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We based our choice on the fact that the ",(0,r.jsx)(t.code,{children:"queue"})," helper is designed to accept any input, regardless of its value. Thus, there was no particular reason to generate values for the inputs themselves, as they are never consumed by the logic of ",(0,r.jsx)(t.code,{children:"queue"}),". Using integers from 0 onwards allows for simpler debugging, as opposed to arbitrary inputs like 123 or 45."]}),"\n",(0,r.jsx)(t.h3,{id:"the-array-version",children:"The array version"}),"\n",(0,r.jsx)(t.p,{children:"Here is how we could have written the array alternative:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// ids being the result of fc.array(fc.nat(), {minLength: 1})\nconst queued = queue(s.scheduleFunction(call));\nfor (const id of ids) {\n  expectedAnswers.push(id);\n  pendingQueries.push(queued(id).then((v) => seenAnswers.push(v)));\n}\nawait s.waitFor(Promise.all(pendingQueries));\n"})}),"\n",(0,r.jsx)(t.h2,{id:"towards-next-test",children:"Towards next test"}),"\n",(0,r.jsx)(t.p,{children:"Our current test doesn't fully capture all possible issues that could arise. In fact, the previous implementation sent all requests at the same time in a synchronous way, without firing some, waiting a bit, and then firing others."}),"\n",(0,r.jsx)(t.p,{children:"In the next iteration, we aim to declare and run multiple batches of calls: firing them in order will simplify our expectations."}),"\n",(0,r.jsxs)(t.p,{children:["To run things in an ordered way in fast-check, we need to use what we call scheduled sequences. Scheduled sequences can be declared by using the helper ",(0,r.jsx)(t.a,{href:"/docs/advanced/race-conditions/#schedulesequence",children:(0,r.jsx)(t.code,{children:"scheduleSequence"})}),". When running scheduled tasks, fast-check interleaves parts coming from sequences in-between and ensures that items in a sequence are run and waited for in order. This means that an item in the sequence will never start before the one before it has stopped. To declare and use a sequence, you can follow the example below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const { task } = s.scheduleSequence([\n  async () => {\n    // 1st item:\n    // Runnning something for the 1st item.\n  },\n  async () => {\n    // 2nd item:\n    // Runnning something for the 2nd item.\n    // Will never start before the end of `await firstItem()`.\n    // Will have to be scheduled by the runner to run, in other words, it may start\n    // very long after the 1st item.\n  },\n]);\n\n// The sequence also provides a `task` that can be awaited in order to know when all items\n// of the sequence have been fully executed. It also provides other values such as done or\n// faulty if you want to know bugs that may have occurred during the sechduling of it.\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Non-batched alternative?",type:"info",children:(0,r.jsxs)(t.p,{children:["We will discuss about a non-batched alternative in the next page. The batch option we suggest here has the benefit to make you use the ",(0,r.jsx)(t.a,{href:"/docs/advanced/race-conditions/#schedulesequence",children:(0,r.jsx)(t.code,{children:"scheduleSequence"})})," helper coming with fast-check."]})}),"\n",(0,r.jsx)(t.h2,{id:"your-turn",children:"Your turn!"}),"\n",(0,r.jsx)(c.Fn,{}),"\n",(0,r.jsx)(t.admonition,{title:"What to expect?",type:"info",children:(0,r.jsxs)(t.p,{children:["Your test should help us to detect a bug in our current implementation of ",(0,r.jsx)(t.code,{children:"queue"}),"."]})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #1"})}),(0,r.jsx)(t.p,{children:"Previous test can be considered as a single batch."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"for (let id = 0; id !== numCalls; ++id) {\n  expectedAnswers.push(id);\n  pendingQueries.push(queued(id).then((v) => seenAnswers.push(v)));\n}\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #2"})}),(0,r.jsxs)(t.p,{children:["In order to achieve our goal of running multiple batches of calls in an ordered way, we need to generate multiple values of ",(0,r.jsx)(t.code,{children:"numCalls"}),". Instead of generating a single batch with ",(0,r.jsx)(t.code,{children:"numCalls"})," calls using the following code:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"fc.integer({ min: 1, max: 10 });\n"})}),(0,r.jsx)(t.p,{children:"we can generate multiple batches by using the following code:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"fc.array(fc.integer({ min: 1, max: 10 }), { minLength: 1 });\n"})}),(0,r.jsx)(t.p,{children:"This will allow us to generate multiple batches of calls, each containing a random number of calls."})]})]})}function h(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24479(e,t,s){s.d(t,{a4:()=>N,ib:()=>I,Fn:()=>P,tc:()=>Q,IO:()=>k});var n=s(61058),r=s(13706),i=s(75312);let c="playgroundActions_DQk7",a=`
export function queue(fun) {
  return fun;
}`.trim(),l=`
export function queue(fun) {
  let lastQuery = Promise.resolve();
  return (...args) => {
    const currentQuery = fun(...args);
    const returnedQuery = lastQuery.then(() => currentQuery);
    lastQuery = currentQuery;
    return returnedQuery;
  };
}`.trim(),o=`
export function queue(fun) {
  let pastQueries = [];
  return (...args) => {
    const currentQuery = fun(...args);
    const returnedQuery = Promise.all(pastQueries)
      .finally(() => (pastQueries = []))
      .then(() => currentQuery);
    pastQueries.push(currentQuery);
    return returnedQuery;
  };
}`.trim(),u=`
export function queue(fun) {
  let pastQueries = [];
  return (...args) => {
    const currentQuery = fun(...args);
    const knownPastQueries = pastQueries;
    const returnedQuery = Promise.all(pastQueries)
      .finally(() => {
        if (knownPastQueries === pastQueries)
          pastQueries = [];
      })
      .then(() => currentQuery);
    pastQueries = [...pastQueries, currentQuery];
    return returnedQuery;
  };
}`.trim(),d=`
export function queue(fun) {
  let queryId = 0;
  let lastQuery = null;
  return (...args) => {
    const selfQueryId = ++queryId;
    if (lastQuery === null) {
      lastQuery = fun(...args);
    } else {
      lastQuery = lastQuery
        .then(
          () => fun(...args),
          () => fun(...args),
        );
    }
    lastQuery
      .finally(() => {
        if (queryId === selfQueryId)
          lastQuery = null;
      });
    return lastQuery;
  };
}`.trim(),h=`
export function queue(fun) {
  let pending = false;
  let onDone = [];
  function runNext() {
    if (onDone.length === 0) {
      pending = false;
      return;
    }
    onDone.shift()();
  }
  return (...args) => {
    if (!pending) {
      pending = true;
      return new Promise((resolve, reject) => {
        const p = fun(...args);
        p.then(runNext, runNext);
        p.then(resolve, reject);
      });
    }
    return new Promise((resolve, reject) => {
      onDone.push(() => {
        const p = fun(...args);
        p.then(runNext, runNext);
        p.then(resolve, reject);
      });
    });
  };
}`.trim(),p=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';

test('should resolve in call order', async () => {
  // Arrange
  const seenAnswers = [];
  const call = vi.fn()
    .mockImplementation(v => Promise.resolve(v));

  // Act
  const queued = queue(call);
  await Promise.all([
    queued(1).then(v => (seenAnswers.push(v))),
    queued(2).then(v => (seenAnswers.push(v))),
  ]);

  // Assert
  expect(seenAnswers).toEqual([1, 2]);
})`.trim(),f=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), async (s) => {
    // Arrange
    const pendingQueries = [];
    const seenAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));

    // Act
    const queued = queue(s.scheduleFunction(call));
    pendingQueries.push(queued(1).then(v => (seenAnswers.push(v))));
    pendingQueries.push(queued(2).then(v => (seenAnswers.push(v))));
    await s.waitFor(Promise.all(pendingQueries));

    // Assert
    expect(seenAnswers).toEqual([1, 2]);
  }))
})`.trim(),m=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), async (s) => {
    // Arrange
    const seenAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));

    // Act
    const queued = queue(s.scheduleFunction(call));
    queued(1).then(v => (seenAnswers.push(v)));
    queued(2).then(v => (seenAnswers.push(v)));
    await s.waitAll();

    // Assert
    expect(seenAnswers).toEqual([1, 2]);
  }))
})`.trim(),v=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), fc.integer({min: 1, max: 10}), async (s, numCalls) => {
    // Arrange
    const pendingQueries = [];
    const seenAnswers = [];
    const expectedAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));

    // Act
    const queued = queue(s.scheduleFunction(call));
    for (let id = 0 ; id !== numCalls ; ++id) {
      expectedAnswers.push(id);
      pendingQueries.push(queued(id).then(v => (seenAnswers.push(v))));
    }
    await s.waitFor(Promise.all(pendingQueries));

    // Assert
    expect(seenAnswers).toEqual(expectedAnswers);
  }))
})`.trim(),g=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), fc.integer({min: 1, max: 10}), async (s, numCalls) => {
    // Arrange
    const pendingQueries = [];
    const seenAnswers = [];
    const expectedAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));

    // Act
    const queued = queue(s.scheduleFunction(call));
    for (let id = 0 ; id !== numCalls ; ++id) {
      pendingQueries.push(
        s.schedule(Promise.resolve(\`Fire the call for \${id}\`))
          .then(() => {
            expectedAnswers.push(id);
            return queued(id);
          })
          .then(v => (seenAnswers.push(v)))
      );
    }
    await s.waitFor(Promise.all(pendingQueries));

    // Assert
    expect(seenAnswers).toEqual(expectedAnswers);
  }))
})`.trim(),x=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), fc.array(fc.integer({min: 1, max: 10}), {minLength: 1}), async (s, batches) => {
    // Arrange
    const pendingQueries = [];
    const seenAnswers = [];
    const expectedAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));

    // Act
    const queued = queue(s.scheduleFunction(call));
    let lastId = 0;
    const { task } = s.scheduleSequence(batches.map((batch, index) => {
      return {
        label: \`Fire batch #\${index + 1} (\${batch} calls)\`,
        builder: async () => {
          for (let id = 0 ; id !== batch ; ++id, ++lastId) {
            expectedAnswers.push(lastId);
            pendingQueries.push(queued(lastId).then(v => (seenAnswers.push(v))));
          }
        },
      }
    }));
    await s.waitFor(task);
    await s.waitFor(Promise.all(pendingQueries));

    // Assert
    expect(seenAnswers).toEqual(expectedAnswers);
  }))
})`.trim(),w=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), fc.array(fc.integer({min: 1, max: 10}), {minLength: 1}), async (s, batches) => {
    // Arrange
    const pendingQueries = [];
    const seenAnswers = [];
    const expectedAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));
    const scheduledCall = s.scheduleFunction(call);
    let concurrentQueriesDetected = false;
    let queryPending = false;
    const monitoredScheduledCall = (...args) => {
      concurrentQueriesDetected ||= queryPending;
      queryPending = true;
      return scheduledCall(...args).finally(() => (queryPending = false));
    };

    // Act
    const queued = queue(monitoredScheduledCall);
    let lastId = 0;
    const { task } = s.scheduleSequence(batches.map((batch, index) => {
      return {
        label: \`Fire batch #\${index + 1} (\${batch} calls)\`,
        builder: async () => {
          for (let id = 0 ; id !== batch ; ++id, ++lastId) {
            expectedAnswers.push(lastId);
            pendingQueries.push(queued(lastId).then(v => (seenAnswers.push(v))));
          }
        },
      }
    }));
    await s.waitFor(task);
    await s.waitFor(Promise.all(pendingQueries));

    // Assert
    expect(seenAnswers).toEqual(expectedAnswers);
    expect(concurrentQueriesDetected).toBe(false);
  }))
})`.trim(),y=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from 'fast-check';

test('should resolve in call order', async () => {
  await fc.assert(fc.asyncProperty(fc.scheduler(), fc.array(fc.integer({min: 1, max: 10}), {minLength: 1}), async (s, batches) => {
    // Arrange
    const seenAnswers = [];
    const expectedAnswers = [];
    const call = vi.fn()
      .mockImplementation(v => Promise.resolve(v));
    const scheduledCall = s.scheduleFunction(call);
    let concurrentQueriesDetected = false;
    let queryPending = false;
    const monitoredScheduledCall = (...args) => {
      concurrentQueriesDetected ||= queryPending;
      queryPending = true;
      const out = scheduledCall(...args);
      out.finally(() => (queryPending = false));
      return out;
    };

    // Act
    const queued = queue(monitoredScheduledCall);
    let lastId = 0;
    s.scheduleSequence(batches.map((batch, index) => {
      return {
        label: \`Fire batch #\${index + 1} (\${batch} calls)\`,
        builder: async () => {
          for (let id = 0 ; id !== batch ; ++id, ++lastId) {
            expectedAnswers.push(lastId);
            queued(lastId).then(v => (seenAnswers.push(v)));
          }
        },
      }
    }));
    await s.waitAll();

    // Assert
    expect(seenAnswers).toEqual(expectedAnswers);
    expect(concurrentQueriesDetected).toBe(false);
  }))
})`.trim(),q=`
import { test, expect, vi } from 'vitest';
import {queue} from './queue.js';
import fc from "fast-check";

test("should resolve in call order", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.scheduler(),
      fc.array(fc.integer({ min: 1, max: 10 }), { minLength: 1 }),
      fc.func(fc.boolean()),
      async (s, batches, isFailure) => {
        // Arrange
        const seenAnswers = [];
        const expectedAnswers = [];
        const call = vi
          .fn()
          .mockImplementation((v) =>
            isFailure(v) ? Promise.reject(v) : Promise.resolve(v)
          );
        const scheduledCall = s.scheduleFunction(call);
        let concurrentQueriesDetected = false;
        let queryPending = false;
        const monitoredScheduledCall = (...args) => {
          concurrentQueriesDetected ||= queryPending;
          queryPending = true;
          const out = scheduledCall(...args);
          out.finally(() => (queryPending = false)).catch(() => {});
          return out;
        };

        // Act
        const queued = queue(monitoredScheduledCall);
        let lastId = 0;
        s.scheduleSequence(
          batches.map((batch, index) => {
            return {
              label: \`Fire batch #\${index + 1} (\${batch} calls)\`,
              builder: async () => {
                for (let id = 0; id !== batch; ++id, ++lastId) {
                  expectedAnswers.push(
                    isFailure(lastId)
                      ? \`failure:\${lastId}\`
                      : \`success:\${lastId}\`
                  );
                  queued(lastId).then(
                    (v) => seenAnswers.push(\`success:\${v}\`),
                    (v) => seenAnswers.push(\`failure:\${v}\`)
                  );
                }
              }
            };
          })
        );
        await s.waitAll();

        // Assert
        expect(seenAnswers).toEqual(expectedAnswers);
        expect(concurrentQueriesDetected).toBe(false);
      }
    )
  );
})`.trim(),j=JSON.stringify({name:"fast-check-playground",private:!0,scripts:{test:"vitest"},devDependencies:{"fast-check":"^4.0.0",vitest:"latest"},stackblitz:{installDependencies:!0,startCommand:"npx vitest --watch --reporter=verbose"}},null,2);function b({files:e,options:t}){let s=(0,r.useId)(),c=`stackblitz-${s}`,a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=a.current;if(null!==s)return(async()=>{await i.A.embedProject(s,{title:"fast-check playground",description:"Interactive fast-check playground powered by Vitest",template:"node",files:e},{height:600,view:"editor",openFile:t.openFile,hideExplorer:t.hideExplorer})})(),()=>{s.innerHTML=""}},[e,t.openFile,t.hideExplorer]),(0,n.jsx)("div",{ref:a,id:c})}function A(e){let{startSpecCode:t,anwserSpecCode:s,fileContent:i,fileName:a,fileExtension:l}=e,[o,u]=(0,r.useState)({key:0,content:t}),d=(0,r.useMemo)(()=>({[`${a}.${l}`]:i,[`${a}.test.${l}`]:o.content,"package.json":j}),[a,l,i,o.content]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:d,options:{openFile:`${a}.test.${l}`,hideExplorer:!0}}),(0,n.jsxs)("div",{className:c,children:[(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:t})),children:"Reset snippet"}),(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:s})),children:"Show answer"})]})]},o.key)}function Q(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:a,startSpecCode:p,anwserSpecCode:f})}function k(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:l,startSpecCode:f,anwserSpecCode:v})}function P(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:o,startSpecCode:v,anwserSpecCode:x})}function I(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:u,startSpecCode:x,anwserSpecCode:w})}function C(e,t){return`${t.map(e=>`// ${e}`).join("\n")}

${e}`}function F(e,t){return C(e,["Implementation used within the part:","> "+t])}function S(e,t,s){return C(e,["Test suggested for the part:","> "+t,...void 0!==s?[s]:[]])}let $=function(){let e={"queue.v0.js":F(a,"Your first race condition test"),"queue.v1.js":F(l,"One step close to real usages"),"queue.v2.js":F(o,"Multiple batches of calls"),"queue.v3.js":F(u,"The missing part"),"queue.v4.js":C(d,["Pass all the tests of the tutorial"]),"queue.v5.js":C(h,["Pass all the tests"])},t={"queue.p0.test.js":p,"queue.p1.test.js":S(f,"Your first race condition test"),"queue.p1.v2.test.js":S(m,"Your first race condition test","With waitAll"),"queue.p2.test.js":S(v,"One step close to real usages"),"queue.p3.test.js":S(x,"Multiple batches of calls"),"queue.p3.v2.test.js":S(g,"Multiple batches of calls","With delayed calls (no batches)"),"queue.p4.test.js":S(w,"The missing part"),"queue.pnext.v1.test.js":C(y,["Switch back to waitAll in queue.p4.test"]),"queue.pnext.v2.test.js":C(q,["Also cover error cases"])},s={};for(let[t,n]of Object.entries(e))s[`src/${t}`]=n;for(let[e,n]of Object.entries(t))s[`tests/${e}`]=n.replace("'./queue.js'","'./../src/queue.js'");return s["src/queue.js"]="export {queue} from './queue.v5.js'",s["package.json"]=j,s}();function N(){let[e,t]=(0,r.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:$,options:{openFile:"tests/queue.p4.test.js",hideExplorer:!1}}),(0,n.jsx)("div",{className:c,children:(0,n.jsx)("button",{onClick:()=>t(e=>e+1),children:"Reset snippets"})})]},e)}}}]);
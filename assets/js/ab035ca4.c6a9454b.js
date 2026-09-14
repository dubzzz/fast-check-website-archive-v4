"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["83"],{3277(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>h,frontMatter:()=>c,contentTitle:()=>a,toc:()=>u,assets:()=>l});var n=JSON.parse('{"id":"tutorials/detect-race-conditions/your-first-race-condition-test","title":"Your first race condition test","description":"First iteration, build your first test able to detect race conditions","source":"@site/docs/tutorials/detect-race-conditions/your-first-race-condition-test.mdx","sourceDirName":"tutorials/detect-race-conditions","slug":"/tutorials/detect-race-conditions/your-first-race-condition-test/","permalink":"/docs/tutorials/detect-race-conditions/your-first-race-condition-test/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Nicolas DUBIEN","lastUpdatedAt":1787085713000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/tutorials/detect-race-conditions/your-first-race-condition-test/","description":"First iteration, build your first test able to detect race conditions"},"sidebar":"tutorialSidebar","previous":{"title":"Detect race conditions","permalink":"/docs/tutorials/detect-race-conditions/"},"next":{"title":"One step closer to real usages","permalink":"/docs/tutorials/detect-race-conditions/one-step-closer-to-real-usages/"}}'),r=s(61058),i=s(24801),o=s(24479);let c={sidebar_position:1,slug:"/tutorials/detect-race-conditions/your-first-race-condition-test/",description:"First iteration, build your first test able to detect race conditions"},a="Your first race condition test",l={},u=[{value:"Code under test",id:"code-under-test",level:2},{value:"Understand current test",id:"understand-current-test",level:2},{value:"Towards next test",id:"towards-next-test",level:2},{value:"First glance at schedulers",id:"first-glance-at-schedulers",level:2},{value:"Your turn!",id:"your-turn",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"your-first-race-condition-test",children:"Your first race condition test"})}),"\n",(0,r.jsx)(t.h2,{id:"code-under-test",children:"Code under test"}),"\n",(0,r.jsxs)(t.p,{children:["For the next few pages, we will focus on a function called ",(0,r.jsx)(t.code,{children:"queue"}),". Its purpose is to wrap an asynchronous function and queue subsequent calls to it in two ways:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Promises returned by the function will resolve in order, with the first call resolving before the second one, the second one resolving before the third one, and so on."}),"\n",(0,r.jsx)(t.li,{children:"Concurrent calls are not allowed, meaning that a call will always wait for the previously started one to finish before being fired."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the context of this tutorial you'll never have to edit ",(0,r.jsx)(t.code,{children:"queue"}),". The function will be provided to you."]}),"\n",(0,r.jsx)(t.h2,{id:"understand-current-test",children:"Understand current test"}),"\n",(0,r.jsx)(t.p,{children:"Fortunately, we don't have to start from scratch. The function already has a test in place that ensures queries will consistently resolve in the correct order. The test appears rather simple and currently passes."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"test('should resolve in call order', async () => {\n  // Arrange\n  const seenAnswers = [];\n  const call = jest.fn().mockImplementation((v) => Promise.resolve(v));\n\n  // Act\n  const queued = queue(call);\n  await Promise.all([queued(1).then((v) => seenAnswers.push(v)), queued(2).then((v) => seenAnswers.push(v))]);\n\n  // Assert\n  expect(seenAnswers).toEqual([1, 2]);\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"If we look closer to the test, we can observe that the wrapped function is relatively straightforward in that it merely returns a resolved promise whose value corresponds to the provided input."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const call = jest.fn().mockImplementation((v) => Promise.resolve(v));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can also see that we assess the order of results by confirming that the values pushed into ",(0,r.jsx)(t.code,{children:"seenAnswers"})," are properly ordered. It's worth noting that ",(0,r.jsx)(t.code,{children:"seenAnswers"})," does not represent the same thing as ",(0,r.jsx)(t.code,{children:"await Promise.all([queued(1), queued(2)])"}),". This alternative notation does not evaluate the order in which the resolutions are received, but rather only confirms that each query resolves to its expected value."]}),"\n",(0,r.jsx)(t.h2,{id:"towards-next-test",children:"Towards next test"}),"\n",(0,r.jsxs)(t.p,{children:["The test above has some limitations. Namely, the promises and their ",(0,r.jsx)(t.code,{children:".then()"})," callbacks happen to resolve in the correct order only because they were instantiated in the correct order and they did not ",(0,r.jsx)(t.code,{children:"await"})," to yield control back to the JavaScript event loop (because we use ",(0,r.jsx)(t.code,{children:"Promise.resolve()"}),"). In other words, we are just testing that the JavaScript event loop is queueing and processing promises in the correct order, which is hopefully already true!"]}),"\n",(0,r.jsx)(t.p,{children:"In order to address this limitation, our updated test should ensure that promises resolve later rather than instantly."}),"\n",(0,r.jsx)(t.h2,{id:"first-glance-at-schedulers",children:"First glance at schedulers"}),"\n",(0,r.jsx)(t.p,{children:"When adding fast-check into a race condition test, the recommended initial step is to update the test code as follows:"}),"\n","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"test('should resolve in call order', async () => {\n  await fc.assert(fc.asyncProperty(fc.scheduler(), async (s) => { // <-- added\n    // ...unchanged code...\n  }));                                                            // <-- added\n});\n"})}),"\n","\n",(0,r.jsx)(t.p,{children:"This modification runs the test using the fast-check runner. By doing so, any bugs that arise during the predicate will be caught by fast-check."}),"\n",(0,r.jsxs)(t.p,{children:["In the context of race conditions, we want fast-check to provide us with a scheduler instance that is capable of re-ordering asynchronous operations. This is why we added the ",(0,r.jsx)(t.code,{children:"fc.scheduler()"})," argument: it creates an instance of a scheduler that we refer to as ",(0,r.jsx)(t.code,{children:"s"}),". The first important thing to keep in mind for our new test is that we don't want to change the value returned by the API. But we want to change when it gets returned. We want to give the scheduler the responsibility of resolving API calls. To achieve this, the scheduler exposes a method called ",(0,r.jsx)(t.code,{children:"scheduleFunction"}),". This method wraps a function in a scheduled or controlled version of itself."]}),"\n",(0,r.jsxs)(t.p,{children:["After pushing scheduled calls into the scheduler, we must execute and release them at some point. This is typically done using ",(0,r.jsx)(t.code,{children:"waitAll"})," or ",(0,r.jsx)(t.code,{children:"waitFor"}),". These APIs simply wait for ",(0,r.jsx)(t.code,{children:"waitX"})," to resolve, indicating that what we were waiting for has been accomplished."]}),"\n",(0,r.jsx)(t.admonition,{title:"Which wait is the best?",type:"info",children:(0,r.jsxs)(t.p,{children:["For this first iteration, both of them will be ok, but we will see later that ",(0,r.jsx)(t.code,{children:"waitFor"})," is probably a better fit in that specific example."]})}),"\n",(0,r.jsx)(t.admonition,{title:"More",type:"tip",children:(0,r.jsxs)(t.p,{children:["For a comprehensive list of methods exposed on the scheduler, you can checkout the ",(0,r.jsx)(t.a,{href:"/docs/advanced/race-conditions/",children:"official documentation for race conditions"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"your-turn",children:"Your turn!"}),"\n",(0,r.jsx)(o.tc,{}),"\n",(0,r.jsx)(t.admonition,{title:"What to expect?",type:"info",children:(0,r.jsxs)(t.p,{children:["Your test should help us to detect a bug in our current implementation of ",(0,r.jsx)(t.code,{children:"queue"}),"."]})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #1"})}),(0,r.jsxs)(t.p,{children:["You have to run the test via the ",(0,r.jsx)(t.code,{children:"assert"})," runner provided by fast-check. For more details, you may refer to the section ",(0,r.jsx)(t.a,{href:"#first-glance-at-schedulers",children:"First glance at schedulers"})," of this page."]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #2"})}),(0,r.jsxs)(t.p,{children:["No need to touch ",(0,r.jsx)(t.code,{children:"call"})," itself. The function should still return the inputs it received. But, instead of queueing it, we should queue a scheduled version of it. You may refer to ",(0,r.jsx)(t.a,{href:"/docs/advanced/race-conditions/#schedulefunction",children:(0,r.jsx)(t.code,{children:"scheduleFunction"})})," for more details."]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #3"})}),(0,r.jsxs)(t.p,{children:["Our test should think as a user of the API would think. It has to wait for all queued calls to be resolved before being able to assert anything on the output. You may want to use pass such condition to ",(0,r.jsx)(t.code,{children:"waitFor"})," so that everything gets properly awaited before running any assertion."]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24479(e,t,s){s.d(t,{a4:()=>E,ib:()=>I,Fn:()=>P,tc:()=>Q,IO:()=>k});var n=s(61058),r=s(13706),i=s(75312);let o="playgroundActions_DQk7",c=`
export function queue(fun) {
  return fun;
}`.trim(),a=`
export function queue(fun) {
  let lastQuery = Promise.resolve();
  return (...args) => {
    const currentQuery = fun(...args);
    const returnedQuery = lastQuery.then(() => currentQuery);
    lastQuery = currentQuery;
    return returnedQuery;
  };
}`.trim(),l=`
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
})`.trim(),w=`
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
})`.trim(),y=`
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
})`.trim(),g=`
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
})`.trim(),j=`
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
})`.trim(),q=JSON.stringify({name:"fast-check-playground",private:!0,scripts:{test:"vitest"},devDependencies:{"fast-check":"^4.0.0",vitest:"latest"},stackblitz:{installDependencies:!0,startCommand:"npx vitest --watch --reporter=verbose"}},null,2);function b({files:e,options:t}){let s=(0,r.useId)(),o=`stackblitz-${s}`,c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=c.current;if(null!==s)return(async()=>{await i.A.embedProject(s,{title:"fast-check playground",description:"Interactive fast-check playground powered by Vitest",template:"node",files:e},{height:600,view:"editor",openFile:t.openFile,hideExplorer:t.hideExplorer})})(),()=>{s.innerHTML=""}},[e,t.openFile,t.hideExplorer]),(0,n.jsx)("div",{ref:c,id:o})}function A(e){let{startSpecCode:t,anwserSpecCode:s,fileContent:i,fileName:c,fileExtension:a}=e,[l,u]=(0,r.useState)({key:0,content:t}),d=(0,r.useMemo)(()=>({[`${c}.${a}`]:i,[`${c}.test.${a}`]:l.content,"package.json":q}),[c,a,i,l.content]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:d,options:{openFile:`${c}.test.${a}`,hideExplorer:!0}}),(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:t})),children:"Reset snippet"}),(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:s})),children:"Show answer"})]})]},l.key)}function Q(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:c,startSpecCode:p,anwserSpecCode:f})}function k(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:a,startSpecCode:f,anwserSpecCode:v})}function P(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:l,startSpecCode:v,anwserSpecCode:x})}function I(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:u,startSpecCode:x,anwserSpecCode:y})}function F(e,t){return`${t.map(e=>`// ${e}`).join("\n")}

${e}`}function C(e,t){return F(e,["Implementation used within the part:","> "+t])}function S(e,t,s){return F(e,["Test suggested for the part:","> "+t,...void 0!==s?[s]:[]])}let $=function(){let e={"queue.v0.js":C(c,"Your first race condition test"),"queue.v1.js":C(a,"One step close to real usages"),"queue.v2.js":C(l,"Multiple batches of calls"),"queue.v3.js":C(u,"The missing part"),"queue.v4.js":F(d,["Pass all the tests of the tutorial"]),"queue.v5.js":F(h,["Pass all the tests"])},t={"queue.p0.test.js":p,"queue.p1.test.js":S(f,"Your first race condition test"),"queue.p1.v2.test.js":S(m,"Your first race condition test","With waitAll"),"queue.p2.test.js":S(v,"One step close to real usages"),"queue.p3.test.js":S(x,"Multiple batches of calls"),"queue.p3.v2.test.js":S(w,"Multiple batches of calls","With delayed calls (no batches)"),"queue.p4.test.js":S(y,"The missing part"),"queue.pnext.v1.test.js":F(g,["Switch back to waitAll in queue.p4.test"]),"queue.pnext.v2.test.js":F(j,["Also cover error cases"])},s={};for(let[t,n]of Object.entries(e))s[`src/${t}`]=n;for(let[e,n]of Object.entries(t))s[`tests/${e}`]=n.replace("'./queue.js'","'./../src/queue.js'");return s["src/queue.js"]="export {queue} from './queue.v5.js'",s["package.json"]=q,s}();function E(){let[e,t]=(0,r.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:$,options:{openFile:"tests/queue.p4.test.js",hideExplorer:!1}}),(0,n.jsx)("div",{className:o,children:(0,n.jsx)("button",{onClick:()=>t(e=>e+1),children:"Reset snippets"})})]},e)}}}]);
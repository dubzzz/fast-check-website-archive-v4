"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["2670"],{64630(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>h,frontMatter:()=>c,contentTitle:()=>l,toc:()=>u,assets:()=>a});var n=JSON.parse('{"id":"tutorials/detect-race-conditions/one-step-closer-to-real-usages","title":"One step closer to real usages","description":"Second iteration, make the test closer and detect even more race conditions","source":"@site/docs/tutorials/detect-race-conditions/one-step-closer-to-real-usages.mdx","sourceDirName":"tutorials/detect-race-conditions","slug":"/tutorials/detect-race-conditions/one-step-closer-to-real-usages/","permalink":"/docs/tutorials/detect-race-conditions/one-step-closer-to-real-usages/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Nicolas DUBIEN","lastUpdatedAt":1787085713000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/tutorials/detect-race-conditions/one-step-closer-to-real-usages/","description":"Second iteration, make the test closer and detect even more race conditions"},"sidebar":"tutorialSidebar","previous":{"title":"Your first race condition test","permalink":"/docs/tutorials/detect-race-conditions/your-first-race-condition-test/"},"next":{"title":"Multiple batches of calls","permalink":"/docs/tutorials/detect-race-conditions/multiple-batches-of-calls/"}}'),r=s(61058),i=s(24801),o=s(24479);let c={sidebar_position:2,slug:"/tutorials/detect-race-conditions/one-step-closer-to-real-usages/",description:"Second iteration, make the test closer and detect even more race conditions"},l="One step closer to real usages",a={},u=[{value:"Zoom on previous test",id:"zoom-on-previous-test",level:2},{value:"What to schedule?",id:"what-to-schedule",level:3},{value:"What to wait?",id:"what-to-wait",level:3},{value:"Towards next test",id:"towards-next-test",level:2},{value:"Your turn!",id:"your-turn",level:2}];function d(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"one-step-closer-to-real-usages",children:"One step closer to real usages"})}),"\n",(0,r.jsx)(t.h2,{id:"zoom-on-previous-test",children:"Zoom on previous test"}),"\n",(0,r.jsx)(t.h3,{id:"what-to-schedule",children:"What to schedule?"}),"\n",(0,r.jsx)(t.p,{children:"One approach to solve the problem we discussed earlier is to follow a common pattern that we recommend when integrating a scheduler into existing tests. This involves replacing the original occurrences of the asynchronous API with scheduled versions of it. In our case, we replaced the line of code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const queued = queue(call);\n"})}),"\n",(0,r.jsx)(t.p,{children:"with:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const queued = queue(s.scheduleFunction(call));\n"})}),"\n",(0,r.jsx)(t.h3,{id:"what-to-wait",children:"What to wait?"}),"\n",(0,r.jsxs)(t.p,{children:["Once we've replaced raw asynchronous API calls with scheduled versions, the next step is to wait for them to complete. There are several ways to achieve this, but the recommended approach is to use ",(0,r.jsx)(t.code,{children:"waitFor"})," to wait for all queries to resolve:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const queued = queue(s.scheduleFunction(call));\npendingQueries.push(queued(1).then((v) => seenAnswers.push(v)));\npendingQueries.push(queued(2).then((v) => seenAnswers.push(v)));\nawait s.waitFor(Promise.all(pendingQueries));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["An alternative would have been to use ",(0,r.jsx)(t.code,{children:"waitAll"})," instead of ",(0,r.jsx)(t.code,{children:"waitFor"})," but it comes with a precise requirement: promises have to be already scheduled by the time we request the scheduler. In other words, if our code delays a little bit the call to ",(0,r.jsx)(t.code,{children:"call"}),", the scheduler might not wait enough."]}),"\n",(0,r.jsxs)(t.p,{children:["Given the fact that ",(0,r.jsx)(t.code,{children:"call"})," being fired synchronously is not a requirement for our current function, we can relax the constraint in our test to make evolving this implementation easier."]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"waitAll"})," version of the code above would be:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const queued = queue(s.scheduleFunction(call));\nqueued(1).then((v) => seenAnswers.push(v));\nqueued(2).then((v) => seenAnswers.push(v));\nawait s.waitAll();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"towards-next-test",children:"Towards next test"}),"\n",(0,r.jsx)(t.p,{children:"The current implementation of our test only involves running two calls, but there may be potential issues that arise when more calls are made. To capture these scenarios, we will update the test to run an arbitrary number of calls. This will allow us to detect race conditions on a wider range of scenarios, including those with 3, 4, or even more calls."}),"\n",(0,r.jsx)(t.h2,{id:"your-turn",children:"Your turn!"}),"\n",(0,r.jsx)(o.IO,{}),"\n",(0,r.jsx)(t.admonition,{title:"What to expect?",type:"info",children:(0,r.jsxs)(t.p,{children:["Your test should help us to detect a bug in our current implementation of ",(0,r.jsx)(t.code,{children:"queue"}),"."]})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #1"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fc.scheduler"})," alone will not be enough! You'll have to generate another entry to be able to properly control the number of calls to ",(0,r.jsx)(t.code,{children:"call"})," function."]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #2"})}),(0,r.jsx)(t.p,{children:"Some possible options for generating additional test scenarios include:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Using ",(0,r.jsx)(t.code,{children:"fc.integer({min: 1, max: 10})"})," to generate a variable ",(0,r.jsx)(t.code,{children:"numCalls"})," that determines how many times to call ",(0,r.jsx)(t.code,{children:"call"}),". It's important to set a maximal value via ",(0,r.jsx)(t.code,{children:"max"})," to prevent an excessively high number of calls."]}),"\n",(0,r.jsxs)(t.li,{children:["Using ",(0,r.jsx)(t.code,{children:"fc.array(fc.nat(), {minLength: 1})"})," to generate the list of calls to issue against ",(0,r.jsx)(t.code,{children:"call"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Using ",(0,r.jsx)(t.code,{children:"fc.func(fc.boolean())"})," to generate a function that determines when to stop issuing calls."]}),"\n"]}),(0,r.jsx)(t.p,{children:"And there are plenty others\u2026"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24479(e,t,s){s.d(t,{a4:()=>E,ib:()=>I,Fn:()=>P,tc:()=>Q,IO:()=>k});var n=s(61058),r=s(13706),i=s(75312);let o="playgroundActions_DQk7",c=`
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
}`.trim(),a=`
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
})`.trim(),x=`
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
})`.trim(),g=`
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
})`.trim(),j=JSON.stringify({name:"fast-check-playground",private:!0,scripts:{test:"vitest"},devDependencies:{"fast-check":"^4.0.0",vitest:"latest"},stackblitz:{installDependencies:!0,startCommand:"npx vitest --watch --reporter=verbose"}},null,2);function A({files:e,options:t}){let s=(0,r.useId)(),o=`stackblitz-${s}`,c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=c.current;if(null!==s)return(async()=>{await i.A.embedProject(s,{title:"fast-check playground",description:"Interactive fast-check playground powered by Vitest",template:"node",files:e},{height:600,view:"editor",openFile:t.openFile,hideExplorer:t.hideExplorer})})(),()=>{s.innerHTML=""}},[e,t.openFile,t.hideExplorer]),(0,n.jsx)("div",{ref:c,id:o})}function b(e){let{startSpecCode:t,anwserSpecCode:s,fileContent:i,fileName:c,fileExtension:l}=e,[a,u]=(0,r.useState)({key:0,content:t}),d=(0,r.useMemo)(()=>({[`${c}.${l}`]:i,[`${c}.test.${l}`]:a.content,"package.json":j}),[c,l,i,a.content]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(A,{files:d,options:{openFile:`${c}.test.${l}`,hideExplorer:!0}}),(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:t})),children:"Reset snippet"}),(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:s})),children:"Show answer"})]})]},a.key)}function Q(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:c,startSpecCode:p,anwserSpecCode:f})}function k(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:l,startSpecCode:f,anwserSpecCode:v})}function P(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:a,startSpecCode:v,anwserSpecCode:w})}function I(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:u,startSpecCode:w,anwserSpecCode:g})}function F(e,t){return`${t.map(e=>`// ${e}`).join("\n")}

${e}`}function C(e,t){return F(e,["Implementation used within the part:","> "+t])}function S(e,t,s){return F(e,["Test suggested for the part:","> "+t,...void 0!==s?[s]:[]])}let $=function(){let e={"queue.v0.js":C(c,"Your first race condition test"),"queue.v1.js":C(l,"One step close to real usages"),"queue.v2.js":C(a,"Multiple batches of calls"),"queue.v3.js":C(u,"The missing part"),"queue.v4.js":F(d,["Pass all the tests of the tutorial"]),"queue.v5.js":F(h,["Pass all the tests"])},t={"queue.p0.test.js":p,"queue.p1.test.js":S(f,"Your first race condition test"),"queue.p1.v2.test.js":S(m,"Your first race condition test","With waitAll"),"queue.p2.test.js":S(v,"One step close to real usages"),"queue.p3.test.js":S(w,"Multiple batches of calls"),"queue.p3.v2.test.js":S(x,"Multiple batches of calls","With delayed calls (no batches)"),"queue.p4.test.js":S(g,"The missing part"),"queue.pnext.v1.test.js":F(y,["Switch back to waitAll in queue.p4.test"]),"queue.pnext.v2.test.js":F(q,["Also cover error cases"])},s={};for(let[t,n]of Object.entries(e))s[`src/${t}`]=n;for(let[e,n]of Object.entries(t))s[`tests/${e}`]=n.replace("'./queue.js'","'./../src/queue.js'");return s["src/queue.js"]="export {queue} from './queue.v5.js'",s["package.json"]=j,s}();function E(){let[e,t]=(0,r.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(A,{files:$,options:{openFile:"tests/queue.p4.test.js",hideExplorer:!1}}),(0,n.jsx)("div",{className:o,children:(0,n.jsx)("button",{onClick:()=>t(e=>e+1),children:"Reset snippets"})})]},e)}}}]);
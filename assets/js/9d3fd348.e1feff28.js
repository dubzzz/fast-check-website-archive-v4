"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["7005"],{98567(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>c,contentTitle:()=>u,toc:()=>a,assets:()=>l});var n=JSON.parse('{"id":"tutorials/detect-race-conditions/the-missing-part","title":"The missing part","description":"Fourth iteration, check all the points of the specification","source":"@site/docs/tutorials/detect-race-conditions/the-missing-part.mdx","sourceDirName":"tutorials/detect-race-conditions","slug":"/tutorials/detect-race-conditions/the-missing-part/","permalink":"/docs/tutorials/detect-race-conditions/the-missing-part/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Nicolas DUBIEN","lastUpdatedAt":1787085713000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/tutorials/detect-race-conditions/the-missing-part/","description":"Fourth iteration, check all the points of the specification"},"sidebar":"tutorialSidebar","previous":{"title":"Multiple batches of calls","permalink":"/docs/tutorials/detect-race-conditions/multiple-batches-of-calls/"},"next":{"title":"Wrapping up","permalink":"/docs/tutorials/detect-race-conditions/wrapping-up/"}}'),r=s(61058),i=s(24801),o=s(24479);let c={sidebar_position:4,slug:"/tutorials/detect-race-conditions/the-missing-part/",description:"Fourth iteration, check all the points of the specification"},u="The missing part",l={},a=[{value:"Zoom on previous test",id:"zoom-on-previous-test",level:2},{value:"Towards next test",id:"towards-next-test",level:2},{value:"Your turn!",id:"your-turn",level:2}];function d(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"the-missing-part",children:"The missing part"})}),"\n",(0,r.jsx)(t.h2,{id:"zoom-on-previous-test",children:"Zoom on previous test"}),"\n",(0,r.jsx)(t.p,{children:"As mentioned earlier, the decision to use sequences was largely driven by the desire to cover most of the scheduler's APIs in this tutorial. However, there are alternative ways of achieving our goals."}),"\n",(0,r.jsxs)(t.p,{children:["One of the issues we wanted to address was the need to trigger queries asynchronously. Although this functionality is not yet built into fast-check, we could use the technique outlined in ",(0,r.jsx)(t.a,{href:"/docs/advanced/race-conditions/#scheduling-a-function-call",children:"scheduling a function call"}),". If we were to take this approach, we would update:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"for (let id = 0; id !== numCalls; ++id) {\n  expectedAnswers.push(id);\n  pendingQueries.push(queued(id).then((v) => seenAnswers.push(v)));\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"into:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"for (let id = 0; id !== numCalls; ++id) {\n  pendingQueries.push(\n    s\n      .schedule(Promise.resolve(`Fire the call for ${id}`))\n      .then(() => {\n        expectedAnswers.push(id);\n        return queued(id);\n      })\n      .then((v) => seenAnswers.push(v)),\n  );\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Comparison",type:"info",children:(0,r.jsx)(t.p,{children:"Contrary to the batch approach, the ordering of ids will not be ensured. For that reason, we decided to include it in the reports by scheduling a resolved promise with a value featuring this id."})}),"\n",(0,r.jsx)(t.h2,{id:"towards-next-test",children:"Towards next test"}),"\n",(0,r.jsx)(t.p,{children:"Our tests may be incomplete because we are not taking into account all aspects of the specification:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Its purpose is to wrap an asynchronous function and queue subsequent calls to it in two ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Promises returned by the function will resolve in order, with the first call resolving before the second one, the second one resolving before the third one, and so on."}),"\n",(0,r.jsx)(t.li,{children:"Concurrent calls are not allowed, meaning that a call will always wait for the previously started one to finish before being fired."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Although we thoroughly tested the first point, we may have overlooked the second point in the specification. Therefore, in the final section of this tutorial, we will focus on validating the second requirement."}),"\n",(0,r.jsx)(t.h2,{id:"your-turn",children:"Your turn!"}),"\n",(0,r.jsx)(o.ib,{}),"\n",(0,r.jsx)(t.admonition,{title:"What to expect?",type:"info",children:(0,r.jsxs)(t.p,{children:["Your test should help us to detect a bug in our current implementation of ",(0,r.jsx)(t.code,{children:"queue"}),"."]})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Hint #1"})}),(0,r.jsxs)(t.p,{children:["One potential solution is to wrap the scheduled API in an additional layer that sets a flag to ",(0,r.jsx)(t.code,{children:"true"})," when the API is called, directly invokes the scheduled API, and then resets the flag to ",(0,r.jsx)(t.code,{children:"false"})," when the API resolves. If the flag is already set to ",(0,r.jsx)(t.code,{children:"true"})," when the wrapper layer is invoked, it should cause the test to fail."]})]})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24479(e,t,s){s.d(t,{a4:()=>E,ib:()=>I,Fn:()=>P,tc:()=>Q,IO:()=>k});var n=s(61058),r=s(13706),i=s(75312);let o="playgroundActions_DQk7",c=`
export function queue(fun) {
  return fun;
}`.trim(),u=`
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
}`.trim(),a=`
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
}`.trim(),p=`
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
}`.trim(),h=`
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
})`.trim(),j=JSON.stringify({name:"fast-check-playground",private:!0,scripts:{test:"vitest"},devDependencies:{"fast-check":"^4.0.0",vitest:"latest"},stackblitz:{installDependencies:!0,startCommand:"npx vitest --watch --reporter=verbose"}},null,2);function A({files:e,options:t}){let s=(0,r.useId)(),o=`stackblitz-${s}`,c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=c.current;if(null!==s)return(async()=>{await i.A.embedProject(s,{title:"fast-check playground",description:"Interactive fast-check playground powered by Vitest",template:"node",files:e},{height:600,view:"editor",openFile:t.openFile,hideExplorer:t.hideExplorer})})(),()=>{s.innerHTML=""}},[e,t.openFile,t.hideExplorer]),(0,n.jsx)("div",{ref:c,id:o})}function b(e){let{startSpecCode:t,anwserSpecCode:s,fileContent:i,fileName:c,fileExtension:u}=e,[l,a]=(0,r.useState)({key:0,content:t}),d=(0,r.useMemo)(()=>({[`${c}.${u}`]:i,[`${c}.test.${u}`]:l.content,"package.json":j}),[c,u,i,l.content]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(A,{files:d,options:{openFile:`${c}.test.${u}`,hideExplorer:!0}}),(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("button",{onClick:()=>a(e=>({key:e.key+1,content:t})),children:"Reset snippet"}),(0,n.jsx)("button",{onClick:()=>a(e=>({key:e.key+1,content:s})),children:"Show answer"})]})]},l.key)}function Q(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:c,startSpecCode:h,anwserSpecCode:f})}function k(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:u,startSpecCode:f,anwserSpecCode:v})}function P(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:l,startSpecCode:v,anwserSpecCode:x})}function I(){return(0,n.jsx)(b,{fileName:"queue",fileExtension:"js",fileContent:a,startSpecCode:x,anwserSpecCode:y})}function C(e,t){return`${t.map(e=>`// ${e}`).join("\n")}

${e}`}function F(e,t){return C(e,["Implementation used within the part:","> "+t])}function $(e,t,s){return C(e,["Test suggested for the part:","> "+t,...void 0!==s?[s]:[]])}let S=function(){let e={"queue.v0.js":F(c,"Your first race condition test"),"queue.v1.js":F(u,"One step close to real usages"),"queue.v2.js":F(l,"Multiple batches of calls"),"queue.v3.js":F(a,"The missing part"),"queue.v4.js":C(d,["Pass all the tests of the tutorial"]),"queue.v5.js":C(p,["Pass all the tests"])},t={"queue.p0.test.js":h,"queue.p1.test.js":$(f,"Your first race condition test"),"queue.p1.v2.test.js":$(m,"Your first race condition test","With waitAll"),"queue.p2.test.js":$(v,"One step close to real usages"),"queue.p3.test.js":$(x,"Multiple batches of calls"),"queue.p3.v2.test.js":$(w,"Multiple batches of calls","With delayed calls (no batches)"),"queue.p4.test.js":$(y,"The missing part"),"queue.pnext.v1.test.js":C(g,["Switch back to waitAll in queue.p4.test"]),"queue.pnext.v2.test.js":C(q,["Also cover error cases"])},s={};for(let[t,n]of Object.entries(e))s[`src/${t}`]=n;for(let[e,n]of Object.entries(t))s[`tests/${e}`]=n.replace("'./queue.js'","'./../src/queue.js'");return s["src/queue.js"]="export {queue} from './queue.v5.js'",s["package.json"]=j,s}();function E(){let[e,t]=(0,r.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(A,{files:S,options:{openFile:"tests/queue.p4.test.js",hideExplorer:!1}}),(0,n.jsx)("div",{className:o,children:(0,n.jsx)("button",{onClick:()=>t(e=>e+1),children:"Reset snippets"})})]},e)}}}]);
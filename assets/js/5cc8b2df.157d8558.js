"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["3225"],{93972(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>a,contentTitle:()=>l,toc:()=>u,assets:()=>c});var n=JSON.parse('{"id":"tutorials/detect-race-conditions/wrapping-up","title":"Wrapping up","description":"Key learnings and summary of all our steps","source":"@site/docs/tutorials/detect-race-conditions/wrapping-up.mdx","sourceDirName":"tutorials/detect-race-conditions","slug":"/tutorials/detect-race-conditions/wrapping-up/","permalink":"/docs/tutorials/detect-race-conditions/wrapping-up/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Nicolas DUBIEN","lastUpdatedAt":1787085713000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/tutorials/detect-race-conditions/wrapping-up/","description":"Key learnings and summary of all our steps"},"sidebar":"tutorialSidebar","previous":{"title":"The missing part","permalink":"/docs/tutorials/detect-race-conditions/the-missing-part/"},"next":{"title":"Setting up your Test Environment","permalink":"/docs/tutorials/setting-up-your-test-environment/"}}'),r=s(61058),i=s(24801),o=s(24479);let a={sidebar_position:5,slug:"/tutorials/detect-race-conditions/wrapping-up/",description:"Key learnings and summary of all our steps"},l="Wrapping up",c={},u=[{value:"Zoom on previous test",id:"zoom-on-previous-test",level:2},{value:"Towards next test",id:"towards-next-test",level:2},{value:"Synchronous calls",id:"synchronous-calls",level:3},{value:"Support exceptions",id:"support-exceptions",level:3},{value:"Have fun!",id:"have-fun",level:2},{value:"Testing user interfaces",id:"testing-user-interfaces",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"wrapping-up",children:"Wrapping up"})}),"\n",(0,r.jsx)(t.admonition,{title:"Wanna play?",type:"tip",children:(0,r.jsxs)(t.p,{children:["Want to directly try out the final result? Skip ahead to the ",(0,r.jsx)(t.a,{href:"#have-fun",children:"Have fun!"})," section to play with the code snippets we've created."]})}),"\n",(0,r.jsx)(t.h2,{id:"zoom-on-previous-test",children:"Zoom on previous test"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations! You have learned how to detect race conditions using fast-check library. We explored the concept of race conditions, discussed their potential dangers, and demonstrated various techniques to identify them. By leveraging the powerful features of fast-check, such as property-based testing and shrinking, you now have a robust tool at your disposal to uncover and fix race conditions in your code. Remember to apply these techniques in your projects to ensure the reliability and stability of your software."}),"\n",(0,r.jsxs)(t.p,{children:["Throughout this tutorial, we gradually added race condition detection and expanded its coverage. The final iteration brings us close to fully addressing all possible edge cases of a ",(0,r.jsx)(t.code,{children:"queue"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"One important aspect of the last added test is that it covers a specification point we had overlooked in previous iterations. The main change involved ensuring that we never get called twice simultaneously but always get queued. We accomplished this by replacing:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"//...\nconst scheduledCall = s.scheduleFunction(call);\nconst queued = queue(scheduledCall);\n//...\nexpect(concurrentQueriesDetected).toBe(false);\n//...\n"})}),"\n",(0,r.jsx)(t.p,{children:"with:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"//...\nconst scheduledCall = s.scheduleFunction(call);\nlet concurrentQueriesDetected = false;\nlet queryPending = false;\nconst monitoredScheduledCall = (...args) => {\n  concurrentQueriesDetected ||= queryPending;\n  queryPending = true;\n  return scheduledCall(...args).finally(() => (queryPending = false));\n};\nconst queued = queue(monitoredScheduledCall);\n//...\nexpect(concurrentQueriesDetected).toBe(false);\n//...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The above change ensures that we can detect whenever ",(0,r.jsx)(t.code,{children:"scheduledCall"})," is called before the previous calls to it have resolved."]}),"\n",(0,r.jsx)(t.h2,{id:"towards-next-test",children:"Towards next test"}),"\n",(0,r.jsxs)(t.p,{children:["Although we have covered the majority of the ",(0,r.jsx)(t.code,{children:"queue"})," algorithm, there are always subtle aspects that we may want to address. In this section, we will provide you with some ideas to ensure that your implementation of ",(0,r.jsx)(t.code,{children:"queue"})," is perfect. All the suggested changes have been implemented in the ",(0,r.jsx)(t.a,{href:"#have-fun",children:"CodeSandbox playground below"}),", allowing you to see how they can be achieved. The tests associated with this section have been named ",(0,r.jsx)(t.code,{children:"*.pnext.v*"})," and are stacked on top of each other, with the final test incorporating all the suggestions described in this section."]}),"\n",(0,r.jsx)(t.h3,{id:"synchronous-calls",children:"Synchronous calls"}),"\n",(0,r.jsxs)(t.p,{children:["While we previously rejected the approach in the ",(0,r.jsx)(t.a,{href:"/docs/tutorials/detect-race-conditions/your-first-race-condition-test/",children:"first part"})," of the tutorial, we could have considered that calls are expected to be fired synchronously. To achieve this, we can rely on ",(0,r.jsx)(t.code,{children:"waitAll"})," and eliminate any code responsible to wait for the batch to be executed or for promises to resolve."]}),"\n",(0,r.jsx)(t.p,{children:"Here is what we mean by not firing calls synchronously: this snippet does not execute calls in a synchronous manner. Instead, each call is queued and executed after the previous one has resolved:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"let previous = Promise.resolve();\nfunction fireCall(call) {\n  previous = previous.then(() => call());\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"To demonstrate this behavior, you can run the following snippet locally:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"console.log('before fireCall');\nfireCall(async () => console.log('call'));\nconsole.log('after fireCall');\n\n// Results:\n// >  before fireCall\n// >  after fireCall\n// >  call\n"})}),"\n",(0,r.jsx)(t.p,{children:"Let's explore different iterations attempting to enhance this snippet. Here's a naive attempt that addresses the issue for the first call, but it is still incomplete:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"let previous = undefined;\nfunction fireCall(call) {\n  if (previous === undefined) {\n    previous = call();\n  } else {\n    previous = previous.then(() => call());\n  }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"While the above solution improves the situation for the first call, it doesn't handle subsequent calls properly. The issue on second call is highlighted by the following snippet:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"function runOne() {\n  return new Promise((resolve) => {\n    console.log('before fireCall');\n    fireCall(async () => {\n      console.log('call');\n      resolve();\n    });\n    console.log('after fireCall');\n  });\n}\nawait runOne();\nawait runOne();\n\n// Results:\n// >  before fireCall\n// >  call\n// >  after fireCall\n// >  before fireCall\n// >  after fireCall\n// >  call\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here is a more advanced but still not perfect implementation of ",(0,r.jsx)(t.code,{children:"fireCall"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"let callId = 0;\nlet previous = undefined;\nfunction fireCall(call) {\n  const currentCallId = ++callId;\n  const next = previous === undefined ? call() : previous.then(() => call());\n  previous = next.then(() => {\n    if (callId === currentCallId) {\n      previous = undefined;\n    }\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This last iteration, implemented in ",(0,r.jsx)(t.code,{children:"src/queue.v4.js"}),", represents the most advanced solution we will show in that section. However, if you examine the CodeSandbox playground](#have-fun), you'll notice that even this implementation misses some cases and can be fixed."]}),"\n",(0,r.jsx)(t.h3,{id:"support-exceptions",children:"Support exceptions"}),"\n",(0,r.jsx)(t.p,{children:"When working with asynchronous code, it is common to encounter situations where code can potentially throw errors. As this scenario may occur in production code, it is essential to test our helper against such cases as well."}),"\n",(0,r.jsxs)(t.p,{children:["To enhance our existing tests with this capability, we can modify our mock ",(0,r.jsx)(t.code,{children:"call"})," implementation to simulate both successful executions and error throws. Consequently, our expectations need to be adjusted, but the underlying idea remains the same: both successes and failures should be received in an ordered manner."]}),"\n",(0,r.jsx)(t.h2,{id:"have-fun",children:"Have fun!"}),"\n",(0,r.jsx)(o.a4,{}),"\n",(0,r.jsxs)(t.admonition,{title:"The files",type:"info",children:[(0,r.jsx)(t.p,{children:"The playground provided includes source files extracted from the previous sections of this tutorial."}),(0,r.jsxs)(t.p,{children:["Inside the ",(0,r.jsx)(t.code,{children:"src"})," directory, you will find various implementations of the ",(0,r.jsx)(t.code,{children:"queue"})," algorithm that you encountered and attempted to defeat throughout the tutorial. For example, ",(0,r.jsx)(t.code,{children:"src/queue.v0.js"})," represents the initial implementation you encountered in part 1, while ",(0,r.jsx)(t.code,{children:"src/queue.v1.js"})," would pass the tests from part 1 but fail those from part 2."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"queue"})," implementation currently running in the playground is expected to pass all the tests. However, if you wish to test one of the legacy versions, you can simply edit the ",(0,r.jsx)(t.code,{children:"src/queue.js"})," file and import the desired legacy implementation."]}),(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"tests"})," directory, you will find all the suggested tests and some variations discussed throughout the tutorial. Feel free to explore and experiment with them."]})]}),"\n",(0,r.jsx)(t.h2,{id:"testing-user-interfaces",children:"Testing user interfaces"}),"\n",(0,r.jsx)(t.p,{children:"The pattern we have introduced in this tutorial can be extended to address race conditions that may occur in user interfaces. Whether you are working with React components, Vue components, or any other frameworks, you can apply the techniques covered here without any issues."}),"\n",(0,r.jsx)(t.p,{children:"In fact, the concepts and principles discussed in this tutorial are applicable beyond the scope of the specific examples provided. By leveraging property-based testing and incorporating race condition detection into your UI development workflow, you can enhance the reliability and stability of your applications."}),"\n",(0,r.jsx)(t.p,{children:"To delve deeper into this extension and gain a comprehensive understanding of applying these concepts on user interfaces, you can watch the following video:"}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/GIPbY75-lEo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},24479(e,t,s){s.d(t,{a4:()=>$,ib:()=>P,Fn:()=>k,tc:()=>Q,IO:()=>C});var n=s(61058),r=s(13706),i=s(75312);let o="playgroundActions_DQk7",a=`
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
}`.trim(),c=`
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
})`.trim(),y=`
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
})`.trim(),w=`
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
})`.trim(),q=JSON.stringify({name:"fast-check-playground",private:!0,scripts:{test:"vitest"},devDependencies:{"fast-check":"^4.0.0",vitest:"latest"},stackblitz:{installDependencies:!0,startCommand:"npx vitest --watch --reporter=verbose"}},null,2);function b({files:e,options:t}){let s=(0,r.useId)(),o=`stackblitz-${s}`,a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=a.current;if(null!==s)return(async()=>{await i.A.embedProject(s,{title:"fast-check playground",description:"Interactive fast-check playground powered by Vitest",template:"node",files:e},{height:600,view:"editor",openFile:t.openFile,hideExplorer:t.hideExplorer})})(),()=>{s.innerHTML=""}},[e,t.openFile,t.hideExplorer]),(0,n.jsx)("div",{ref:a,id:o})}function A(e){let{startSpecCode:t,anwserSpecCode:s,fileContent:i,fileName:a,fileExtension:l}=e,[c,u]=(0,r.useState)({key:0,content:t}),d=(0,r.useMemo)(()=>({[`${a}.${l}`]:i,[`${a}.test.${l}`]:c.content,"package.json":q}),[a,l,i,c.content]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:d,options:{openFile:`${a}.test.${l}`,hideExplorer:!0}}),(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:t})),children:"Reset snippet"}),(0,n.jsx)("button",{onClick:()=>u(e=>({key:e.key+1,content:s})),children:"Show answer"})]})]},c.key)}function Q(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:a,startSpecCode:h,anwserSpecCode:f})}function C(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:l,startSpecCode:f,anwserSpecCode:v})}function k(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:c,startSpecCode:v,anwserSpecCode:x})}function P(){return(0,n.jsx)(A,{fileName:"queue",fileExtension:"js",fileContent:u,startSpecCode:x,anwserSpecCode:g})}function I(e,t){return`${t.map(e=>`// ${e}`).join("\n")}

${e}`}function S(e,t){return I(e,["Implementation used within the part:","> "+t])}function F(e,t,s){return I(e,["Test suggested for the part:","> "+t,...void 0!==s?[s]:[]])}let T=function(){let e={"queue.v0.js":S(a,"Your first race condition test"),"queue.v1.js":S(l,"One step close to real usages"),"queue.v2.js":S(c,"Multiple batches of calls"),"queue.v3.js":S(u,"The missing part"),"queue.v4.js":I(d,["Pass all the tests of the tutorial"]),"queue.v5.js":I(p,["Pass all the tests"])},t={"queue.p0.test.js":h,"queue.p1.test.js":F(f,"Your first race condition test"),"queue.p1.v2.test.js":F(m,"Your first race condition test","With waitAll"),"queue.p2.test.js":F(v,"One step close to real usages"),"queue.p3.test.js":F(x,"Multiple batches of calls"),"queue.p3.v2.test.js":F(y,"Multiple batches of calls","With delayed calls (no batches)"),"queue.p4.test.js":F(g,"The missing part"),"queue.pnext.v1.test.js":I(w,["Switch back to waitAll in queue.p4.test"]),"queue.pnext.v2.test.js":I(j,["Also cover error cases"])},s={};for(let[t,n]of Object.entries(e))s[`src/${t}`]=n;for(let[e,n]of Object.entries(t))s[`tests/${e}`]=n.replace("'./queue.js'","'./../src/queue.js'");return s["src/queue.js"]="export {queue} from './queue.v5.js'",s["package.json"]=q,s}();function $(){let[e,t]=(0,r.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{files:T,options:{openFile:"tests/queue.p4.test.js",hideExplorer:!1}}),(0,n.jsx)("div",{className:o,children:(0,n.jsx)("button",{onClick:()=>t(e=>e+1),children:"Reset snippets"})})]},e)}}}]);
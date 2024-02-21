const topics = [
  {
    id: '2',
    heading: "How to optimize a website's performance",
    content: [
      'Optimize images',
      'Minify CSS, JavaScript, and HTML',
      'lazy-loading content',
      'Leverage browser caching',
      'Use a CDN',
    ]
  },
  {
    id: '3',
    heading: 'What are some new features introduced in HTML5?',
    content: [
      '<header />', '<footer />', '<article />', '<section />', '<video />', '<audio />'
    ]
  },
  {
    id: '4',
    heading: 'Explain the CSS box model',
    content: [
      'The CSS box model is the foundation for layout and design.',
      'It consists of the following:',
      'margin',
      'border',
      'padding',
      'content.'
    ]
  },
  {
    id: '5',
    heading: 'Difference between inline, block, and inline-block elements?',
    content: [
      'Inline elements are displayed on the same line as adjacent elements.',
      'Block elements are displayed on a new line and occupy the full width of the parent element.',
      'Inline-block elements are displayed inline but can have a width and height.'
    ]
  },
  {
    id: '6',
    heading: 'What is event delegation in JavaScript?',
    content: [
      'A technique where a single event listener is attached to a parent element to handle events for its child elements.',
      'It takes advantage of event bubbling and reduces the number of event listeners needed, improving performance.'
    ]
  },
  {
    id: '9',
    heading: 'What are closures?',
    content: [
      'function outer() {',
      '   const a = 1;',
      '   function inner() {',
      '     console.log(a);',
      '   }',
      '   return inner;',
      '}',
      'Closures are functions that have access to their own scope, the scope of the outer function, and the global scope.',
      'They allow data encapsulation and private variables support.'
    ]
  },
  {
    id: 'hoisting',
    heading: 'Explain the concept of "hoisting"',
    content:[
      'variable and function declarations are moved to the top of their containing scope during the compilation phase.',
      'It ONLY declares it NOT initializes it.',
      'It ONLY works for var & functions keywords.'
    ],
    hasMore: true
  },
  {
    id: '11',
    heading: 'What are promises in JavaScript?',
    content: [
      'Promises are used for asynchronous computations.',
      'They have three states: pending, fulfilled, or rejected.',
      'They are used to avoid callback hell.',
      'new Promise((resolve, reject) => resolve(1))'
    ]
  },
  {
    id: 'ci_cd',
    heading: 'What is CI/CD?',
    content: [
      'CI/CD stands for Continuous Integration/Continuous Delivery.',
      'Continuous integration ensures code changes are frequently integrated and tested.',
      'Continuous deployment automates the deployment of tested code to production.'
    ]
  },
  {
    id: 'web_sockets',
    heading: 'What are web sockets?',
    content: [
      'WebSockets provide a full-duplex communication channel between the client and the server, enabling real-time data exchange and reducing latency.'
    ],
    hasMore: true
  },
  {
    id: 'tree_shaking',
    heading: 'What is tree shaking?',
    content: [
      'Tree shaking is a technique used to remove unused code from the final bundle.',
      'It relies on ES2015 module syntax (import/export).'
    ]
  },
  {
    id: 'center_div',
    heading: 'What are the different ways to center a div?',
    content: [
      'display: FLEX; justify-content: center; align-items: center;',
      'display: GRID; place-items: center;',
      'position: ABSOLUTE; top: 50%; left: 50%; transform: translate(-50%, -50%);'
    ]
  },
  {
    id: 'redux_thunk',
    heading: 'What is redux-thunk?',
    content: [
      'redux-thunk is a middleware that allows you to write action creators that return a function instead of an action.'
    ]
  },
  {
    id: 'redux_saga',
    heading: 'What is redux-saga?',
    content: [
      'redux-saga is a middleware that allows you to write asynchronous code that looks synchronous.',
      'Redux Saga uses generator functions (function*) to handle asynchronous operations.'
    ]
  },
  {
    id: 'symentic_tags',
    heading: 'What are semantic tags?',
    content: [
      'Semantic tags are HTML5 elements that describe their meaning in the code and to the browser.',
      '<header />', '<footer />', '<article />', '<section />', '<video />', '<audio />',
      'plays a crucial role in improving the overall structure, readability, and search engine optimization (SEO) of web documents.'
    ]
  },
  {
    id: 'promise_all_settled_race',
    heading: 'Explain Promise.all, settled and race',
    content: [
      'Promise.all([]): when all promises are reolved. If any promise is rejected, the resulting promise is rejected',
      'Promise.allSettled([]): when all promises are settled (either resolved or rejected).',
      'Promise.race([]): returns any promise that settled first.'
    ],
    hasMore: true
  },
  {
    id: 'HOC_components_react',
    heading: 'What are HOC components in react?',
    content: [
      'A higher-order component (HOC) is a function that takes a component and returns a new component.',
      'React.memo()',
      'React.forwardRef()',
      'connect() from React-Redux',
      'styled() from Styled Components'
    ]
  },
  {
    id: 'yarn_start',
    heading: 'What does yarn start do?',
    content: [
      'Script Execution: runs the script named start in the package.json file.',
      'Development Server Initialization',
      'Compilation and Bundling',
      'Hot Module Replacement (HMR): allowing changes to be reflected in the browser without a full page reload.',
      'Opening in the Default Browser',
      'Watch Mode: to watch for changes in your source code files.',
      'Console Output: to display the output of your script.',
    ]
  },
  {
    id: 'call_apply_bind',
    heading: 'What is the difference between call, apply, and bind?',
    content: [
      'call() and apply() are used to invoke a function with a specific context. apply() accepts an array of arguments.',
      'bind() returns a new function with the specified context and parameters.'
    ],
    hasMore: true
  },
  {
    id: 'react_synthetic_events',
    heading: 'What are synthetic events in React?',
    content: [
      'Synthetic events are a cross-browser wrapper around the browser’s native event.',
      'They are used to ensure that the events have consistent properties across different browsers.',
      'They are pooled to improve performance.'
    ]
  },
  {
    id: 'css_position',
    heading: 'Explain the different values for the CSS position property',
    content: [
      'static: default value',
      'relative: relative to its normal position',
      'absolute: relative to the nearest positioned ancestor',
      'fixed: relative to the viewport',
      'sticky: based on the user’s scroll position'
    ]
  },
  {
    id: 'react_portal',
    heading: 'What is a React portal?',
    content: [
      'A React portal is used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
      'It is often used to render modals, tooltips, and popovers.',
      'It can still access context provided by its ancestors, and its lifecycle methods are still tied to its parent component.',
      'Eg - ReactDOM.createPortal(htmlNode, document.body)',
    ]
  },
  {
    id: 'genrators',
    heading: 'What are genrator functons in JavaScript?',
    content: [
      'A generator is a special type of function that can be paused and resumed.',
      'It is created using a function* declaration.',
      'It returns an iterator object with the next() method that resumes the function\'s until the next yield statement.',
      'The yield keyword is used to pause the function execution.'
    ],
    hasMore: true
  },
  {
    id: 'reconcilation_algo',
    heading: 'Explain React\'s reconciliation algorithm?',
    content: [
      'Reconciliation is the process of updating the DOM to match the React elements.',
      'Same Root Element: updates the existing tree.',
      'Different Root Element: tears down the old tree and builds new tree.',
      'Recursion on Children: uses keys to match children.',
      'Same Component: instance is kept and its state is updated. If not, a new instance is created.'
    ],
    hasMore: true
  },
  {
    id: 'preventDefault_stopPropagation_and_stopImmediatePropagation',
    heading: 'Difference between preventDefault, stopPropagation, and stopImmediatePropagation?',
    content: [
      'preventDefault: prevents default action.',
      'stopPropagation: prevents event from bubbling.',
      'stopImmediatePropagation: prevents other listeners of the same event from being called.'
    ],
    hasMore: true
  },
  {
    id: 'localStograge_cookies_seeion',
    heading: 'Difference between localStorage, cookies, and sessionStorage?',
    content: [
      'localStorage: stores data with no expiration date. 5MB limit.',
      'cookies: stores data that has an expiration date. Clears when the page is closed. 4KB limit.',
      'sessionStorage: stores data for one session (data is lost when the browser tab is closed). 5MB limit.'
    ],
  },
  {
    id: 'react_re_rendring',
    heading: 'How does React re-render a component?',
    content: [
      'State/Props Change',
      'Invoke render()',
      'Generate New Virtual DOM:',
      'Reconciliation',
      'Diffing Algorithm',
      'Component Updates methods',
      'Batching'
    ],
    hasMore: true
  },
  {
    id: 'Differential_Bundling',
    heading: 'What is Differential Bundling?',
    content: [
      'Technique used to deliver different JavaScript bundles to different devices.',
      'Analyzes your code & identifies features that might not be supported by older browsers.',
      'Generates a separate bundle for these features.',
      'User visits your website, browser sends information about its capabilities',
      'Server then sends the appropriate bundle based on this information.'
    ],
  },
  {
    id: 'webpack_parcel_vite',
    heading: 'Difference between Webpack, Parcel, and Vite?',
    content: [
      'Webpack: highly configurable and rich plugin ecosystem.',
      'Parcel: zero-config, fast to start, and easy to use.',
      'Vite: leverages modern browser features, fast to start, and supports hot module replacement (HMR).'
    ],
  },
  {
    id: 'sass_inheritance_mixins',
    heading: 'Breif about Sass - inheritance & mixing',
    content: [
      'Inheritance: (@extend) allows a selector to inherit the styles of another selector.',
      'Mixins: (@mixin & @include) allows you to define styles that can be re-used throughout your stylesheet.'
    ],
    hasMore: true
  },
  {
    id: 'debounce_throttle',
    heading: 'What are debounce and throttle?',
    content: [
      'Debounce: delays the execution of a function until after some time has passed since the last time it was invoked.',
      'Throttle: limits the number of times a function can be called over time.'
    ],
    hasMore: true
  },
  {
    id: 'web_vitals',
    heading: 'What are Web Vitals?',
    content: [
      'Web Vitals are used to measure performance such as loading time, interactivity, and visual stability.',
      'Largest Contentful Paint (2.5s)',
      'First Input Delay (100ms)',
      'Cumulative Layout Shift. (0.1s)'
    ],
  },
  {
    id: 'crp',
    heading: 'What is Critical Rendering Path (CRP)?',
    content: [
      'Sequence of steps browser goes through to paint pixels on the screen.',
      'It consists of the following stages:',
      'Parsing HTML to construct the DOM',
      'Render tree construction: render tree is created by combining the DOM tree and the CSSOM ',
      'Layout',
      'Painting'
    ],
  },
  {
    id: 'rendering_patterns',
    heading: 'What are the different rendering patterns in frontend?',
    content: [
      'Server-Side Rendering (SSR)',
      'Client-Side Rendering (CSR)',
      'Static Site Generation (SSG)',
      'Pre-rendering',
      'Hydrating'
    ],
  },
  {
    id: 'responsive_design',
    heading: 'How do you mantain responsive design?',
    content: [
      'Fluid Grids',
      'Relative unit for sizing',
      'Media Queries',
      'Mobile First'
    ],
  },
  {
    id: 'cross_browser',
    heading: 'How do you handle cross-browser compatibility?',
    content: [
      'Avoid browser specific CSS properties',
      'Polyfills',
      'Testing'
    ],
  },
  {
    id: 'ssr',
    heading: 'How Server-Side Rendering (SSR) works?',
    content: [
      'User makes a request',
      'Server generates HTML: fetches data, renders the page.',
      'Server sends HTML response',
      'Client receives HTML',
      'Client downloads JS (background)',
      'Client hydrates the HTML with JS'
    ]
  },
  {
    id: 'cors',
    heading: 'Explain Cross-Origin Resource Sharing (CORS)',
    content: [
      'Restricts resources from being requested from a different domain.',
      'Enforced by the browser.',
      'OPTIONS request is sent to the server to check.',
      'Server response with the below headers:',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Methods',
      'Access-Control-Allow-Headers'
    ],
  },
  {
    id: 'web_secuties',
    heading: 'What are the different web security threats and their preventions?',
    content: [
      'Cross-Site Scripting (XSS) - sanitize user input/dynamic html, use Content Security Policy (CSP)',
      'Cross-Site Request Forgery (CSRF) - use anti-CSRF tokens and same-site cookies.',
      'Man-in-the-Middle (MitM) - use HTTPS and secure cookies.',
      'Sensitive Data Exposure - encrypt sensitive data, use secure cookies.',
    ]
  },
  {
    id: 'profiling',
    heading: 'How do you profile a web application?',
    content: [
      'Performance Profiling',
      'Memory Profiling',
      'Network Profiling',
      'User Interaction Profiling'
    ],
  },
  {
    id: 'custom_hooks_usecase',
    heading: 'What are the use cases for custom hooks?',
    content: [
      'Abstracting logic',
      'Sharing logic',
      'Composing logic'
    ],
    hasMore: true
  },
  {
    id: 'deep_clone',
    heading: 'How do you deep clone an object?',
    content: [
      'JSON.parse(JSON.stringify(obj))',
      'Lodash.cloneDeep(obj)',
      'You can also write a custom function to deep clone an object.'
    ],
    hasMore: true
  },
  {
    id: 'secure_cookies',
    heading: 'What are secure and httpOnly cookies?',
    content: [
      'Secure: cookies are only sent over HTTPS.',
      'HttpOnly: cookies are not accessible via JavaScript.'
    ],
    hasMore: true
  },
  {
    id: 'composition_currying',
    heading: 'Explain function composition and currying',
    content: [
      'Function Composition: combining two or more functions to produce a new function.',
      'Currying: transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.'
    ],
    hasMore: true
  },
  {
    id: 'async_defer',
    heading: 'What is the difference between async and defer?',
    content: [
      'async: loads the script asynchronously and executes it as soon as it is available.',
      'defer: loads the script asynchronously and executes it after the HTML document has been parsed.'
    ]
  },
  {
    id: 'set_weakset',
    heading: 'What is the difference between Set and WeakSet?',
    content: [
      'Set: stores unique values of any type.',
      'Set: has methods like has, add, delete, clear',
      'WeakSet: stores weakly held objects. It can only store objects and is not iterable.',
      "WeakSet doesn't prevent garbage collection of its elements."
    ],
    hasMore: true
  },
  {
    id: 'map_weakmap',
    heading: 'What is the difference between Map and WeakMap?',
    content: [
      'Map: stores key-value pairs.',
      'Map: has methods like get, set, has, delete, clear',
      'WeakMap: stores weakly held key-value pairs. It can only store objects as keys and is not iterable.',
      "WeakMap doesn't prevent garbage collection of its elements."
    ],
    hasMore: true
  },
  {
    id: 'event_loop',
    heading: 'What is the event loop?',
    content: [
      'A mechanism that allows JS to perform non-blocking operations.',
      'Stack Execution: all code on the call stack is executed.',
      'Render Loop: requestAnimationFrame',
      'Task Queue: setTimeout, setInterval, AJAX calls, or user events',
      'Microtask Queue: Promises, Object.observe'
    ],
  },
  {
    id: 'big_o_notation',
    heading: 'How to identify complexity of your algorithm?',
    content: [
      'O(1): Constant time, operations don\'t depend on input size.',
      'O(log n): Logarithmic time, operations grow slower than linearly.',
      'O(n): Linear time, operations grow directly with input size.',
      'O(n log n): Log-linear time, a combination of linear and logarithmic growth.',
      'O(n^2): Quadratic time, operations grow quadratically with input size.',
    ],
    hasMore: true,
  },
  {
    id: 'react_fiber',
    heading: 'Explain React Fiber?',
    content: [
      'Identifying changes',
      'Building a work queue',
      'Prioritizing the queue',
      'Incremental rendering',
      'Reconciliation',
      'Committing changes',
    ],
    hasMore: true
  },
  {
    id: 'load_diff_images_HTML',
    heading: 'load different size images using only HTML CSS',
    content: [
      '<picture>',
      '<source media="(max-width: 767px)" srcset="small.jpg">',
      '<source media="(min-width: 768px)" srcset="large.jpg">',
      '<img src="fallback.jpg" alt="Image">',
      '</picture>',
    ]
  },
  {
    id: 'request_lifecycle',
    heading: 'Explain the lifecycle of a request',
    content: [
      'Client Sends a Request: URL, HTTP Method, Headers, Body',
      'Server Processes the Request: Routing, Auth, Business Logic',
      'Server Generates a Response: HTML, JSON, or other types of data.',
      'Server Sends the Response:  along with HTTP codes and other info.',
      'Client Receives the Response',
    ],
  },
  {
    id: 'js_in_browser',
    heading: 'How does JavaScript work in the browser?',
    content: [
      'Does when <script> encounters',
      'Parsing: convert to AST',
      'Compilation: convert to machine code (JIT)',
      'Execution: run the code',
      'Garbage Collection: remove unused memory',
    ]
  },
  {
    id: 'preconnect',
    heading: 'What is preconnect?',
    content: [
      'Preconnect is used to set up early connections before an HTTP request is actually sent.',
      'It is used to reduce the time it takes to set up a connection.',
      '<link rel="preconnect" href="https://example.com">'
    ]
  },
  {
    id: 'css_specificity',
    heading: 'What is CSS specificity?',
    content: [
      'Specificity is a set of rules that determines which CSS property values are applied to an element.',
      'It is based on the number of ID selectors, class selectors, and type selectors.',
      'Inline styles have the highest specificity.',
      '!important overrides all other rules.'
    ],
    hasMore: true
  },
  {
    id: 'scopechain',
    heading: 'What is the scope chain in JS?',
    content: [
      'It\'s the order in which the JavaScript engine looks for variables in the code.',
      'stores variables and function declarations',
      'it starts with the innermost scope and moves outwards until it either finds the variable or reaches the global scope.'
    ],
  },
  {
    id: 'es6',
    heading: 'What are some new features in ES6?',
    content: [
      'let and const',
      'Arrow functions',
      'Template literals',
      'Destructuring & Spread Operato',
      'Classes',
      'Modules'
    ],
  },
  {
    id: 'error_types',
    heading: 'What are the different types of errors in JS?',
    content: [
      'SyntaxError: invalid syntax',
      'ReferenceError: invalid reference',
      'TypeError: invalid type',
      'RangeError: invalid range',
      'URIError: encoding/decoding error',
      'EvalError: eval() function error'
    ],
  },
  {
    id: 'dry_solid',
    heading: 'Explain DRY & SOLID priciples.',
    content: [
      'DRY: Don\'t Repeat Yourself',
      'S: Single Responsibility Principle',
      'O: Open/Closed Principle',
      'L: Liskov Substitution Principle',
      'I: Interface Segregation Principle',
      'D: Dependency Inversion Principle'
    ],
    hasMore: true,
  }
];

export default topics;
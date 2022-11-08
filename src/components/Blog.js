import React from 'react'

const Blog = () => {
  return (
    <div className="mt-5">
      <div className="text-gray-100 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Oct 25, 2022</span>
            <button className="font-bold rounded btn-info px-3 py-1 my-2">
              Server
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              What is CORS?
            </h3>
            <p className="mt-2 text-justify">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
              className="hover:underline text-purple-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-100 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Oct 25, 2022</span>
            <button className="font-bold rounded btn-info px-3 py-1 my-2">
              Authentication
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline text-justify">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h3>
            <p className="mt-2 text-justify">
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. Firebase Authentication integrates tightly with
              other Firebase services, and it leverages industry standards like
              OAuth 2.0 and OpenID Connect, so it can be easily integrated with
              your custom backend.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://firebase.google.com/docs/auth"
              className="hover:underline text-purple-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-100 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Oct 25, 2022</span>
            <button className="font-bold rounded btn-info px-3 py-1 my-2">
              Router
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              How does the private route work?
            </h3>
            <p className="mt-2 text-justify">
              The react private route component renders child components
              (children) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://jasonwatmore.com/post/2022/06/24/react-router-6-private-route-component-to-restrict-access-to-protected-pages"
              className="hover:underline text-purple-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-100 m-5 mb-12">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Oct 25, 2022</span>
            <button className="font-bold rounded btn-info px-3 py-1 my-2">
              Server
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              What is Node? How does Node work?
            </h3>
            <p className="mt-2 text-justify">
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://www.geeksforgeeks.org/explain-the-working-of-node-js/"
              className="hover:underline text-purple-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

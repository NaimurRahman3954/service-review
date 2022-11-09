import React from 'react'

const Blog = () => {
  return (
    <div className="mt-5">
      <div className="text-gray-900 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Oct 25, 2022</span>
            <button className="font-bold rounded btn-warning px-3 py-1 my-2">
              Server
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              What is the difference between SQL and NoSQL
            </h3>
            <p className="mt-2 text-justify">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
              <br />
              <br />
              There are five practical differences between SQL and NoSQL:
              <ol className="list-decimal pl-9 pt-2">
                <li>Language</li>
                <li>Scalability</li>
                <li>Structure</li>
                <li>Properties</li>
                <li>Support</li>
                <li>communities</li>
              </ol>
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://www.talend.com/resources/sql-vs-nosql/"
              className="hover:underline text-purple-600"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-900 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Oct 25, 2022</span>
            <button className="font-bold rounded btn-warning px-3 py-1 my-2">
              Authentication
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline text-justify">
              What is JWT, and how does it work?
            </h3>
            <p className="mt-2 text-justify">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br />
              <br />
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://www.akana.com/blog/what-is-jwt"
              className="hover:underline text-purple-600"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-900 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Oct 25, 2022</span>
            <button className="font-bold rounded btn-warning px-3 py-1 my-2">
              NodeJS
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="mt-2 text-justify">
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
              <br />
              <br />
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/"
              className="hover:underline text-purple-600"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-900 m-5 mb-12">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Oct 25, 2022</span>
            <button className="font-bold rounded btn-warning px-3 py-1 my-2">
              Server
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="mt-2 text-justify">
              NodeJS server uses an EventQueue, which queues incoming client
              requests and an EventLoop which is an infinite loop that receives
              requests and processes them. This EventLoop is single threaded and
              acts as a listener for the EventQueue which processes incoming
              requests based on FIFO policy.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://forum.golibrary.co/question/nodejs-multi-threaded-nodejs-handle-multiple-requests/"
              className="hover:underline text-purple-600"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

import React from 'react'

const Pricing = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto m-9 lg:mt-0 lg:mb-9 stats w-4/5 outline outline-1 outline-base-300 flex flex-col lg:flex-row">
        <div className="stat">
          <div className="stat-title font-bold">Plan</div>
          <div className="stat-value text-secondary">$29/ month</div>
          <div className="flex flex-col gap-1 text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="stat-desc">✅ Unlimited access to PRO courses</div>
            <div className="stat-desc">
              ✅ Quizzes with hand-picked meme prizes
            </div>
            <div className="stat-desc">✅ Invite to private Discord chat</div>
            <div className="stat-desc">🔥 Free Sticker mailed to your door</div>
          </div>
        </div>

        <div className="stat outline outline-t-1  outline-base-300">
          <div className="stat-title font-bold">New Registers</div>
          <div className="stat-value text-primary">4,200</div>
          <div className="stat-desc">↗︎ 400 (22% more than last month)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-bold">Satisfaction</div>
          <div className="stat-value text-success">99%</div>
          <div className="stat-desc">99% students recommend to their peers</div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

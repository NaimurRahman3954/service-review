import React from 'react'

const Pricing = () => {
  return (
    <div className="mt-12">
      <div className="container mx-auto m-9 lg:mt-0 lg:mb-9 stats w-4/5 outline outline-1 outline-base-300 flex flex-col lg:flex-row">
        <div className="stat">
          <div className="stat-title font-bold">Plan</div>
          <div className="stat-value text-secondary">$29/ month</div>
          <div className="flex flex-col text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="text-md text-gray-500">
              ✅ Unlimited access to PRO courses
            </div>
            <div className="text-md text-gray-500">
              ✅ Quizzes with hand-picked meme prizes
            </div>
            <div className="text-md text-gray-500">
              ✅ Invite to private Discord chat
            </div>
            <div className="text-md text-gray-500">
              🔥 Free Sticker mailed to your door
            </div>
          </div>
        </div>

        <div className="stat outline outline-t-1  outline-base-300">
          <div className="stat-title font-bold">Lifetime</div>
          <div className="stat-value text-primary">$399 once</div>
          <div className="flex flex-col text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="text-md text-gray-500">
              ✅ All PRO-tier benefits
            </div>
            <div className="text-md text-gray-500">
              ✅ Single payment, lifetime access
            </div>
            <div className="text-md text-gray-500">
              ✅ 4,200 bonus xp points
            </div>
            <div className="text-md text-gray-500">
              🔥 Next Level T-shirt shipped worldwide
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title font-bold">Enterprise</div>
          <div className="stat-value text-success">$299/ seat</div>
          <div className="flex flex-col text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="text-md text-gray-500">
              ✅ Everything from the Lifetime Plan
            </div>
            <div className="text-md text-gray-500">✅ Better bulk pricing</div>
            <div className="text-md text-gray-500">
              ✅ 5 seat minimum purchase
            </div>
            <div className="text-md text-gray-500">
              🔥 Zoom walkthrough with me
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

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
          <div className="stat-title font-bold">Lifetime</div>
          <div className="stat-value text-primary">$399 once</div>
          <div className="flex flex-col gap-1 text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="stat-desc">✅ Unlimited access to PRO courses</div>
            <div className="stat-desc">
              ✅ Quizzes with hand-picked meme prizes
            </div>
            <div className="stat-desc">✅ Invite to private Discord chat</div>
            <div className="stat-desc">🔥 Free Sticker mailed to your door</div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title font-bold">Enterprise</div>
          <div className="stat-value text-success">$299/ seat</div>
          <div className="flex flex-col gap-1 text-start w-fit mx-auto bg-slate-40 my-3">
            <div className="stat-desc">✅ Unlimited access to PRO courses</div>
            <div className="stat-desc">
              ✅ Quizzes with hand-picked meme prizes
            </div>
            <div className="stat-desc">✅ Invite to private Discord chat</div>
            <div className="stat-desc">🔥 Free Sticker mailed to your door</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

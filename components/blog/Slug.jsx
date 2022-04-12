import React, { useEffect } from "react"
import styles from "./Slug.module.css"

const data = {
  html: '<p>The <a href="https://blog.golemproject.net/community-incentives-program/">GLM Rewards Program</a> for March has concluded! We absolutely love the application development going on in the community lately!</p><p>We would like to remind everyone that we have increased the <a href="https://blog.golemproject.net/beta-v-release/#:~:text=Rewards%20for%20individuals%20giving%20feedback%20and%20developing%20on%20the%20new%20release">number of slots</a> available for Application Development and Maintenance on Golem, and we have decreased the rewards for Technical Support.</p><h1 id="glm-rewards-program-spotlight-pi-on-golem-pog-"><strong>GLM Rewards Program Spotlight — Pi On Golem (POG)!</strong></h1><p>This new application is being developed by Jedbrooke#7627. He is developing a high performance spigot to find <a href="https://github.com/jedbrooke/pi_spigot/tree/bellard">far-out digits of Pi</a> with Bellard’s Formula, which will utilize Golem. His current program is using C++.</p><p>You can find updates for the application in the #development channel of the <a href="https://chat.golem.network/">Golem Discord</a>.</p><h1 id="glm-rewards-program-march-awardees"><strong>GLM Rewards Program — March awardees</strong></h1><p>The individuals we’ll be awarding the GLM Rewards Program slots for March’s round are:</p><p>Feedback Masters (1000 GLM each): jedbrooke#7627 (Discord) and #stelballe#2785 (Discord)</p><p>Application Creation and Maintenance (4000 GLM each): krunch3r#2035 (Discord) and jedbrooke#7627 (Discord) and The Golden Atlas [16-A]#9943 (Discord)</p><p>Please shoot an email over to contact@golem.network and we’ll follow up with instructions. Or find Mattias in the community Discord (https://chat.golem.network) and he will be happy to help you directly.</p><h2 id="wrapping-up"><strong>Wrapping Up</strong></h2><p>That’s everything that we have for March’s GLM Rewards Program. If you’re interested in learning more about this month’s highlights then don’t hesitate to join the community Discord and share your thoughts. Or if the <a href="https://blog.golemproject.net/glm-rewards-program-application-creation-and-maintenance/">Application Creation and Maintenance</a> category sparks your interest and you’re a developer then we’d love to see you create and share your own application that utilizes the Golem Network.</p><p>Remember that it’s easy to get started with the GLM Rewards Program by being active where the Golem community is discussing and interacting. The Golem team is often active in the<a href="https://chat.golem.network/"> Discord</a>,<a href="http://reddit.com/r/GolemProject"> /r/GolemProject</a> and<a href="https://www.reddit.com/r/GolemTrader/"> /r/GolemTrader</a> on Reddit,<a href="https://t.me/GolemProject"> Telegram</a> and<a href="https://t.me/golemannouncementchannel"> announcements channel</a>. Or create some cool Golem integration on Github and share it with us via email, for ideas check out<a href="https://github.com/golemfactory/awesome-golem/blob/main/README.md"> Awesome Golem</a>. There’s so much potential for anyone to get involved.</p><p>Since the GLM Rewards Program requires KYC then of course you can opt-out if it’s not for you, we just want to <em>token(ize)</em> our appreciation in the form of GLM tokens.</p>',
}

export default function Example() {
  return (
    <div className="bg-white relative mt-4 mb-10">
      <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 ">
        <article className={styles.blogpost}>
          <div className={styles.title}>
            <div className="col-span-12">
              <div className="grid text-center">
                <div className="tags text-center text-golemblue">
                  <a className="hover:underline text-sm inline-block mr-1">#Release</a>
                  <a className="hover:underline text-sm  inline-block mr-1">#Yagna</a>
                  <a className="hover:underline text-sm  inline-block mr-1">#Yapapi</a>
                  <a className="hover:underline text-sm mr-1">#Yajsapi</a>
                </div>
                <h1 className="text-9xl font-semibold text-black">Golem Beta V - Web Application Development toolset!</h1>
                <p className="mt-3 text-gray-500">Beta V is here with bundled major updates to Yagna and the Yagna Python API, Yapapi!</p>
                <div className="mt-6 flex items-center border-t w-full py-4">
                  <div className="flex-shrink-0">
                    <a>
                      <span className="sr-only">Mattias Nystrom</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://blog.golemproject.net/content/images/size/w100/2019/02/logo-golem-5.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <span>
                      <a className="hover:underline">Mattias Nystrom</a>
                    </span>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="Mar 10">Mar 20</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="mb-10 rounded-lg" src="https://blog.golemproject.net/content/images/2022/04/GRP-MarchAsset-1-1.png"></img>

          <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </article>
      </div>
    </div>
  )
}

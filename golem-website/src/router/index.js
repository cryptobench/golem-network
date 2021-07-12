import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Team from "../views/Team.vue"
import About from "../views/About.vue"
import Platform from "../views/Platform.vue"
import Projects from "../views/Projects.vue"
import Rewards from "../views/Rewards.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/platform",
    name: "Platform",
    component: Platform,
  },
  {
    path: "/community",
    name: "Community",
    component: Projects,
  },
  {
    path: "/community/rewards",
    name: "Rewards",
    component: Rewards,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

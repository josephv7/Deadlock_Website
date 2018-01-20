import Home from '@/components/Home'
import Rules from '@/components/Rules'
import Leaderboard from '@/components/Leaderboard'
import EnterDetails from '@/components/user/EnterDetails'


const routes = [
  { path: '/',
    component: Home
  }, {
    path: '/rules',
    component: Rules
  }, {
    path: '/leaderboard',
    component: Leaderboard
  }, {
    path: '/enterdetails',
    component: EnterDetails
  }]

export default routes

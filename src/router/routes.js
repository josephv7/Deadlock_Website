import Home from '@/components/Home'
import Rules from '@/components/Rules'
import Leaderboard from '@/components/Leaderboard' 
import userDash from '@/components/userDash'
import EnterDetails from '@/components/user/EnterDetails'
import userDashboard from '@/components/user/Dashboard'


const routes = [
  { path: '/home',
    component: Home
  }, {
    path: '/rules',
    component: Rules
  }, {
    path: '/leaderboard',
    component: Leaderboard
  }, {
    path: '/user',
    component: userDash,
    meta: {requiresAuth: true},
    children: [{
          path: 'enterdetails',
          component: EnterDetails
        }, {
          path: 'dashboard',
          component: userDashboard
        }
    ]
  }]

export default routes

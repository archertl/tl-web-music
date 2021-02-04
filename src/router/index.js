import TLDiscover from '@/views/discover'
import TLMine from '@/views/mine'
import TLFriend from '@/views/friend'
const routes = [
  {
    path: '/',
    component: TLDiscover
  },
  {
    path: '/mine',
    component: TLMine
  },
  {
    path: '/friend',
    component: TLFriend
  },

]

export default routes
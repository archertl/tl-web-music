import TLDiscover from '@/views/discover'
import TLRecommend from '@/views/discover/views/recommend'


import TLMine from '@/views/mine'
import TLFriend from '@/views/friend'
import { Redirect } from 'react-router-dom'
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover/recommend"/>
  },
  {
    path: '/discover',
    component: TLDiscover,
    children: [
      {
        path: '/discover',
        render: () => <Redirect to="/discover/recommend"/>
      },
      {
        path: '/discover/recommend',
        component: TLRecommend
      },
      {
        path: '/discover/ranking'
      },
      {
        path: '/discover/songs'
      },
      {
        path: '/discover/djradio'
      },
      {
        path: '/discover/artist'
      },
      {
        path: '/discover/album',
      },
    ]
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
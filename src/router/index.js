import TLDiscover from '@/views/discover'
import TLRecommend from '@/views/discover/views/recommend'
import TLRanking from '@/views/discover/views/ranking'
import TLSongs from '@/views/discover/views/songs'
import TLDjradio from '@/views/discover/views/djradio'
import TLArtist from '@/views/discover/views/artist'
import TLAlbum from '@/views/discover/views/album'

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
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend"/>
      },
      {
        path: '/discover/recommend',
        component: TLRecommend
      },
      {
        path: '/discover/ranking',
        component: TLRanking
      },
      {
        path: '/discover/songs',
        component: TLSongs
      },
      {
        path: '/discover/djradio',
        component: TLDjradio
      },
      {
        path: '/discover/artist',
        component: TLArtist
      },
      {
        path: '/discover/album',
        component: TLAlbum
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
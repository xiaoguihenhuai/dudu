export default{
    path:'/home',
    component:() =>  import('@/views/Home'),
    children:[
      {
        path:'city',
        component:() =>import('@/components/City')
      },
      {
        path:'nowPlaying',
        component:() =>import('@/components/NowPlaying')
      },
      {
        path:'search',
        component:() =>import('@/components/Search')
      },{
        path:'comingSoon',
        component:() =>import('@/components/Comingsoon')
      },
      {
        path:'/home',
        redirect:'/home/nowPlaying'
      }
    ]
  }
export default{
    path:'/mine',
    component:() =>  import('@/views/Mine'),
    children:[
      {
        path:'mypicture',
        component:() =>  import('@/components/Mypicture'),
      },
      {
        path:'myvideo',
        component:() =>  import('@/components/Myvideo'),
      },
      {
        path:'/mypicture',
        redirect:'/mine/mypicture'
      }
    ]
  }
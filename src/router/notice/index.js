export default{
  path:'/notice',
  component:() =>  import('@/views/Notice'),
  children:[
    {
      path:'notification',
      component:() =>  import('@/components/Notification'),
    },
    {
      path:'news',
      component:() =>  import('@/components/News'),
    },
    {
      path:'/notice',
      redirect:'/notice/notification'
    }
  ]
}
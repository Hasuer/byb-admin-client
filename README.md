## 做项目时遇到的问题

- 'useEffect'来代替类式组件中的`ComponentDidMount`,`ComponentDidUpdate`,`ComponentWillUnmount`

- <Navigate to='/'>代替<Redirect to="/">

- 例如path = ’/‘ 的时候是 Layout 组件，我期望在path = '/' 的时候重定向到 ‘/home’，该如何实现？

    - 在 path='/' 的组件 App 组件里加上了 loca.pathname === '/' ? <Navigate replace to='/home' /> : null这句，可以实现在 App 组件重定向到 /home， 但是前面必须加上是否处于当前路由的判断，否则会死循环

- 使用PubSub来实现兄弟组件的通信

- 单独配置router.js文件来配置路由，在<App/>中引入，配合使用<Outlet/>

- 将影响渲染的操作放在 useLayoutEffect 中，比如在MySider模块中动态生成menu的openKeys属性需要在渲染前完成,我就将动态获取的节点函数(getMenuNode()函数)放在了useLayoutEffect中，使得执行完在渲染。并且结合useRef(),每次获取都是最新的值。 https://zhuanlan.zhihu.com/p/348701319.

- 遇到了这个问题 https://www.5axxw.com/questions/content/zgs4nh#question-recommend 三天才解决这个bug，这个解答是好的，但是不知道是什么原理
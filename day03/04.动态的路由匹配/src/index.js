import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Link} from 'react-router-dom'

const News = () => (
   <ul>
     <li><Link to='/newsdetails/998'>新闻列表</Link></li>
     <li><Link to='/newsdetails/999'>新闻列表</Link></li>
     <li><Link to='/newsdetails/1000'>新闻列表</Link></li>
   </ul>
  )
const NewsDetail = (props) => {
  // console.log('details')
  console.log(props.match.params.id)
  // 新闻详情会根据新闻id 来呈现不同的新闻的详细信息
  return (
    <div>
      <h1>新闻的id是: ...{props.match.params.id}</h1>
    </div>
    )
}

const App = () => {
  return (
    <HashRouter>
      <div>
        <Route path='/news' component={News}/>
        <Route path='/newsdetails/:id' component={NewsDetail}/>
      </div>
    </HashRouter>
    )
}
ReactDOM.render( <App />, document.querySelector('#box'))

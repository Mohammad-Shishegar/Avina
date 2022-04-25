import React , {useState} from "react"
import Sidebar from "./Components/Sidebar/Sidebar"
import UserData from "./Pages/UserData/UserData"
import "./App.css"
import AddUser from "./Pages/AddUser/AddUser"
import {rows} from "./fakeData"
import { Switch , Route , Redirect} from "react-router-dom"
import AboutUs from "./Pages/About/AboutUs"

const App = () => {


  const [data , setData] = useState(rows)

    const addUser = (row) => {
      console.log(row)
      console.log(data)
        var temp = data.concat(row)
        setData(temp)
    }


  return (
    <Switch>
      <div className="app">
        <div className="side">
          <Sidebar />
        </div>
        <div className="body">
          <Route path={"/userData"} render = {(props) => <UserData data={data} {...props}/>}/>
          <Route path={"/addUser"} render={(props) => <AddUser data={data} addUser={addUser} {...props}/>}/>
          <Route path={"/about"}  component={AboutUs}/>
          <Redirect exact from={"/"} to={"/userData"}/>
        </div>
      </div>
    </Switch>
  )
}

export default App
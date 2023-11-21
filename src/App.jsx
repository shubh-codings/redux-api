import './App.css'
import {useDispatch,useSelector} from "react-redux"
import {login} from "./app/slices/authSlice"
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.auth)
  const [user,setUser] = useState({userName:'',password:""})
  // console.log('State', state)
  if(state.isLoading){return <h1>Loading......</h1>}

  return (
    <>
    <h1>Api call via Redux</h1>
    <input type="text" placeholder='UserName' value={user.userName} onChange={e=>setUser({...user,userName:e.target.value})}/>
    <input type="text" placeholder='Password' value={user.password} onChange={e=>setUser({...user, password:e.target.value})}/>
    <button onClick={()=>dispatch(login())} >Login</button>
    <div>
      {state.userData.data && <ul><li>{state.userData.data.name}</li></ul>}

    </div>
    </>
  )
}

export default App

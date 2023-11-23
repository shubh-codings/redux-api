import {useDispatch,useSelector} from "react-redux"
import {login} from "./app/slices/authSlice"
// import { useState } from 'react'

export default function Login() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.auth)
    // const [user,setUser] = useState({userName:'',password:""})
  return (
    <div>
          <h1>Api call via Redux</h1>
    {/* <input type="text" placeholder='UserName' value={user.userName} onChange={e=>setUser({...user,userName:e.target.value})}/>
    <input type="text" placeholder='Password' value={user.password} onChange={e=>setUser({...user, password:e.target.value})}/> */}
    <button onClick={()=>dispatch(login())} >Login</button>
    <div>
      {state.userData && <h2>{state.userData.token}</h2>}
    </div>
    {/* <button onClick={handleClick}>Testing</button> */}
    </div>
  )
}

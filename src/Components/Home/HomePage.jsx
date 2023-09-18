import { useEffect } from "react";
import "./home.css";
import { getAllUsers } from "../../redux/apiRequest";
import { getFood } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFood } from "../../redux/apiRequest";
import { deleteUser } from "../../redux/apiRequest"
const HomePage = () => {
  const user=useSelector((state)=>state.auth.login?.currentUser)
  const food =useSelector((state)=>state.foods.foods.allFoods)
  const userList= useSelector((state)=>state.users.users.currentUser)
  const foodList=useSelector((state)=>state.foods.foods.allFoods)
  const msg= useSelector((state)=> state.users?.msg)
  const dispatch= useDispatch()
  const navigate= useNavigate()
  //DUMMY DATA
  // const userData = [
  //   {
  //     username: "anhduy1202",
  //   },
  //   {
  //     username: "kelly1234",
  //   },
  //   {
  //     username: "danny5678",
  //   },
  //   {
  //     username: "kenny1122",
  //   },
  //   {
  //     username: "jack1234",
  //   },
  //   {
  //     username: "loi1202",
  //   },
  //   {
  //     username: "nhinhi2009",
  //   },
  //   {
  //     username: "kellynguyen1122",
  //   },
    
  // ];
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
    if(user?.accessToken)
    getAllUsers(user?.accessToken, dispatch)
  }, [])
  useEffect(()=>{
    getFood(user?.accessToken, dispatch)
  },[])
  const handleDeleteUser=(id)=>{
    deleteUser(user?.accessToken, dispatch, id)
  }
  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${ user?.admin ? "Admin": "User"}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user" onClick={()=> handleDeleteUser(user._id)}> Delete </div>
            </div>
          );
        })}
      </div>
      <div>{msg}</div>
    </main>
  );
};

export default HomePage;
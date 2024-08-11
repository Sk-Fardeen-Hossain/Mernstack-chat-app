import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () =>{
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-slate-200 bg-clip-padding rounded-lg">
      <Sidebar/>
      <MessageContainer/>

    </div>
  )
}
export default Home;
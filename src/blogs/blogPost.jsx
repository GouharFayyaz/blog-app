import { useSelector } from "react-redux"
import TimeAgo from "../comp/timeago"
import Reaction from "../comp/reactions"

const Blogpost = () => {

             
    const myBlogs = useSelector(state => state.users.data1)
    // console.log(myBlogs);
    const sortedBlogs = myBlogs.slice().sort((a, b) => b.date.localeCompare(a.date))
    const printData = sortedBlogs?.map((ele) => {
        // console.log(ele);
        return (
            <div key={ele.Id} className='border-2 border-dashed border-2 border-sky-500  px-6 py-2 my-4 rounded-md'> 
                <h1 className="py-4">titel : <span className=' text-2xl text-pink-600 font-bold '>{ele.title}</span></h1>
                <textarea className=" bg-transparent text-purple-700 w-[100%] px-2 outline-none " value={ele.vlog} name="" id="" cols="" rows="7">{ele.blog}</textarea>
                <h1 className="text-xs">by : <span className="text-lg text-green-700 italic">{ele.author} </span><span className="inline-block"><TimeAgo data={ele.date}/></span> </h1>
                <Reaction data = {ele}/>
            </div>
        )
    })




    return (
        <div className='w-[100%]  mx-auto'>
           
            {printData}
        </div>
    )
}
export default Blogpost
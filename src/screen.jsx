import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./globstore/slice"
import Blogpost from "./blogs/blogPost"
const Screen = () => {


    const dispatch = useDispatch()
    const mystate = useSelector(state => state)
    const [state, setstate] = useState({})


    const fetchData = (e) => {

        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const PushData = (e) => {
        e.preventDefault()
        dispatch(add(state))
       setstate({title:"" , vlog: "" , author:""})
    }


    // console.log(mystate);
    // console.log(state);
    return (

        <div className=" w-[100%] h-[87vh] px-4 font-semibold overflow-y-auto border-2 box-border  ">
            <h1 className="text-center text-3xl py-4 ">BLOGS</h1>
            <form action="" className="w-[50%]  mx-auto flex flex-col" onSubmit={PushData}>
                <input name="title" autoFocus value={state.title} type="text" className=" border-double border-4 border-sky-500 outline-none rounded-md p-2  bg-transparent" placeholder="Blog Title" required onChange={fetchData} />
                <textarea name="vlog" autoFocus value={state.vlog} id="" cols="" rows="5" placeholder="Content" className="  border-double border-4 border-sky-500 mt-2 bg-transparent outline-none rounded-md p-2 " required onChange={fetchData}></textarea>
                <input value={state.author} autoFocus className=" border-double border-4 border-sky-500 mt-2  rounded-md outline-none rounded-md p-2  bg-transparent " name="author" type="text" placeholder="Author Name" onChange={fetchData} required />
                <input type="submit" className="mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" />
                {/* <input type="submit" className=" border-2 mt-2  outline-none  rounded-md hover:bg-[#532C75] hover:cursor-pointer hover:text-white" /> */}


            </form>
            <Blogpost/>
        </div>


    )
}
export default Screen
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    data1: [],
    count: 1
}

export const fetchData = createAsyncThunk(`userdata`, async () => {
    const mydata = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return mydata.data
})


const myslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: {
            reducer(state, action) {

                state.data1.push(action.payload)

            },
            prepare(payload) {
                return {
                    payload: {
                        ...payload,
                        Id: nanoid()
                        , date: new Date().toISOString()
                        , reactions: { wow: 0, heart: 0, tumbsup: 0, dislike: 0, rocket: 0, coffee: 0 }
                    }
                }
            }
        },
        addreaction: (state, action) => {
            const existing = state.data1.find(ele => ele.Id === action.payload.myId);
            if (existing) {
                existing.reactions[action.payload.reaction] += 1;
            }

        },


        remove: (state, action) => {
            state.data1.splice(action.payload, 1)
        },

    }
    // extraReducers(builder){
    //     // builder.addCase(fetchData.pending, (state, action) => {
    //     //     state.count++
    //     // })
    //     builder.addCase(fetchData.fulfilled, (state, action) => {
    //             //    console.log(action.payload);

    //              const myapidata = action.payload.map((ele)=>{
    //                   ele.date = new Date().toISOString()
    //                   ele.reaction =  { wow: 0, heart: 0, tumbsup: 0, dislike: 0, rocket: 0, coffee: 0 }

    //                    return state.data1.push(ele)
    //              })


    //     })
    // builder.addCase(fetchData.rejected, (state, action) => {
    //     state.count++
    // })
    // }
})

export const { add, remove, addreaction } = myslice.actions
export default myslice.reducer



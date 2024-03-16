import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    events: [
        {
            title: "Cocktail Party",
            category: "wedding",
            img: "https://static.wixstatic.com/media/11062b_330836cc643943268f7f73d1bdf9e906~mv2.jpg/v1/fill/w_979,h_552,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_330836cc643943268f7f73d1bdf9e906~mv2.jpg",
            time: "Mar 21, 2035, 7:00 PM – 11:00 PM",
            time_short: "Wed Mar 21",
            location: "San Francisco, San Francisco, CA, USA",
            loc_short: "San Francisco",
            description: "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event",
            tickets: [
                {
                    type: "general",
                    price: 20,
                    service_fee: 0.50,
                    quantity: 0
                }
            ]
        },
        {
            title: "Music Concert",
            category: "music",
            img: "https://static.wixstatic.com/media/8e97f35c226e4ddb88e25fe195c332c5.jpg/v1/fill/w_979,h_552,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/8e97f35c226e4ddb88e25fe195c332c5.jpg",
            time: "Mar 21, 2035, 7:00 PM – 11:00 PM",
            time_short: "Wed Mar 21",
            location: "San Francisco, San Francisco, CA, USA",
            loc_short: "San Francisco",
            description: "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event",
            tickets: [
                {
                    type: "early bird",
                    price: 15,
                    service_fee: 0.38,
                    quantity: 0
                },
                {
                    type: "general",
                    price: 20,
                    service_fee: 0.50,
                    quantity: 0
                },
                {
                    type: "vip",
                    price: 30,
                    service_fee: 0.75,
                    quantity: 0
                }
            ]
        },
        {
            title: "Business Conference",
            category: "business",
            img: "https://static.wixstatic.com/media/ea71bb_303564fae1f348d5a41a039dd05ca4e8~mv2.jpg/v1/fill/w_979,h_552,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_303564fae1f348d5a41a039dd05ca4e8~mv2.jpg",
            time: "Mar 21, 2035, 7:00 PM – 11:00 PM",
            time_short: "Wed Mar 21",
            location: "San Francisco, San Francisco, CA, USA",
            loc_short: "San Francisco",
            description: "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event",
            tickets: [
                {
                    type: "general",
                    price: 20,
                    service_fee: 0.50,
                    quantity: 0
                }
            ]
        }
    ]
}

const EventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        hostEvent: (state, action) => {
            state.events = [...state, {...action.payload}]
        },
        cancelEvent: (state, action) => {
            state.events = state.filter(state => state !== action.payload)
        }
    }
})

export const { hostEvent, cancelEvent } = EventSlice.actions
export default EventSlice.reducer
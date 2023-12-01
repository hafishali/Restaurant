import restslice from '../redux/restslice'
const { configureStore } = require("@reduxjs/toolkit");


const store =configureStore({
    reducer:{
        restslice

    }
})
export default store
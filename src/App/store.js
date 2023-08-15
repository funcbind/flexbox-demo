import { configureStore } from "@reduxjs/toolkit";
import flexBoxDemoReducer from "./FlexBoxDemo/flexPropertiesReducer";


export default configureStore({
    reducer : {
       flexProperties : flexBoxDemoReducer
    }
});
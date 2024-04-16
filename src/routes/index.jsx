import React from "react"
import Home from '../Pages/Home'
import DetailPage from "../Pages/DetailPage"
import { createBrowserRouter } from "react-router-dom"


const routes = createBrowserRouter([
    {
        path: "/",
        element : <Home />
    },
    {
        path : "/:id",
        element : <DetailPage />
    }
])

export default routes
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import * as pages from "./pages"
const Routess = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<pages.StudentPage />} />
            </Routes>
        </BrowserRouter>
    </div>
)
export default Routess




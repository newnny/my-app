import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Main"
import Portfolio from "../Portfolio"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={Main} />
      <Route path="/portfolio" element={Portfolio} />
    </Routes>
  )
}

export default AppRouter;
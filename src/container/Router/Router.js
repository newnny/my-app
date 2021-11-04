import React from "react"
import { Switch, Redirect, Router, Route } from "react-router-dom"
import Main from "../Main"

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  )
}

export default Router;
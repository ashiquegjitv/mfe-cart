import { HelmetProvider } from "react-helmet-async"
import { Router, Route, Switch } from "wouter"

import CartPage from "./pages/CartPage"
import ErrorPage from "./pages/ErrorPage"
import TShirt from "./pages/TShirt"

import { EmbeddedCapabilities } from "#components/EmbeddedCapabilities"

function App(): JSX.Element {
  let orderId: string = "NGWrhZQnXN";
// alert(orderId)
  const basePath =
    import.meta.env.PUBLIC_PROJECT_PATH != null
      ? `/${import.meta.env.PUBLIC_PROJECT_PATH}`
      : undefined
  return (
    <HelmetProvider>
      <EmbeddedCapabilities.IframeResizerInit />
      <Router base={basePath}>
        <Switch>
          <Route path={"/404"}>
            <ErrorPage />
          </Route>
          <Route path={"/tshirt"}>
            <TShirt />
          </Route>
          <Route path={"/:orderId"}>
            <CartPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  )
}

export default App

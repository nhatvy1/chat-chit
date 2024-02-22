import useRouteElement from "./router/useRouteElement"

function App() {
  const routesElements = useRouteElement()

  return <>{routesElements}</>
}

export default App

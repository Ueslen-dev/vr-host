import React, { Suspense } from "react";

const VrCard = React.lazy(() => import("card/VrCard"));
const VrHeader = React.lazy(() => import("header/VrHeader"));
const VrFooter = React.lazy(() => import("footer/VrFooter"));

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <VrHeader />
      <VrCard />
      <h1>Aplicação principal</h1>
      <h5> laksdlkasldkasl</h5>
      <VrFooter />
    </Suspense>
  );
}

export default App;

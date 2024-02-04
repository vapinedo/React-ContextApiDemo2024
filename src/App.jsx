import ComponentC from "./components/ComponentC";
import { UserProvider } from "./userContext";

const state = {
  firstname: "Victor",
  lastname: "Pinedo",
  city: "Riohacha"
}

export default function App() {
  return (
    <section>
      <UserProvider value={state}>
        <ComponentC />
      </UserProvider>
    </section>
  )
}
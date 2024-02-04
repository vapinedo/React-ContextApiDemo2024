import ComponentC from "./components/ComponentC";
import { UserProvider } from "./userContext";

export default function App() {
  return (
    <section>
      <UserProvider value="Valp">
        <ComponentC />
      </UserProvider>
    </section>
  )
}
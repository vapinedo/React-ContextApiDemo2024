import { UserConsumer } from "../userContext";

export default function ComponentF() {
  return (
    <UserConsumer>
      {
        function (state) {
          return <p>Hello {state.firstname} {state.lastname}</p>
        }
      }
    </UserConsumer>
  )
}
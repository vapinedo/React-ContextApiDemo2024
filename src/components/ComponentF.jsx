import { UserConsumer } from "../userContext";

export default function ComponentF() {
  return (
    <UserConsumer>
      {
        (username) => {
          return <p>Hello {username}</p>
        }
      }
    </UserConsumer>
  )
}
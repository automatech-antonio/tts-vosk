import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <ExpoStatusBar translucent/>
    </Container>
  )
}
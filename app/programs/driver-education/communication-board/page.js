import CommunicationBoard from "../../../../components/communicationBoard/CommunicationBoard";
import { driverBoardData } from "../../../../components/communicationBoard/driverBoardData";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <CommunicationBoard
        data={driverBoardData}
        alertMessage="🚨 I AM DEAF. I REQUIRE A QUALIFIED SIGN LANGUAGE INTERPRETER."
      />
    </main>
  );
}
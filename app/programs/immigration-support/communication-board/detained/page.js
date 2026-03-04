"use client";

import CommunicationBoard from "../../../../../components/communicationBoard/CommunicationBoard";
import { detainedBoardData } from "../../../../../components/communicationBoard/detainedBoardData";

export default function DetainedCommunicationBoardPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <CommunicationBoard
        data={detainedBoardData}
        alertMessage="🚨 I am Deaf. I require a lawyer and a qualified sign language interpreter."
      />
    </main>
  );
}
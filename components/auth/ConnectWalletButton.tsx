"use client";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Wallet } from "lucide-react";

export default function ConnectWalletButton() {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <>
      <div>{isConnected}</div>
      <button onClick={() => open()}>
        <Wallet />
      </button>
    </>
  );
}

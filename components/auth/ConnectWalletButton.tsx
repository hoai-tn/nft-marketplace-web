"use client";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Wallet } from "lucide-react";
import { useAccount } from "wagmi";

export default function ConnectWalletButton() {
  const { open } = useAppKit();
  const { isConnected, chain } = useAccount();

  return (
    <>
      <button onClick={() => open()}>
        <Wallet />
      </button>
    </>
  );
}

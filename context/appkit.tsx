"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import {
  mainnet,
  arbitrum,
  avalanche,
  base,
  optimism,
  polygon,
} from "@reown/appkit/networks";
import { type ReactNode } from "react";

// const projectId = "a592fd3d681217dd5f4f180ad47ae19a";
const projectId = "a190c2407e22a8177a28cfa28283ad16";

const ethersAdapter = new EthersAdapter();

try {
  createAppKit({
    adapters: [ethersAdapter],
    projectId,
    networks: [mainnet, arbitrum, avalanche, base, optimism, polygon],
    metadata: {
      name: "My App",
      description: "My app description",
      url: "https://myapp.com",
      icons: ["https://myapp.com/favicon.ico"],
    },
    enableEIP6963: false,
    enableCoinbase: false,
  });
} catch (error) {
  console.error("Error initializing createAppKit:", error);
}

function AppkitContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default AppkitContextProvider;

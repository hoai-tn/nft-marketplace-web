import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  arbitrum,
  optimism,
  sepolia,
  AppKitNetwork,
} from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = "a592fd3d681217dd5f4f180ad47ae19a";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet,
  arbitrum,
  optimism,
  sepolia,
];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
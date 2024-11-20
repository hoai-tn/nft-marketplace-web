import { useEffect } from "react";

const CustomNetworkButton = () => {
  useEffect(() => {
    const appkitButton = document.querySelector("appkit-network-button");
    if (appkitButton) {
      const shadowRoot = appkitButton.shadowRoot;
      const wuiButton = shadowRoot?.querySelector("wui-network-button");
      if (wuiButton) {
        const button = wuiButton.shadowRoot?.querySelector("button");
        if (button) {
          button.style.backgroundColor = "transparent";
          button.style.border = "0";
        }
      }
    }
  });

  return <appkit-network-button />;
};

export default CustomNetworkButton;

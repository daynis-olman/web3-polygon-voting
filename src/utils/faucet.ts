import { Networks } from "./networks";

export const getFaucetUrl = () => {
  const network = localStorage.getItem("network");
  switch (network) {
    case Networks.Polygon:
      return "https://forms.gle/s2X4zPKr8PHxpL8Z8";
    case Networks.Optimism:
      return "https://community.optimism.io/docs/useful-tools/faucets/";
    default:
      return "https://goerlifaucet.com/";
  }
};

import React from "react";
import TableOfContents from "../components/table-of-contents";
import AppHeader from "../components/app-header";
import Wallet from "../components/wallet";
import Results from "../components/results";
import WalletMethods from "../components/wallet-methods";
import SigningMethods from "../components/signing";
import SendTransaction from "../components/send-transaction";
import Erc20Tokens from "../components/erc20-tokens";
import SmartContracts from "../components/contracts";
import NFTs from "../components/nfts";
import Links from "../components/links";
import Spacer from "../components/ui/spacer";
import HomePageBackground from "../images/main.svg";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Home({ setAccount }: Props) {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${HomePageBackground})`
      }}
    >
      <AppHeader />
      <Spacer size={32} />
      <Links />
      <Spacer size={120} />
      <TableOfContents />
      <div className="cards-container">
        <Wallet setAccount={setAccount} />
        <SendTransaction />
        <Results />

        <Spacer size={15} />
        <Spacer size={30} />
      </div>
    </div>
  );
}

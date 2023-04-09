import { useEffect, useState } from "react";
import Divider from "../ui/divider";
import Loading from "../../images/loading.svg";
import Network from "../network";
import CardLabel from "../ui/card-label";
import Card from "../ui/card";
import CardHeader from "../ui/card-header";
import { magic } from "../../libs/magic";
import { web3 } from "../../libs/web3";
import { Networks } from "../../utils/networks";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserInfo = ({ setAccount }: Props) => {
  const [balance, setBalance] = useState("...");
  const [copied, setCopied] = useState("Copy");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const publicAddress = localStorage.getItem("user");
  const network = localStorage.getItem("network");
  const tokenSymbol = network === Networks.Polygon ? "GameON Tokens" : "ETH";

  const disconnect = async () => {
    await magic.wallet.disconnect();
    localStorage.removeItem("user");
    setAccount(null);
  };

  const copy = () => {
    if (publicAddress && copied === "Copy") {
      setCopied("Copied!");
      navigator.clipboard.writeText(publicAddress);
      setTimeout(() => {
        setCopied("Copy");
      }, 1000);
    }
  };

  const getBalance = async () => {
    if (publicAddress) {
      const balance = await web3.eth.getBalance(publicAddress);
      setBalance(web3.utils.fromWei(balance));
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Card>
      <CardHeader id="wallet">Voting addresses</CardHeader>
      <CardLabel
        leftHeader="Team 1 Address"
        rightAction={<div onClick={copy}>{copied}</div>}
      />
      <div className="code">0xf685e308634c5716f8cE50FabE873D2318252Ac4</div>
      <Divider />
      <CardLabel
        leftHeader="Team 2 Address"
        rightAction={<div onClick={copy}>{copied}</div>}
      />
      <div className="code">0x5BD671a376F86283C715879E651B4514504CfC0C</div>
      <Divider />
      <CardLabel
        leftHeader="Team 3 Address"
        rightAction={<div onClick={copy}>{copied}</div>}
      />
      <div className="code">0x35d2ea40B3AEa23B0E648963bc0e3aBB6Bf37fBa</div>
      <Divider />
      <CardLabel
        leftHeader="Team 4 Address"
        rightAction={<div onClick={copy}>{copied}</div>}
      />
      <div className="code">0xE969EFFF1D4193B7c0015817A48cA979CbA4F93F</div>
      <Divider />
      <CardLabel
        style={{ height: "20px" }}
        leftHeader="Your Available balance"
        rightAction={
          isRefreshing ? (
            <div className="loading-container">
              <img className="loading" alt="loading" src={Loading} />
            </div>
          ) : (
            <div
              onClick={() => {
                setIsRefreshing(true);
                setTimeout(() => {
                  setIsRefreshing(false);
                }, 500);
                getBalance();
              }}
            >
              Refresh
            </div>
          )
        }
      />
      <div className="code">
        {balance.substring(0, 7)} {tokenSymbol}
      </div>
    </Card>
  );
};

export default UserInfo;

import TokenIcon from "@/components/TokenIcon";
import { getBridgeHistory } from "@/servies/api";
import { formatUnitToBtc, prettyTimestamp } from "@/utils/utils";
import { useCallback, useEffect, useState } from "react";
import { useModel } from "umi";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
import arrow from "@/assets/arrowRight.png";
import { Button, Divider, Empty, Skeleton, Space } from "antd";
import "./index.less";
import empty from "@/assets/empty.png";
type HistoryType =
  | "btcToMvc"
  | "brc20ToMvc"
  | "mvcToBtc"
  | "mvcToBrc20"
  | "runesToMvc"
  | "mvcToRunes"
  | "mrc20ToMvc"
  | "mvcToMrc20";
const size = 10;
export default ({ type }: { type: HistoryType }) => {
  const { connect, mvcAddress, network } = useModel("wallet");
  const { AssetsInfo } = useModel("wrapping");
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<API.HsitoryDetail[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchHistory = useCallback(async () => {
    if (!AssetsInfo) return;
    try {
      setLoading(true);
      const { txList } = await getBridgeHistory(network, {
        type,
        cursor: page * size,
        size: size,
        order: "desc",
        address: mvcAddress || "",
      });
      if (txList.length < size) {
        setIsEnd(true);
      }
      const _list = txList.map((item) => {
        if (
          type === "btcToMvc" ||
          type === "brc20ToMvc" ||
          type === "runesToMvc"
          ||
          type === "mrc20ToMvc"
        ) {
          item.originNetwork = "BTC";
          item.targetNetwork = "MVC";
        }
        if (
          type === "mvcToBtc" ||
          type === "mvcToBrc20" ||
          type === "mvcToRunes" || type === "mvcToMrc20"
        ) {
          item.originNetwork = "MVC";
          item.targetNetwork = "BTC";
        }
        item.timestamp = prettyTimestamp(Number(item.timestamp), true);

        const currentToken = AssetsInfo.assetList.find((token) => {
          return token.originName == item.name ;
        });
        if (currentToken) {
          console.log(currentToken, 'metacoin');
          item.amount = String(
            formatUnitToBtc(
              Number(item.amount),
              item.originNetwork === "BTC" ||
                (item.originNetwork === "MVC" && item.decimals <= 8)
                ? item.decimals
                : item.decimals - currentToken.trimDecimals
            )
          );
        }
        return item;
      });
      setList((prev) => {
        return [...prev, ..._list];
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [page]);
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);
  return (
    <div
      style={{ minHeight: 500, height: 500, overflowY: "scroll" }}
      className="historyPanel"
    >
      {list.length === 0 && !loading && (
        <Empty
          description="No Transfers yet"
          image={empty}
          imageStyle={{ width: 60, height: 60, margin: "0 auto" }}
        >
          {" "}
        </Empty>
      )}

      {list.map((item) => (
        <div className="historyCard" key={item.originTxid}>
          <div className="top">
            <div className="left">
              <div className="net">
                <TokenIcon
                  src={item.originNetwork == "BTC" ? btc : mvc}
                  size={24}
                  symbol={item.originNetwork}
                ></TokenIcon>
                {item.originNetwork}
              </div>
              <img src={arrow} className="arrow" />
              <div className="net">
                <TokenIcon
                  src={item.targetNetwork == "BTC" ? btc : mvc}
                  size={24}
                  symbol={item.targetNetwork}
                ></TokenIcon>
                {item.targetNetwork}
              </div>
            </div>
            <div
              className="right"
              style={{
                color: item.status === "success" ? "#8CFF95" : "#F7931A",
              }}
            >
              {item.status === "doing" ? "pending" : item.status}
            </div>
          </div>
          <div className="divider"></div>
          <div className="bottom">
            <div className="left">
              <TokenIcon src="" size={24} symbol={item.symbol} />
              <span className="info" >
                {item.amount} {item.symbol}{" "}
              </span>
            </div>
            <div className="right">{item.timestamp}</div>
          </div>
        </div>
      ))}
      {loading && <Skeleton active />}
      {list.length > 0 && isEnd && <span>no More</span>}
      {list.length > 0 && !isEnd && (
        <Button
          type="link"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          load More
        </Button>
      )}
    </div>
  );
};

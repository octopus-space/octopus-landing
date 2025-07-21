import TokenIcon from "@/components/TokenIcon";
import { getBridgeHistory } from "@/servies/api";
import { formatUnitToBtc, prettyTimestamp } from "@/utils/utils";
import { useCallback, useEffect, useState } from "react";
import { useModel } from "umi";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
import arrow from "@/assets/arrowRight.png";
import { Button, Divider, Empty, Progress, Skeleton, Space } from "antd";
import "./index.less";
import empty from "@/assets/empty.png";
import useIntervalAsync from "@/hooks/useIntervalAsync";
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
        // item.status = 'doing';
        // item.progess =10
        const timeD = ((new Date().getTime() - Number(item.timestamp) * 1000) / 1000 / 60 / 20 * 100)
        item.progess = item.status === 'success' ? 100 : timeD > 98 ? 98 : Math.ceil(timeD);
        item.progess = item.status === 'failed' ? 0 : item.progess;
        item.timestamp = prettyTimestamp(Number(item.timestamp), true);

        const currentToken = AssetsInfo.assetList.find((token) => {
          return token.originTokenId === item.originTokenId && token.targetTokenId === item.targetTokenId;
        });
        if (currentToken) {
          item.amount = String(
            formatUnitToBtc(
              Number(item.amount),
              item.originNetwork === "BTC" ||
                (item.originNetwork === "MVC" && item.decimals <= 8)
                ? item.decimals
                : item.decimals - currentToken.trimDecimals
            )
          );
          item.symbol = item.symbol || currentToken.originSymbol || currentToken.originName;
        }

        return item;
      });
      const originTxids = _list.map((item) => item.originTxid);
      setList((prev) => {
        return [...prev.filter(item=>!originTxids.includes(item.originTxid)), ..._list];
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [page]);
  // useEffect(() => {
  //   fetchHistory();
  // }, [fetchHistory]);
  const updateHistory = useIntervalAsync(fetchHistory, 30 * 1000)
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
          <div className="top" style={{ gap: 16 }}>
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
                flexGrow: 1,
                textAlign: "right",
              }}
            >
              {item.status === "doing" ? "pending" : item.status}
              <Progress percent={item.progess} size="small" status={item.status === "failed" ? "exception" : item.status === 'success' ? "success" : "active"} />
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

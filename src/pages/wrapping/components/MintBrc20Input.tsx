import { useModel } from "umi";
import { SyncOutlined } from "@ant-design/icons";
import { Button, Flex, Spin } from "antd";
import { useEffect, useState } from "react";
import { getUserBRC20, getUserRunesBalance } from "@/servies/api";
type Props = {
    onInputChange: (value: string) => void;
    loading: boolean;
    refresh: () => void
}
export default ({ onInputChange, loading, refresh }: Props) => {
    const { connected } = useModel("wallet");
    const { inscription, setInscription, asset, bridgeType, brc20Info } = useModel("wrapping")


    const Inscribe = async () => {
        if (connected && asset) {
            await window.metaidwallet.btc.inscribeTransfer(asset?.originSymbol);
        }
    };

    if (!asset) return null;
    return <Spin spinning={loading}>
        <Flex wrap="wrap" gap="small" justify="flex-end">
            {brc20Info && brc20Info.message && (
                <Button
                    type="text"
                    onClick={refresh}
                >
                    {'Server Error'} <SyncOutlined />
                </Button>
            )}

            {brc20Info &&
                brc20Info.transferBalanceList.map((item) => (
                    <div
                        className={`brcItem ${inscription &&
                            inscription.inscriptionId ===
                            item.inscriptionId
                            ? "active"
                            : ""
                            }`}
                        onClick={() => {
                            setInscription(item);
                            onInputChange(item.amount);
                        }}
                        key={item.inscriptionId}
                    >
                        <span className="tick">
                            {bridgeType === "mint" ? (
                                <div>{asset.originSymbol} </div>
                            ) : (
                                <div>{asset.targetSymbol} </div>
                            )}
                        </span>
                        <span className="amount">{item.amount}</span>
                        <span className="number">
                            #{item.inscriptionNumber}
                        </span>
                    </div>
                ))}
            {brc20Info &&
                brc20Info.transferBalanceList.length === 0 &&
                !brc20Info.message && (
                    <div style={{display:'flex',alignItems:'center',flexWrap:'nowrap',whiteSpace:'nowrap'}} className="Brc20Error">
                        No transferable

                        <Button
                            type="text"
                            className="inscribeBtn"
                            onClick={Inscribe}
                            style={{ color: "#6E66FA" }}
                            disabled={Number(brc20Info.balance) === 0}
                            size="small"
                        >
                            Inscribe
                        </Button>
                    </div>
                )}
        </Flex>
    </Spin>
}
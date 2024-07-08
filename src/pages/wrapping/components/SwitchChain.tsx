import { useModel } from "umi";
import SelectNet from "@/components/SelectNet";
import TokenIcon from "@/components/TokenIcon";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, theme } from "antd";
import { Chain } from "@/models/wrapping";
import switchIcon from "@/assets/switch.svg";

export default () => {
    const {
        token: { colorBgBase, borderRadius },
    } = theme.useToken();
    const {
        fromChain,
        toChain,
        setChainType,
        chainType,
        setFromChain,
        setToChain,
        resetInput
    } = useModel("wrapping");
    const switchChain = () => {
        const _from = fromChain;
        const _to = toChain;
        setToChain(_from);
        setFromChain(_to);
        resetInput();
    };

    const handleChainChange = (chainType: "from" | "to", chain: Chain) => {
        if (chainType === "from") {
          if (fromChain.key !== chain.key) {
            switchChain();
          }
        }
        if (chainType === "to") {
          if (toChain.key !== chain.key) {
            switchChain();
          }
        }
      };
    return <div className="chains">
        <div className="from chain">
            <div className="label">From</div>
            <Dropdown
                dropdownRender={() => (
                    <div
                        style={{ marginTop: -100, paddingTop: 100 }}
                        onMouseLeave={() => setChainType(undefined)}
                    >
                        <SelectNet
                            defalutChain={fromChain}
                            onChange={(chain) => {
                                handleChainChange("from", chain);
                                setChainType(undefined);
                            }}
                        />
                    </div>
                )}
                open={chainType === "from"}
            >
                <Button
                    type="text"
                    className="selectWrap"
                    style={{ background: colorBgBase, borderRadius }}
                    onClick={() => {
                        setChainType("from");
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <TokenIcon
                            size={30}
                            src={fromChain.icon}
                            symbol={fromChain.label}
                        />
                        <span style={{ margin: "0 10px 0 5px" }}>
                            {fromChain.label}
                        </span>
                        <div
                            className={
                                chainType == "from" ? "spanRotate" : "spanReset"
                            }
                        >
                            <DownOutlined />
                        </div>
                    </div>
                </Button>
            </Dropdown>
        </div>
        <img
            src={switchIcon}
            alt=""
            className="switchIcon"
            onClick={switchChain}
        />
        <div className="to chain">
            <div className="label">To</div>
            <Dropdown
                dropdownRender={() => (
                    <div
                        style={{ marginTop: -100, paddingTop: 100 }}
                        onMouseLeave={() => setChainType(undefined)}
                    >
                        <SelectNet
                            defalutChain={toChain}
                            onChange={(chain) => {
                                handleChainChange("to", chain);
                                setChainType(undefined);
                            }}
                        />
                    </div>
                )}
                open={chainType === "to"}
                placement="bottomLeft"
                autoAdjustOverflow={false}
            >
                <Button
                    type="text"
                    className="selectWrap"
                    style={{ background: colorBgBase, borderRadius }}
                    onClick={() => {
                        setChainType("to");
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <TokenIcon
                            size={30}
                            src={toChain.icon}
                            symbol={toChain.label}
                        />
                        <span style={{ margin: "0 10px 0 5px" }}>
                            {toChain.label}
                        </span>
                        <div
                            className={chainType == "to" ? "spanRotate" : "spanReset"}
                        >
                            <DownOutlined />
                        </div>
                    </div>
                </Button>
            </Dropdown>
        </div>
    </div>
}
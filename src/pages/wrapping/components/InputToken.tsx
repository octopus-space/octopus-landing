import TokenIcon from "@/components/TokenIcon"
import { useMemo } from "react"

type Props = {
    asset: API.AssetItem,
    position: 'send' | 'recive'
    bridgeType: 'mint' | 'redeem'
}
const InputToken = ({ position, asset, bridgeType }: Props) => {
    const symbol = useMemo(() => {
        if (position === 'send') {
            return bridgeType === 'mint' ? asset.originName||asset.originSymbol : asset.targetName||asset.targetSymbol
        } else {
            return bridgeType === 'mint' ? asset.targetName||asset.targetSymbol : asset.originName||asset.originSymbol
        }

    }, [asset, bridgeType, position])
    if (!asset) return <></>

    return <>
        <TokenIcon
            size={40}
            src=""
            symbol={symbol}
        />
        <div className="assetName">{symbol} </div>
    </>


}
export default InputToken;
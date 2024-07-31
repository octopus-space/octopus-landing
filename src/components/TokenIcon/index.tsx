type Props = {
  size?: number;
  src: string;
  symbol?: string;
};

const TokenIcon: React.FC<Props> = ({ size = 25, src, symbol = "" }) => {
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={symbol}
          style={{ height: size,width:size, borderRadius: "50%" }}
          className="icon"
        ></img>
      ) : (
        <div
          className="icon"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
          }}
        >
          {symbol&&symbol[0].toUpperCase()}
        </div>
      )}
    </>
  );
};

export default TokenIcon;

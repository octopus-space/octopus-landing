import { Button, theme } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useModel } from "umi";
import "./index.less";
import { ButtonType } from "antd/es/button";


type Props = {
  onClick: () => void;
  conditions: {
    condition: boolean;
    text: string;
    type?: ButtonType;
    onClick?: ClickHander;
    danger?: boolean;
  }[];
  children: React.ReactNode;
  height?: number;
  loading?: boolean;
  wrapClassName?: string;
  className?: string;
};

type ClickHander = React.MouseEventHandler<HTMLElement> | null;

function checkConditions(conditions: any[]) {
  for (let i = 0; i < conditions.length; i++) {
    const { condition } = conditions[i];
    if (condition) {
      return conditions[i];
    }
  }
  return null;
}

const FormButton: React.FC<Props> = ({
  conditions = [],
  children,
  onClick,
  className = "",
  wrapClassName = "",
  loading = false,
}) => {
  const {
    token: {
      colorPrimary,
      boxShadow,
      colorInfoBg,
      colorBgContainer,
      colorText,
      colorTextSecondary,
    },
  } = theme.useToken();

  const [type, setType] = useState<ButtonType>("primary");
  const [danger, setDanger] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const { connected, setLoginModalShow,network } = useModel("wallet");

  const combineConditions = useMemo(() => {
    return [
      {
        condition: !connected,
        text: "Connect Wallet",
        type: "primary",
        danger: false,
        onClick: () => {
          setLoginModalShow(true);
        },
      },
      {
        condition: network!=='testnet',
        text: "Switch Network",
        type: "primary",
        danger: false,
        onClick: () => {
          
        },
      },
      ...conditions,
    ];
  }, [conditions, connected]);

  useEffect(() => {
    const check = checkConditions(combineConditions);
    if (check) {
      const { text, type, danger } = check;
      setText(text);
      setType(type);
      setDanger(danger);
    } else {
      setText("");
      setType("primary");
      setDanger(false);
    }
  }, [combineConditions]);
  const handleClick = () => {
    const check = checkConditions(combineConditions);
    if (check) {
      const { onClick } = check;
      if (onClick) onClick();
      return;
    }
    onClick();
  };
  return (
    <div
      className={`FormButtonWrap ${className} ${type} ${
        danger ? "danger" : ""
      }`}
    >
      <Button
        type={type}
        danger={danger}
        className={`FormButton ${className}`}
        onClick={handleClick}
        block
        loading={loading}
      >
        {text ? text : children}
      </Button>
    </div>
  );
};

export default FormButton;

import github from "@/assets/github.svg";
import x from "@/assets/x.svg";
import tg from "@/assets/tg.svg";
import medium from "@/assets/medium.svg";
import discord from "@/assets/discord.svg";
import instagram from "@/assets/instagram.svg";
const items = [
  {
    icon: github,
    link: "https://github.com/octopus-space",
    label: "github",
  },
  {
    icon: x,
    link: "https://twitter.com/OctopusSpaceX",
    label: "x",
  },
  {
    icon: tg,
    link: "https://t.me/OctopusSpaceGlobal",
    label: "telegram",
    className:"telegram"
  },{
    icon: tg,
    link: "https://t.me/OctopusSpace_cn",
    label: "telegram2",
    className:"telegram"
  },
  // {
  //   icon: medium,
  //   link: "",
  //   label: "medium",
  // },
  // {
  //   icon: discord,
  //   link: "",
  //   label: "discord",
  // },
  // {
  //   icon: instagram,
  //   link: "",
  //   label: "instagram",
  // },
];

export default () => {
  return (
    <div className="nav">
      {items.map((item) => (
        <a key={item.label} target="_blank" href={item.link} className="navItem">
          <img src={item.icon} alt={item.label} className={item.className} />
        </a>
      ))}
    </div>
  );
};

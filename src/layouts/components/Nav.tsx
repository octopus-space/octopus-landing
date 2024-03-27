import github from "@/assets/github.svg";
import x from "@/assets/x.svg";
import medium from "@/assets/medium.svg";
import discord from "@/assets/discord.svg";
import instagram from "@/assets/instagram.svg";
const items = [
  {
    icon: github,
    link: "",
    label: "github",
  },
  {
    icon: x,
    link: "",
    label: "x",
  },
  {
    icon: medium,
    link: "",
    label: "medium",
  },
  {
    icon: discord,
    link: "",
    label: "discord",
  },
  {
    icon: instagram,
    link: "",
    label: "instagram",
  },
];

export default () => {
  return (
    <div className="nav">
      {items.map((item) => (
        <a key={item.label} target="_blank" href={item.link}>
          <img src={item.icon} alt={item.label} className="navIcon" />
        </a>
      ))}
    </div>
  );
};

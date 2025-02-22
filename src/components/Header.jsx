import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const Header = () => {
  const scrollToBuySection = () => {
    const section = document.getElementById("buy_section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <span className="header_inner">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo navbar_brand">
            <img src="/hippo_background.jpg" alt="shady_hippo" />
            <p>SHADY HIPPO</p>
          </div>
        </a>
        <nav className="header_right">
          <div className="menu">
            <ul className="menu_inner">
              <li>
                <a href="https://x.com/hippo_shady">
                  <XIcon
                    sx={{
                      transition: "transform 0.3s ease, color 0.3s ease",
                      color: "#6f42c1",
                      "&:hover": {
                        transform: "scale(1.2) rotate(180deg)",
                        color: "white",
                      },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://t.me/shadyhippo">
                  <TelegramIcon
                    sx={{
                      transition: "transform 0.3s ease, color 0.3s ease",
                      color: "#6f42c1",
                      "&:hover": {
                        transform: "scale(1.2) rotate(-40deg)",
                        color: "white",
                      },
                    }}
                  />
                </a>
              </li>
              <li>
                <button onClick={scrollToBuySection} className="buy_button p-2">
                  Buy now
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </span>
    </header>
  );
};
export default Header;

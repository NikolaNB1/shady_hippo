import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <header className="header">
      <span className="header_inner">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo navbar_brand">
            <img
              src="https://nikolanb1.github.io/shady_hippo/hippo_background.jpg"
              alt="shady_hippo"
            />
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
                <a href="/">
                  <InstagramIcon
                    sx={{
                      transition: "transform 0.3s ease, color 0.3s ease",
                      color: "#6f42c1",
                      "&:hover": {
                        transform: "scale(1.2) rotate(10deg)",
                        color: "white",
                      },
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </span>
    </header>
  );
};
export default Header;

import React from "react";
import Modal from "react-modal";
import ThemePreview from "../ThemePreview/ThemesPreview";
import "./ThemesModal.scss";

const ThemesModal = props => {
  const themes = [
    "Noteworthy",
    "Eclipse",
    "Bloom",
    "Gloom",
    "Solarized",
    "Newspaper",
    "Raspberry",
    "Ocean",
  ];

  const switchTheme = theme => {
    const style = document.documentElement.style;

    switch (theme) {
      case "Noteworthy":
        style.setProperty("--background", "var(--white-wall)");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "rgb(255, 233, 221)");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "rgb(36, 35, 34");
        style.setProperty("--text", "rgb(36, 35, 34)");
        style.setProperty("--primary", "rgb(239, 155, 110)");
        style.setProperty("--highlight", "rgb(255, 233, 221)");
        style.setProperty("--code-color", "rgb(36, 35, 34)");
        style.setProperty("--code-background", "rgb(235, 235, 235)");
        break;

      case "Eclipse":
        style.setProperty("--background", "rgb(46, 50, 53)");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "rgb(76, 75, 75)");
        style.setProperty("--icons", "rgb(218, 218, 218)");
        style.setProperty("--toolbar-icons", "rgb(225, 225, 225)");
        style.setProperty("--separator", "#2b2b2b");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "rgb(225, 225, 225)");
        style.setProperty("--text", "rgb(225, 225, 225)");
        style.setProperty("--primary", "rgb(239, 155, 110)");
        style.setProperty("--highlight", "rgb(106, 106, 106)");
        style.setProperty("--code-color", "rgb(235, 235, 235)");
        style.setProperty("--code-background", "rgb(75, 75, 75)");
        break;

      case "Bloom":
        style.setProperty("--background", "#fff");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "#ffe0f4");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "#222");
        style.setProperty("--text", "#222");
        style.setProperty("--primary", "#ffa7c4");
        style.setProperty("--highlight", "#ffd3ef");
        style.setProperty("--code-color", "#1a1a1a");
        style.setProperty("--code-background", "rgba(255,229,100,0.2)");
        break;

      case "Gloom":
        style.setProperty("--background", "#282c35");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "#493943");
        style.setProperty("--icons", "var(--text)");
        style.setProperty("--toolbar-icons", "var(--text)");
        style.setProperty("--separator", "hsla(0, 0%, 44%, 0.2)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "hsla(0,0%,100%,0.88)");
        style.setProperty("--text", "hsla(0,0%,100%,0.88)");
        style.setProperty("--primary", "#ffa7c4");
        style.setProperty("--highlight", "#493943");
        style.setProperty("--code-color", "#f3a0bf");
        style.setProperty("--code-background", "#011627");
        break;

      case "Solarized":
        style.setProperty("--background", "rgb(253, 246, 227)");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "rgb(248, 239, 210)");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "rgb(66, 85, 89)");
        style.setProperty("--text", "rgb(36, 35, 34)");
        style.setProperty("--primary", "rgb(178, 138, 28)");
        style.setProperty("--highlight", "rgb(255, 236, 174)");
        style.setProperty("--code-color", "rgb(210, 226, 228)");
        style.setProperty("--code-background", "rgb(0, 43, 54)");
        break;

      case "Newspaper":
        style.setProperty("--background", "#fff");
        style.setProperty("--font", "var(--serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "#7fffdd");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "#222");
        style.setProperty("--text", "#222");
        style.setProperty("--primary", "#03a87c");
        style.setProperty("--highlight", "#00ffbb");
        style.setProperty("--code-color", "rgb(36, 35, 34)");
        style.setProperty("--code-background", "rgb(235, 235, 235)");
        break;

      case "Raspberry":
        style.setProperty("--background", "rgb(251, 251, 251)");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "#ffbebe");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "rgb(36, 35, 34)");
        style.setProperty("--text", "rgb(36, 35, 34)");
        style.setProperty("--primary", "#E53B3B");
        style.setProperty("--highlight", "#FF9797");
        style.setProperty("--code-color", "rgb(36, 35, 34)");
        style.setProperty("--code-background", "rgb(235, 235, 235)");
        break;

      case "Ocean":
        style.setProperty("--background", "rgb(251, 251, 251)");
        style.setProperty("--font", "var(--san-serif)");
        style.setProperty(
          "--notebooks-selection",
          "rgba(214, 214, 214, 0.329)"
        );
        style.setProperty("--notes-selection", "#cceeff");
        style.setProperty("--icons", "#565656");
        style.setProperty("--toolbar-icons", "rgb(77, 74, 71)");
        style.setProperty("--separator", "rgb(242, 237, 232)");
        style.setProperty("--utils", "#c0c0c0");
        style.setProperty("--heading", "rgb(36, 35, 34)");
        style.setProperty("--text", "rgb(36, 35, 34)");
        style.setProperty("--primary", "#1CB0F6");
        style.setProperty("--highlight", "#BCE9FF");
        style.setProperty("--code-color", "rgb(36, 35, 34)");
        style.setProperty("--code-background", "rgb(235, 235, 235)");
        break;

      default:
        break;
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Theme Selection"
      onRequestClose={props.toggleThemesModal}
      closeTimeoutMS={200}
      className="themes-modal"
    >
      <h1 className="themes-title">Themes</h1>
      <div className="themes-previews">
        {themes.map(theme => {
          return (
            <ThemePreview key={theme} theme={theme} switchTheme={switchTheme} />
          );
        })}
      </div>
    </Modal>
  );
};

export default ThemesModal;

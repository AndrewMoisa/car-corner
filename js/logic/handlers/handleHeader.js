import { renderHeader } from "../../ui/header/renderHeader.js";
import { handleHamMenuClick } from "../../ui/header/hamMenu.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function handleHeader() {
  try {
    renderHeader();
    handleHamMenuClick();
  } catch (error) {
    displayMessage("header", error.message);
  }
}

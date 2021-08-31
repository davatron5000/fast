import {
    Menu as FoundationMenu,
    menuTemplate as template,
} from "@microsoft/fast-foundation";
import { fillColor, neutralLayerFloating } from "../design-tokens";
import { menuStyles as styles } from "./menu.styles";

/**
 * The FAST menu class
 * @public
 */
export class Menu extends FoundationMenu {
    /**
     * @internal
     */
    public connectedCallback(): void {
        super.connectedCallback();

        fillColor.setValueFor(this, neutralLayerFloating);
    }
}

/**
 * The FAST Menu Element. Implements {@link @microsoft/fast-foundation#Menu},
 * {@link @microsoft/fast-foundation#menuTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: \<fast-menu\>
 */
export const fastMenu = Menu.compose({
    baseName: "menu",
    template,
    styles,
});

/**
 * Styles for Menu
 * @public
 */
export const menuStyles = styles;

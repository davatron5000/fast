import { DesignToken } from "@microsoft/fast-foundation";
import { Swatch } from "../color/swatch.js";
/**
 * Define shadow algorithms.
 *
 * TODO: The --background-luminance will need to be derived from JavaScript. For now
 * this is hard-coded to a 1, the relative luminance of pure white.
 * https://github.com/microsoft/fast/issues/2778
 *
 * @internal
 */
export const ambientShadow =
    "0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))";
/**
 * @internal
 */
export const directionalShadow =
    "0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))";

/**
 * Applies the box-shadow CSS rule set to the elevation formula.
 * Control this formula with the --elevation CSS Custom Property
 * by setting --elevation to a number.
 */
export const elevation = `box-shadow: ${ambientShadow}, ${directionalShadow};`;

/** @public */
export interface ElevationRecipe {
    evaluate(element: HTMLElement, size: number, reference?: Swatch): string;
}

/**
 * @public
 */
export const elevationShadowRecipe = DesignToken.create<ElevationRecipe>({
    name: "elevation-shadow",
    cssCustomPropertyName: null,
}).withDefault({
    evaluate: (element: HTMLElement, size: number, reference?: Swatch): string => {
        let ambientOpacity = 0.12;
        let directionalOpacity = 0.14;

        if (size > 16) {
            ambientOpacity = 0.2;
            directionalOpacity = 0.24;
        }

        const ambient = `0 0 2px rgba(0, 0, 0, ${ambientOpacity})`;
        const directional = `0 calc(${size} * 0.5px) calc((${size} * 1px)) rgba(0, 0, 0, ${directionalOpacity})`;
        return `${ambient}, ${directional}`;
    },
});

/** @public */
export const elevationShadowCardRestSize = DesignToken.create<number>(
    "elevation-shadow-card-rest-size"
).withDefault(4);
/** @public */
export const elevationShadowCardHoverSize = DesignToken.create<number>(
    "elevation-shadow-card-hover-size"
).withDefault(8);
/** @public */
export const elevationShadowCardActiveSize = DesignToken.create<number>(
    "elevation-shadow-card-active-size"
).withDefault(0);
/** @public */
export const elevationShadowCardFocusSize = DesignToken.create<number>(
    "elevation-shadow-card-focus-size"
).withDefault(8);

/** @public */
export const elevationShadowCardRest = DesignToken.create<string>(
    "elevation-shadow-card-rest"
).withDefault((element: HTMLElement) =>
    elevationShadowRecipe
        .getValueFor(element)
        .evaluate(element, elevationShadowCardRestSize.getValueFor(element))
);
/** @public */
export const elevationShadowCardHover = DesignToken.create<string>(
    "elevation-shadow-card-hover"
).withDefault((element: HTMLElement) =>
    elevationShadowRecipe
        .getValueFor(element)
        .evaluate(element, elevationShadowCardHoverSize.getValueFor(element))
);
/** @public */
export const elevationShadowCardActive = DesignToken.create<string>(
    "elevation-shadow-card-active"
).withDefault((element: HTMLElement) =>
    elevationShadowRecipe
        .getValueFor(element)
        .evaluate(element, elevationShadowCardActiveSize.getValueFor(element))
);
/** @public */
export const elevationShadowCardFocus = DesignToken.create<string>(
    "elevation-shadow-card-focus"
).withDefault((element: HTMLElement) =>
    elevationShadowRecipe
        .getValueFor(element)
        .evaluate(element, elevationShadowCardFocusSize.getValueFor(element))
);

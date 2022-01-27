import { css, ElementStyles } from "@microsoft/fast-element";
import {
    ElementDefinitionContext,
    forcedColorsStylesheetBehavior,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import {
    accentForegroundActive,
    accentForegroundHover,
    accentForegroundRest,
    bodyFont,
    controlCornerRadius,
    designUnit,
    disabledOpacity,
    focusStrokeOuter,
    focusStrokeWidth,
    neutralFillActive,
    neutralFillHover,
    neutralFillRest,
    neutralFillStealthRest,
    neutralForegroundHint,
    neutralForegroundRest,
    strokeWidth,
    typeRampBaseFontSize,
    typeRampBaseLineHeight,
} from "../design-tokens";
import { heightNumber } from "../styles";

/**
 * Styles for
 * @public
 */
export const galleryStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) =>
    css`
        .gallery {
            background: black;
            height: 300px;
            width: 100%;
        }
        .gallery-list {
            width: 100%;
            height: 200px;
            overflow-x: scroll;
            overflow-y: hidden;
        }
        .gallery-title {
            height: 30px;
            font-family: ${bodyFont};
            font-size: ${typeRampBaseFontSize};
            line-height: ${typeRampBaseLineHeight};
            padding: calc(${designUnit} * 5px) calc(${designUnit} * 4px);
            color: ${neutralForegroundHint};
        }
    `.withBehaviors(forcedColorsStylesheetBehavior(css``));

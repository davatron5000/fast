import { css, ElementStyles } from "@microsoft/fast-element";
import {
    ElementDefinitionContext,
    focusVisible,
    forcedColorsStylesheetBehavior,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    bodyFont,
    controlCornerRadius,
    designUnit,
    focusStrokeOuter,
    focusStrokeWidth,
    neutralFillStealthActive,
    neutralFillStealthHover,
    neutralFillStealthRest,
    neutralForegroundActive,
    neutralForegroundHover,
    neutralForegroundRest,
    typeRampBaseFontSize,
    typeRampBaseLineHeight,
} from "../design-tokens";
import { heightNumber } from "../styles/index";

/**
 * Styles for Picker menu option
 * @public
 */
export const pickerMenuOptionStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) =>
    css`
        :host {
        display: flex;
        align-items: center;
        justify-items: center;
        font-family: ${bodyFont};
        background: ${neutralFillStealthRest};
        border-radius: calc(${controlCornerRadius} * 1px);
        border: calc(${focusStrokeWidth} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${neutralForegroundRest};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${typeRampBaseFontSize};
        min-height: calc(${heightNumber} * 1px);
        line-height: ${typeRampBaseLineHeight};
        margin: 0 calc(${designUnit} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${designUnit} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:hover) {
        background: ${neutralFillStealthHover};
        color: ${neutralForegroundHover};
    }

    :host(:active),
    :host([aria-selected="true"]) {
        background: ${neutralFillStealthActive};
        color: ${neutralForegroundActive};
    }

    :host(:${focusVisible}[role="listitem"]) {
        border-color: ${focusStrokeOuter};
    }
    `.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${SystemColors.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${SystemColors.Highlight};
                    color: ${SystemColors.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${SystemColors.Canvas};
                    color: ${SystemColors.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `
        )
    );

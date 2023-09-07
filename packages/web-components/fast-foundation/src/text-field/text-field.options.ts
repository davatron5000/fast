import type { ValuesOf } from "../utilities/index.js";

/**
 * Text field sub-types
 * @public
 */
export const TextFieldType = {
    /**
     * An email TextField
     */
    email: "email",

    /**
     * A password TextField
     */
    password: "password",

    /**
     * A telephone TextField
     */
    tel: "tel",

    /**
     * A text TextField
     */
    text: "text",

    /**
     * A URL TextField
     */
    url: "url",

    /**
     * A date TextField
     */
    date: "date",

    /**
     * A month TextField
     */
    month: "month",

    /**
     * A week TextField
     */
    week: "week",
} as const;

/**
 * Types for the text field sub-types
 * @public
 */
export type TextFieldType = ValuesOf<typeof TextFieldType>;

import type { ValuesOf } from "../utilities/index.js";

/**
 * Expand mode for {@link FASTAccordion}
 * @public
 */
export const AccordionExpandMode = {
    /**
     * The same as single, but the first {@link @microsoft/fast-foundation#(FASTAccordionItem:class) } is expanded by default.
     */
    eager: "eager",

    /**
     * Designates only a single {@link @microsoft/fast-foundation#(FASTAccordionItem:class) } can be open a time.
     */
    single: "single",

    /**
     * Designates multiple {@link @microsoft/fast-foundation#(FASTAccordionItem:class) | FASTAccordionItemItems} can be open simultaneously.
     */
    multi: "multi",
} as const;

/**
 * Type for the {@link FASTAccordion} Expand Mode
 * @public
 */
export type AccordionExpandMode = ValuesOf<typeof AccordionExpandMode>;

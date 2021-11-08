/* eslint-disable */
import { ElementRenderer, RenderInfo } from "@lit-labs/ssr";
import { FASTElement } from "@microsoft/fast-element";
// import { render } from "@lit-labs/ssr/lib/render-lit-html";
import { html } from "lit";
import { render } from "./render";

export class FASTElementRenderer extends ElementRenderer {
    public readonly element!: HTMLElement & FASTElement;
    static matchesClass(ctor: typeof HTMLElement): boolean {
        return ctor.prototype instanceof FASTElement;
    }

    connectedCallback(): void {
        this.element.connectedCallback();
    }

    constructor(tagName: string) {
        super(tagName);

        this.element = new (customElements.get(this.tagName)! as typeof FASTElement &
            typeof HTMLElement)();
    }

    *renderLight(renderInfo: RenderInfo): IterableIterator<string> {
        // This is for rendering to the custom element's host DOM instead of
        // to a shadow-root attached to the host element. no-op this for now.
    }

    *renderShadow(renderInfo: RenderInfo): IterableIterator<string> {
        const { $fastController } = this.element;

        yield* render($fastController.getShadowRoot()!, renderInfo);
    }

    attributeChangedCallback(
        name: string,
        old: string | null,
        value: string | null
    ): void {
        this.element.attributeChangedCallback(name, old!, value!);
    }
}

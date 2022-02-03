import { attr, DOM, observable, ViewTemplate } from "@microsoft/fast-element";
import type { VirtualList } from "..";
import { FoundationElement } from "../foundation-element";
import type { GalleryData, GallerySpanMap } from "./gallery-data";

/**
 *
 *
 * @public
 */
export class Gallery extends FoundationElement {
    /**
     *
     *
     * @public
     */
    @observable
    public galleryData: GalleryData;
    private galleryDataChanged(): void {
        if (this.$fastController.isConnected) {
            this.galleryListElement.items = this.galleryData.items as GalleryData[];
        }
    }

    /**
     *
     *
     * @public
     */
    @observable
    public spanmap: GallerySpanMap[] = [];

    public galleryListElement: VirtualList;

    public connectedCallback(): void {
        super.connectedCallback();
        DOM.queueUpdate(() => {
            this.initialize();
        });
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    private initialize(): void {
        this.galleryListElement.items = this.galleryData.items as GalleryData[];
    }
}

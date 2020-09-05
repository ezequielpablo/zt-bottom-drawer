/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ZTHTMLElementsDrawer, ZTPositionDrawer } from "./components/zt-bottom-drawer/zt-bottom-drawer";
export namespace Components {
    interface ZtBottomDrawer {
        "addCallbackCanActivateState": (callback: (positionName: string, oldState: string, htmlElements: ZTHTMLElementsDrawer) => Promise<boolean | void> | void) => Promise<void>;
        "addCallbackCanDeactivateState": (callback: (positionName: string, newState: string, htmlElements: ZTHTMLElementsDrawer) => Promise<boolean | void> | void) => Promise<void>;
        "autoHeightContent": boolean;
        "autoShowOnLoad": boolean;
        "disableGesture": boolean;
        "easing": string;
        "getPositionByIndex": (index: number) => Promise<ZTPositionDrawer>;
        "getPositionByName": (name: string) => Promise<ZTPositionDrawer>;
        "hidden": boolean;
        "hide": (notAnimate?: boolean | undefined) => Promise<void>;
        "hideOnPositionZero": boolean;
        "positionName": string;
        "positions": string;
        "show": (positionName: string, notAnimate?: boolean | undefined) => Promise<void>;
    }
}
declare global {
    interface HTMLZtBottomDrawerElement extends Components.ZtBottomDrawer, HTMLStencilElement {
    }
    var HTMLZtBottomDrawerElement: {
        prototype: HTMLZtBottomDrawerElement;
        new (): HTMLZtBottomDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "zt-bottom-drawer": HTMLZtBottomDrawerElement;
    }
}
declare namespace LocalJSX {
    interface ZtBottomDrawer {
        "autoHeightContent"?: boolean;
        "autoShowOnLoad"?: boolean;
        "disableGesture"?: boolean;
        "easing"?: string;
        "hidden"?: boolean;
        "hideOnPositionZero"?: boolean;
        "onChangePositionEvent"?: (event: CustomEvent<{ positionName: string, htmlElements: ZTHTMLElementsDrawer }>) => void;
        "onHideEvent"?: (event: CustomEvent<ZTHTMLElementsDrawer>) => void;
        "positionName"?: string;
        "positions"?: string;
    }
    interface IntrinsicElements {
        "zt-bottom-drawer": ZtBottomDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zt-bottom-drawer": LocalJSX.ZtBottomDrawer & JSXBase.HTMLAttributes<HTMLZtBottomDrawerElement>;
        }
    }
}

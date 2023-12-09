/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ChallengeCardProps } from "./components/challenge-card/challenge-card";
export { ChallengeCardProps } from "./components/challenge-card/challenge-card";
export namespace Components {
    interface ChallengeCard {
        "challenge": ChallengeCardProps;
    }
    interface ChallengeGrid {
    }
    interface NavigationBar {
    }
}
declare global {
    interface HTMLChallengeCardElement extends Components.ChallengeCard, HTMLStencilElement {
    }
    var HTMLChallengeCardElement: {
        prototype: HTMLChallengeCardElement;
        new (): HTMLChallengeCardElement;
    };
    interface HTMLChallengeGridElement extends Components.ChallengeGrid, HTMLStencilElement {
    }
    var HTMLChallengeGridElement: {
        prototype: HTMLChallengeGridElement;
        new (): HTMLChallengeGridElement;
    };
    interface HTMLNavigationBarElement extends Components.NavigationBar, HTMLStencilElement {
    }
    var HTMLNavigationBarElement: {
        prototype: HTMLNavigationBarElement;
        new (): HTMLNavigationBarElement;
    };
    interface HTMLElementTagNameMap {
        "challenge-card": HTMLChallengeCardElement;
        "challenge-grid": HTMLChallengeGridElement;
        "navigation-bar": HTMLNavigationBarElement;
    }
}
declare namespace LocalJSX {
    interface ChallengeCard {
        "challenge": ChallengeCardProps;
    }
    interface ChallengeGrid {
    }
    interface NavigationBar {
    }
    interface IntrinsicElements {
        "challenge-card": ChallengeCard;
        "challenge-grid": ChallengeGrid;
        "navigation-bar": NavigationBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "challenge-card": LocalJSX.ChallengeCard & JSXBase.HTMLAttributes<HTMLChallengeCardElement>;
            "challenge-grid": LocalJSX.ChallengeGrid & JSXBase.HTMLAttributes<HTMLChallengeGridElement>;
            "navigation-bar": LocalJSX.NavigationBar & JSXBase.HTMLAttributes<HTMLNavigationBarElement>;
        }
    }
}
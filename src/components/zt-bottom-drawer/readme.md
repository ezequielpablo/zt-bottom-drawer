# zt-bottom-drawer



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute               | Description | Type      | Default                                           |
| -------------------- | ----------------------- | ----------- | --------- | ------------------------------------------------- |
| `autoHeightContent`  | `auto-height-content`   |             | `boolean` | `true`                                            |
| `autoShowOnLoad`     | `auto-show-on-load`     |             | `boolean` | `true`                                            |
| `coefDuration`       | `coef-duration`         |             | `number`  | `150`                                             |
| `disableGesture`     | `disable-gesture`       |             | `boolean` | `false`                                           |
| `easing`             | `easing`                |             | `string`  | `'cubic-bezier(.56,.05,.91,.88)'`                 |
| `hidden`             | `hidden`                |             | `boolean` | `false`                                           |
| `hideOnPositionZero` | `hide-on-position-zero` |             | `boolean` | `false`                                           |
| `positionName`       | `position-name`         |             | `string`  | `undefined`                                       |
| `positions`          | `positions`             |             | `string`  | `"close-b-10,bottom-b-200,middle-b-450,top-t-60"` |


## Events

| Event                 | Description | Type                                                                                      |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `changePositionEvent` |             | `CustomEvent<{ positionName: string; htmlElements: ZTHTMLElementsDrawer; }>`              |
| `hideEvent`           |             | `CustomEvent<{ drawer: HTMLElement; gestureTarget: HTMLElement; content: HTMLElement; }>` |


## Methods

### `addCallbackCanActivateState(callback: (positionName: string, oldState: string, htmlElements: ZTHTMLElementsDrawer) => Promise<boolean | void> | void) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `addCallbackCanDeactivateState(callback: (positionName: string, newState: string, htmlElements: ZTHTMLElementsDrawer) => Promise<boolean | void> | void) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getActive() => Promise<ViewController>`



#### Returns

Type: `Promise<ViewController>`



### `getNav() => Promise<HTMLIonNavElement>`



#### Returns

Type: `Promise<HTMLIonNavElement>`



### `getPositionByIndex(index: number) => Promise<ZTPositionDrawer>`



#### Returns

Type: `Promise<ZTPositionDrawer>`



### `getPositionByName(name: string) => Promise<ZTPositionDrawer>`



#### Returns

Type: `Promise<ZTPositionDrawer>`



### `hide(notAnimate?: boolean | undefined) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `pushNav(component: any, propsComponent: any, selectorGesture?: string, selectorContent?: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show(positionName: string, notAnimate?: boolean | undefined) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- ion-nav

### Graph
```mermaid
graph TD;
  zt-bottom-drawer --> ion-nav
  style zt-bottom-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

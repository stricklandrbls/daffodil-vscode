/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clsx/dist/clsx.js":
/*!****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.js ***!
  \****************************************/
/***/ ((module) => {

function r(e){var o,t,f="";if("string"==typeof e||"number"==typeof e)f+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(t=r(e[o]))&&(f&&(f+=" "),f+=t)}else for(t in e)e[t]&&(f&&(f+=" "),f+=t);return f}function e(){for(var e,o,t=0,f="",n=arguments.length;t<n;t++)(e=arguments[t])&&(o=r(e))&&(f&&(f+=" "),f+=o);return f}module.exports=e,module.exports.clsx=e;

/***/ }),

/***/ "./node_modules/esm-env/dev-fallback.js":
/*!**********************************************!*\
  !*** ./node_modules/esm-env/dev-fallback.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const node_env = globalThis.process?.env?.NODE_ENV;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node_env && !node_env.toLowerCase().startsWith('prod'));


/***/ }),

/***/ "./node_modules/esm-env/false.js":
/*!***************************************!*\
  !*** ./node_modules/esm-env/false.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (false);


/***/ }),

/***/ "./node_modules/esm-env/index.js":
/*!***************************************!*\
  !*** ./node_modules/esm-env/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER: () => (/* reexport safe */ esm_env_browser__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   DEV: () => (/* reexport safe */ esm_env_development__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   NODE: () => (/* reexport safe */ esm_env_node__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var esm_env_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env/browser */ "./node_modules/esm-env/true.js");
/* harmony import */ var esm_env_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esm-env/development */ "./node_modules/esm-env/dev-fallback.js");
/* harmony import */ var esm_env_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esm-env/node */ "./node_modules/esm-env/false.js");





/***/ }),

/***/ "./node_modules/esm-env/true.js":
/*!**************************************!*\
  !*** ./node_modules/esm-env/true.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (true);


/***/ }),

/***/ "./node_modules/svelte/src/constants.js":
/*!**********************************************!*\
  !*** ./node_modules/svelte/src/constants.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EACH_INDEX_REACTIVE: () => (/* binding */ EACH_INDEX_REACTIVE),
/* harmony export */   EACH_IS_ANIMATED: () => (/* binding */ EACH_IS_ANIMATED),
/* harmony export */   EACH_IS_CONTROLLED: () => (/* binding */ EACH_IS_CONTROLLED),
/* harmony export */   EACH_ITEM_IMMUTABLE: () => (/* binding */ EACH_ITEM_IMMUTABLE),
/* harmony export */   EACH_ITEM_REACTIVE: () => (/* binding */ EACH_ITEM_REACTIVE),
/* harmony export */   ELEMENTS_WITHOUT_TEXT: () => (/* binding */ ELEMENTS_WITHOUT_TEXT),
/* harmony export */   ELEMENT_IS_NAMESPACED: () => (/* binding */ ELEMENT_IS_NAMESPACED),
/* harmony export */   ELEMENT_PRESERVE_ATTRIBUTE_CASE: () => (/* binding */ ELEMENT_PRESERVE_ATTRIBUTE_CASE),
/* harmony export */   FILENAME: () => (/* binding */ FILENAME),
/* harmony export */   HMR: () => (/* binding */ HMR),
/* harmony export */   HYDRATION_END: () => (/* binding */ HYDRATION_END),
/* harmony export */   HYDRATION_ERROR: () => (/* binding */ HYDRATION_ERROR),
/* harmony export */   HYDRATION_START: () => (/* binding */ HYDRATION_START),
/* harmony export */   HYDRATION_START_ELSE: () => (/* binding */ HYDRATION_START_ELSE),
/* harmony export */   IGNORABLE_RUNTIME_WARNINGS: () => (/* binding */ IGNORABLE_RUNTIME_WARNINGS),
/* harmony export */   NAMESPACE_MATHML: () => (/* binding */ NAMESPACE_MATHML),
/* harmony export */   NAMESPACE_SVG: () => (/* binding */ NAMESPACE_SVG),
/* harmony export */   PROPS_IS_BINDABLE: () => (/* binding */ PROPS_IS_BINDABLE),
/* harmony export */   PROPS_IS_IMMUTABLE: () => (/* binding */ PROPS_IS_IMMUTABLE),
/* harmony export */   PROPS_IS_LAZY_INITIAL: () => (/* binding */ PROPS_IS_LAZY_INITIAL),
/* harmony export */   PROPS_IS_RUNES: () => (/* binding */ PROPS_IS_RUNES),
/* harmony export */   PROPS_IS_UPDATED: () => (/* binding */ PROPS_IS_UPDATED),
/* harmony export */   TEMPLATE_FRAGMENT: () => (/* binding */ TEMPLATE_FRAGMENT),
/* harmony export */   TEMPLATE_USE_IMPORT_NODE: () => (/* binding */ TEMPLATE_USE_IMPORT_NODE),
/* harmony export */   TRANSITION_GLOBAL: () => (/* binding */ TRANSITION_GLOBAL),
/* harmony export */   TRANSITION_IN: () => (/* binding */ TRANSITION_IN),
/* harmony export */   TRANSITION_OUT: () => (/* binding */ TRANSITION_OUT),
/* harmony export */   UNINITIALIZED: () => (/* binding */ UNINITIALIZED)
/* harmony export */ });
const EACH_ITEM_REACTIVE = 1;
const EACH_INDEX_REACTIVE = 1 << 1;
/** See EachBlock interface metadata.is_controlled for an explanation what this is */
const EACH_IS_CONTROLLED = 1 << 2;
const EACH_IS_ANIMATED = 1 << 3;
const EACH_ITEM_IMMUTABLE = 1 << 4;

const PROPS_IS_IMMUTABLE = 1;
const PROPS_IS_RUNES = 1 << 1;
const PROPS_IS_UPDATED = 1 << 2;
const PROPS_IS_BINDABLE = 1 << 3;
const PROPS_IS_LAZY_INITIAL = 1 << 4;

const TRANSITION_IN = 1;
const TRANSITION_OUT = 1 << 1;
const TRANSITION_GLOBAL = 1 << 2;

const TEMPLATE_FRAGMENT = 1;
const TEMPLATE_USE_IMPORT_NODE = 1 << 1;

const HYDRATION_START = '[';
/** used to indicate that an `{:else}...` block was rendered */
const HYDRATION_START_ELSE = '[!';
const HYDRATION_END = ']';
const HYDRATION_ERROR = {};

const ELEMENT_IS_NAMESPACED = 1;
const ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;

const UNINITIALIZED = Symbol();

// Dev-time component properties
const FILENAME = Symbol('filename');
const HMR = Symbol('hmr');

const NAMESPACE_SVG = 'http://www.w3.org/2000/svg';
const NAMESPACE_MATHML = 'http://www.w3.org/1998/Math/MathML';

// we use a list of ignorable runtime warnings because not every runtime warning
// can be ignored and we want to keep the validation for svelte-ignore in place
const IGNORABLE_RUNTIME_WARNINGS = /** @type {const} */ ([
	'state_snapshot_uncloneable',
	'binding_property_non_reactive',
	'hydration_attribute_changed',
	'hydration_html_changed',
	'ownership_invalid_binding',
	'ownership_invalid_mutation'
]);

/**
 * Whitespace inside one of these elements will not result in
 * a whitespace node being created in any circumstances. (This
 * list is almost certainly very incomplete)
 * TODO this is currently unused
 */
const ELEMENTS_WITHOUT_TEXT = ['audio', 'datalist', 'dl', 'optgroup', 'select', 'video'];


/***/ }),

/***/ "./node_modules/svelte/src/escaping.js":
/*!*********************************************!*\
  !*** ./node_modules/svelte/src/escaping.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escape_html: () => (/* binding */ escape_html)
/* harmony export */ });
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}


/***/ }),

/***/ "./node_modules/svelte/src/index-client.js":
/*!*************************************************!*\
  !*** ./node_modules/svelte/src/index-client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterUpdate: () => (/* binding */ afterUpdate),
/* harmony export */   beforeUpdate: () => (/* binding */ beforeUpdate),
/* harmony export */   createEventDispatcher: () => (/* binding */ createEventDispatcher),
/* harmony export */   createRawSnippet: () => (/* reexport safe */ _internal_client_dom_blocks_snippet_js__WEBPACK_IMPORTED_MODULE_9__.createRawSnippet),
/* harmony export */   flushSync: () => (/* reexport safe */ _internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__.flushSync),
/* harmony export */   getAllContexts: () => (/* reexport safe */ _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.getAllContexts),
/* harmony export */   getContext: () => (/* reexport safe */ _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.getContext),
/* harmony export */   hasContext: () => (/* reexport safe */ _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.hasContext),
/* harmony export */   hydrate: () => (/* reexport safe */ _internal_client_render_js__WEBPACK_IMPORTED_MODULE_8__.hydrate),
/* harmony export */   mount: () => (/* reexport safe */ _internal_client_render_js__WEBPACK_IMPORTED_MODULE_8__.mount),
/* harmony export */   onDestroy: () => (/* binding */ onDestroy),
/* harmony export */   onMount: () => (/* binding */ onMount),
/* harmony export */   setContext: () => (/* reexport safe */ _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.setContext),
/* harmony export */   tick: () => (/* reexport safe */ _internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__.tick),
/* harmony export */   unmount: () => (/* reexport safe */ _internal_client_render_js__WEBPACK_IMPORTED_MODULE_8__.unmount),
/* harmony export */   untrack: () => (/* reexport safe */ _internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__.untrack)
/* harmony export */ });
/* harmony import */ var _internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/client/runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/client/index.js */ "./node_modules/svelte/src/internal/client/index.js");
/* harmony import */ var _internal_client_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/client/errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/shared/errors.js */ "./node_modules/svelte/src/internal/shared/errors.js");
/* harmony import */ var _internal_flags_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/* harmony import */ var _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/client/context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _internal_client_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/client/render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _internal_client_dom_blocks_snippet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/client/dom/blocks/snippet.js */ "./node_modules/svelte/src/internal/client/dom/blocks/snippet.js");
/** @import { ComponentContext, ComponentContextLegacy } from '#client' */
/** @import { EventDispatcher } from './index.js' */
/** @import { NotFunction } from './internal/types.js' */









if (esm_env__WEBPACK_IMPORTED_MODULE_7__.DEV) {
	/**
	 * @param {string} rune
	 */
	function throw_rune_error(rune) {
		if (!(rune in globalThis)) {
			// TODO if people start adjusting the "this can contain runes" config through v-p-s more, adjust this message
			/** @type {any} */
			let value; // let's hope noone modifies this global, but belts and braces
			Object.defineProperty(globalThis, rune, {
				configurable: true,
				// eslint-disable-next-line getter-return
				get: () => {
					if (value !== undefined) {
						return value;
					}

					_internal_client_errors_js__WEBPACK_IMPORTED_MODULE_3__.rune_outside_svelte(rune);
				},
				set: (v) => {
					value = v;
				}
			});
		}
	}

	throw_rune_error('$state');
	throw_rune_error('$effect');
	throw_rune_error('$derived');
	throw_rune_error('$inspect');
	throw_rune_error('$props');
	throw_rune_error('$bindable');
}

/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * If a function is returned _synchronously_ from `onMount`, it will be called when the component is unmounted.
 *
 * `onMount` does not run inside [server-side components](https://svelte.dev/docs/svelte/svelte-server#render).
 *
 * @template T
 * @param {() => NotFunction<T> | Promise<NotFunction<T>> | (() => any)} fn
 * @returns {void}
 */
function onMount(fn) {
	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__.lifecycle_outside_component)('onMount');
	}

	if (_internal_flags_index_js__WEBPACK_IMPORTED_MODULE_5__.legacy_mode_flag && _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context.l !== null) {
		init_update_callbacks(_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context).m.push(fn);
	} else {
		(0,_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.user_effect)(() => {
			const cleanup = (0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(fn);
			if (typeof cleanup === 'function') return /** @type {() => void} */ (cleanup);
		});
	}
}

/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * @param {() => any} fn
 * @returns {void}
 */
function onDestroy(fn) {
	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__.lifecycle_outside_component)('onDestroy');
	}

	onMount(() => () => (0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(fn));
}

/**
 * @template [T=any]
 * @param {string} type
 * @param {T} [detail]
 * @param {any}params_0
 * @returns {CustomEvent<T>}
 */
function create_custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
	return new CustomEvent(type, { detail, bubbles, cancelable });
}

/**
 * Creates an event dispatcher that can be used to dispatch [component events](https://svelte.dev/docs/svelte/legacy-on#Component-events).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
 * ```ts
 * const dispatch = createEventDispatcher<{
 *  loaded: never; // does not take a detail argument
 *  change: string; // takes a detail argument of type string, which is required
 *  optional: number | null; // takes an optional detail argument of type number
 * }>();
 * ```
 *
 * @deprecated Use callback props and/or the `$host()` rune instead — see [migration guide](https://svelte.dev/docs/svelte/v5-migration-guide#Event-changes-Component-events)
 * @template {Record<string, any>} [EventMap = any]
 * @returns {EventDispatcher<EventMap>}
 */
function createEventDispatcher() {
	const active_component_context = _internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context;
	if (active_component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__.lifecycle_outside_component)('createEventDispatcher');
	}

	return (type, detail, options) => {
		const events = /** @type {Record<string, Function | Function[]>} */ (
			active_component_context.s.$$events
		)?.[/** @type {any} */ (type)];

		if (events) {
			const callbacks = (0,_internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.is_array)(events) ? events.slice() : [events];
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = create_custom_event(/** @type {string} */ (type), detail, options);
			for (const fn of callbacks) {
				fn.call(active_component_context.x, event);
			}
			return !event.defaultPrevented;
		}

		return true;
	};
}

// TODO mark beforeUpdate and afterUpdate as deprecated in Svelte 6

/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`.
 *
 * In runes mode use `$effect.pre` instead.
 *
 * @deprecated Use [`$effect.pre`](https://svelte.dev/docs/svelte/$effect#$effect.pre) instead
 * @param {() => void} fn
 * @returns {void}
 */
function beforeUpdate(fn) {
	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__.lifecycle_outside_component)('beforeUpdate');
	}

	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context.l === null) {
		_internal_client_errors_js__WEBPACK_IMPORTED_MODULE_3__.lifecycle_legacy_only('beforeUpdate');
	}

	init_update_callbacks(_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context).b.push(fn);
}

/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`.
 *
 * In runes mode use `$effect` instead.
 *
 * @deprecated Use [`$effect`](https://svelte.dev/docs/svelte/$effect) instead
 * @param {() => void} fn
 * @returns {void}
 */
function afterUpdate(fn) {
	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_4__.lifecycle_outside_component)('afterUpdate');
	}

	if (_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context.l === null) {
		_internal_client_errors_js__WEBPACK_IMPORTED_MODULE_3__.lifecycle_legacy_only('afterUpdate');
	}

	init_update_callbacks(_internal_client_context_js__WEBPACK_IMPORTED_MODULE_6__.component_context).a.push(fn);
}

/**
 * Legacy-mode: Init callbacks object for onMount/beforeUpdate/afterUpdate
 * @param {ComponentContext} context
 */
function init_update_callbacks(context) {
	var l = /** @type {ComponentContextLegacy} */ (context).l;
	return (l.u ??= { a: [], b: [], m: [] });
}








/***/ }),

/***/ "./node_modules/svelte/src/internal/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_EFFECT: () => (/* binding */ BLOCK_EFFECT),
/* harmony export */   BOUNDARY_EFFECT: () => (/* binding */ BOUNDARY_EFFECT),
/* harmony export */   BRANCH_EFFECT: () => (/* binding */ BRANCH_EFFECT),
/* harmony export */   CLEAN: () => (/* binding */ CLEAN),
/* harmony export */   DERIVED: () => (/* binding */ DERIVED),
/* harmony export */   DESTROYED: () => (/* binding */ DESTROYED),
/* harmony export */   DIRTY: () => (/* binding */ DIRTY),
/* harmony export */   DISCONNECTED: () => (/* binding */ DISCONNECTED),
/* harmony export */   EFFECT: () => (/* binding */ EFFECT),
/* harmony export */   EFFECT_HAS_DERIVED: () => (/* binding */ EFFECT_HAS_DERIVED),
/* harmony export */   EFFECT_RAN: () => (/* binding */ EFFECT_RAN),
/* harmony export */   EFFECT_TRANSPARENT: () => (/* binding */ EFFECT_TRANSPARENT),
/* harmony export */   HEAD_EFFECT: () => (/* binding */ HEAD_EFFECT),
/* harmony export */   INERT: () => (/* binding */ INERT),
/* harmony export */   INSPECT_EFFECT: () => (/* binding */ INSPECT_EFFECT),
/* harmony export */   LEGACY_DERIVED_PROP: () => (/* binding */ LEGACY_DERIVED_PROP),
/* harmony export */   LEGACY_PROPS: () => (/* binding */ LEGACY_PROPS),
/* harmony export */   LOADING_ATTR_SYMBOL: () => (/* binding */ LOADING_ATTR_SYMBOL),
/* harmony export */   MAYBE_DIRTY: () => (/* binding */ MAYBE_DIRTY),
/* harmony export */   RENDER_EFFECT: () => (/* binding */ RENDER_EFFECT),
/* harmony export */   ROOT_EFFECT: () => (/* binding */ ROOT_EFFECT),
/* harmony export */   STATE_SYMBOL: () => (/* binding */ STATE_SYMBOL),
/* harmony export */   STATE_SYMBOL_METADATA: () => (/* binding */ STATE_SYMBOL_METADATA),
/* harmony export */   UNOWNED: () => (/* binding */ UNOWNED)
/* harmony export */ });
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
/** 'Transparent' effects do not create a transition boundary */
const EFFECT_TRANSPARENT = 1 << 16;
/** Svelte 4 legacy mode props need to be handled with deriveds and be recognized elsewhere, hence the dedicated flag */
const LEGACY_DERIVED_PROP = 1 << 17;
const INSPECT_EFFECT = 1 << 18;
const HEAD_EFFECT = 1 << 19;
const EFFECT_HAS_DERIVED = 1 << 20;

const STATE_SYMBOL = Symbol('$state');
const STATE_SYMBOL_METADATA = Symbol('$state metadata');
const LEGACY_PROPS = Symbol('legacy props');
const LOADING_ATTR_SYMBOL = Symbol('');


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/context.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/context.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component_context: () => (/* binding */ component_context),
/* harmony export */   dev_current_component_function: () => (/* binding */ dev_current_component_function),
/* harmony export */   getAllContexts: () => (/* binding */ getAllContexts),
/* harmony export */   getContext: () => (/* binding */ getContext),
/* harmony export */   hasContext: () => (/* binding */ hasContext),
/* harmony export */   is_runes: () => (/* binding */ is_runes),
/* harmony export */   pop: () => (/* binding */ pop),
/* harmony export */   push: () => (/* binding */ push),
/* harmony export */   setContext: () => (/* binding */ setContext),
/* harmony export */   set_component_context: () => (/* binding */ set_component_context),
/* harmony export */   set_dev_current_component_function: () => (/* binding */ set_dev_current_component_function)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _dev_ownership_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev/ownership.js */ "./node_modules/svelte/src/internal/client/dev/ownership.js");
/* harmony import */ var _shared_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/errors.js */ "./node_modules/svelte/src/internal/shared/errors.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/** @import { ComponentContext } from '#client' */









/** @type {ComponentContext | null} */
let component_context = null;

/** @param {ComponentContext | null} context */
function set_component_context(context) {
	component_context = context;
}

/**
 * The current component function. Different from current component context:
 * ```html
 * <!-- App.svelte -->
 * <Foo>
 *   <Bar /> <!-- context == Foo.svelte, function == App.svelte -->
 * </Foo>
 * ```
 * @type {ComponentContext['function']}
 */
let dev_current_component_function = null;

/** @param {ComponentContext['function']} fn */
function set_dev_current_component_function(fn) {
	dev_current_component_function = fn;
}

/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * @template T
 * @param {any} key
 * @returns {T}
 */
function getContext(key) {
	const context_map = get_or_init_context_map('getContext');
	const result = /** @type {T} */ (context_map.get(key));
	return result;
}

/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * @template T
 * @param {any} key
 * @param {T} context
 * @returns {T}
 */
function setContext(key, context) {
	const context_map = get_or_init_context_map('setContext');

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		// When state is put into context, we treat as if it's global from now on.
		// We do for performance reasons (it's for example very expensive to call
		// getContext on a big object many times when part of a list component)
		// and danger of false positives.
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.untrack)(() => (0,_dev_ownership_js__WEBPACK_IMPORTED_MODULE_1__.add_owner)(context, null, true));
	}

	context_map.set(key, context);
	return context;
}

/**
 * Checks whether a given `key` has been set in the context of a parent component.
 * Must be called during component initialisation.
 *
 * @param {any} key
 * @returns {boolean}
 */
function hasContext(key) {
	const context_map = get_or_init_context_map('hasContext');
	return context_map.has(key);
}

/**
 * Retrieves the whole context map that belongs to the closest parent component.
 * Must be called during component initialisation. Useful, for example, if you
 * programmatically create a component and want to pass the existing context to it.
 *
 * @template {Map<any, any>} [T=Map<any, any>]
 * @returns {T}
 */
function getAllContexts() {
	const context_map = get_or_init_context_map('getAllContexts');
	return /** @type {T} */ (context_map);
}

/**
 * @param {Record<string, unknown>} props
 * @param {any} runes
 * @param {Function} [fn]
 * @returns {void}
 */
function push(props, runes = false, fn) {
	component_context = {
		p: component_context,
		c: null,
		e: null,
		m: false,
		s: props,
		x: null,
		l: null
	};

	if (_flags_index_js__WEBPACK_IMPORTED_MODULE_6__.legacy_mode_flag && !runes) {
		component_context.l = {
			s: null,
			u: null,
			r1: [],
			r2: (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.source)(false)
		};
	}

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		// component function
		component_context.function = fn;
		dev_current_component_function = fn;
	}
}

/**
 * @template {Record<string, any>} T
 * @param {T} [component]
 * @returns {T}
 */
function pop(component) {
	const context_stack_item = component_context;
	if (context_stack_item !== null) {
		if (component !== undefined) {
			context_stack_item.x = component;
		}
		const component_effects = context_stack_item.e;
		if (component_effects !== null) {
			var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_4__.active_effect;
			var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_4__.active_reaction;
			context_stack_item.e = null;
			try {
				for (var i = 0; i < component_effects.length; i++) {
					var component_effect = component_effects[i];
					(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_effect)(component_effect.effect);
					(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_reaction)(component_effect.reaction);
					(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_5__.effect)(component_effect.fn);
				}
			} finally {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_effect)(previous_effect);
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_reaction)(previous_reaction);
			}
		}
		component_context = context_stack_item.p;
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			dev_current_component_function = context_stack_item.p?.function ?? null;
		}
		context_stack_item.m = true;
	}
	// Micro-optimization: Don't set .a above to the empty object
	// so it can be garbage-collected when the return here is unused
	return component || /** @type {T} */ ({});
}

/** @returns {boolean} */
function is_runes() {
	return !_flags_index_js__WEBPACK_IMPORTED_MODULE_6__.legacy_mode_flag || (component_context !== null && component_context.l === null);
}

/**
 * @param {string} name
 * @returns {Map<unknown, unknown>}
 */
function get_or_init_context_map(name) {
	if (component_context === null) {
		(0,_shared_errors_js__WEBPACK_IMPORTED_MODULE_2__.lifecycle_outside_component)(name);
	}

	return (component_context.c ??= new Map(get_parent_context(component_context) || undefined));
}

/**
 * @param {ComponentContext} component_context
 * @returns {Map<unknown, unknown> | null}
 */
function get_parent_context(component_context) {
	let parent = component_context.p;
	while (parent !== null) {
		const context_map = parent.c;
		if (context_map !== null) {
			return context_map;
		}
		parent = parent.p;
	}
	return null;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/assign.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   assign_and: () => (/* binding */ assign_and),
/* harmony export */   assign_nullish: () => (/* binding */ assign_nullish),
/* harmony export */   assign_or: () => (/* binding */ assign_or)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/svelte/src/utils.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");




/**
 *
 * @param {any} a
 * @param {any} b
 * @param {string} property
 * @param {string} location
 */
function compare(a, b, property, location) {
	if (a !== b) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_2__.assignment_value_stale(property, /** @type {string} */ ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.sanitize_location)(location)));
	}

	return a;
}

/**
 * @param {any} object
 * @param {string} property
 * @param {any} value
 * @param {string} location
 */
function assign(object, property, value, location) {
	return compare(
		(object[property] = value),
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => object[property]),
		property,
		location
	);
}

/**
 * @param {any} object
 * @param {string} property
 * @param {any} value
 * @param {string} location
 */
function assign_and(object, property, value, location) {
	return compare(
		(object[property] &&= value),
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => object[property]),
		property,
		location
	);
}

/**
 * @param {any} object
 * @param {string} property
 * @param {any} value
 * @param {string} location
 */
function assign_or(object, property, value, location) {
	return compare(
		(object[property] ||= value),
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => object[property]),
		property,
		location
	);
}

/**
 * @param {any} object
 * @param {string} property
 * @param {any} value
 * @param {string} location
 */
function assign_nullish(object, property, value, location) {
	return compare(
		(object[property] ??= value),
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => object[property]),
		property,
		location
	);
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/console-log.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/console-log.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log_if_contains_state: () => (/* binding */ log_if_contains_state)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _shared_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/clone.js */ "./node_modules/svelte/src/internal/shared/clone.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");





/**
 * @param {string} method
 * @param  {...any} objects
 */
function log_if_contains_state(method, ...objects) {
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.untrack)(() => {
		try {
			let has_state = false;
			const transformed = [];

			for (const obj of objects) {
				if (obj && typeof obj === 'object' && _constants_js__WEBPACK_IMPORTED_MODULE_0__.STATE_SYMBOL in obj) {
					transformed.push((0,_shared_clone_js__WEBPACK_IMPORTED_MODULE_1__.snapshot)(obj, true));
					has_state = true;
				} else {
					transformed.push(obj);
				}
			}

			if (has_state) {
				_warnings_js__WEBPACK_IMPORTED_MODULE_2__.console_log_state(method);

				// eslint-disable-next-line no-console
				console.log('%c[snapshot]', 'color: grey', ...transformed);
			}
		} catch {}
	});

	return objects;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/css.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/css.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanup_styles: () => (/* binding */ cleanup_styles),
/* harmony export */   register_style: () => (/* binding */ register_style)
/* harmony export */ });
/** @type {Map<String, Set<HTMLStyleElement>>} */
var all_styles = new Map();

/**
 * @param {String} hash
 * @param {HTMLStyleElement} style
 */
function register_style(hash, style) {
	var styles = all_styles.get(hash);

	if (!styles) {
		styles = new Set();
		all_styles.set(hash, styles);
	}

	styles.add(style);
}

/**
 * @param {String} hash
 */
function cleanup_styles(hash) {
	var styles = all_styles.get(hash);
	if (!styles) return;

	for (const style of styles) {
		style.remove();
	}

	all_styles.delete(hash);
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/elements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/elements.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_locations: () => (/* binding */ add_locations)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _dom_hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/** @import { SourceLocation } from '#shared' */



/**
 * @param {any} fn
 * @param {string} filename
 * @param {SourceLocation[]} locations
 * @returns {any}
 */
function add_locations(fn, filename, locations) {
	return (/** @type {any[]} */ ...args) => {
		const dom = fn(...args);

		var node = _dom_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating ? dom : dom.nodeType === 11 ? dom.firstChild : dom;
		assign_locations(node, filename, locations);

		return dom;
	};
}

/**
 * @param {Element} element
 * @param {string} filename
 * @param {SourceLocation} location
 */
function assign_location(element, filename, location) {
	// @ts-expect-error
	element.__svelte_meta = {
		loc: { file: filename, line: location[0], column: location[1] }
	};

	if (location[2]) {
		assign_locations(element.firstChild, filename, location[2]);
	}
}

/**
 * @param {Node | null} node
 * @param {string} filename
 * @param {SourceLocation[]} locations
 */
function assign_locations(node, filename, locations) {
	var i = 0;
	var depth = 0;

	while (node && i < locations.length) {
		if (_dom_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating && node.nodeType === 8) {
			var comment = /** @type {Comment} */ (node);
			if (comment.data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_START || comment.data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_START_ELSE) depth += 1;
			else if (comment.data[0] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_END) depth -= 1;
		}

		if (depth === 0 && node.nodeType === 1) {
			assign_location(/** @type {Element} */ (node), filename, locations[i++]);
		}

		node = node.nextSibling;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/equality.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/equality.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   init_array_prototype_warnings: () => (/* binding */ init_array_prototype_warnings),
/* harmony export */   strict_equals: () => (/* binding */ strict_equals)
/* harmony export */ });
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../proxy.js */ "./node_modules/svelte/src/internal/client/proxy.js");



function init_array_prototype_warnings() {
	const array_prototype = Array.prototype;
	// The REPL ends up here over and over, and this prevents it from adding more and more patches
	// of the same kind to the prototype, which would slow down everything over time.
	// @ts-expect-error
	const cleanup = Array.__svelte_cleanup;
	if (cleanup) {
		cleanup();
	}

	const { indexOf, lastIndexOf, includes } = array_prototype;

	array_prototype.indexOf = function (item, from_index) {
		const index = indexOf.call(this, item, from_index);

		if (index === -1) {
			for (let i = from_index ?? 0; i < this.length; i += 1) {
				if ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(this[i]) === item) {
					_warnings_js__WEBPACK_IMPORTED_MODULE_0__.state_proxy_equality_mismatch('array.indexOf(...)');
					break;
				}
			}
		}

		return index;
	};

	array_prototype.lastIndexOf = function (item, from_index) {
		// we need to specify this.length - 1 because it's probably using something like
		// `arguments` inside so passing undefined is different from not passing anything
		const index = lastIndexOf.call(this, item, from_index ?? this.length - 1);

		if (index === -1) {
			for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
				if ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(this[i]) === item) {
					_warnings_js__WEBPACK_IMPORTED_MODULE_0__.state_proxy_equality_mismatch('array.lastIndexOf(...)');
					break;
				}
			}
		}

		return index;
	};

	array_prototype.includes = function (item, from_index) {
		const has = includes.call(this, item, from_index);

		if (!has) {
			for (let i = 0; i < this.length; i += 1) {
				if ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(this[i]) === item) {
					_warnings_js__WEBPACK_IMPORTED_MODULE_0__.state_proxy_equality_mismatch('array.includes(...)');
					break;
				}
			}
		}

		return has;
	};

	// @ts-expect-error
	Array.__svelte_cleanup = () => {
		array_prototype.indexOf = indexOf;
		array_prototype.lastIndexOf = lastIndexOf;
		array_prototype.includes = includes;
	};
}

/**
 * @param {any} a
 * @param {any} b
 * @param {boolean} equal
 * @returns {boolean}
 */
function strict_equals(a, b, equal = true) {
	// try-catch needed because this tries to read properties of `a` and `b`,
	// which could be disallowed for example in a secure context
	try {
		if ((a === b) !== ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(a) === (0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(b))) {
			_warnings_js__WEBPACK_IMPORTED_MODULE_0__.state_proxy_equality_mismatch(equal ? '===' : '!==');
		}
	} catch {}

	return (a === b) === equal;
}

/**
 * @param {any} a
 * @param {any} b
 * @param {boolean} equal
 * @returns {boolean}
 */
function equals(a, b, equal = true) {
	if ((a == b) !== ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(a) == (0,_proxy_js__WEBPACK_IMPORTED_MODULE_1__.get_proxied_value)(b))) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_0__.state_proxy_equality_mismatch(equal ? '==' : '!=');
	}

	return (a == b) === equal;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/hmr.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/hmr.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hmr: () => (/* binding */ hmr)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _dom_hydration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/** @import { Source, Effect, TemplateNode } from '#client' */








/**
 * @template {(anchor: Comment, props: any) => any} Component
 * @param {Component} original
 * @param {() => Source<Component>} get_source
 */
function hmr(original, get_source) {
	/**
	 * @param {TemplateNode} anchor
	 * @param {any} props
	 */
	function wrapper(anchor, props) {
		let instance = {};

		/** @type {Effect} */
		let effect;

		let ran = false;

		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.block)(() => {
			const source = get_source();
			const component = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_6__.get)(source);

			if (effect) {
				// @ts-ignore
				for (var k in instance) delete instance[k];
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.destroy_effect)(effect);
			}

			effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.branch)(() => {
				// when the component is invalidated, replace it without transitions
				if (ran) (0,_render_js__WEBPACK_IMPORTED_MODULE_5__.set_should_intro)(false);

				// preserve getters/setters
				Object.defineProperties(
					instance,
					Object.getOwnPropertyDescriptors(
						// @ts-expect-error
						new.target ? new component(anchor, props) : component(anchor, props)
					)
				);

				if (ran) (0,_render_js__WEBPACK_IMPORTED_MODULE_5__.set_should_intro)(true);
			});
		}, _constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_TRANSPARENT);

		ran = true;

		if (_dom_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) {
			anchor = _dom_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_node;
		}

		return instance;
	}

	// @ts-expect-error
	wrapper[_constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME] = original[_constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME];

	// @ts-expect-error
	wrapper[_constants_js__WEBPACK_IMPORTED_MODULE_0__.HMR] = {
		// When we accept an update, we set the original source to the new component
		original,
		// The `get_source` parameter reads `wrapper[HMR].source`, but in the `accept`
		// function we always replace it with `previous[HMR].source`, which in practice
		// means we only ever update the original
		source: (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.source)(original)
	};

	return wrapper;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/inspect.js":
/*!****************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/inspect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inspect: () => (/* binding */ inspect)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _shared_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/clone.js */ "./node_modules/svelte/src/internal/shared/clone.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");




/**
 * @param {() => any[]} get_value
 * @param {Function} [inspector]
 */
// eslint-disable-next-line no-console
function inspect(get_value, inspector = console.log) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.validate_effect)('$inspect');

	let initial = true;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.inspect_effect)(() => {
		/** @type {any} */
		var value = _constants_js__WEBPACK_IMPORTED_MODULE_0__.UNINITIALIZED;

		// Capturing the value might result in an exception due to the inspect effect being
		// sync and thus operating on stale data. In the case we encounter an exception we
		// can bail-out of reporting the value. Instead we simply console.error the error
		// so at least it's known that an error occured, but we don't stop execution
		try {
			value = get_value();
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}

		if (value !== _constants_js__WEBPACK_IMPORTED_MODULE_0__.UNINITIALIZED) {
			inspector(initial ? 'init' : 'update', ...(0,_shared_clone_js__WEBPACK_IMPORTED_MODULE_1__.snapshot)(value, true));
		}

		initial = false;
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/legacy.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/legacy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   check_target: () => (/* binding */ check_target),
/* harmony export */   legacy_api: () => (/* binding */ legacy_api)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _ownership_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ownership.js */ "./node_modules/svelte/src/internal/client/dev/ownership.js");





/** @param {Function & { [FILENAME]: string }} target */
function check_target(target) {
	if (target) {
		_errors_js__WEBPACK_IMPORTED_MODULE_0__.component_api_invalid_new(target[_constants_js__WEBPACK_IMPORTED_MODULE_2__.FILENAME] ?? 'a component', target.name);
	}
}

function legacy_api() {
	const component = _context_js__WEBPACK_IMPORTED_MODULE_1__.component_context?.function;

	/** @param {string} method */
	function error(method) {
		// @ts-expect-error
		const parent = (0,_ownership_js__WEBPACK_IMPORTED_MODULE_3__.get_component)()?.[_constants_js__WEBPACK_IMPORTED_MODULE_2__.FILENAME] ?? 'Something';
		_errors_js__WEBPACK_IMPORTED_MODULE_0__.component_api_changed(parent, method, component[_constants_js__WEBPACK_IMPORTED_MODULE_2__.FILENAME]);
	}

	return {
		$destroy: () => error('$destroy()'),
		$on: () => error('$on(...)'),
		$set: () => error('$set(...)')
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/ownership.js":
/*!******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/ownership.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_OWNER: () => (/* binding */ ADD_OWNER),
/* harmony export */   add_owner: () => (/* binding */ add_owner),
/* harmony export */   add_owner_effect: () => (/* binding */ add_owner_effect),
/* harmony export */   add_owner_to_class: () => (/* binding */ add_owner_to_class),
/* harmony export */   check_ownership: () => (/* binding */ check_ownership),
/* harmony export */   get_component: () => (/* binding */ get_component),
/* harmony export */   mark_module_end: () => (/* binding */ mark_module_end),
/* harmony export */   mark_module_start: () => (/* binding */ mark_module_start),
/* harmony export */   skip_ownership_validation: () => (/* binding */ skip_ownership_validation),
/* harmony export */   widen_ownership: () => (/* binding */ widen_ownership)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/** @import { ProxyMetadata } from '#client' */
/** @typedef {{ file: string, line: number, column: number }} Location */








/** @type {Record<string, Array<{ start: Location, end: Location, component: Function }>>} */
const boundaries = {};

const chrome_pattern = /at (?:.+ \()?(.+):(\d+):(\d+)\)?$/;
const firefox_pattern = /@(.+):(\d+):(\d+)$/;

function get_stack() {
	const stack = new Error().stack;
	if (!stack) return null;

	const entries = [];

	for (const line of stack.split('\n')) {
		let match = chrome_pattern.exec(line) ?? firefox_pattern.exec(line);

		if (match) {
			entries.push({
				file: match[1],
				line: +match[2],
				column: +match[3]
			});
		}
	}

	return entries;
}

/**
 * Determines which `.svelte` component is responsible for a given state change
 * @returns {Function | null}
 */
function get_component() {
	// first 4 lines are svelte internals; adjust this number if we change the internal call stack
	const stack = get_stack()?.slice(4);
	if (!stack) return null;

	for (let i = 0; i < stack.length; i++) {
		const entry = stack[i];
		const modules = boundaries[entry.file];
		if (!modules) {
			// If the first entry is not a component, that means the modification very likely happened
			// within a .svelte.js file, possibly triggered by a component. Since these files are not part
			// of the bondaries/component context heuristic, we need to bail in this case, else we would
			// have false positives when the .svelte.ts file provides a state creator function, encapsulating
			// the state and its mutations, and is being called from a component other than the one who
			// called the state creator function.
			if (i === 0) return null;
			continue;
		}

		for (const module of modules) {
			if (module.end == null) {
				return null;
			}
			if (module.start.line < entry.line && module.end.line > entry.line) {
				return module.component;
			}
		}
	}

	return null;
}

const ADD_OWNER = Symbol('ADD_OWNER');

/**
 * Together with `mark_module_end`, this function establishes the boundaries of a `.svelte` file,
 * such that subsequent calls to `get_component` can tell us which component is responsible
 * for a given state change
 */
function mark_module_start() {
	const start = get_stack()?.[2];

	if (start) {
		(boundaries[start.file] ??= []).push({
			start,
			// @ts-expect-error
			end: null,
			// @ts-expect-error we add the component at the end, since HMR will overwrite the function
			component: null
		});
	}
}

/**
 * @param {Function} component
 */
function mark_module_end(component) {
	const end = get_stack()?.[2];

	if (end) {
		const boundaries_file = boundaries[end.file];
		const boundary = boundaries_file[boundaries_file.length - 1];

		boundary.end = end;
		boundary.component = component;
	}
}

/**
 * @param {any} object
 * @param {any | null} owner
 * @param {boolean} [global]
 * @param {boolean} [skip_warning]
 */
function add_owner(object, owner, global = false, skip_warning = false) {
	if (object && !global) {
		const component = _context_js__WEBPACK_IMPORTED_MODULE_2__.dev_current_component_function;
		const metadata = object[_constants_js__WEBPACK_IMPORTED_MODULE_0__.STATE_SYMBOL_METADATA];
		if (metadata && !has_owner(metadata, component)) {
			let original = get_owner(metadata);

			if (owner && owner[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME] !== component[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME] && !skip_warning) {
				_warnings_js__WEBPACK_IMPORTED_MODULE_4__.ownership_invalid_binding(component[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME], owner[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME], original[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME]);
			}
		}
	}

	add_owner_to_object(object, owner, new Set());
}

/**
 * @param {() => unknown} get_object
 * @param {any} Component
 * @param {boolean} [skip_warning]
 */
function add_owner_effect(get_object, Component, skip_warning = false) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.user_pre_effect)(() => {
		add_owner(get_object(), Component, false, skip_warning);
	});
}

/**
 * @param {any} _this
 * @param {Function} owner
 * @param {Array<() => any>} getters
 * @param {boolean} skip_warning
 */
function add_owner_to_class(_this, owner, getters, skip_warning) {
	_this[ADD_OWNER].current ||= getters.map(() => _constants_js__WEBPACK_IMPORTED_MODULE_5__.UNINITIALIZED);

	for (let i = 0; i < getters.length; i += 1) {
		const current = getters[i]();
		// For performance reasons we only re-add the owner if the state has changed
		if (current !== _this[ADD_OWNER][i]) {
			_this[ADD_OWNER].current[i] = current;
			add_owner(current, owner, false, skip_warning);
		}
	}
}

/**
 * @param {ProxyMetadata | null} from
 * @param {ProxyMetadata} to
 */
function widen_ownership(from, to) {
	if (to.owners === null) {
		return;
	}

	while (from) {
		if (from.owners === null) {
			to.owners = null;
			break;
		}

		for (const owner of from.owners) {
			to.owners.add(owner);
		}

		from = from.parent;
	}
}

/**
 * @param {any} object
 * @param {Function | null} owner If `null`, then the object is globally owned and will not be checked
 * @param {Set<any>} seen
 */
function add_owner_to_object(object, owner, seen) {
	const metadata = /** @type {ProxyMetadata} */ (object?.[_constants_js__WEBPACK_IMPORTED_MODULE_0__.STATE_SYMBOL_METADATA]);

	if (metadata) {
		// this is a state proxy, add owner directly, if not globally shared
		if ('owners' in metadata && metadata.owners != null) {
			if (owner) {
				metadata.owners.add(owner);
			} else {
				metadata.owners = null;
			}
		}
	} else if (object && typeof object === 'object') {
		if (seen.has(object)) return;
		seen.add(object);
		if (ADD_OWNER in object && object[ADD_OWNER]) {
			// this is a class with state fields. we put this in a render effect
			// so that if state is replaced (e.g. `instance.name = { first, last }`)
			// the new state is also co-owned by the caller of `getContext`
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
				object[ADD_OWNER](owner);
			});
		} else {
			var proto = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_prototype_of)(object);

			if (proto === Object.prototype) {
				// recurse until we find a state proxy
				for (const key in object) {
					if (Object.getOwnPropertyDescriptor(object, key)?.get) {
						// Similar to the class case; the getter could update with a new state
						let current = _constants_js__WEBPACK_IMPORTED_MODULE_5__.UNINITIALIZED;
						(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
							const next = object[key];
							if (current !== next) {
								current = next;
								add_owner_to_object(next, owner, seen);
							}
						});
					} else {
						add_owner_to_object(object[key], owner, seen);
					}
				}
			} else if (proto === Array.prototype) {
				// recurse until we find a state proxy
				for (let i = 0; i < object.length; i += 1) {
					add_owner_to_object(object[i], owner, seen);
				}
			}
		}
	}
}

/**
 * @param {ProxyMetadata} metadata
 * @param {Function} component
 * @returns {boolean}
 */
function has_owner(metadata, component) {
	if (metadata.owners === null) {
		return true;
	}

	return (
		metadata.owners.has(component) ||
		// This helps avoid false positives when using HMR, where the component function is replaced
		(_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME in component &&
			[...metadata.owners].some(
				(owner) => /** @type {any} */ (owner)[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME] === component[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME]
			)) ||
		(metadata.parent !== null && has_owner(metadata.parent, component))
	);
}

/**
 * @param {ProxyMetadata} metadata
 * @returns {any}
 */
function get_owner(metadata) {
	return (
		metadata?.owners?.values().next().value ??
		get_owner(/** @type {ProxyMetadata} */ (metadata.parent))
	);
}

let skip = false;

/**
 * @param {() => any} fn
 */
function skip_ownership_validation(fn) {
	skip = true;
	fn();
	skip = false;
}

/**
 * @param {ProxyMetadata} metadata
 */
function check_ownership(metadata) {
	if (skip) return;

	const component = get_component();

	if (component && !has_owner(metadata, component)) {
		let original = get_owner(metadata);

		// @ts-expect-error
		if (original[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME] !== component[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME]) {
			// @ts-expect-error
			_warnings_js__WEBPACK_IMPORTED_MODULE_4__.ownership_invalid_mutation(component[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME], original[_constants_js__WEBPACK_IMPORTED_MODULE_5__.FILENAME]);
		} else {
			_warnings_js__WEBPACK_IMPORTED_MODULE_4__.ownership_invalid_mutation();
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dev/tracing.js":
/*!****************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dev/tracing.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_stack: () => (/* binding */ get_stack),
/* harmony export */   trace: () => (/* binding */ trace),
/* harmony export */   tracing_expressions: () => (/* binding */ tracing_expressions)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _shared_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/clone.js */ "./node_modules/svelte/src/internal/shared/clone.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/** @import { Derived, Reaction, Signal, Value } from '#client' */







/** @type { any } */
let tracing_expressions = null;

/**
 * @param { Value } signal
 * @param { { read: Error[] } } [entry]
 */
function log_entry(signal, entry) {
	const debug = signal.debug;
	const value = signal.trace_need_increase ? signal.trace_v : signal.v;

	if (value === _constants_js__WEBPACK_IMPORTED_MODULE_0__.UNINITIALIZED) {
		return;
	}

	if (debug) {
		var previous_captured_signals = _runtime_js__WEBPACK_IMPORTED_MODULE_5__.captured_signals;
		var captured = new Set();
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.set_captured_signals)(captured);
		try {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.untrack)(() => {
				debug();
			});
		} finally {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.set_captured_signals)(previous_captured_signals);
		}
		if (captured.size > 0) {
			for (const dep of captured) {
				log_entry(dep);
			}
			return;
		}
	}

	const type = (signal.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0 ? '$derived' : '$state';
	const current_reaction = /** @type {Reaction} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_5__.active_reaction);
	const dirty = signal.wv > current_reaction.wv || current_reaction.wv === 0;

	// eslint-disable-next-line no-console
	console.groupCollapsed(
		`%c${type}`,
		dirty ? 'color: CornflowerBlue; font-weight: bold' : 'color: grey; font-weight: bold',
		typeof value === 'object' && value !== null && _constants_js__WEBPACK_IMPORTED_MODULE_3__.STATE_SYMBOL in value
			? (0,_shared_clone_js__WEBPACK_IMPORTED_MODULE_1__.snapshot)(value, true)
			: value
	);

	if (type === '$derived') {
		const deps = new Set(/** @type {Derived} */ (signal).deps);
		for (const dep of deps) {
			log_entry(dep);
		}
	}

	if (signal.created) {
		// eslint-disable-next-line no-console
		console.log(signal.created);
	}

	if (signal.updated) {
		// eslint-disable-next-line no-console
		console.log(signal.updated);
	}

	const read = entry?.read;

	if (read && read.length > 0) {
		for (var stack of read) {
			// eslint-disable-next-line no-console
			console.log(stack);
		}
	}

	// eslint-disable-next-line no-console
	console.groupEnd();
}

/**
 * @template T
 * @param {() => string} label
 * @param {() => T} fn
 */
function trace(label, fn) {
	var previously_tracing_expressions = tracing_expressions;
	try {
		tracing_expressions = { entries: new Map(), reaction: _runtime_js__WEBPACK_IMPORTED_MODULE_5__.active_reaction };

		var start = performance.now();
		var value = fn();
		var time = (performance.now() - start).toFixed(2);

		if (!(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__.effect_tracking)()) {
			// eslint-disable-next-line no-console
			console.log(`${label()} %cran outside of an effect (${time}ms)`, 'color: grey');
		} else if (tracing_expressions.entries.size === 0) {
			// eslint-disable-next-line no-console
			console.log(`${label()} %cno reactive dependencies (${time}ms)`, 'color: grey');
		} else {
			// eslint-disable-next-line no-console
			console.group(`${label()} %c(${time}ms)`, 'color: grey');

			var entries = tracing_expressions.entries;

			tracing_expressions = null;

			for (const [signal, entry] of entries) {
				log_entry(signal, entry);
			}
			// eslint-disable-next-line no-console
			console.groupEnd();
		}

		if (previously_tracing_expressions !== null && tracing_expressions !== null) {
			for (const [signal, entry] of tracing_expressions.entries) {
				var prev_entry = previously_tracing_expressions.get(signal);

				if (prev_entry === undefined) {
					previously_tracing_expressions.set(signal, entry);
				} else {
					prev_entry.read.push(...entry.read);
				}
			}
		}

		return value;
	} finally {
		tracing_expressions = previously_tracing_expressions;
	}
}

/**
 * @param {string} label
 */
function get_stack(label) {
	let error = Error();
	const stack = error.stack;

	if (stack) {
		const lines = stack.split('\n');
		const new_lines = ['\n'];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (line === 'Error') {
				continue;
			}
			if (line.includes('validate_each_keys')) {
				return null;
			}
			if (line.includes('svelte/src/internal')) {
				continue;
			}
			new_lines.push(line);
		}

		if (new_lines.length === 1) {
			return null;
		}

		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.define_property)(error, 'stack', {
			value: new_lines.join('\n')
		});

		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.define_property)(error, 'name', {
			// 'Error' suffix is required for stack traces to be rendered properly
			value: `${label}Error`
		});
	}
	return error;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/await.js":
/*!*********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/await.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   await_block: () => (/* binding */ await_block)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/** @import { Effect, Source, TemplateNode } from '#client' */










const PENDING = 0;
const THEN = 1;
const CATCH = 2;

/**
 * @template V
 * @param {TemplateNode} node
 * @param {(() => Promise<V>)} get_input
 * @param {null | ((anchor: Node) => void)} pending_fn
 * @param {null | ((anchor: Node, value: Source<V>) => void)} then_fn
 * @param {null | ((anchor: Node, error: unknown) => void)} catch_fn
 * @returns {void}
 */
function await_block(node, get_input, pending_fn, then_fn, catch_fn) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_5__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_5__.hydrate_next)();
	}

	var anchor = node;
	var runes = (0,_context_js__WEBPACK_IMPORTED_MODULE_8__.is_runes)();
	var active_component_context = _context_js__WEBPACK_IMPORTED_MODULE_8__.component_context;

	/** @type {any} */
	var component_function = esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ? _context_js__WEBPACK_IMPORTED_MODULE_8__.component_context?.function : null;

	/** @type {V | Promise<V> | typeof UNINITIALIZED} */
	var input = _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED;

	/** @type {Effect | null} */
	var pending_effect;

	/** @type {Effect | null} */
	var then_effect;

	/** @type {Effect | null} */
	var catch_effect;

	var input_source = (runes ? _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.source : _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.mutable_source)(/** @type {V} */ (undefined));
	var error_source = (runes ? _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.source : _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.mutable_source)(undefined);
	var resolved = false;

	/**
	 * @param {PENDING | THEN | CATCH} state
	 * @param {boolean} restore
	 */
	function update(state, restore) {
		resolved = true;

		if (restore) {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_effect)(effect);
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_reaction)(effect); // TODO do we need both?
			(0,_context_js__WEBPACK_IMPORTED_MODULE_8__.set_component_context)(active_component_context);
			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) (0,_context_js__WEBPACK_IMPORTED_MODULE_8__.set_dev_current_component_function)(component_function);
		}

		try {
			if (state === PENDING && pending_fn) {
				if (pending_effect) (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.resume_effect)(pending_effect);
				else pending_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => pending_fn(anchor));
			}

			if (state === THEN && then_fn) {
				if (then_effect) (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.resume_effect)(then_effect);
				else then_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => then_fn(anchor, input_source));
			}

			if (state === CATCH && catch_fn) {
				if (catch_effect) (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.resume_effect)(catch_effect);
				else catch_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => catch_fn(anchor, error_source));
			}

			if (state !== PENDING && pending_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(pending_effect, () => (pending_effect = null));
			}

			if (state !== THEN && then_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(then_effect, () => (then_effect = null));
			}

			if (state !== CATCH && catch_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(catch_effect, () => (catch_effect = null));
			}
		} finally {
			if (restore) {
				if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) (0,_context_js__WEBPACK_IMPORTED_MODULE_8__.set_dev_current_component_function)(null);
				(0,_context_js__WEBPACK_IMPORTED_MODULE_8__.set_component_context)(null);
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_reaction)(null);
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_active_effect)(null);

				// without this, the DOM does not update until two ticks after the promise
				// resolves, which is unexpected behaviour (and somewhat irksome to test)
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.flushSync)();
			}
		}
	}

	var effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.block)(() => {
		if (input === (input = get_input())) return;

		if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.is_promise)(input)) {
			var promise = input;

			resolved = false;

			promise.then(
				(value) => {
					if (promise !== input) return;
					// we technically could use `set` here since it's on the next microtick
					// but let's use internal_set for consistency and just to be safe
					(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.internal_set)(input_source, value);
					update(THEN, true);
				},
				(error) => {
					if (promise !== input) return;
					// we technically could use `set` here since it's on the next microtick
					// but let's use internal_set for consistency and just to be safe
					(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.internal_set)(error_source, error);
					update(CATCH, true);
					if (!catch_fn) {
						// Rethrow the error if no catch block exists
						throw error_source.v;
					}
				}
			);

			if (_hydration_js__WEBPACK_IMPORTED_MODULE_5__.hydrating) {
				if (pending_fn) {
					pending_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => pending_fn(anchor));
				}
			} else {
				// Wait a microtask before checking if we should show the pending state as
				// the promise might have resolved by the next microtask.
				(0,_task_js__WEBPACK_IMPORTED_MODULE_6__.queue_micro_task)(() => {
					if (!resolved) update(PENDING, true);
				});
			}
		} else {
			(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_3__.internal_set)(input_source, input);
			update(THEN, false);
		}

		// Set the input to something else, in order to disable the promise callbacks
		return () => (input = _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED);
	});

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_5__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_5__.hydrate_node;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/boundary.js":
/*!************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/boundary.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundary: () => (/* binding */ boundary)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/** @import { Effect, TemplateNode, } from '#client' */








/**
 * @param {Effect} boundary
 * @param {() => void} fn
 */
function with_boundary(boundary, fn) {
	var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect;
	var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_reaction;
	var previous_ctx = _context_js__WEBPACK_IMPORTED_MODULE_1__.component_context;

	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.set_active_effect)(boundary);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.set_active_reaction)(boundary);
	(0,_context_js__WEBPACK_IMPORTED_MODULE_1__.set_component_context)(boundary.ctx);

	try {
		fn();
	} finally {
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.set_active_effect)(previous_effect);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.set_active_reaction)(previous_reaction);
		(0,_context_js__WEBPACK_IMPORTED_MODULE_1__.set_component_context)(previous_ctx);
	}
}

/**
 * @param {TemplateNode} node
 * @param {{
 * 	 onerror?: (error: unknown, reset: () => void) => void,
 *   failed?: (anchor: Node, error: () => unknown, reset: () => () => void) => void
 * }} props
 * @param {((anchor: Node) => void)} boundary_fn
 * @returns {void}
 */
function boundary(node, props, boundary_fn) {
	var anchor = node;

	/** @type {Effect} */
	var boundary_effect;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.block)(() => {
		var boundary = /** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect);
		var hydrate_open = _hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrate_node;
		var is_creating_fallback = false;

		// We re-use the effect's fn property to avoid allocation of an additional field
		boundary.fn = (/** @type {unknown}} */ error) => {
			var onerror = props.onerror;
			let failed = props.failed;

			// If we have nothing to capture the error, or if we hit an error while
			// rendering the fallback, re-throw for another boundary to handle
			if ((!onerror && !failed) || is_creating_fallback) {
				throw error;
			}

			var reset = () => {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(boundary_effect);

				with_boundary(boundary, () => {
					is_creating_fallback = false;
					boundary_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => boundary_fn(anchor));
					(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.reset_is_throwing_error)();
				});
			};

			onerror?.(error, reset);

			if (boundary_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.destroy_effect)(boundary_effect);
			} else if (_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrating) {
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.set_hydrate_node)(hydrate_open);
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.next)();
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.set_hydrate_node)((0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.remove_nodes)());
			}

			if (failed) {
				// Render the `failed` snippet in a microtask
				(0,_task_js__WEBPACK_IMPORTED_MODULE_5__.queue_micro_task)(() => {
					with_boundary(boundary, () => {
						is_creating_fallback = true;

						try {
							boundary_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => {
								failed(
									anchor,
									() => error,
									() => reset
								);
							});
						} catch (error) {
							(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.handle_error)(error, boundary, null, boundary.ctx);
						}

						(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.reset_is_throwing_error)();
						is_creating_fallback = false;
					});
				});
			}
		};

		if (_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrating) {
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrate_next)();
		}

		boundary_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => boundary_fn(anchor));
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.reset_is_throwing_error)();
	}, _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TRANSPARENT | _constants_js__WEBPACK_IMPORTED_MODULE_0__.BOUNDARY_EFFECT);

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrate_node;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/css-props.js":
/*!*************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/css-props.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css_props: () => (/* binding */ css_props)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/** @import { TemplateNode } from '#client' */




/**
 * @param {HTMLDivElement | SVGGElement} element
 * @param {() => Record<string, string>} get_styles
 * @returns {void}
 */
function css_props(element, get_styles) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(/** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_first_child)(element)));
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.render_effect)(() => {
		var styles = get_styles();

		for (var key in styles) {
			var value = styles[key];

			if (value) {
				element.style.setProperty(key, value);
			} else {
				element.style.removeProperty(key);
			}
		}
	});

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
		element.remove();
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/each.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/each.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   current_each_item: () => (/* binding */ current_each_item),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   set_current_each_item: () => (/* binding */ set_current_each_item)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reactivity/deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/** @import { EachItem, EachState, Effect, MaybeSource, Source, TemplateNode, TransitionManager, Value } from '#client' */












/**
 * The row of a keyed each block that is currently updating. We track this
 * so that `animate:` directives have something to attach themselves to
 * @type {EachItem | null}
 */
let current_each_item = null;

/** @param {EachItem | null} item */
function set_current_each_item(item) {
	current_each_item = item;
}

/**
 * @param {any} _
 * @param {number} i
 */
function index(_, i) {
	return i;
}

/**
 * Pause multiple effects simultaneously, and coordinate their
 * subsequent destruction. Used in each blocks
 * @param {EachState} state
 * @param {EachItem[]} items
 * @param {null | Node} controlled_anchor
 * @param {Map<any, EachItem>} items_map
 */
function pause_effects(state, items, controlled_anchor, items_map) {
	/** @type {TransitionManager[]} */
	var transitions = [];
	var length = items.length;

	for (var i = 0; i < length; i++) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.pause_children)(items[i].e, transitions, true);
	}

	var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
	// If we have a controlled anchor, it means that the each block is inside a single
	// DOM element, so we can apply a fast-path for clearing the contents of the element.
	if (is_controlled) {
		var parent_node = /** @type {Element} */ (
			/** @type {Element} */ (controlled_anchor).parentNode
		);
		(0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.clear_text_content)(parent_node);
		parent_node.append(/** @type {Element} */ (controlled_anchor));
		items_map.clear();
		link(state, items[0].prev, items[length - 1].next);
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.run_out_transitions)(transitions, () => {
		for (var i = 0; i < length; i++) {
			var item = items[i];
			if (!is_controlled) {
				items_map.delete(item.k);
				link(state, item.prev, item.next);
			}
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.destroy_effect)(item.e, !is_controlled);
		}
	});
}

/**
 * @template V
 * @param {Element | Comment} node The next sibling node, or the parent node if this is a 'controlled' block
 * @param {number} flags
 * @param {() => V[]} get_collection
 * @param {(value: V, index: number) => any} get_key
 * @param {(anchor: Node, item: MaybeSource<V>, index: MaybeSource<number>) => void} render_fn
 * @param {null | ((anchor: Node) => void)} fallback_fn
 * @returns {void}
 */
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
	var anchor = node;

	/** @type {EachState} */
	var state = { flags, items: new Map(), first: null };

	var is_controlled = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_IS_CONTROLLED) !== 0;

	if (is_controlled) {
		var parent_node = /** @type {Element} */ (node);

		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating
			? (0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(/** @type {Comment | Text} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_first_child)(parent_node)))
			: parent_node.appendChild((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.create_text)());
	}

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_next)();
	}

	/** @type {Effect | null} */
	var fallback = null;

	var was_empty = false;

	// TODO: ideally we could use derived for runes mode but because of the ability
	// to use a store which can be mutated, we can't do that here as mutating a store
	// will still result in the collection array being the same from the store
	var each_array = (0,_reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_10__.derived_safe_equal)(() => {
		var collection = get_collection();

		return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.is_array)(collection) ? collection : collection == null ? [] : (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.array_from)(collection);
	});

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.block)(() => {
		var array = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_8__.get)(each_array);
		var length = array.length;

		if (was_empty && length === 0) {
			// ignore updates if the array is empty,
			// and it already was empty on previous run
			return;
		}
		was_empty = length === 0;

		/** `true` if there was a hydration mismatch. Needs to be a `let` or else it isn't treeshaken out */
		let mismatch = false;

		if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
			var is_else = /** @type {Comment} */ (anchor).data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_START_ELSE;

			if (is_else !== (length === 0)) {
				// hydration mismatch — remove the server-rendered DOM and start over
				anchor = (0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.remove_nodes)();

				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(anchor);
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
				mismatch = true;
			}
		}

		// this is separate to the previous block because `hydrating` might change
		if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
			/** @type {EachItem | null} */
			var prev = null;

			/** @type {EachItem} */
			var item;

			for (var i = 0; i < length; i++) {
				if (
					_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node.nodeType === 8 &&
					/** @type {Comment} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node).data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_END
				) {
					// The server rendered fewer items than expected,
					// so break out and continue appending non-hydrated items
					anchor = /** @type {Comment} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node);
					mismatch = true;
					(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
					break;
				}

				var value = array[i];
				var key = get_key(value, i);
				item = create_item(
					_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node,
					state,
					prev,
					null,
					value,
					key,
					i,
					render_fn,
					flags,
					get_collection
				);
				state.items.set(key, item);

				prev = item;
			}

			// remove excess nodes
			if (length > 0) {
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)((0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.remove_nodes)());
			}
		}

		if (!_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
			reconcile(array, state, anchor, render_fn, flags, get_key, get_collection);
		}

		if (fallback_fn !== null) {
			if (length === 0) {
				if (fallback) {
					(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.resume_effect)(fallback);
				} else {
					fallback = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.branch)(() => fallback_fn(anchor));
				}
			} else if (fallback !== null) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.pause_effect)(fallback, () => {
					fallback = null;
				});
			}
		}

		if (mismatch) {
			// continue in hydration mode
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(true);
		}

		// When we mount the each block for the first time, the collection won't be
		// connected to this effect as the effect hasn't finished running yet and its deps
		// won't be assigned. However, it's possible that when reconciling the each block
		// that a mutation occurred and it's made the collection MAYBE_DIRTY, so reading the
		// collection again can provide consistency to the reactive graph again as the deriveds
		// will now be `CLEAN`.
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_8__.get)(each_array);
	});

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node;
	}
}

/**
 * Add, remove, or reorder items output by an each block as its input changes
 * @template V
 * @param {Array<V>} array
 * @param {EachState} state
 * @param {Element | Comment | Text} anchor
 * @param {(anchor: Node, item: MaybeSource<V>, index: number | Source<number>, collection: () => V[]) => void} render_fn
 * @param {number} flags
 * @param {(value: V, index: number) => any} get_key
 * @param {() => V[]} get_collection
 * @returns {void}
 */
function reconcile(array, state, anchor, render_fn, flags, get_key, get_collection) {
	var is_animated = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_IS_ANIMATED) !== 0;
	var should_update = (flags & (_constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_ITEM_REACTIVE | _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_INDEX_REACTIVE)) !== 0;

	var length = array.length;
	var items = state.items;
	var first = state.first;
	var current = first;

	/** @type {undefined | Set<EachItem>} */
	var seen;

	/** @type {EachItem | null} */
	var prev = null;

	/** @type {undefined | Set<EachItem>} */
	var to_animate;

	/** @type {EachItem[]} */
	var matched = [];

	/** @type {EachItem[]} */
	var stashed = [];

	/** @type {V} */
	var value;

	/** @type {any} */
	var key;

	/** @type {EachItem | undefined} */
	var item;

	/** @type {number} */
	var i;

	if (is_animated) {
		for (i = 0; i < length; i += 1) {
			value = array[i];
			key = get_key(value, i);
			item = items.get(key);

			if (item !== undefined) {
				item.a?.measure();
				(to_animate ??= new Set()).add(item);
			}
		}
	}

	for (i = 0; i < length; i += 1) {
		value = array[i];
		key = get_key(value, i);
		item = items.get(key);

		if (item === undefined) {
			var child_anchor = current ? /** @type {TemplateNode} */ (current.e.nodes_start) : anchor;

			prev = create_item(
				child_anchor,
				state,
				prev,
				prev === null ? state.first : prev.next,
				value,
				key,
				i,
				render_fn,
				flags,
				get_collection
			);

			items.set(key, prev);

			matched = [];
			stashed = [];

			current = prev.next;
			continue;
		}

		if (should_update) {
			update_item(item, value, i, flags);
		}

		if ((item.e.f & _constants_js__WEBPACK_IMPORTED_MODULE_6__.INERT) !== 0) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.resume_effect)(item.e);
			if (is_animated) {
				item.a?.unfix();
				(to_animate ??= new Set()).delete(item);
			}
		}

		if (item !== current) {
			if (seen !== undefined && seen.has(item)) {
				if (matched.length < stashed.length) {
					// more efficient to move later items to the front
					var start = stashed[0];
					var j;

					prev = start.prev;

					var a = matched[0];
					var b = matched[matched.length - 1];

					for (j = 0; j < matched.length; j += 1) {
						move(matched[j], start, anchor);
					}

					for (j = 0; j < stashed.length; j += 1) {
						seen.delete(stashed[j]);
					}

					link(state, a.prev, b.next);
					link(state, prev, a);
					link(state, b, start);

					current = start;
					prev = b;
					i -= 1;

					matched = [];
					stashed = [];
				} else {
					// more efficient to move earlier items to the back
					seen.delete(item);
					move(item, current, anchor);

					link(state, item.prev, item.next);
					link(state, item, prev === null ? state.first : prev.next);
					link(state, prev, item);

					prev = item;
				}

				continue;
			}

			matched = [];
			stashed = [];

			while (current !== null && current.k !== key) {
				// If the each block isn't inert and an item has an effect that is already inert,
				// skip over adding it to our seen Set as the item is already being handled
				if ((current.e.f & _constants_js__WEBPACK_IMPORTED_MODULE_6__.INERT) === 0) {
					(seen ??= new Set()).add(current);
				}
				stashed.push(current);
				current = current.next;
			}

			if (current === null) {
				continue;
			}

			item = current;
		}

		matched.push(item);
		prev = item;
		current = item.next;
	}

	if (current !== null || seen !== undefined) {
		var to_destroy = seen === undefined ? [] : (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.array_from)(seen);

		while (current !== null) {
			// If the each block isn't inert, then inert effects are currently outroing and will be removed once the transition is finished
			if ((current.e.f & _constants_js__WEBPACK_IMPORTED_MODULE_6__.INERT) === 0) {
				to_destroy.push(current);
			}
			current = current.next;
		}

		var destroy_length = to_destroy.length;

		if (destroy_length > 0) {
			var controlled_anchor = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;

			if (is_animated) {
				for (i = 0; i < destroy_length; i += 1) {
					to_destroy[i].a?.measure();
				}

				for (i = 0; i < destroy_length; i += 1) {
					to_destroy[i].a?.fix();
				}
			}

			pause_effects(state, to_destroy, controlled_anchor, items);
		}
	}

	if (is_animated) {
		(0,_task_js__WEBPACK_IMPORTED_MODULE_7__.queue_micro_task)(() => {
			if (to_animate === undefined) return;
			for (item of to_animate) {
				item.a?.apply();
			}
		});
	}

	/** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_8__.active_effect).first = state.first && state.first.e;
	/** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_8__.active_effect).last = prev && prev.e;
}

/**
 * @param {EachItem} item
 * @param {any} value
 * @param {number} index
 * @param {number} type
 * @returns {void}
 */
function update_item(item, value, index, type) {
	if ((type & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_ITEM_REACTIVE) !== 0) {
		(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.internal_set)(item.v, value);
	}

	if ((type & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_INDEX_REACTIVE) !== 0) {
		(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.internal_set)(/** @type {Value<number>} */ (item.i), index);
	} else {
		item.i = index;
	}
}

/**
 * @template V
 * @param {Node} anchor
 * @param {EachState} state
 * @param {EachItem | null} prev
 * @param {EachItem | null} next
 * @param {V} value
 * @param {unknown} key
 * @param {number} index
 * @param {(anchor: Node, item: V | Source<V>, index: number | Value<number>, collection: () => V[]) => void} render_fn
 * @param {number} flags
 * @param {() => V[]} get_collection
 * @returns {EachItem}
 */
function create_item(
	anchor,
	state,
	prev,
	next,
	value,
	key,
	index,
	render_fn,
	flags,
	get_collection
) {
	var previous_each_item = current_each_item;
	var reactive = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_ITEM_REACTIVE) !== 0;
	var mutable = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_ITEM_IMMUTABLE) === 0;

	var v = reactive ? (mutable ? (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.mutable_source)(value) : (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.source)(value)) : value;
	var i = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_0__.EACH_INDEX_REACTIVE) === 0 ? index : (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_4__.source)(index);

	if (esm_env__WEBPACK_IMPORTED_MODULE_9__.DEV && reactive) {
		// For tracing purposes, we need to link the source signal we create with the
		// collection + index so that tracing works as intended
		/** @type {Value} */ (v).debug = () => {
			var collection_index = typeof i === 'number' ? index : i.v;
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			get_collection()[collection_index];
		};
	}

	/** @type {EachItem} */
	var item = {
		i,
		v,
		k: key,
		a: null,
		// @ts-expect-error
		e: null,
		prev,
		next
	};

	current_each_item = item;

	try {
		item.e = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.branch)(() => render_fn(anchor, v, i, get_collection), _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating);

		item.e.prev = prev && prev.e;
		item.e.next = next && next.e;

		if (prev === null) {
			state.first = item;
		} else {
			prev.next = item;
			prev.e.next = item.e;
		}

		if (next !== null) {
			next.prev = item;
			next.e.prev = item.e;
		}

		return item;
	} finally {
		current_each_item = previous_each_item;
	}
}

/**
 * @param {EachItem} item
 * @param {EachItem | null} next
 * @param {Text | Element | Comment} anchor
 */
function move(item, next, anchor) {
	var end = item.next ? /** @type {TemplateNode} */ (item.next.e.nodes_start) : anchor;

	var dest = next ? /** @type {TemplateNode} */ (next.e.nodes_start) : anchor;
	var node = /** @type {TemplateNode} */ (item.e.nodes_start);

	while (node !== end) {
		var next_node = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_next_sibling)(node));
		dest.before(node);
		node = next_node;
	}
}

/**
 * @param {EachState} state
 * @param {EachItem | null} prev
 * @param {EachItem | null} next
 */
function link(state, prev, next) {
	if (prev === null) {
		state.first = next;
	} else {
		prev.next = next;
		prev.e.next = next && next.e;
	}

	if (next !== null) {
		next.prev = prev;
		next.e.prev = prev && prev.e;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/html.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/html.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _reconciler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reconciler.js */ "./node_modules/svelte/src/internal/client/dom/reconciler.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils.js */ "./node_modules/svelte/src/utils.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/** @import { Effect, TemplateNode } from '#client' */











/**
 * @param {Element} element
 * @param {string | null} server_hash
 * @param {string} value
 */
function check_hash(element, server_hash, value) {
	if (!server_hash || server_hash === (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.hash)(String(value ?? ''))) return;

	let location;

	// @ts-expect-error
	const loc = element.__svelte_meta?.loc;
	if (loc) {
		location = `near ${loc.file}:${loc.line}:${loc.column}`;
	} else if (_context_js__WEBPACK_IMPORTED_MODULE_8__.dev_current_component_function?.[_constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME]) {
		location = `in ${_context_js__WEBPACK_IMPORTED_MODULE_8__.dev_current_component_function[_constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME]}`;
	}

	_warnings_js__WEBPACK_IMPORTED_MODULE_5__.hydration_html_changed((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.sanitize_location)(location));
}

/**
 * @param {Element | Text | Comment} node
 * @param {() => string} get_value
 * @param {boolean} svg
 * @param {boolean} mathml
 * @param {boolean} [skip_warning]
 * @returns {void}
 */
function html(node, get_value, svg, mathml, skip_warning) {
	var anchor = node;

	var value = '';

	/** @type {Effect | undefined} */
	var effect;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.block)(() => {
		if (value === (value = get_value() ?? '')) {
			if (_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) {
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_next)();
			}
			return;
		}

		if (effect !== undefined) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.destroy_effect)(effect);
			effect = undefined;
		}

		if (value === '') return;

		effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.branch)(() => {
			if (_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) {
				// We're deliberately not trying to repair mismatches between server and client,
				// as it's costly and error-prone (and it's an edge case to have a mismatch anyway)
				var hash = /** @type {Comment} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_node).data;
				var next = (0,_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_next)();
				var last = next;

				while (
					next !== null &&
					(next.nodeType !== 8 || /** @type {Comment} */ (next).data !== '')
				) {
					last = next;
					next = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_next_sibling)(next));
				}

				if (next === null) {
					_warnings_js__WEBPACK_IMPORTED_MODULE_5__.hydration_mismatch();
					throw _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_ERROR;
				}

				if (esm_env__WEBPACK_IMPORTED_MODULE_7__.DEV && !skip_warning) {
					check_hash(/** @type {Element} */ (next.parentNode), hash, value);
				}

				(0,_template_js__WEBPACK_IMPORTED_MODULE_4__.assign_nodes)(_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_node, last);
				anchor = (0,_hydration_js__WEBPACK_IMPORTED_MODULE_2__.set_hydrate_node)(next);
				return;
			}

			var html = value + '';
			if (svg) html = `<svg>${html}</svg>`;
			else if (mathml) html = `<math>${html}</math>`;

			// Don't use create_fragment_with_script_from_html here because that would mean script tags are executed.
			// @html is basically `.innerHTML = ...` and that doesn't execute scripts either due to security reasons.
			/** @type {DocumentFragment | Element} */
			var node = (0,_reconciler_js__WEBPACK_IMPORTED_MODULE_3__.create_fragment_from_html)(html);

			if (svg || mathml) {
				node = /** @type {Element} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_first_child)(node));
			}

			(0,_template_js__WEBPACK_IMPORTED_MODULE_4__.assign_nodes)(
				/** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_first_child)(node)),
				/** @type {TemplateNode} */ (node.lastChild)
			);

			if (svg || mathml) {
				while ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_first_child)(node)) {
					anchor.before(/** @type {Node} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_first_child)(node)));
				}
			} else {
				anchor.before(node);
			}
		});
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/if.js":
/*!******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/if.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   if_block: () => (/* binding */ if_block)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/** @import { Effect, TemplateNode } from '#client' */





/**
 * @param {TemplateNode} node
 * @param {(branch: (fn: (anchor: Node) => void, flag?: boolean) => void) => void} fn
 * @param {boolean} [elseif] True if this is an `{:else if ...}` block rather than an `{#if ...}`, as that affects which transitions are considered 'local'
 * @returns {void}
 */
function if_block(node, fn, elseif = false) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_next)();
	}

	var anchor = node;

	/** @type {Effect | null} */
	var consequent_effect = null;

	/** @type {Effect | null} */
	var alternate_effect = null;

	/** @type {UNINITIALIZED | boolean | null} */
	var condition = _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNINITIALIZED;

	var flags = elseif ? _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TRANSPARENT : 0;

	var has_branch = false;

	const set_branch = (/** @type {(anchor: Node) => void} */ fn, flag = true) => {
		has_branch = true;
		update_branch(flag, fn);
	};

	const update_branch = (
		/** @type {boolean | null} */ new_condition,
		/** @type {null | ((anchor: Node) => void)} */ fn
	) => {
		if (condition === (condition = new_condition)) return;

		/** Whether or not there was a hydration mismatch. Needs to be a `let` or else it isn't treeshaken out */
		let mismatch = false;

		if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
			const is_else = /** @type {Comment} */ (anchor).data === _constants_js__WEBPACK_IMPORTED_MODULE_3__.HYDRATION_START_ELSE;

			if (!!condition === is_else) {
				// Hydration mismatch: remove everything inside the anchor and start fresh.
				// This could happen with `{#if browser}...{/if}`, for example
				anchor = (0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.remove_nodes)();

				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(anchor);
				(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
				mismatch = true;
			}
		}

		if (condition) {
			if (consequent_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.resume_effect)(consequent_effect);
			} else if (fn) {
				consequent_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => fn(anchor));
			}

			if (alternate_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(alternate_effect, () => {
					alternate_effect = null;
				});
			}
		} else {
			if (alternate_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.resume_effect)(alternate_effect);
			} else if (fn) {
				alternate_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.branch)(() => fn(anchor));
			}

			if (consequent_effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.pause_effect)(consequent_effect, () => {
					consequent_effect = null;
				});
			}
		}

		if (mismatch) {
			// continue in hydration mode
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(true);
		}
	};

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.block)(() => {
		has_branch = false;
		fn(set_branch);
		if (!has_branch) {
			update_branch(null, null);
		}
	}, flags);

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/key.js":
/*!*******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/key.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   key_block: () => (/* binding */ key_block)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_equality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/** @import { Effect, TemplateNode } from '#client' */






/**
 * @template V
 * @param {TemplateNode} node
 * @param {() => V} get_key
 * @param {(anchor: Node) => TemplateNode | void} render_fn
 * @returns {void}
 */
function key_block(node, get_key, render_fn) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrate_next)();
	}

	var anchor = node;

	/** @type {V | typeof UNINITIALIZED} */
	var key = _constants_js__WEBPACK_IMPORTED_MODULE_0__.UNINITIALIZED;

	/** @type {Effect} */
	var effect;

	var changed = (0,_context_js__WEBPACK_IMPORTED_MODULE_3__.is_runes)() ? _reactivity_equality_js__WEBPACK_IMPORTED_MODULE_2__.not_equal : _reactivity_equality_js__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.block)(() => {
		if (changed(key, (key = get_key()))) {
			if (effect) {
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.pause_effect)(effect);
			}

			effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.branch)(() => render_fn(anchor));
		}
	});

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_4__.hydrate_node;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/slot.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/slot.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitize_slots: () => (/* binding */ sanitize_slots),
/* harmony export */   slot: () => (/* binding */ slot)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");


/**
 * @param {Comment} anchor
 * @param {Record<string, any>} $$props
 * @param {string} name
 * @param {Record<string, unknown>} slot_props
 * @param {null | ((anchor: Comment) => void)} fallback_fn
 */
function slot(anchor, $$props, name, slot_props, fallback_fn) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_next)();
	}

	var slot_fn = $$props.$$slots?.[name];
	// Interop: Can use snippets to fill slots
	var is_interop = false;
	if (slot_fn === true) {
		slot_fn = $$props[name === 'default' ? 'children' : name];
		is_interop = true;
	}

	if (slot_fn === undefined) {
		if (fallback_fn !== null) {
			fallback_fn(anchor);
		}
	} else {
		slot_fn(anchor, is_interop ? () => slot_props : slot_props);
	}
}

/**
 * @param {Record<string, any>} props
 * @returns {Record<string, boolean>}
 */
function sanitize_slots(props) {
	/** @type {Record<string, boolean>} */
	const sanitized = {};
	if (props.children) sanitized.default = true;
	for (const key in props.$$slots) {
		sanitized[key] = true;
	}
	return sanitized;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/snippet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/snippet.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRawSnippet: () => (/* binding */ createRawSnippet),
/* harmony export */   snippet: () => (/* binding */ snippet),
/* harmony export */   wrap_snippet: () => (/* binding */ wrap_snippet)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _reconciler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reconciler.js */ "./node_modules/svelte/src/internal/client/dom/reconciler.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/** @import { Snippet } from 'svelte' */
/** @import { Effect, TemplateNode } from '#client' */
/** @import { Getters } from '#shared' */












/**
 * @template {(node: TemplateNode, ...args: any[]) => void} SnippetFn
 * @param {TemplateNode} node
 * @param {() => SnippetFn | null | undefined} get_snippet
 * @param {(() => any)[]} args
 * @returns {void}
 */
function snippet(node, get_snippet, ...args) {
	var anchor = node;

	/** @type {SnippetFn | null | undefined} */
	// @ts-ignore
	var snippet = _shared_utils_js__WEBPACK_IMPORTED_MODULE_10__.noop;

	/** @type {Effect | null} */
	var snippet_effect;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.block)(() => {
		if (snippet === (snippet = get_snippet())) return;

		if (snippet_effect) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.destroy_effect)(snippet_effect);
			snippet_effect = null;
		}

		if (esm_env__WEBPACK_IMPORTED_MODULE_8__.DEV && snippet == null) {
			_errors_js__WEBPACK_IMPORTED_MODULE_7__.invalid_snippet();
		}

		snippet_effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.branch)(() => /** @type {SnippetFn} */ (snippet)(anchor, ...args));
	}, _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TRANSPARENT);

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_3__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_3__.hydrate_node;
	}
}

/**
 * In development, wrap the snippet function so that it passes validation, and so that the
 * correct component context is set for ownership checks
 * @param {any} component
 * @param {(node: TemplateNode, ...args: any[]) => void} fn
 */
function wrap_snippet(component, fn) {
	return (/** @type {TemplateNode} */ node, /** @type {any[]} */ ...args) => {
		var previous_component_function = _context_js__WEBPACK_IMPORTED_MODULE_2__.dev_current_component_function;
		(0,_context_js__WEBPACK_IMPORTED_MODULE_2__.set_dev_current_component_function)(component);

		try {
			return fn(node, ...args);
		} finally {
			(0,_context_js__WEBPACK_IMPORTED_MODULE_2__.set_dev_current_component_function)(previous_component_function);
		}
	};
}

/**
 * Create a snippet programmatically
 * @template {unknown[]} Params
 * @param {(...params: Getters<Params>) => {
 *   render: () => string
 *   setup?: (element: Element) => void | (() => void)
 * }} fn
 * @returns {Snippet<Params>}
 */
function createRawSnippet(fn) {
	// @ts-expect-error the types are a lie
	return (/** @type {TemplateNode} */ anchor, /** @type {Getters<Params>} */ ...params) => {
		var snippet = fn(...params);

		/** @type {Element} */
		var element;

		if (_hydration_js__WEBPACK_IMPORTED_MODULE_3__.hydrating) {
			element = /** @type {Element} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_3__.hydrate_node);
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_3__.hydrate_next)();
		} else {
			var html = snippet.render().trim();
			var fragment = (0,_reconciler_js__WEBPACK_IMPORTED_MODULE_4__.create_fragment_from_html)(html);
			element = /** @type {Element} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_first_child)(fragment));

			if (esm_env__WEBPACK_IMPORTED_MODULE_8__.DEV && ((0,_operations_js__WEBPACK_IMPORTED_MODULE_9__.get_next_sibling)(element) !== null || element.nodeType !== 1)) {
				_warnings_js__WEBPACK_IMPORTED_MODULE_6__.invalid_raw_snippet_render();
			}

			anchor.before(element);
		}

		const result = snippet.setup?.(element);
		(0,_template_js__WEBPACK_IMPORTED_MODULE_5__.assign_nodes)(element, element);

		if (typeof result === 'function') {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.teardown)(result);
		}
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/** @import { TemplateNode, Dom, Effect } from '#client' */




/**
 * @template P
 * @template {(props: P) => void} C
 * @param {TemplateNode} node
 * @param {() => C} get_component
 * @param {(anchor: TemplateNode, component: C) => Dom | void} render_fn
 * @returns {void}
 */
function component(node, get_component, render_fn) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_next)();
	}

	var anchor = node;

	/** @type {C} */
	var component;

	/** @type {Effect | null} */
	var effect;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.block)(() => {
		if (component === (component = get_component())) return;

		if (effect) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.pause_effect)(effect);
			effect = null;
		}

		if (component) {
			effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.branch)(() => render_fn(anchor, component));
		}
	}, _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TRANSPARENT);

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) {
		anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrate_node;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   element: () => (/* binding */ element)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./each.js */ "./node_modules/svelte/src/internal/client/dom/blocks/each.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils.js */ "./node_modules/svelte/src/utils.js");
/** @import { Effect, TemplateNode } from '#client' */













/**
 * @param {Comment | Element} node
 * @param {() => string} get_tag
 * @param {boolean} is_svg
 * @param {undefined | ((element: Element, anchor: Node | null) => void)} render_fn,
 * @param {undefined | (() => string)} get_namespace
 * @param {undefined | [number, number]} location
 * @returns {void}
 */
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
	let was_hydrating = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating;

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_next)();
	}

	var filename = esm_env__WEBPACK_IMPORTED_MODULE_8__.DEV && location && _context_js__WEBPACK_IMPORTED_MODULE_7__.component_context?.function[_constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME];

	/** @type {string | null} */
	var tag;

	/** @type {string | null} */
	var current_tag;

	/** @type {null | Element} */
	var element = null;

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating && _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node.nodeType === 1) {
		element = /** @type {Element} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node);
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_next)();
	}

	var anchor = /** @type {TemplateNode} */ (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating ? _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrate_node : node);

	/** @type {Effect | null} */
	var effect;

	/**
	 * The keyed `{#each ...}` item block, if any, that this element is inside.
	 * We track this so we can set it when changing the element, allowing any
	 * `animate:` directive to bind itself to the correct block
	 */
	var each_item_block = _each_js__WEBPACK_IMPORTED_MODULE_5__.current_each_item;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.block)(() => {
		const next_tag = get_tag() || null;
		var ns = get_namespace ? get_namespace() : is_svg || next_tag === 'svg' ? _constants_js__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE_SVG : null;

		// Assumption: Noone changes the namespace but not the tag (what would that even mean?)
		if (next_tag === tag) return;

		// See explanation of `each_item_block` above
		var previous_each_item = _each_js__WEBPACK_IMPORTED_MODULE_5__.current_each_item;
		(0,_each_js__WEBPACK_IMPORTED_MODULE_5__.set_current_each_item)(each_item_block);

		if (effect) {
			if (next_tag === null) {
				// start outro
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.pause_effect)(effect, () => {
					effect = null;
					current_tag = null;
				});
			} else if (next_tag === current_tag) {
				// same tag as is currently rendered — abort outro
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.resume_effect)(effect);
			} else {
				// tag is changing — destroy immediately, render contents without intro transitions
				(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.destroy_effect)(effect);
				(0,_render_js__WEBPACK_IMPORTED_MODULE_4__.set_should_intro)(false);
			}
		}

		if (next_tag && next_tag !== current_tag) {
			effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.branch)(() => {
				element = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating
					? /** @type {Element} */ (element)
					: ns
						? document.createElementNS(ns, next_tag)
						: document.createElement(next_tag);

				if (esm_env__WEBPACK_IMPORTED_MODULE_8__.DEV && location) {
					// @ts-expect-error
					element.__svelte_meta = {
						loc: {
							file: filename,
							line: location[0],
							column: location[1]
						}
					};
				}

				(0,_template_js__WEBPACK_IMPORTED_MODULE_10__.assign_nodes)(element, element);

				if (render_fn) {
					if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating && (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.is_raw_text_element)(next_tag)) {
						// prevent hydration glitches
						element.append(document.createComment(''));
					}

					// If hydrating, use the existing ssr comment as the anchor so that the
					// inner open and close methods can pick up the existing nodes correctly
					var child_anchor = /** @type {TemplateNode} */ (
						_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating ? (0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_first_child)(element) : element.appendChild((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.create_text)())
					);

					if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
						if (child_anchor === null) {
							(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
						} else {
							(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(child_anchor);
						}
					}

					// `child_anchor` is undefined if this is a void element, but we still
					// need to call `render_fn` in order to run actions etc. If the element
					// contains children, it's a user error (which is warned on elsewhere)
					// and the DOM will be silently discarded
					render_fn(element, child_anchor);
				}

				// we do this after calling `render_fn` so that child effects don't override `nodes.end`
				/** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_6__.active_effect).nodes_end = element;

				anchor.before(element);
			});
		}

		tag = next_tag;
		if (tag) current_tag = tag;
		(0,_render_js__WEBPACK_IMPORTED_MODULE_4__.set_should_intro)(true);

		(0,_each_js__WEBPACK_IMPORTED_MODULE_5__.set_current_each_item)(previous_each_item);
	}, _constants_js__WEBPACK_IMPORTED_MODULE_9__.EFFECT_TRANSPARENT);

	if (was_hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(true);
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrate_node)(anchor);
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js":
/*!***************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   head: () => (/* binding */ head),
/* harmony export */   reset_head_anchor: () => (/* binding */ reset_head_anchor)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/** @import { TemplateNode } from '#client' */






/**
 * @type {Node | undefined}
 */
let head_anchor;

function reset_head_anchor() {
	head_anchor = undefined;
}

/**
 * @param {(anchor: Node) => void} render_fn
 * @returns {void}
 */
function head(render_fn) {
	// The head function may be called after the first hydration pass and ssr comment nodes may still be present,
	// therefore we need to skip that when we detect that we're not in hydration mode.
	let previous_hydrate_node = null;
	let was_hydrating = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating;

	/** @type {Comment | Text} */
	var anchor;

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		previous_hydrate_node = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;

		// There might be multiple head blocks in our app, so we need to account for each one needing independent hydration.
		if (head_anchor === undefined) {
			head_anchor = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(document.head));
		}

		while (
			head_anchor !== null &&
			(head_anchor.nodeType !== 8 || /** @type {Comment} */ (head_anchor).data !== _constants_js__WEBPACK_IMPORTED_MODULE_4__.HYDRATION_START)
		) {
			head_anchor = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_next_sibling)(head_anchor));
		}

		// If we can't find an opening hydration marker, skip hydration (this can happen
		// if a framework rendered body but not head content)
		if (head_anchor === null) {
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrating)(false);
		} else {
			head_anchor = (0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(/** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_next_sibling)(head_anchor)));
		}
	}

	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		anchor = document.head.appendChild((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.create_text)());
	}

	try {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.block)(() => render_fn(anchor), _constants_js__WEBPACK_IMPORTED_MODULE_3__.HEAD_EFFECT);
	} finally {
		if (was_hydrating) {
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrating)(true);
			head_anchor = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node; // so that next head block starts from the correct node
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(/** @type {TemplateNode} */ (previous_hydrate_node));
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/css.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/css.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append_styles: () => (/* binding */ append_styles)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _dev_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev/css.js */ "./node_modules/svelte/src/internal/client/dev/css.js");




/**
 * @param {Node} anchor
 * @param {{ hash: string, code: string }} css
 */
function append_styles(anchor, css) {
	// Use `queue_micro_task` to ensure `anchor` is in the DOM, otherwise getRootNode() will yield wrong results
	(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.queue_micro_task)(() => {
		var root = anchor.getRootNode();

		var target = /** @type {ShadowRoot} */ (root).host
			? /** @type {ShadowRoot} */ (root)
			: /** @type {Document} */ (root).head ?? /** @type {Document} */ (root.ownerDocument).head;

		// Always querying the DOM is roughly the same perf as additionally checking for presence in a map first assuming
		// that you'll get cache hits half of the time, so we just always query the dom for simplicity and code savings.
		if (!target.querySelector('#' + css.hash)) {
			const style = document.createElement('style');
			style.id = css.hash;
			style.textContent = css.code;

			target.appendChild(style);

			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
				(0,_dev_css_js__WEBPACK_IMPORTED_MODULE_2__.register_style)(css.hash, style);
			}
		}
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/actions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_equality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/** @import { ActionPayload } from '#client' */




/**
 * @template P
 * @param {Element} dom
 * @param {(dom: Element, value?: P) => ActionPayload<P>} action
 * @param {() => P} [get_value]
 * @returns {void}
 */
function action(dom, action, get_value) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
		var payload = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.untrack)(() => action(dom, get_value?.()) || {});

		if (get_value && payload?.update) {
			var inited = false;
			/** @type {P} */
			var prev = /** @type {any} */ ({}); // initialize with something so it's never equal on first run

			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.render_effect)(() => {
				var value = get_value();

				// Action's update method is coarse-grained, i.e. when anything in the passed value changes, update.
				// This works in legacy mode because of mutable_source being updated as a whole, but when using $state
				// together with actions and mutation, it wouldn't notice the change without a deep read.
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.deep_read_state)(value);

				if (inited && (0,_reactivity_equality_js__WEBPACK_IMPORTED_MODULE_1__.safe_not_equal)(prev, value)) {
					prev = value;
					/** @type {Function} */ (payload.update)(value);
				}
			});

			inited = true;
		}

		if (payload?.destroy) {
			return () => /** @type {Function} */ (payload.destroy)();
		}
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/attributes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/attributes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASS: () => (/* binding */ CLASS),
/* harmony export */   STYLE: () => (/* binding */ STYLE),
/* harmony export */   remove_input_defaults: () => (/* binding */ remove_input_defaults),
/* harmony export */   set_attribute: () => (/* binding */ set_attribute),
/* harmony export */   set_attributes: () => (/* binding */ set_attributes),
/* harmony export */   set_checked: () => (/* binding */ set_checked),
/* harmony export */   set_custom_element_data: () => (/* binding */ set_custom_element_data),
/* harmony export */   set_default_checked: () => (/* binding */ set_default_checked),
/* harmony export */   set_default_value: () => (/* binding */ set_default_value),
/* harmony export */   set_selected: () => (/* binding */ set_selected),
/* harmony export */   set_value: () => (/* binding */ set_value),
/* harmony export */   set_xlink_attribute: () => (/* binding */ set_xlink_attribute)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./node_modules/svelte/src/internal/client/dom/elements/events.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc.js */ "./node_modules/svelte/src/internal/client/dom/elements/misc.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils.js */ "./node_modules/svelte/src/utils.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _shared_attributes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/attributes.js */ "./node_modules/svelte/src/internal/shared/attributes.js");
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class.js */ "./node_modules/svelte/src/internal/client/dom/elements/class.js");













const CLASS = Symbol('class');
const STYLE = Symbol('style');

/**
 * The value/checked attribute in the template actually corresponds to the defaultValue property, so we need
 * to remove it upon hydration to avoid a bug when someone resets the form value.
 * @param {HTMLInputElement} input
 * @returns {void}
 */
function remove_input_defaults(input) {
	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) return;

	var already_removed = false;

	// We try and remove the default attributes later, rather than sync during hydration.
	// Doing it sync during hydration has a negative impact on performance, but deferring the
	// work in an idle task alleviates this greatly. If a form reset event comes in before
	// the idle callback, then we ensure the input defaults are cleared just before.
	var remove_defaults = () => {
		if (already_removed) return;
		already_removed = true;

		// Remove the attributes but preserve the values
		if (input.hasAttribute('value')) {
			var value = input.value;
			set_attribute(input, 'value', null);
			input.value = value;
		}

		if (input.hasAttribute('checked')) {
			var checked = input.checked;
			set_attribute(input, 'checked', null);
			input.checked = checked;
		}
	};

	// @ts-expect-error
	input.__on_r = remove_defaults;
	(0,_task_js__WEBPACK_IMPORTED_MODULE_7__.queue_idle_task)(remove_defaults);
	(0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.add_form_reset_listener)();
}

/**
 * @param {Element} element
 * @param {any} value
 */
function set_value(element, value) {
	// @ts-expect-error
	var attributes = (element.__attributes ??= {});

	if (
		attributes.value ===
			(attributes.value =
				// treat null and undefined the same for the initial value
				value ?? undefined) ||
		// @ts-expect-error
		// `progress` elements always need their value set when it's `0`
		(element.value === value && (value !== 0 || element.nodeName !== 'PROGRESS'))
	) {
		return;
	}

	// @ts-expect-error
	element.value = value ?? '';
}

/**
 * @param {Element} element
 * @param {boolean} checked
 */
function set_checked(element, checked) {
	// @ts-expect-error
	var attributes = (element.__attributes ??= {});

	if (
		attributes.checked ===
		(attributes.checked =
			// treat null and undefined the same for the initial value
			checked ?? undefined)
	) {
		return;
	}

	// @ts-expect-error
	element.checked = checked;
}

/**
 * Sets the `selected` attribute on an `option` element.
 * Not set through the property because that doesn't reflect to the DOM,
 * which means it wouldn't be taken into account when a form is reset.
 * @param {HTMLOptionElement} element
 * @param {boolean} selected
 */
function set_selected(element, selected) {
	if (selected) {
		// The selected option could've changed via user selection, and
		// setting the value without this check would set it back.
		if (!element.hasAttribute('selected')) {
			element.setAttribute('selected', '');
		}
	} else {
		element.removeAttribute('selected');
	}
}

/**
 * Applies the default checked property without influencing the current checked property.
 * @param {HTMLInputElement} element
 * @param {boolean} checked
 */
function set_default_checked(element, checked) {
	const existing_value = element.checked;
	element.defaultChecked = checked;
	element.checked = existing_value;
}

/**
 * Applies the default value property without influencing the current value property.
 * @param {HTMLInputElement | HTMLTextAreaElement} element
 * @param {string} value
 */
function set_default_value(element, value) {
	const existing_value = element.value;
	element.defaultValue = value;
	element.value = existing_value;
}

/**
 * @param {Element} element
 * @param {string} attribute
 * @param {string | null} value
 * @param {boolean} [skip_warning]
 */
function set_attribute(element, attribute, value, skip_warning) {
	// @ts-expect-error
	var attributes = (element.__attributes ??= {});

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		attributes[attribute] = element.getAttribute(attribute);

		if (
			attribute === 'src' ||
			attribute === 'srcset' ||
			(attribute === 'href' && element.nodeName === 'LINK')
		) {
			if (!skip_warning) {
				check_src_in_dev_hydration(element, attribute, value ?? '');
			}

			// If we reset these attributes, they would result in another network request, which we want to avoid.
			// We assume they are the same between client and server as checking if they are equal is expensive
			// (we can't just compare the strings as they can be different between client and server but result in the
			// same url, so we would need to create hidden anchor elements to compare them)
			return;
		}
	}

	if (attributes[attribute] === (attributes[attribute] = value)) return;

	if (attribute === 'style' && '__styles' in element) {
		// reset styles to force style: directive to update
		element.__styles = {};
	}

	if (attribute === 'loading') {
		// @ts-expect-error
		element[_constants_js__WEBPACK_IMPORTED_MODULE_6__.LOADING_ATTR_SYMBOL] = value;
	}

	if (value == null) {
		element.removeAttribute(attribute);
	} else if (typeof value !== 'string' && get_setters(element).includes(attribute)) {
		// @ts-ignore
		element[attribute] = value;
	} else {
		element.setAttribute(attribute, value);
	}
}

/**
 * @param {Element} dom
 * @param {string} attribute
 * @param {string} value
 */
function set_xlink_attribute(dom, attribute, value) {
	dom.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

/**
 * @param {HTMLElement} node
 * @param {string} prop
 * @param {any} value
 */
function set_custom_element_data(node, prop, value) {
	// We need to ensure that setting custom element props, which can
	// invoke lifecycle methods on other custom elements, does not also
	// associate those lifecycle methods with the current active reaction
	// or effect
	var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_9__.active_reaction;
	var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_9__.active_effect;
	// If we're hydrating but the custom element is from Svelte, and it already scaffolded,
	// then it might run block logic in hydration mode, which we have to prevent.
	let was_hydrating = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating;
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
	}

	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_9__.set_active_reaction)(null);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_9__.set_active_effect)(null);
	try {
		if (
			// Don't compute setters for custom elements while they aren't registered yet,
			// because during their upgrade/instantiation they might add more setters.
			// Instead, fall back to a simple "an object, then set as property" heuristic.
			setters_cache.has(node.nodeName) ||
			// customElements may not be available in browser extension contexts
			!customElements ||
			customElements.get(node.tagName.toLowerCase())
				? get_setters(node).includes(prop)
				: value && typeof value === 'object'
		) {
			// @ts-expect-error
			node[prop] = value;
		} else {
			// We did getters etc checks already, stringify before passing to set_attribute
			// to ensure it doesn't invoke the same logic again, and potentially populating
			// the setters cache too early.
			set_attribute(node, prop, value == null ? value : String(value));
		}
	} finally {
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_9__.set_active_reaction)(previous_reaction);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_9__.set_active_effect)(previous_effect);
		if (was_hydrating) {
			(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(true);
		}
	}
}

/**
 * Spreads attributes onto a DOM element, taking into account the currently set attributes
 * @param {Element & ElementCSSInlineStyle} element
 * @param {Record<string | symbol, any> | undefined} prev
 * @param {Record<string | symbol, any>} next New attributes - this function mutates this object
 * @param {string} [css_hash]
 * @param {boolean} [preserve_attribute_case]
 * @param {boolean} [is_custom_element]
 * @param {boolean} [skip_warning]
 * @returns {Record<string, any>}
 */
function set_attributes(
	element,
	prev,
	next,
	css_hash,
	preserve_attribute_case = false,
	is_custom_element = false,
	skip_warning = false
) {
	// If we're hydrating but the custom element is from Svelte, and it already scaffolded,
	// then it might run block logic in hydration mode, which we have to prevent.
	let is_hydrating_custom_element = _hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating && is_custom_element;
	if (is_hydrating_custom_element) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(false);
	}

	var current = prev || {};
	var is_option_element = element.tagName === 'OPTION';

	for (var key in prev) {
		if (!(key in next)) {
			next[key] = null;
		}
	}

	if (next.class) {
		next.class = (0,_shared_attributes_js__WEBPACK_IMPORTED_MODULE_10__.clsx)(next.class);
	} else if (css_hash || next[CLASS]) {
		next.class = null; /* force call to set_class() */
	}

	var setters = get_setters(element);

	// @ts-expect-error
	var attributes = /** @type {Record<string, unknown>} **/ (element.__attributes ??= {});

	// since key is captured we use const
	for (const key in next) {
		// let instead of var because referenced in a closure
		let value = next[key];

		// Up here because we want to do this for the initial value, too, even if it's undefined,
		// and this wouldn't be reached in case of undefined because of the equality check below
		if (is_option_element && key === 'value' && value == null) {
			// The <option> element is a special case because removing the value attribute means
			// the value is set to the text content of the option element, and setting the value
			// to null or undefined means the value is set to the string "null" or "undefined".
			// To align with how we handle this case in non-spread-scenarios, this logic is needed.
			// There's a super-edge-case bug here that is left in in favor of smaller code size:
			// Because of the "set missing props to null" logic above, we can't differentiate
			// between a missing value and an explicitly set value of null or undefined. That means
			// that once set, the value attribute of an <option> element can't be removed. This is
			// a very rare edge case, and removing the attribute altogether isn't possible either
			// for the <option value={undefined}> case, so we're not losing any functionality here.
			// @ts-ignore
			element.value = element.__value = '';
			current[key] = value;
			continue;
		}

		if (key === 'class') {
			var is_html = element.namespaceURI === 'http://www.w3.org/1999/xhtml';
			(0,_class_js__WEBPACK_IMPORTED_MODULE_11__.set_class)(element, is_html, value, css_hash, prev?.[CLASS], next[CLASS]);
			current[key] = value;
			current[CLASS] = next[CLASS];
			continue;
		}

		var prev_value = current[key];
		if (value === prev_value) continue;

		current[key] = value;

		var prefix = key[0] + key[1]; // this is faster than key.slice(0, 2)
		if (prefix === '$$') continue;

		if (prefix === 'on') {
			/** @type {{ capture?: true }} */
			const opts = {};
			const event_handle_key = '$$' + key;
			let event_name = key.slice(2);
			var delegated = (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.is_delegated)(event_name);

			if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.is_capture_event)(event_name)) {
				event_name = event_name.slice(0, -7);
				opts.capture = true;
			}

			if (!delegated && prev_value) {
				// Listening to same event but different handler -> our handle function below takes care of this
				// If we were to remove and add listeners in this case, it could happen that the event is "swallowed"
				// (the browser seems to not know yet that a new one exists now) and doesn't reach the handler
				// https://github.com/sveltejs/svelte/issues/11903
				if (value != null) continue;

				element.removeEventListener(event_name, current[event_handle_key], opts);
				current[event_handle_key] = null;
			}

			if (value != null) {
				if (!delegated) {
					/**
					 * @this {any}
					 * @param {Event} evt
					 */
					function handle(evt) {
						current[key].call(this, evt);
					}

					current[event_handle_key] = (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.create_event)(event_name, element, handle, opts);
				} else {
					// @ts-ignore
					element[`__${event_name}`] = value;
					(0,_events_js__WEBPACK_IMPORTED_MODULE_3__.delegate)([event_name]);
				}
			} else if (delegated) {
				// @ts-ignore
				element[`__${event_name}`] = undefined;
			}
		} else if (key === 'style' && value != null) {
			element.style.cssText = value + '';
		} else if (key === 'autofocus') {
			(0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.autofocus)(/** @type {HTMLElement} */ (element), Boolean(value));
		} else if (!is_custom_element && (key === '__value' || (key === 'value' && value != null))) {
			// @ts-ignore We're not running this for custom elements because __value is actually
			// how Lit stores the current value on the element, and messing with that would break things.
			element.value = element.__value = value;
		} else if (key === 'selected' && is_option_element) {
			set_selected(/** @type {HTMLOptionElement} */ (element), value);
		} else {
			var name = key;
			if (!preserve_attribute_case) {
				name = (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.normalize_attribute)(name);
			}

			var is_default = name === 'defaultValue' || name === 'defaultChecked';

			if (value == null && !is_custom_element && !is_default) {
				attributes[key] = null;

				if (name === 'value' || name === 'checked') {
					// removing value/checked also removes defaultValue/defaultChecked — preserve
					let input = /** @type {HTMLInputElement} */ (element);
					const use_default = prev === undefined;
					if (name === 'value') {
						let previous = input.defaultValue;
						input.removeAttribute(name);
						input.defaultValue = previous;
						// @ts-ignore
						input.value = input.__value = use_default ? previous : null;
					} else {
						let previous = input.defaultChecked;
						input.removeAttribute(name);
						input.defaultChecked = previous;
						input.checked = use_default ? previous : false;
					}
				} else {
					element.removeAttribute(key);
				}
			} else if (
				is_default ||
				(setters.includes(name) && (is_custom_element || typeof value !== 'string'))
			) {
				// @ts-ignore
				element[name] = value;
			} else if (typeof value !== 'function') {
				set_attribute(element, name, value);
			}
		}
		if (key === 'style' && '__styles' in element) {
			// reset styles to force style: directive to update
			element.__styles = {};
		}
	}

	if (is_hydrating_custom_element) {
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_1__.set_hydrating)(true);
	}

	return current;
}

/** @type {Map<string, string[]>} */
var setters_cache = new Map();

/** @param {Element} element */
function get_setters(element) {
	var setters = setters_cache.get(element.nodeName);
	if (setters) return setters;
	setters_cache.set(element.nodeName, (setters = []));

	var descriptors;
	var proto = element; // In the case of custom elements there might be setters on the instance
	var element_proto = Element.prototype;

	// Stop at Element, from there on there's only unnecessary setters we're not interested in
	// Do not use contructor.name here as that's unreliable in some browser environments
	while (element_proto !== proto) {
		descriptors = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_descriptors)(proto);

		for (var key in descriptors) {
			if (descriptors[key].set) {
				setters.push(key);
			}
		}

		proto = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_prototype_of)(proto);
	}

	return setters;
}

/**
 * @param {any} element
 * @param {string} attribute
 * @param {string} value
 */
function check_src_in_dev_hydration(element, attribute, value) {
	if (!esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) return;
	if (attribute === 'srcset' && srcset_url_equal(element, value)) return;
	if (src_url_equal(element.getAttribute(attribute) ?? '', value)) return;

	_warnings_js__WEBPACK_IMPORTED_MODULE_5__.hydration_attribute_changed(
		attribute,
		element.outerHTML.replace(element.innerHTML, element.innerHTML && '...'),
		String(value)
	);
}

/**
 * @param {string} element_src
 * @param {string} url
 * @returns {boolean}
 */
function src_url_equal(element_src, url) {
	if (element_src === url) return true;
	return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}

/** @param {string} srcset */
function split_srcset(srcset) {
	return srcset.split(',').map((src) => src.trim().split(' ').filter(Boolean));
}

/**
 * @param {HTMLSourceElement | HTMLImageElement} element
 * @param {string} srcset
 * @returns {boolean}
 */
function srcset_url_equal(element, srcset) {
	var element_urls = split_srcset(element.srcset);
	var urls = split_srcset(srcset);

	return (
		urls.length === element_urls.length &&
		urls.every(
			([url, width], i) =>
				width === element_urls[i][1] &&
				// We need to test both ways because Vite will create an a full URL with
				// `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
				// relative URLs inside srcset are not automatically resolved to absolute URLs by
				// browsers (in contrast to img.src). This means both SSR and DOM code could
				// contain relative or absolute URLs.
				(src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
		)
	);
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/document.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/document.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_active_element: () => (/* binding */ bind_active_element)
/* harmony export */ });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");


/**
 * @param {(activeElement: Element | null) => void} update
 * @returns {void}
 */
function bind_active_element(update) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_0__.listen)(document, ['focusin', 'focusout'], (event) => {
		if (event && event.type === 'focusout' && /** @type {FocusEvent} */ (event).relatedTarget) {
			// The tests still pass if we remove this, because of JSDOM limitations, but it is necessary
			// to avoid temporarily resetting to `document.body`
			return;
		}

		update(document.activeElement);
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/input.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_checked: () => (/* binding */ bind_checked),
/* harmony export */   bind_files: () => (/* binding */ bind_files),
/* harmony export */   bind_group: () => (/* binding */ bind_group),
/* harmony export */   bind_value: () => (/* binding */ bind_value)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../proxy.js */ "./node_modules/svelte/src/internal/client/proxy.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context.js */ "./node_modules/svelte/src/internal/client/context.js");










/**
 * @param {HTMLInputElement} input
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_value(input, get, set = get) {
	var runes = (0,_context_js__WEBPACK_IMPORTED_MODULE_8__.is_runes)();

	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen_to_event_and_reset_event)(input, 'input', (is_reset) => {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && input.type === 'checkbox') {
			// TODO should this happen in prod too?
			_errors_js__WEBPACK_IMPORTED_MODULE_3__.bind_invalid_checkbox_value();
		}

		/** @type {any} */
		var value = is_reset ? input.defaultValue : input.value;
		value = is_numberlike_input(input) ? to_number(value) : value;
		set(value);

		// In runes mode, respect any validation in accessors (doesn't apply in legacy mode,
		// because we use mutable state which ensures the render effect always runs)
		if (runes && value !== (value = get())) {
			var start = input.selectionStart;
			var end = input.selectionEnd;

			// the value is coerced on assignment
			input.value = value ?? '';

			// Restore selection
			if (end !== null) {
				input.selectionStart = start;
				input.selectionEnd = Math.min(end, input.value.length);
			}
		}
	});

	if (
		// If we are hydrating and the value has since changed,
		// then use the updated value from the input instead.
		(_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating && input.defaultValue !== input.value) ||
		// If defaultValue is set, then value == defaultValue
		// TODO Svelte 6: remove input.value check and set to empty string?
		((0,_runtime_js__WEBPACK_IMPORTED_MODULE_7__.untrack)(get) == null && input.value)
	) {
		set(is_numberlike_input(input) ? to_number(input.value) : input.value);
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && input.type === 'checkbox') {
			// TODO should this happen in prod too?
			_errors_js__WEBPACK_IMPORTED_MODULE_3__.bind_invalid_checkbox_value();
		}

		var value = get();

		if (is_numberlike_input(input) && value === to_number(input.value)) {
			// handles 0 vs 00 case (see https://github.com/sveltejs/svelte/issues/9959)
			return;
		}

		if (input.type === 'date' && !value && !input.value) {
			// Handles the case where a temporarily invalid date is set (while typing, for example with a leading 0 for the day)
			// and prevents this state from clearing the other parts of the date input (see https://github.com/sveltejs/svelte/issues/7897)
			return;
		}

		// don't set the value of the input if it's the same to allow
		// minlength to work properly
		if (value !== input.value) {
			// @ts-expect-error the value is coerced on assignment
			input.value = value ?? '';
		}
	});
}

/** @type {Set<HTMLInputElement[]>} */
const pending = new Set();

/**
 * @param {HTMLInputElement[]} inputs
 * @param {null | [number]} group_index
 * @param {HTMLInputElement} input
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_group(inputs, group_index, input, get, set = get) {
	var is_checkbox = input.getAttribute('type') === 'checkbox';
	var binding_group = inputs;

	// needs to be let or related code isn't treeshaken out if it's always false
	let hydration_mismatch = false;

	if (group_index !== null) {
		for (var index of group_index) {
			// @ts-expect-error
			binding_group = binding_group[index] ??= [];
		}
	}

	binding_group.push(input);

	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen_to_event_and_reset_event)(
		input,
		'change',
		() => {
			// @ts-ignore
			var value = input.__value;

			if (is_checkbox) {
				value = get_binding_group_value(binding_group, value, input.checked);
			}

			set(value);
		},
		// TODO better default value handling
		() => set(is_checkbox ? [] : null)
	);

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		var value = get();

		// If we are hydrating and the value has since changed, then use the update value
		// from the input instead.
		if (_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating && input.defaultChecked !== input.checked) {
			hydration_mismatch = true;
			return;
		}

		if (is_checkbox) {
			value = value || [];
			// @ts-ignore
			input.checked = value.includes(input.__value);
		} else {
			// @ts-ignore
			input.checked = (0,_proxy_js__WEBPACK_IMPORTED_MODULE_4__.is)(input.__value, value);
		}
	});

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.teardown)(() => {
		var index = binding_group.indexOf(input);

		if (index !== -1) {
			binding_group.splice(index, 1);
		}
	});

	if (!pending.has(binding_group)) {
		pending.add(binding_group);

		(0,_task_js__WEBPACK_IMPORTED_MODULE_5__.queue_micro_task)(() => {
			// necessary to maintain binding group order in all insertion scenarios
			binding_group.sort((a, b) => (a.compareDocumentPosition(b) === 4 ? -1 : 1));
			pending.delete(binding_group);
		});
	}

	(0,_task_js__WEBPACK_IMPORTED_MODULE_5__.queue_micro_task)(() => {
		if (hydration_mismatch) {
			var value;

			if (is_checkbox) {
				value = get_binding_group_value(binding_group, value, input.checked);
			} else {
				var hydration_input = binding_group.find((input) => input.checked);
				// @ts-ignore
				value = hydration_input?.__value;
			}

			set(value);
		}
	});
}

/**
 * @param {HTMLInputElement} input
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_checked(input, get, set = get) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen_to_event_and_reset_event)(input, 'change', (is_reset) => {
		var value = is_reset ? input.defaultChecked : input.checked;
		set(value);
	});

	if (
		// If we are hydrating and the value has since changed,
		// then use the update value from the input instead.
		(_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating && input.defaultChecked !== input.checked) ||
		// If defaultChecked is set, then checked == defaultChecked
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_7__.untrack)(get) == null
	) {
		set(input.checked);
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		var value = get();
		input.checked = Boolean(value);
	});
}

/**
 * @template V
 * @param {Array<HTMLInputElement>} group
 * @param {V} __value
 * @param {boolean} checked
 * @returns {V[]}
 */
function get_binding_group_value(group, __value, checked) {
	var value = new Set();

	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) {
			// @ts-ignore
			value.add(group[i].__value);
		}
	}

	if (!checked) {
		value.delete(__value);
	}

	return Array.from(value);
}

/**
 * @param {HTMLInputElement} input
 */
function is_numberlike_input(input) {
	var type = input.type;
	return type === 'number' || type === 'range';
}

/**
 * @param {string} value
 */
function to_number(value) {
	return value === '' ? null : +value;
}

/**
 * @param {HTMLInputElement} input
 * @param {() => FileList | null} get
 * @param {(value: FileList | null) => void} set
 */
function bind_files(input, get, set = get) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen_to_event_and_reset_event)(input, 'change', () => {
		set(input.files);
	});

	if (
		// If we are hydrating and the value has since changed,
		// then use the updated value from the input instead.
		_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating &&
		input.files
	) {
		set(input.files);
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		input.files = get();
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/media.js":
/*!********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/media.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_buffered: () => (/* binding */ bind_buffered),
/* harmony export */   bind_current_time: () => (/* binding */ bind_current_time),
/* harmony export */   bind_ended: () => (/* binding */ bind_ended),
/* harmony export */   bind_muted: () => (/* binding */ bind_muted),
/* harmony export */   bind_paused: () => (/* binding */ bind_paused),
/* harmony export */   bind_playback_rate: () => (/* binding */ bind_playback_rate),
/* harmony export */   bind_played: () => (/* binding */ bind_played),
/* harmony export */   bind_ready_state: () => (/* binding */ bind_ready_state),
/* harmony export */   bind_seekable: () => (/* binding */ bind_seekable),
/* harmony export */   bind_seeking: () => (/* binding */ bind_seeking),
/* harmony export */   bind_volume: () => (/* binding */ bind_volume)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");




/** @param {TimeRanges} ranges */
function time_ranges_to_array(ranges) {
	var array = [];

	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}

	return array;
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {() => number | undefined} get
 * @param {(value: number) => void} set
 * @returns {void}
 */
function bind_current_time(media, get, set = get) {
	/** @type {number} */
	var raf_id;
	/** @type {number} */
	var value;

	// Ideally, listening to timeupdate would be enough, but it fires too infrequently for the currentTime
	// binding, which is why we use a raf loop, too. We additionally still listen to timeupdate because
	// the user could be scrubbing through the video using the native controls when the media is paused.
	var callback = () => {
		cancelAnimationFrame(raf_id);

		if (!media.paused) {
			raf_id = requestAnimationFrame(callback);
		}

		var next_value = media.currentTime;
		if (value !== next_value) {
			set((value = next_value));
		}
	};

	raf_id = requestAnimationFrame(callback);
	media.addEventListener('timeupdate', callback);

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		var next_value = Number(get());

		if (value !== next_value && !isNaN(/** @type {any} */ (next_value))) {
			media.currentTime = value = next_value;
		}
	});

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.teardown)(() => {
		cancelAnimationFrame(raf_id);
		media.removeEventListener('timeupdate', callback);
	});
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(array: Array<{ start: number; end: number }>) => void} set
 */
function bind_buffered(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['loadedmetadata', 'progress'], () => set(time_ranges_to_array(media.buffered)));
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(array: Array<{ start: number; end: number }>) => void} set
 */
function bind_seekable(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['loadedmetadata'], () => set(time_ranges_to_array(media.seekable)));
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(array: Array<{ start: number; end: number }>) => void} set
 */
function bind_played(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['timeupdate'], () => set(time_ranges_to_array(media.played)));
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(seeking: boolean) => void} set
 */
function bind_seeking(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['seeking', 'seeked'], () => set(media.seeking));
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(seeking: boolean) => void} set
 */
function bind_ended(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['timeupdate', 'ended'], () => set(media.ended));
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {(ready_state: number) => void} set
 */
function bind_ready_state(media, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(
		media,
		['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'emptied'],
		() => set(media.readyState)
	);
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {() => number | undefined} get
 * @param {(playback_rate: number) => void} set
 */
function bind_playback_rate(media, get, set = get) {
	// Needs to happen after element is inserted into the dom (which is guaranteed by using effect),
	// else playback will be set back to 1 by the browser
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
		var value = Number(get());

		if (value !== media.playbackRate && !isNaN(value)) {
			media.playbackRate = value;
		}
	});

	// Start listening to ratechange events after the element is inserted into the dom,
	// else playback will be set to 1 by the browser
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
		(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['ratechange'], () => {
			set(media.playbackRate);
		});
	});
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {() => boolean | undefined} get
 * @param {(paused: boolean) => void} set
 */
function bind_paused(media, get, set = get) {
	var paused = get();

	var update = () => {
		if (paused !== media.paused) {
			set((paused = media.paused));
		}
	};

	// If someone switches the src while media is playing, the player will pause.
	// Listen to the canplay event to get notified of this situation.
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['play', 'pause', 'canplay'], update, paused == null);

	// Needs to be an effect to ensure media element is mounted: else, if paused is `false` (i.e. should play right away)
	// a "The play() request was interrupted by a new load request" error would be thrown because the resource isn't loaded yet.
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
		if ((paused = !!get()) !== media.paused) {
			if (paused) {
				media.pause();
			} else {
				media.play().catch(() => {
					set((paused = true));
				});
			}
		}
	});
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {() => number | undefined} get
 * @param {(volume: number) => void} set
 */
function bind_volume(media, get, set = get) {
	var callback = () => {
		set(media.volume);
	};

	if (get() == null) {
		callback();
	}

	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['volumechange'], callback, false);

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		var value = Number(get());

		if (value !== media.volume && !isNaN(value)) {
			media.volume = value;
		}
	});
}

/**
 * @param {HTMLVideoElement | HTMLAudioElement} media
 * @param {() => boolean | undefined} get
 * @param {(muted: boolean) => void} set
 */
function bind_muted(media, get, set = get) {
	var callback = () => {
		set(media.muted);
	};

	if (get() == null) {
		callback();
	}

	(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__.listen)(media, ['volumechange'], callback, false);

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
		var value = !!get();

		if (media.muted !== value) media.muted = value;
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_online: () => (/* binding */ bind_online)
/* harmony export */ });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");


/**
 * @param {(online: boolean) => void} update
 * @returns {void}
 */
function bind_online(update) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_0__.listen)(window, ['online', 'offline'], () => {
		update(navigator.onLine);
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/props.js":
/*!********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/props.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_prop: () => (/* binding */ bind_prop)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");



/**
 * Makes an `export`ed (non-prop) variable available on the `$$props` object
 * so that consumers can do `bind:x` on the component.
 * @template V
 * @param {Record<string, unknown>} props
 * @param {string} prop
 * @param {V} value
 * @returns {void}
 */
function bind_prop(props, prop, value) {
	var desc = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.get_descriptor)(props, prop);

	if (desc && desc.set) {
		props[prop] = value;
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
			props[prop] = null;
		});
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/select.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/select.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_select_value: () => (/* binding */ bind_select_value),
/* harmony export */   init_select: () => (/* binding */ init_select),
/* harmony export */   select_option: () => (/* binding */ select_option)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../proxy.js */ "./node_modules/svelte/src/internal/client/proxy.js");





/**
 * Selects the correct option(s) (depending on whether this is a multiple select)
 * @template V
 * @param {HTMLSelectElement} select
 * @param {V} value
 * @param {boolean} [mounting]
 */
function select_option(select, value, mounting) {
	if (select.multiple) {
		return select_options(select, value);
	}

	for (var option of select.options) {
		var option_value = get_option_value(option);
		if ((0,_proxy_js__WEBPACK_IMPORTED_MODULE_3__.is)(option_value, value)) {
			option.selected = true;
			return;
		}
	}

	if (!mounting || value !== undefined) {
		select.selectedIndex = -1; // no option should be selected
	}
}

/**
 * Selects the correct option(s) if `value` is given,
 * and then sets up a mutation observer to sync the
 * current selection to the dom when it changes. Such
 * changes could for example occur when options are
 * inside an `#each` block.
 * @template V
 * @param {HTMLSelectElement} select
 * @param {() => V} [get_value]
 */
function init_select(select, get_value) {
	let mounting = true;
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
		if (get_value) {
			select_option(select, (0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.untrack)(get_value), mounting);
		}
		mounting = false;

		var observer = new MutationObserver(() => {
			// @ts-ignore
			var value = select.__value;
			select_option(select, value);
			// Deliberately don't update the potential binding value,
			// the model should be preserved unless explicitly changed
		});

		observer.observe(select, {
			// Listen to option element changes
			childList: true,
			subtree: true, // because of <optgroup>
			// Listen to option element value attribute changes
			// (doesn't get notified of select value changes,
			// because that property is not reflected as an attribute)
			attributes: true,
			attributeFilter: ['value']
		});

		return () => {
			observer.disconnect();
		};
	});
}

/**
 * @param {HTMLSelectElement} select
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_select_value(select, get, set = get) {
	var mounting = true;

	(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__.listen_to_event_and_reset_event)(select, 'change', (is_reset) => {
		var query = is_reset ? '[selected]' : ':checked';
		/** @type {unknown} */
		var value;

		if (select.multiple) {
			value = [].map.call(select.querySelectorAll(query), get_option_value);
		} else {
			/** @type {HTMLOptionElement | null} */
			var selected_option =
				select.querySelector(query) ??
				// will fall back to first non-disabled option if no option is selected
				select.querySelector('option:not([disabled])');
			value = selected_option && get_option_value(selected_option);
		}

		set(value);
	});

	// Needs to be an effect, not a render_effect, so that in case of each loops the logic runs after the each block has updated
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
		var value = get();
		select_option(select, value, mounting);

		// Mounting and value undefined -> take selection from dom
		if (mounting && value === undefined) {
			/** @type {HTMLOptionElement | null} */
			var selected_option = select.querySelector(':checked');
			if (selected_option !== null) {
				value = get_option_value(selected_option);
				set(value);
			}
		}

		// @ts-ignore
		select.__value = value;
		mounting = false;
	});

	// don't pass get_value, we already initialize it in the effect above
	init_select(select);
}

/**
 * @template V
 * @param {HTMLSelectElement} select
 * @param {V} value
 */
function select_options(select, value) {
	for (var option of select.options) {
		// @ts-ignore
		option.selected = ~value.indexOf(get_option_value(option));
	}
}

/** @param {HTMLOptionElement} option */
function get_option_value(option) {
	// __value only exists if the <option> has a value attribute
	if ('__value' in option) {
		return option.__value;
	} else {
		return option.value;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listen: () => (/* binding */ listen),
/* harmony export */   listen_to_event_and_reset_event: () => (/* binding */ listen_to_event_and_reset_event),
/* harmony export */   without_reactive_context: () => (/* binding */ without_reactive_context)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc.js */ "./node_modules/svelte/src/internal/client/dom/elements/misc.js");




/**
 * Fires the handler once immediately (unless corresponding arg is set to `false`),
 * then listens to the given events until the render effect context is destroyed
 * @param {EventTarget} target
 * @param {Array<string>} events
 * @param {(event?: Event) => void} handler
 * @param {any} call_handler_immediately
 */
function listen(target, events, handler, call_handler_immediately = true) {
	if (call_handler_immediately) {
		handler();
	}

	for (var name of events) {
		target.addEventListener(name, handler);
	}

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
		for (var name of events) {
			target.removeEventListener(name, handler);
		}
	});
}

/**
 * @template T
 * @param {() => T} fn
 */
function without_reactive_context(fn) {
	var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_reaction;
	var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect;
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_active_reaction)(null);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_active_effect)(null);
	try {
		return fn();
	} finally {
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_active_reaction)(previous_reaction);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_active_effect)(previous_effect);
	}
}

/**
 * Listen to the given event, and then instantiate a global form reset listener if not already done,
 * to notify all bindings when the form is reset
 * @param {HTMLElement} element
 * @param {string} event
 * @param {(is_reset?: true) => void} handler
 * @param {(is_reset?: true) => void} [on_reset]
 */
function listen_to_event_and_reset_event(element, event, handler, on_reset = handler) {
	element.addEventListener(event, () => without_reactive_context(handler));
	// @ts-expect-error
	const prev = element.__on_r;
	if (prev) {
		// special case for checkbox that can have multiple binds (group & checked)
		// @ts-expect-error
		element.__on_r = () => {
			prev();
			on_reset(true);
		};
	} else {
		// @ts-expect-error
		element.__on_r = () => on_reset(true);
	}

	(0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.add_form_reset_listener)();
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/size.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/size.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_element_size: () => (/* binding */ bind_element_size),
/* harmony export */   bind_resize_observer: () => (/* binding */ bind_resize_observer)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");



/**
 * Resize observer singleton.
 * One listener per element only!
 * https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ
 */
class ResizeObserverSingleton {
	/** */
	#listeners = new WeakMap();

	/** @type {ResizeObserver | undefined} */
	#observer;

	/** @type {ResizeObserverOptions} */
	#options;

	/** @static */
	static entries = new WeakMap();

	/** @param {ResizeObserverOptions} options */
	constructor(options) {
		this.#options = options;
	}

	/**
	 * @param {Element} element
	 * @param {(entry: ResizeObserverEntry) => any} listener
	 */
	observe(element, listener) {
		var listeners = this.#listeners.get(element) || new Set();
		listeners.add(listener);

		this.#listeners.set(element, listeners);
		this.#getObserver().observe(element, this.#options);

		return () => {
			var listeners = this.#listeners.get(element);
			listeners.delete(listener);

			if (listeners.size === 0) {
				this.#listeners.delete(element);
				/** @type {ResizeObserver} */ (this.#observer).unobserve(element);
			}
		};
	}

	#getObserver() {
		return (
			this.#observer ??
			(this.#observer = new ResizeObserver(
				/** @param {any} entries */ (entries) => {
					for (var entry of entries) {
						ResizeObserverSingleton.entries.set(entry.target, entry);
						for (var listener of this.#listeners.get(entry.target) || []) {
							listener(entry);
						}
					}
				}
			))
		);
	}
}

var resize_observer_content_box = /* @__PURE__ */ new ResizeObserverSingleton({
	box: 'content-box'
});

var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
	box: 'border-box'
});

var resize_observer_device_pixel_content_box = /* @__PURE__ */ new ResizeObserverSingleton({
	box: 'device-pixel-content-box'
});

/**
 * @param {Element} element
 * @param {'contentRect' | 'contentBoxSize' | 'borderBoxSize' | 'devicePixelContentBoxSize'} type
 * @param {(entry: keyof ResizeObserverEntry) => void} set
 */
function bind_resize_observer(element, type, set) {
	var observer =
		type === 'contentRect' || type === 'contentBoxSize'
			? resize_observer_content_box
			: type === 'borderBoxSize'
				? resize_observer_border_box
				: resize_observer_device_pixel_content_box;

	var unsub = observer.observe(element, /** @param {any} entry */ (entry) => set(entry[type]));
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(unsub);
}

/**
 * @param {HTMLElement} element
 * @param {'clientWidth' | 'clientHeight' | 'offsetWidth' | 'offsetHeight'} type
 * @param {(size: number) => void} set
 */
function bind_element_size(element, type, set) {
	var unsub = resize_observer_border_box.observe(element, () => set(element[type]));

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
		// The update could contain reads which should be ignored
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => set(element[type]));
		return unsub;
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/this.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/this.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_this: () => (/* binding */ bind_this)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");





/**
 * @param {any} bound_value
 * @param {Element} element_or_component
 * @returns {boolean}
 */
function is_bound_this(bound_value, element_or_component) {
	return (
		bound_value === element_or_component || bound_value?.[_constants_js__WEBPACK_IMPORTED_MODULE_0__.STATE_SYMBOL] === element_or_component
	);
}

/**
 * @param {any} element_or_component
 * @param {(value: unknown, ...parts: unknown[]) => void} update
 * @param {(...parts: unknown[]) => unknown} get_value
 * @param {() => unknown[]} [get_parts] Set if the this binding is used inside an each block,
 * 										returns all the parts of the each block context that are used in the expression
 * @returns {void}
 */
function bind_this(element_or_component = {}, update, get_value, get_parts) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
		/** @type {unknown[]} */
		var old_parts;

		/** @type {unknown[]} */
		var parts;

		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
			old_parts = parts;
			// We only track changes to the parts, not the value itself to avoid unnecessary reruns.
			parts = get_parts?.() || [];

			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.untrack)(() => {
				if (element_or_component !== get_value(...parts)) {
					update(element_or_component, ...parts);
					// If this is an effect rerun (cause: each block context changes), then nullfiy the binding at
					// the previous position if it isn't already taken over by a different effect.
					if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
						update(null, ...old_parts);
					}
				}
			});
		});

		return () => {
			// We cannot use effects in the teardown phase, we we use a microtask instead.
			(0,_task_js__WEBPACK_IMPORTED_MODULE_3__.queue_micro_task)(() => {
				if (parts && is_bound_this(get_value(...parts), element_or_component)) {
					update(null, ...parts);
				}
			});
		};
	});

	return element_or_component;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js":
/*!************************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_content_editable: () => (/* binding */ bind_content_editable),
/* harmony export */   bind_focused: () => (/* binding */ bind_focused),
/* harmony export */   bind_property: () => (/* binding */ bind_property)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");



/**
 * @param {'innerHTML' | 'textContent' | 'innerText'} property
 * @param {HTMLElement} element
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_content_editable(property, element, get, set = get) {
	element.addEventListener('input', () => {
		// @ts-ignore
		set(element[property]);
	});

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.render_effect)(() => {
		var value = get();

		if (element[property] !== value) {
			if (value == null) {
				// @ts-ignore
				var non_null_value = element[property];
				set(non_null_value);
			} else {
				// @ts-ignore
				element[property] = value + '';
			}
		}
	});
}

/**
 * @param {string} property
 * @param {string} event_name
 * @param {Element} element
 * @param {(value: unknown) => void} set
 * @param {() => unknown} [get]
 * @returns {void}
 */
function bind_property(property, event_name, element, set, get) {
	var handler = () => {
		// @ts-ignore
		set(element[property]);
	};

	element.addEventListener(event_name, handler);

	if (get) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.render_effect)(() => {
			// @ts-ignore
			element[property] = get();
		});
	} else {
		handler();
	}

	// @ts-ignore
	if (element === document.body || element === window || element === document) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
			element.removeEventListener(event_name, handler);
		});
	}
}

/**
 * @param {HTMLElement} element
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_focused(element, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__.listen)(element, ['focus', 'blur'], () => {
		set(element === document.activeElement);
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/bindings/window.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/bindings/window.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_window_scroll: () => (/* binding */ bind_window_scroll),
/* harmony export */   bind_window_size: () => (/* binding */ bind_window_size)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");



/**
 * @param {'x' | 'y'} type
 * @param {() => number} get
 * @param {(value: number) => void} set
 * @returns {void}
 */
function bind_window_scroll(type, get, set = get) {
	var is_scrolling_x = type === 'x';

	var target_handler = () =>
		(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__.without_reactive_context)(() => {
			scrolling = true;
			clearTimeout(timeout);
			timeout = setTimeout(clear, 100); // TODO use scrollend event if supported (or when supported everywhere?)

			set(window[is_scrolling_x ? 'scrollX' : 'scrollY']);
		});

	addEventListener('scroll', target_handler, {
		passive: true
	});

	var scrolling = false;

	/** @type {ReturnType<typeof setTimeout>} */
	var timeout;
	var clear = () => {
		scrolling = false;
	};
	var first = true;

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.render_effect)(() => {
		var latest_value = get();
		// Don't scroll to the initial value for accessibility reasons
		if (first) {
			first = false;
		} else if (!scrolling && latest_value != null) {
			scrolling = true;
			clearTimeout(timeout);
			if (is_scrolling_x) {
				scrollTo(latest_value, window.scrollY);
			} else {
				scrollTo(window.scrollX, latest_value);
			}
			timeout = setTimeout(clear, 100);
		}
	});

	// Browsers don't fire the scroll event for the initial scroll position when scroll style isn't set to smooth
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.effect)(target_handler);

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
		removeEventListener('scroll', target_handler);
	});
}

/**
 * @param {'innerWidth' | 'innerHeight' | 'outerWidth' | 'outerHeight'} type
 * @param {(size: number) => void} set
 */
function bind_window_size(type, set) {
	(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__.listen)(window, ['resize'], () => (0,_shared_js__WEBPACK_IMPORTED_MODULE_1__.without_reactive_context)(() => set(window[type])));
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/class.js":
/*!***********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/class.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set_class: () => (/* binding */ set_class)
/* harmony export */ });
/* harmony import */ var _shared_attributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/attributes.js */ "./node_modules/svelte/src/internal/shared/attributes.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");



/**
 * @param {Element} dom
 * @param {boolean | number} is_html
 * @param {string | null} value
 * @param {string} [hash]
 * @param {Record<string, any>} [prev_classes]
 * @param {Record<string, any>} [next_classes]
 * @returns {Record<string, boolean> | undefined}
 */
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
	// @ts-expect-error need to add __className to patched prototype
	var prev = dom.__className;

	if (_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating || prev !== value) {
		var next_class_name = (0,_shared_attributes_js__WEBPACK_IMPORTED_MODULE_0__.to_class)(value, hash, next_classes);

		if (!_hydration_js__WEBPACK_IMPORTED_MODULE_1__.hydrating || next_class_name !== dom.getAttribute('class')) {
			// Removing the attribute when the value is only an empty string causes
			// performance issues vs simply making the className an empty string. So
			// we should only remove the class if the the value is nullish
			// and there no hash/directives :
			if (next_class_name == null) {
				dom.removeAttribute('class');
			} else if (is_html) {
				dom.className = next_class_name;
			} else {
				dom.setAttribute('class', next_class_name);
			}
		}

		// @ts-expect-error need to add __className to patched prototype
		dom.__className = value;
	} else if (next_classes) {
		for (var key in next_classes) {
			var is_present = !!next_classes[key];

			if (prev_classes == null || is_present !== !!prev_classes[key]) {
				dom.classList.toggle(key, is_present);
			}
		}
	}

	return next_classes;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/custom-element.js":
/*!********************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/custom-element.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create_custom_element: () => (/* binding */ create_custom_element)
/* harmony export */ });
/* harmony import */ var _legacy_legacy_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../legacy/legacy-client.js */ "./node_modules/svelte/src/legacy/legacy-client.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");





/**
 * @typedef {Object} CustomElementPropDefinition
 * @property {string} [attribute]
 * @property {boolean} [reflect]
 * @property {'String'|'Boolean'|'Number'|'Array'|'Object'} [type]
 */

/** @type {any} */
let SvelteElement;

if (typeof HTMLElement === 'function') {
	SvelteElement = class extends HTMLElement {
		/** The Svelte component constructor */
		$$ctor;
		/** Slots */
		$$s;
		/** @type {any} The Svelte component instance */
		$$c;
		/** Whether or not the custom element is connected */
		$$cn = false;
		/** @type {Record<string, any>} Component props data */
		$$d = {};
		/** `true` if currently in the process of reflecting component props back to attributes */
		$$r = false;
		/** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
		$$p_d = {};
		/** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
		$$l = {};
		/** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
		$$l_u = new Map();
		/** @type {any} The managed render effect for reflecting attributes */
		$$me;

		/**
		 * @param {*} $$componentCtor
		 * @param {*} $$slots
		 * @param {*} use_shadow_dom
		 */
		constructor($$componentCtor, $$slots, use_shadow_dom) {
			super();
			this.$$ctor = $$componentCtor;
			this.$$s = $$slots;
			if (use_shadow_dom) {
				this.attachShadow({ mode: 'open' });
			}
		}

		/**
		 * @param {string} type
		 * @param {EventListenerOrEventListenerObject} listener
		 * @param {boolean | AddEventListenerOptions} [options]
		 */
		addEventListener(type, listener, options) {
			// We can't determine upfront if the event is a custom event or not, so we have to
			// listen to both. If someone uses a custom event with the same name as a regular
			// browser event, this fires twice - we can't avoid that.
			this.$$l[type] = this.$$l[type] || [];
			this.$$l[type].push(listener);
			if (this.$$c) {
				const unsub = this.$$c.$on(type, listener);
				this.$$l_u.set(listener, unsub);
			}
			super.addEventListener(type, listener, options);
		}

		/**
		 * @param {string} type
		 * @param {EventListenerOrEventListenerObject} listener
		 * @param {boolean | AddEventListenerOptions} [options]
		 */
		removeEventListener(type, listener, options) {
			super.removeEventListener(type, listener, options);
			if (this.$$c) {
				const unsub = this.$$l_u.get(listener);
				if (unsub) {
					unsub();
					this.$$l_u.delete(listener);
				}
			}
		}

		async connectedCallback() {
			this.$$cn = true;
			if (!this.$$c) {
				// We wait one tick to let possible child slot elements be created/mounted
				await Promise.resolve();
				if (!this.$$cn || this.$$c) {
					return;
				}
				/** @param {string} name */
				function create_slot(name) {
					/**
					 * @param {Element} anchor
					 */
					return (anchor) => {
						const slot = document.createElement('slot');
						if (name !== 'default') slot.name = name;

						(0,_template_js__WEBPACK_IMPORTED_MODULE_2__.append)(anchor, slot);
					};
				}
				/** @type {Record<string, any>} */
				const $$slots = {};
				const existing_slots = get_custom_elements_slots(this);
				for (const name of this.$$s) {
					if (name in existing_slots) {
						if (name === 'default' && !this.$$d.children) {
							this.$$d.children = create_slot(name);
							$$slots.default = true;
						} else {
							$$slots[name] = create_slot(name);
						}
					}
				}
				for (const attribute of this.attributes) {
					// this.$$data takes precedence over this.attributes
					const name = this.$$g_p(attribute.name);
					if (!(name in this.$$d)) {
						this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, 'toProp');
					}
				}
				// Port over props that were set programmatically before ce was initialized
				for (const key in this.$$p_d) {
					// @ts-expect-error
					if (!(key in this.$$d) && this[key] !== undefined) {
						// @ts-expect-error
						this.$$d[key] = this[key]; // don't transform, these were set through JavaScript
						// @ts-expect-error
						delete this[key]; // remove the property that shadows the getter/setter
					}
				}
				this.$$c = (0,_legacy_legacy_client_js__WEBPACK_IMPORTED_MODULE_0__.createClassComponent)({
					component: this.$$ctor,
					target: this.shadowRoot || this,
					props: {
						...this.$$d,
						$$slots,
						$$host: this
					}
				});

				// Reflect component props as attributes
				this.$$me = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect_root)(() => {
					(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.render_effect)(() => {
						this.$$r = true;
						for (const key of (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.object_keys)(this.$$c)) {
							if (!this.$$p_d[key]?.reflect) continue;
							this.$$d[key] = this.$$c[key];
							const attribute_value = get_custom_element_value(
								key,
								this.$$d[key],
								this.$$p_d,
								'toAttribute'
							);
							if (attribute_value == null) {
								this.removeAttribute(this.$$p_d[key].attribute || key);
							} else {
								this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
							}
						}
						this.$$r = false;
					});
				});

				for (const type in this.$$l) {
					for (const listener of this.$$l[type]) {
						const unsub = this.$$c.$on(type, listener);
						this.$$l_u.set(listener, unsub);
					}
				}
				this.$$l = {};
			}
		}

		// We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
		// and setting attributes through setAttribute etc, this is helpful

		/**
		 * @param {string} attr
		 * @param {string} _oldValue
		 * @param {string} newValue
		 */
		attributeChangedCallback(attr, _oldValue, newValue) {
			if (this.$$r) return;
			attr = this.$$g_p(attr);
			this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, 'toProp');
			this.$$c?.$set({ [attr]: this.$$d[attr] });
		}

		disconnectedCallback() {
			this.$$cn = false;
			// In a microtask, because this could be a move within the DOM
			Promise.resolve().then(() => {
				if (!this.$$cn && this.$$c) {
					this.$$c.$destroy();
					this.$$me();
					this.$$c = undefined;
				}
			});
		}

		/**
		 * @param {string} attribute_name
		 */
		$$g_p(attribute_name) {
			return (
				(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.object_keys)(this.$$p_d).find(
					(key) =>
						this.$$p_d[key].attribute === attribute_name ||
						(!this.$$p_d[key].attribute && key.toLowerCase() === attribute_name)
				) || attribute_name
			);
		}
	};
}

/**
 * @param {string} prop
 * @param {any} value
 * @param {Record<string, CustomElementPropDefinition>} props_definition
 * @param {'toAttribute' | 'toProp'} [transform]
 */
function get_custom_element_value(prop, value, props_definition, transform) {
	const type = props_definition[prop]?.type;
	value = type === 'Boolean' && typeof value !== 'boolean' ? value != null : value;
	if (!transform || !props_definition[prop]) {
		return value;
	} else if (transform === 'toAttribute') {
		switch (type) {
			case 'Object':
			case 'Array':
				return value == null ? null : JSON.stringify(value);
			case 'Boolean':
				return value ? '' : null;
			case 'Number':
				return value == null ? null : value;
			default:
				return value;
		}
	} else {
		switch (type) {
			case 'Object':
			case 'Array':
				return value && JSON.parse(value);
			case 'Boolean':
				return value; // conversion already handled above
			case 'Number':
				return value != null ? +value : value;
			default:
				return value;
		}
	}
}

/**
 * @param {HTMLElement} element
 */
function get_custom_elements_slots(element) {
	/** @type {Record<string, true>} */
	const result = {};
	element.childNodes.forEach((node) => {
		result[/** @type {Element} node */ (node).slot || 'default'] = true;
	});
	return result;
}

/**
 * @internal
 *
 * Turn a Svelte component into a custom element.
 * @param {any} Component  A Svelte component function
 * @param {Record<string, CustomElementPropDefinition>} props_definition  The props to observe
 * @param {string[]} slots  The slots to create
 * @param {string[]} exports  Explicitly exported values, other than props
 * @param {boolean} use_shadow_dom  Whether to use shadow DOM
 * @param {(ce: new () => HTMLElement) => new () => HTMLElement} [extend]
 */
function create_custom_element(
	Component,
	props_definition,
	slots,
	exports,
	use_shadow_dom,
	extend
) {
	let Class = class extends SvelteElement {
		constructor() {
			super(Component, slots, use_shadow_dom);
			this.$$p_d = props_definition;
		}
		static get observedAttributes() {
			return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.object_keys)(props_definition).map((key) =>
				(props_definition[key].attribute || key).toLowerCase()
			);
		}
	};
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.object_keys)(props_definition).forEach((prop) => {
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.define_property)(Class.prototype, prop, {
			get() {
				return this.$$c && prop in this.$$c ? this.$$c[prop] : this.$$d[prop];
			},
			set(value) {
				value = get_custom_element_value(prop, value, props_definition);
				this.$$d[prop] = value;
				var component = this.$$c;

				if (component) {
					// // If the instance has an accessor, use that instead
					var setter = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(component, prop)?.get;

					if (setter) {
						component[prop] = value;
					} else {
						component.$set({ [prop]: value });
					}
				}
			}
		});
	});
	exports.forEach((property) => {
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.define_property)(Class.prototype, property, {
			get() {
				return this.$$c?.[property];
			}
		});
	});
	if (extend) {
		// @ts-expect-error - assigning here is fine
		Class = extend(Class);
	}
	Component.element = /** @type {any} */ Class;
	return Class;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/events.js":
/*!************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/events.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all_registered_events: () => (/* binding */ all_registered_events),
/* harmony export */   apply: () => (/* binding */ apply),
/* harmony export */   create_event: () => (/* binding */ create_event),
/* harmony export */   delegate: () => (/* binding */ delegate),
/* harmony export */   event: () => (/* binding */ event),
/* harmony export */   handle_event_propagation: () => (/* binding */ handle_event_propagation),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   replay_events: () => (/* binding */ replay_events),
/* harmony export */   root_event_handles: () => (/* binding */ root_event_handles)
/* harmony export */ });
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _bindings_shared_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings/shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");
/** @import { Location } from 'locate-character' */









/** @type {Set<string>} */
const all_registered_events = new Set();

/** @type {Set<(events: Array<string>) => void>} */
const root_event_handles = new Set();

/**
 * SSR adds onload and onerror attributes to catch those events before the hydration.
 * This function detects those cases, removes the attributes and replays the events.
 * @param {HTMLElement} dom
 */
function replay_events(dom) {
	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_2__.hydrating) return;

	if (dom.onload) {
		dom.removeAttribute('onload');
	}
	if (dom.onerror) {
		dom.removeAttribute('onerror');
	}
	// @ts-expect-error
	const event = dom.__e;
	if (event !== undefined) {
		// @ts-expect-error
		dom.__e = undefined;
		queueMicrotask(() => {
			if (dom.isConnected) {
				dom.dispatchEvent(event);
			}
		});
	}
}

/**
 * @param {string} event_name
 * @param {EventTarget} dom
 * @param {EventListener} [handler]
 * @param {AddEventListenerOptions} [options]
 */
function create_event(event_name, dom, handler, options = {}) {
	/**
	 * @this {EventTarget}
	 */
	function target_handler(/** @type {Event} */ event) {
		if (!options.capture) {
			// Only call in the bubble phase, else delegated events would be called before the capturing events
			handle_event_propagation.call(dom, event);
		}
		if (!event.cancelBubble) {
			return (0,_bindings_shared_js__WEBPACK_IMPORTED_MODULE_7__.without_reactive_context)(() => {
				return handler?.call(this, event);
			});
		}
	}

	// Chrome has a bug where pointer events don't work when attached to a DOM element that has been cloned
	// with cloneNode() and the DOM element is disconnected from the document. To ensure the event works, we
	// defer the attachment till after it's been appended to the document. TODO: remove this once Chrome fixes
	// this bug. The same applies to wheel events and touch events.
	if (
		event_name.startsWith('pointer') ||
		event_name.startsWith('touch') ||
		event_name === 'wheel'
	) {
		(0,_task_js__WEBPACK_IMPORTED_MODULE_3__.queue_micro_task)(() => {
			dom.addEventListener(event_name, target_handler, options);
		});
	} else {
		dom.addEventListener(event_name, target_handler, options);
	}

	return target_handler;
}

/**
 * Attaches an event handler to an element and returns a function that removes the handler. Using this
 * rather than `addEventListener` will preserve the correct order relative to handlers added declaratively
 * (with attributes like `onclick`), which use event delegation for performance reasons
 *
 * @param {EventTarget} element
 * @param {string} type
 * @param {EventListener} handler
 * @param {AddEventListenerOptions} [options]
 */
function on(element, type, handler, options = {}) {
	var target_handler = create_event(type, element, handler, options);

	return () => {
		element.removeEventListener(type, target_handler, options);
	};
}

/**
 * @param {string} event_name
 * @param {Element} dom
 * @param {EventListener} [handler]
 * @param {boolean} [capture]
 * @param {boolean} [passive]
 * @returns {void}
 */
function event(event_name, dom, handler, capture, passive) {
	var options = { capture, passive };
	var target_handler = create_event(event_name, dom, handler, options);

	// @ts-ignore
	if (dom === document.body || dom === window || dom === document) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_0__.teardown)(() => {
			dom.removeEventListener(event_name, target_handler, options);
		});
	}
}

/**
 * @param {Array<string>} events
 * @returns {void}
 */
function delegate(events) {
	for (var i = 0; i < events.length; i++) {
		all_registered_events.add(events[i]);
	}

	for (var fn of root_event_handles) {
		fn(events);
	}
}

/**
 * @this {EventTarget}
 * @param {Event} event
 * @returns {void}
 */
function handle_event_propagation(event) {
	var handler_element = this;
	var owner_document = /** @type {Node} */ (handler_element).ownerDocument;
	var event_name = event.type;
	var path = event.composedPath?.() || [];
	var current_target = /** @type {null | Element} */ (path[0] || event.target);

	// composedPath contains list of nodes the event has propagated through.
	// We check __root to skip all nodes below it in case this is a
	// parent of the __root node, which indicates that there's nested
	// mounted apps. In this case we don't want to trigger events multiple times.
	var path_idx = 0;

	// @ts-expect-error is added below
	var handled_at = event.__root;

	if (handled_at) {
		var at_idx = path.indexOf(handled_at);
		if (
			at_idx !== -1 &&
			(handler_element === document || handler_element === /** @type {any} */ (window))
		) {
			// This is the fallback document listener or a window listener, but the event was already handled
			// -> ignore, but set handle_at to document/window so that we're resetting the event
			// chain in case someone manually dispatches the same event object again.
			// @ts-expect-error
			event.__root = handler_element;
			return;
		}

		// We're deliberately not skipping if the index is higher, because
		// someone could create an event programmatically and emit it multiple times,
		// in which case we want to handle the whole propagation chain properly each time.
		// (this will only be a false negative if the event is dispatched multiple times and
		// the fallback document listener isn't reached in between, but that's super rare)
		var handler_idx = path.indexOf(handler_element);
		if (handler_idx === -1) {
			// handle_idx can theoretically be -1 (happened in some JSDOM testing scenarios with an event listener on the window object)
			// so guard against that, too, and assume that everything was handled at this point.
			return;
		}

		if (at_idx <= handler_idx) {
			path_idx = at_idx;
		}
	}

	current_target = /** @type {Element} */ (path[path_idx] || event.target);
	// there can only be one delegated event per element, and we either already handled the current target,
	// or this is the very first target in the chain which has a non-delegated listener, in which case it's safe
	// to handle a possible delegated event on it later (through the root delegation listener for example).
	if (current_target === handler_element) return;

	// Proxy currentTarget to correct target
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.define_property)(event, 'currentTarget', {
		configurable: true,
		get() {
			return current_target || owner_document;
		}
	});

	// This started because of Chromium issue https://chromestatus.com/feature/5128696823545856,
	// where removal or moving of of the DOM can cause sync `blur` events to fire, which can cause logic
	// to run inside the current `active_reaction`, which isn't what we want at all. However, on reflection,
	// it's probably best that all event handled by Svelte have this behaviour, as we don't really want
	// an event handler to run in the context of another reaction or effect.
	var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_6__.active_reaction;
	var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_6__.active_effect;
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_6__.set_active_reaction)(null);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_6__.set_active_effect)(null);

	try {
		/**
		 * @type {unknown}
		 */
		var throw_error;
		/**
		 * @type {unknown[]}
		 */
		var other_errors = [];

		while (current_target !== null) {
			/** @type {null | Element} */
			var parent_element =
				current_target.assignedSlot ||
				current_target.parentNode ||
				/** @type {any} */ (current_target).host ||
				null;

			try {
				// @ts-expect-error
				var delegated = current_target['__' + event_name];

				if (
					delegated !== undefined &&
					(!(/** @type {any} */ (current_target).disabled) ||
						// DOM could've been updated already by the time this is reached, so we check this as well
						// -> the target could not have been disabled because it emits the event in the first place
						event.target === current_target)
				) {
					if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.is_array)(delegated)) {
						var [fn, ...data] = delegated;
						fn.apply(current_target, [event, ...data]);
					} else {
						delegated.call(current_target, event);
					}
				}
			} catch (error) {
				if (throw_error) {
					other_errors.push(error);
				} else {
					throw_error = error;
				}
			}
			if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
				break;
			}
			current_target = parent_element;
		}

		if (throw_error) {
			for (let error of other_errors) {
				// Throw the rest of the errors, one-by-one on a microtask
				queueMicrotask(() => {
					throw error;
				});
			}
			throw throw_error;
		}
	} finally {
		// @ts-expect-error is used above
		event.__root = handler_element;
		// @ts-ignore remove proxy on currentTarget
		delete event.currentTarget;
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_6__.set_active_reaction)(previous_reaction);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_6__.set_active_effect)(previous_effect);
	}
}

/**
 * In dev, warn if an event handler is not a function, as it means the
 * user probably called the handler or forgot to add a `() =>`
 * @param {() => (event: Event, ...args: any) => void} thunk
 * @param {EventTarget} element
 * @param {[Event, ...any]} args
 * @param {any} component
 * @param {[number, number]} [loc]
 * @param {boolean} [remove_parens]
 */
function apply(
	thunk,
	element,
	args,
	component,
	loc,
	has_side_effects = false,
	remove_parens = false
) {
	let handler;
	let error;

	try {
		handler = thunk();
	} catch (e) {
		error = e;
	}

	if (typeof handler === 'function') {
		handler.apply(element, args);
	} else if (has_side_effects || handler != null || error) {
		const filename = component?.[_constants_js__WEBPACK_IMPORTED_MODULE_4__.FILENAME];
		const location = loc ? ` at ${filename}:${loc[0]}:${loc[1]}` : ` in ${filename}`;

		const event_name = args[0].type;
		const description = `\`${event_name}\` handler${location}`;
		const suggestion = remove_parens ? 'remove the trailing `()`' : 'add a leading `() =>`';

		_warnings_js__WEBPACK_IMPORTED_MODULE_5__.event_handler_invalid(description, suggestion);

		if (error) {
			throw error;
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/misc.js":
/*!**********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/misc.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_form_reset_listener: () => (/* binding */ add_form_reset_listener),
/* harmony export */   autofocus: () => (/* binding */ autofocus),
/* harmony export */   remove_textarea_child: () => (/* binding */ remove_textarea_child)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");




/**
 * @param {HTMLElement} dom
 * @param {boolean} value
 * @returns {void}
 */
function autofocus(dom, value) {
	if (value) {
		const body = document.body;
		dom.autofocus = true;

		(0,_task_js__WEBPACK_IMPORTED_MODULE_2__.queue_micro_task)(() => {
			if (document.activeElement === body) {
				dom.focus();
			}
		});
	}
}

/**
 * The child of a textarea actually corresponds to the defaultValue property, so we need
 * to remove it upon hydration to avoid a bug when someone resets the form value.
 * @param {HTMLTextAreaElement} dom
 * @returns {void}
 */
function remove_textarea_child(dom) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating && (0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(dom) !== null) {
		(0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.clear_text_content)(dom);
	}
}

let listening_to_form_reset = false;

function add_form_reset_listener() {
	if (!listening_to_form_reset) {
		listening_to_form_reset = true;
		document.addEventListener(
			'reset',
			(evt) => {
				// Needs to happen one tick later or else the dom properties of the form
				// elements have not updated to their reset values yet
				Promise.resolve().then(() => {
					if (!evt.defaultPrevented) {
						for (const e of /**@type {HTMLFormElement} */ (evt.target).elements) {
							// @ts-expect-error
							e.__on_r?.();
						}
					}
				});
			},
			// In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
			{ capture: true }
		);
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/style.js":
/*!***********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/style.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set_style: () => (/* binding */ set_style)
/* harmony export */ });
/**
 * @param {HTMLElement} dom
 * @param {string} key
 * @param {string} value
 * @param {boolean} [important]
 */
function set_style(dom, key, value, important) {
	// @ts-expect-error
	var styles = (dom.__styles ??= {});

	if (styles[key] === value) {
		return;
	}

	styles[key] = value;

	if (value == null) {
		dom.style.removeProperty(key);
	} else {
		dom.style.setProperty(key, value, important ? 'important' : '');
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/elements/transitions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/elements/transitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animation: () => (/* binding */ animation),
/* harmony export */   transition: () => (/* binding */ transition)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loop.js */ "./node_modules/svelte/src/internal/client/loop.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _blocks_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/each.js */ "./node_modules/svelte/src/internal/client/dom/blocks/each.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _bindings_shared_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bindings/shared.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js");
/** @import { AnimateFn, Animation, AnimationConfig, EachItem, Effect, TransitionFn, TransitionManager } from '#client' */











/**
 * @param {Element} element
 * @param {'introstart' | 'introend' | 'outrostart' | 'outroend'} type
 * @returns {void}
 */
function dispatch_event(element, type) {
	(0,_bindings_shared_js__WEBPACK_IMPORTED_MODULE_9__.without_reactive_context)(() => {
		element.dispatchEvent(new CustomEvent(type));
	});
}

/**
 * Converts a property to the camel-case format expected by Element.animate(), KeyframeEffect(), and KeyframeEffect.setKeyframes().
 * @param {string} style
 * @returns {string}
 */
function css_property_to_camelcase(style) {
	// in compliance with spec
	if (style === 'float') return 'cssFloat';
	if (style === 'offset') return 'cssOffset';

	// do not rename custom @properties
	if (style.startsWith('--')) return style;

	const parts = style.split('-');
	if (parts.length === 1) return parts[0];
	return (
		parts[0] +
		parts
			.slice(1)
			.map(/** @param {any} word */ (word) => word[0].toUpperCase() + word.slice(1))
			.join('')
	);
}

/**
 * @param {string} css
 * @returns {Keyframe}
 */
function css_to_keyframe(css) {
	/** @type {Keyframe} */
	const keyframe = {};
	const parts = css.split(';');
	for (const part of parts) {
		const [property, value] = part.split(':');
		if (!property || value === undefined) break;

		const formatted_property = css_property_to_camelcase(property.trim());
		keyframe[formatted_property] = value.trim();
	}
	return keyframe;
}

/** @param {number} t */
const linear = (t) => t;

/**
 * Called inside keyed `{#each ...}` blocks (as `$.animation(...)`). This creates an animation manager
 * and attaches it to the block, so that moves can be animated following reconciliation.
 * @template P
 * @param {Element} element
 * @param {() => AnimateFn<P | undefined>} get_fn
 * @param {(() => P) | null} get_params
 */
function animation(element, get_fn, get_params) {
	var item = /** @type {EachItem} */ (_blocks_each_js__WEBPACK_IMPORTED_MODULE_5__.current_each_item);

	/** @type {DOMRect} */
	var from;

	/** @type {DOMRect} */
	var to;

	/** @type {Animation | undefined} */
	var animation;

	/** @type {null | { position: string, width: string, height: string, transform: string }} */
	var original_styles = null;

	item.a ??= {
		element,
		measure() {
			from = this.element.getBoundingClientRect();
		},
		apply() {
			animation?.abort();

			to = this.element.getBoundingClientRect();

			if (
				from.left !== to.left ||
				from.right !== to.right ||
				from.top !== to.top ||
				from.bottom !== to.bottom
			) {
				const options = get_fn()(this.element, { from, to }, get_params?.());

				animation = animate(this.element, options, undefined, 1, () => {
					animation?.abort();
					animation = undefined;
				});
			}
		},
		fix() {
			// If an animation is already running, transforming the element is likely to fail,
			// because the styles applied by the animation take precedence. In the case of crossfade,
			// that means the `translate(...)` of the crossfade transition overrules the `translate(...)`
			// we would apply below, leading to the element jumping somewhere to the top left.
			if (element.getAnimations().length) return;

			// It's important to destructure these to get fixed values - the object itself has getters,
			// and changing the style to 'absolute' can for example influence the width.
			var { position, width, height } = getComputedStyle(element);

			if (position !== 'absolute' && position !== 'fixed') {
				var style = /** @type {HTMLElement | SVGElement} */ (element).style;

				original_styles = {
					position: style.position,
					width: style.width,
					height: style.height,
					transform: style.transform
				};

				style.position = 'absolute';
				style.width = width;
				style.height = height;
				var to = element.getBoundingClientRect();

				if (from.left !== to.left || from.top !== to.top) {
					var transform = `translate(${from.left - to.left}px, ${from.top - to.top}px)`;
					style.transform = style.transform ? `${style.transform} ${transform}` : transform;
				}
			}
		},
		unfix() {
			if (original_styles) {
				var style = /** @type {HTMLElement | SVGElement} */ (element).style;

				style.position = original_styles.position;
				style.width = original_styles.width;
				style.height = original_styles.height;
				style.transform = original_styles.transform;
			}
		}
	};

	// in the case of a `<svelte:element>`, it's possible for `$.animation(...)` to be called
	// when an animation manager already exists, if the tag changes. in that case, we need to
	// swap out the element rather than creating a new manager, in case it happened at the same
	// moment as a reconciliation
	item.a.element = element;
}

/**
 * Called inside block effects as `$.transition(...)`. This creates a transition manager and
 * attaches it to the current effect — later, inside `pause_effect` and `resume_effect`, we
 * use this to create `intro` and `outro` transitions.
 * @template P
 * @param {number} flags
 * @param {HTMLElement} element
 * @param {() => TransitionFn<P | undefined>} get_fn
 * @param {(() => P) | null} get_params
 * @returns {void}
 */
function transition(flags, element, get_fn, get_params) {
	var is_intro = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_6__.TRANSITION_IN) !== 0;
	var is_outro = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_6__.TRANSITION_OUT) !== 0;
	var is_both = is_intro && is_outro;
	var is_global = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_6__.TRANSITION_GLOBAL) !== 0;

	/** @type {'in' | 'out' | 'both'} */
	var direction = is_both ? 'both' : is_intro ? 'in' : 'out';

	/** @type {AnimationConfig | ((opts: { direction: 'in' | 'out' }) => AnimationConfig) | undefined} */
	var current_options;

	var inert = element.inert;

	/**
	 * The default overflow style, stashed so we can revert changes during the transition
	 * that are necessary to work around a Safari <18 bug
	 * TODO 6.0 remove this, if older versions of Safari have died out enough
	 */
	var overflow = element.style.overflow;

	/** @type {Animation | undefined} */
	var intro;

	/** @type {Animation | undefined} */
	var outro;

	function get_options() {
		var previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_reaction;
		var previous_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect;
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_reaction)(null);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_effect)(null);
		try {
			// If a transition is still ongoing, we use the existing options rather than generating
			// new ones. This ensures that reversible transitions reverse smoothly, rather than
			// jumping to a new spot because (for example) a different `duration` was used
			return (current_options ??= get_fn()(element, get_params?.() ?? /** @type {P} */ ({}), {
				direction
			}));
		} finally {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_reaction)(previous_reaction);
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_effect)(previous_effect);
		}
	}

	/** @type {TransitionManager} */
	var transition = {
		is_global,
		in() {
			element.inert = inert;

			if (!is_intro) {
				outro?.abort();
				outro?.reset?.();
				return;
			}

			if (!is_outro) {
				// if we intro then outro then intro again, we want to abort the first intro,
				// if it's not a bidirectional transition
				intro?.abort();
			}

			dispatch_event(element, 'introstart');

			intro = animate(element, get_options(), outro, 1, () => {
				dispatch_event(element, 'introend');

				// Ensure we cancel the animation to prevent leaking
				intro?.abort();
				intro = current_options = undefined;

				element.style.overflow = overflow;
			});
		},
		out(fn) {
			if (!is_outro) {
				fn?.();
				current_options = undefined;
				return;
			}

			element.inert = true;

			dispatch_event(element, 'outrostart');

			outro = animate(element, get_options(), intro, 0, () => {
				dispatch_event(element, 'outroend');
				fn?.();
			});
		},
		stop: () => {
			intro?.abort();
			outro?.abort();
		}
	};

	var e = /** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect);

	(e.transitions ??= []).push(transition);

	// if this is a local transition, we only want to run it if the parent (branch) effect's
	// parent (block) effect is where the state change happened. we can determine that by
	// looking at whether the block effect is currently initializing
	if (is_intro && _render_js__WEBPACK_IMPORTED_MODULE_4__.should_intro) {
		var run = is_global;

		if (!run) {
			var block = /** @type {Effect | null} */ (e.parent);

			// skip over transparent blocks (e.g. snippets, else-if blocks)
			while (block && (block.f & _constants_js__WEBPACK_IMPORTED_MODULE_7__.EFFECT_TRANSPARENT) !== 0) {
				while ((block = block.parent)) {
					if ((block.f & _constants_js__WEBPACK_IMPORTED_MODULE_7__.BLOCK_EFFECT) !== 0) break;
				}
			}

			run = !block || (block.f & _constants_js__WEBPACK_IMPORTED_MODULE_7__.EFFECT_RAN) !== 0;
		}

		if (run) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.untrack)(() => transition.in());
			});
		}
	}
}

/**
 * Animates an element, according to the provided configuration
 * @param {Element} element
 * @param {AnimationConfig | ((opts: { direction: 'in' | 'out' }) => AnimationConfig)} options
 * @param {Animation | undefined} counterpart The corresponding intro/outro to this outro/intro
 * @param {number} t2 The target `t` value — `1` for intro, `0` for outro
 * @param {(() => void)} on_finish Called after successfully completing the animation
 * @returns {Animation}
 */
function animate(element, options, counterpart, t2, on_finish) {
	var is_intro = t2 === 1;

	if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_function)(options)) {
		// In the case of a deferred transition (such as `crossfade`), `option` will be
		// a function rather than an `AnimationConfig`. We need to call this function
		// once the DOM has been updated...
		/** @type {Animation} */
		var a;
		var aborted = false;

		(0,_task_js__WEBPACK_IMPORTED_MODULE_8__.queue_micro_task)(() => {
			if (aborted) return;
			var o = options({ direction: is_intro ? 'in' : 'out' });
			a = animate(element, o, counterpart, t2, on_finish);
		});

		// ...but we want to do so without using `async`/`await` everywhere, so
		// we return a facade that allows everything to remain synchronous
		return {
			abort: () => {
				aborted = true;
				a?.abort();
			},
			deactivate: () => a.deactivate(),
			reset: () => a.reset(),
			t: () => a.t()
		};
	}

	counterpart?.deactivate();

	if (!options?.duration) {
		on_finish();

		return {
			abort: _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			deactivate: _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			reset: _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			t: () => t2
		};
	}

	const { delay = 0, css, tick, easing = linear } = options;

	var keyframes = [];

	if (is_intro && counterpart === undefined) {
		if (tick) {
			tick(0, 1); // TODO put in nested effect, to avoid interleaved reads/writes?
		}

		if (css) {
			var styles = css_to_keyframe(css(0, 1));
			keyframes.push(styles, styles);
		}
	}

	var get_t = () => 1 - t2;

	// create a dummy animation that lasts as long as the delay (but with whatever devtools
	// multiplier is in effect). in the common case that it is `0`, we keep it anyway so that
	// the CSS keyframes aren't created until the DOM is updated
	var animation = element.animate(keyframes, { duration: delay });

	animation.onfinish = () => {
		// for bidirectional transitions, we start from the current position,
		// rather than doing a full intro/outro
		var t1 = counterpart?.t() ?? 1 - t2;
		counterpart?.abort();

		var delta = t2 - t1;
		var duration = /** @type {number} */ (options.duration) * Math.abs(delta);
		var keyframes = [];

		if (duration > 0) {
			/**
			 * Whether or not the CSS includes `overflow: hidden`, in which case we need to
			 * add it as an inline style to work around a Safari <18 bug
			 * TODO 6.0 remove this, if possible
			 */
			var needs_overflow_hidden = false;

			if (css) {
				var n = Math.ceil(duration / (1000 / 60)); // `n` must be an integer, or we risk missing the `t2` value

				for (var i = 0; i <= n; i += 1) {
					var t = t1 + delta * easing(i / n);
					var styles = css_to_keyframe(css(t, 1 - t));
					keyframes.push(styles);

					needs_overflow_hidden ||= styles.overflow === 'hidden';
				}
			}

			if (needs_overflow_hidden) {
				/** @type {HTMLElement} */ (element).style.overflow = 'hidden';
			}

			get_t = () => {
				var time = /** @type {number} */ (
					/** @type {globalThis.Animation} */ (animation).currentTime
				);

				return t1 + delta * easing(time / duration);
			};

			if (tick) {
				(0,_loop_js__WEBPACK_IMPORTED_MODULE_3__.loop)(() => {
					if (animation.playState !== 'running') return false;

					var t = get_t();
					tick(t, 1 - t);

					return true;
				});
			}
		}

		animation = element.animate(keyframes, { duration, fill: 'forwards' });

		animation.onfinish = () => {
			get_t = () => t2;
			tick?.(t2, 1 - t2);
			on_finish();
		};
	};

	return {
		abort: () => {
			if (animation) {
				animation.cancel();
				// This prevents memory leaks in Chromium
				animation.effect = null;
				// This prevents onfinish to be launched after cancel(),
				// which can happen in some rare cases
				// see https://github.com/sveltejs/svelte/issues/13681
				animation.onfinish = _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
			}
		},
		deactivate: () => {
			on_finish = _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
		},
		reset: () => {
			if (t2 === 0) {
				tick?.(1, 0);
			}
		},
		t: () => get_t()
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/hydration.js":
/*!******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/hydration.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hydrate_next: () => (/* binding */ hydrate_next),
/* harmony export */   hydrate_node: () => (/* binding */ hydrate_node),
/* harmony export */   hydrate_template: () => (/* binding */ hydrate_template),
/* harmony export */   hydrating: () => (/* binding */ hydrating),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   remove_nodes: () => (/* binding */ remove_nodes),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   set_hydrate_node: () => (/* binding */ set_hydrate_node),
/* harmony export */   set_hydrating: () => (/* binding */ set_hydrating)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/** @import { TemplateNode } from '#client' */





/**
 * Use this variable to guard everything related to hydration code so it can be treeshaken out
 * if the user doesn't use the `hydrate` method and these code paths are therefore not needed.
 */
let hydrating = false;

/** @param {boolean} value */
function set_hydrating(value) {
	hydrating = value;
}

/**
 * The node that is currently being hydrated. This starts out as the first node inside the opening
 * <!--[--> comment, and updates each time a component calls `$.child(...)` or `$.sibling(...)`.
 * When entering a block (e.g. `{#if ...}`), `hydrate_node` is the block opening comment; by the
 * time we leave the block it is the closing comment, which serves as the block's anchor.
 * @type {TemplateNode}
 */
let hydrate_node;

/** @param {TemplateNode} node */
function set_hydrate_node(node) {
	if (node === null) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_1__.hydration_mismatch();
		throw _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_ERROR;
	}

	return (hydrate_node = node);
}

function hydrate_next() {
	return set_hydrate_node(/** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_next_sibling)(hydrate_node)));
}

/** @param {TemplateNode} node */
function reset(node) {
	if (!hydrating) return;

	// If the node has remaining siblings, something has gone wrong
	if ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_next_sibling)(hydrate_node) !== null) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_1__.hydration_mismatch();
		throw _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_ERROR;
	}

	hydrate_node = node;
}

/**
 * @param {HTMLTemplateElement} template
 */
function hydrate_template(template) {
	if (hydrating) {
		// @ts-expect-error TemplateNode doesn't include DocumentFragment, but it's actually fine
		hydrate_node = template.content;
	}
}

function next(count = 1) {
	if (hydrating) {
		var i = count;
		var node = hydrate_node;

		while (i--) {
			node = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_next_sibling)(node));
		}

		hydrate_node = node;
	}
}

/**
 * Removes all nodes starting at `hydrate_node` up until the next hydration end comment
 */
function remove_nodes() {
	var depth = 0;
	var node = hydrate_node;

	while (true) {
		if (node.nodeType === 8) {
			var data = /** @type {Comment} */ (node).data;

			if (data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_END) {
				if (depth === 0) return node;
				depth -= 1;
			} else if (data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_START || data === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATION_START_ELSE) {
				depth += 1;
			}
		}

		var next = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_2__.get_next_sibling)(node));
		node.remove();
		node = next;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nonpassive: () => (/* binding */ nonpassive),
/* harmony export */   once: () => (/* binding */ once),
/* harmony export */   passive: () => (/* binding */ passive),
/* harmony export */   preventDefault: () => (/* binding */ preventDefault),
/* harmony export */   self: () => (/* binding */ self),
/* harmony export */   stopImmediatePropagation: () => (/* binding */ stopImmediatePropagation),
/* harmony export */   stopPropagation: () => (/* binding */ stopPropagation),
/* harmony export */   trusted: () => (/* binding */ trusted)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _elements_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/events.js */ "./node_modules/svelte/src/internal/client/dom/elements/events.js");
/** @import { ActionReturn } from 'svelte/action' */




/**
 * Substitute for the `trusted` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function trusted(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		if (event.isTrusted) {
			// @ts-ignore
			fn?.apply(this, args);
		}
	};
}

/**
 * Substitute for the `self` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function self(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		// @ts-ignore
		if (event.target === this) {
			// @ts-ignore
			fn?.apply(this, args);
		}
	};
}

/**
 * Substitute for the `stopPropagation` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function stopPropagation(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		event.stopPropagation();
		// @ts-ignore
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `once` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function once(fn) {
	var ran = false;

	return function (...args) {
		if (ran) return;
		ran = true;

		// @ts-ignore
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `stopImmediatePropagation` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function stopImmediatePropagation(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		event.stopImmediatePropagation();
		// @ts-ignore
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `preventDefault` event modifier
 * @deprecated
 * @param {(event: Event, ...args: Array<unknown>) => void} fn
 * @returns {(event: Event, ...args: unknown[]) => void}
 */
function preventDefault(fn) {
	return function (...args) {
		var event = /** @type {Event} */ (args[0]);
		event.preventDefault();
		// @ts-ignore
		return fn?.apply(this, args);
	};
}

/**
 * Substitute for the `passive` event modifier, implemented as an action
 * @deprecated
 * @param {HTMLElement} node
 * @param {[event: string, handler: () => EventListener]} options
 */
function passive(node, [event, handler]) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.user_pre_effect)(() => {
		return (0,_elements_events_js__WEBPACK_IMPORTED_MODULE_2__.on)(node, event, handler() ?? _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop, {
			passive: true
		});
	});
}

/**
 * Substitute for the `nonpassive` event modifier, implemented as an action
 * @deprecated
 * @param {HTMLElement} node
 * @param {[event: string, handler: () => EventListener]} options
 */
function nonpassive(node, [event, handler]) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.user_pre_effect)(() => {
		return (0,_elements_events_js__WEBPACK_IMPORTED_MODULE_2__.on)(node, event, handler() ?? _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop, {
			passive: false
		});
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactivity/deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/** @import { ComponentContextLegacy } from '#client' */






/**
 * Legacy-mode only: Call `onMount` callbacks and set up `beforeUpdate`/`afterUpdate` effects
 * @param {boolean} [immutable]
 */
function init(immutable = false) {
	const context = /** @type {ComponentContextLegacy} */ (_context_js__WEBPACK_IMPORTED_MODULE_1__.component_context);

	const callbacks = context.l.u;
	if (!callbacks) return;

	let props = () => (0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.deep_read_state)(context.s);

	if (immutable) {
		let version = 0;
		let prev = /** @type {Record<string, any>} */ ({});

		// In legacy immutable mode, before/afterUpdate only fire if the object identity of a prop changes
		const d = (0,_reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_2__.derived)(() => {
			let changed = false;
			const props = context.s;
			for (const key in props) {
				if (props[key] !== prev[key]) {
					prev[key] = props[key];
					changed = true;
				}
			}
			if (changed) version++;
			return version;
		});

		props = () => (0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.get)(d);
	}

	// beforeUpdate
	if (callbacks.b.length) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.user_pre_effect)(() => {
			observe_all(context, props);
			(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(callbacks.b);
		});
	}

	// onMount (must run before afterUpdate)
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.user_effect)(() => {
		const fns = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.untrack)(() => callbacks.m.map(_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run));
		return () => {
			for (const fn of fns) {
				if (typeof fn === 'function') {
					fn();
				}
			}
		};
	});

	// afterUpdate
	if (callbacks.a.length) {
		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_3__.user_effect)(() => {
			observe_all(context, props);
			(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(callbacks.a);
		});
	}
}

/**
 * Invoke the getter of all signals associated with a component
 * so they can be registered to the effect this function is called in.
 * @param {ComponentContextLegacy} context
 * @param {(() => void)} props
 */
function observe_all(context, props) {
	if (context.l.s) {
		for (const signal of context.l.s) (0,_runtime_js__WEBPACK_IMPORTED_MODULE_4__.get)(signal);
	}

	props();
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/legacy/misc.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/legacy/misc.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_legacy_event_listener: () => (/* binding */ add_legacy_event_listener),
/* harmony export */   bubble_event: () => (/* binding */ bubble_event),
/* harmony export */   reactive_import: () => (/* binding */ reactive_import),
/* harmony export */   update_legacy_props: () => (/* binding */ update_legacy_props)
/* harmony export */ });
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");




/**
 * Under some circumstances, imports may be reactive in legacy mode. In that case,
 * they should be using `reactive_import` as part of the transformation
 * @param {() => any} fn
 */
function reactive_import(fn) {
	var s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_0__.source)(0);

	return function () {
		if (arguments.length === 1) {
			(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_0__.set)(s, (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(s) + 1);
			return arguments[0];
		} else {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(s);
			return fn();
		}
	};
}

/**
 * @this {any}
 * @param {Record<string, unknown>} $$props
 * @param {Event} event
 * @returns {void}
 */
function bubble_event($$props, event) {
	var events = /** @type {Record<string, Function[] | Function>} */ ($$props.$$events)?.[
		event.type
	];

	var callbacks = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_array)(events) ? events.slice() : events == null ? [] : [events];

	for (var fn of callbacks) {
		// Preserve "this" context
		fn.call(this, event);
	}
}

/**
 * Used to simulate `$on` on a component instance when `compatibility.componentApi === 4`
 * @param {Record<string, any>} $$props
 * @param {string} event_name
 * @param {Function} event_callback
 */
function add_legacy_event_listener($$props, event_name, event_callback) {
	$$props.$$events ||= {};
	$$props.$$events[event_name] ||= [];
	$$props.$$events[event_name].push(event_callback);
}

/**
 * Used to simulate `$set` on a component instance when `compatibility.componentApi === 4`.
 * Needs component accessors so that it can call the setter of the prop. Therefore doesn't
 * work for updating props in `$$props` or `$$restProps`.
 * @this {Record<string, any>}
 * @param {Record<string, any>} $$new_props
 */
function update_legacy_props($$new_props) {
	for (var key in $$new_props) {
		if (key in this) {
			this[key] = $$new_props[key];
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/operations.js":
/*!*******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/operations.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $document: () => (/* binding */ $document),
/* harmony export */   $window: () => (/* binding */ $window),
/* harmony export */   child: () => (/* binding */ child),
/* harmony export */   clear_text_content: () => (/* binding */ clear_text_content),
/* harmony export */   create_text: () => (/* binding */ create_text),
/* harmony export */   first_child: () => (/* binding */ first_child),
/* harmony export */   get_first_child: () => (/* binding */ get_first_child),
/* harmony export */   get_next_sibling: () => (/* binding */ get_next_sibling),
/* harmony export */   init_operations: () => (/* binding */ init_operations),
/* harmony export */   is_firefox: () => (/* binding */ is_firefox),
/* harmony export */   sibling: () => (/* binding */ sibling)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _dev_equality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev/equality.js */ "./node_modules/svelte/src/internal/client/dev/equality.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/** @import { TemplateNode } from '#client' */





// export these for reference in the compiled code, making global name deduplication unnecessary
/** @type {Window} */
var $window;

/** @type {Document} */
var $document;

/** @type {boolean} */
var is_firefox;

/** @type {() => Node | null} */
var first_child_getter;
/** @type {() => Node | null} */
var next_sibling_getter;

/**
 * Initialize these lazily to avoid issues when using the runtime in a server context
 * where these globals are not available while avoiding a separate server entry point
 */
function init_operations() {
	if ($window !== undefined) {
		return;
	}

	$window = window;
	$document = document;
	is_firefox = /Firefox/.test(navigator.userAgent);

	var element_prototype = Element.prototype;
	var node_prototype = Node.prototype;

	// @ts-ignore
	first_child_getter = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(node_prototype, 'firstChild').get;
	// @ts-ignore
	next_sibling_getter = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(node_prototype, 'nextSibling').get;

	// the following assignments improve perf of lookups on DOM nodes
	// @ts-expect-error
	element_prototype.__click = undefined;
	// @ts-expect-error
	element_prototype.__className = undefined;
	// @ts-expect-error
	element_prototype.__attributes = null;
	// @ts-expect-error
	element_prototype.__styles = null;
	// @ts-expect-error
	element_prototype.__e = undefined;

	// @ts-expect-error
	Text.prototype.__t = undefined;

	if (esm_env__WEBPACK_IMPORTED_MODULE_1__.DEV) {
		// @ts-expect-error
		element_prototype.__svelte_meta = null;

		(0,_dev_equality_js__WEBPACK_IMPORTED_MODULE_2__.init_array_prototype_warnings)();
	}
}

/**
 * @param {string} value
 * @returns {Text}
 */
function create_text(value = '') {
	return document.createTextNode(value);
}

/**
 * @template {Node} N
 * @param {N} node
 * @returns {Node | null}
 */
/*@__NO_SIDE_EFFECTS__*/
function get_first_child(node) {
	return first_child_getter.call(node);
}

/**
 * @template {Node} N
 * @param {N} node
 * @returns {Node | null}
 */
/*@__NO_SIDE_EFFECTS__*/
function get_next_sibling(node) {
	return next_sibling_getter.call(node);
}

/**
 * Don't mark this as side-effect-free, hydration needs to walk all nodes
 * @template {Node} N
 * @param {N} node
 * @param {boolean} is_text
 * @returns {Node | null}
 */
function child(node, is_text) {
	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		return get_first_child(node);
	}

	var child = /** @type {TemplateNode} */ (get_first_child(_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node));

	// Child can be null if we have an element with a single child, like `<p>{text}</p>`, where `text` is empty
	if (child === null) {
		child = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node.appendChild(create_text());
	} else if (is_text && child.nodeType !== 3) {
		var text = create_text();
		child?.before(text);
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(text);
		return text;
	}

	(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(child);
	return child;
}

/**
 * Don't mark this as side-effect-free, hydration needs to walk all nodes
 * @param {DocumentFragment | TemplateNode[]} fragment
 * @param {boolean} is_text
 * @returns {Node | null}
 */
function first_child(fragment, is_text) {
	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		// when not hydrating, `fragment` is a `DocumentFragment` (the result of calling `open_frag`)
		var first = /** @type {DocumentFragment} */ (get_first_child(/** @type {Node} */ (fragment)));

		// TODO prevent user comments with the empty string when preserveComments is true
		if (first instanceof Comment && first.data === '') return get_next_sibling(first);

		return first;
	}

	// if an {expression} is empty during SSR, there might be no
	// text node to hydrate — we must therefore create one
	if (is_text && _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node?.nodeType !== 3) {
		var text = create_text();

		_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node?.before(text);
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(text);
		return text;
	}

	return _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;
}

/**
 * Don't mark this as side-effect-free, hydration needs to walk all nodes
 * @param {TemplateNode} node
 * @param {number} count
 * @param {boolean} is_text
 * @returns {Node | null}
 */
function sibling(node, count = 1, is_text = false) {
	let next_sibling = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating ? _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node : node;
	var last_sibling;

	while (count--) {
		last_sibling = next_sibling;
		next_sibling = /** @type {TemplateNode} */ (get_next_sibling(next_sibling));
	}

	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		return next_sibling;
	}

	var type = next_sibling?.nodeType;

	// if a sibling {expression} is empty during SSR, there might be no
	// text node to hydrate — we must therefore create one
	if (is_text && type !== 3) {
		var text = create_text();
		// If the next sibling is `null` and we're handling text then it's because
		// the SSR content was empty for the text, so we need to generate a new text
		// node and insert it after the last sibling
		if (next_sibling === null) {
			last_sibling?.after(text);
		} else {
			next_sibling.before(text);
		}
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(text);
		return text;
	}

	(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(next_sibling);
	return /** @type {TemplateNode} */ (next_sibling);
}

/**
 * @template {Node} N
 * @param {N} node
 * @returns {void}
 */
function clear_text_content(node) {
	node.textContent = '';
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/reconciler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/reconciler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create_fragment_from_html: () => (/* binding */ create_fragment_from_html)
/* harmony export */ });
/** @param {string} html */
function create_fragment_from_html(html) {
	var elem = document.createElement('template');
	elem.innerHTML = html;
	return elem.content;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/task.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/task.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flush_tasks: () => (/* binding */ flush_tasks),
/* harmony export */   queue_idle_task: () => (/* binding */ queue_idle_task),
/* harmony export */   queue_micro_task: () => (/* binding */ queue_micro_task)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");


// Fallback for when requestIdleCallback is not available
const request_idle_callback =
	typeof requestIdleCallback === 'undefined'
		? (/** @type {() => void} */ cb) => setTimeout(cb, 1)
		: requestIdleCallback;

/** @type {Array<() => void>} */
let micro_tasks = [];

/** @type {Array<() => void>} */
let idle_tasks = [];

function run_micro_tasks() {
	var tasks = micro_tasks;
	micro_tasks = [];
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(tasks);
}

function run_idle_tasks() {
	var tasks = idle_tasks;
	idle_tasks = [];
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(tasks);
}

/**
 * @param {() => void} fn
 */
function queue_micro_task(fn) {
	if (micro_tasks.length === 0) {
		queueMicrotask(run_micro_tasks);
	}

	micro_tasks.push(fn);
}

/**
 * @param {() => void} fn
 */
function queue_idle_task(fn) {
	if (idle_tasks.length === 0) {
		request_idle_callback(run_idle_tasks);
	}

	idle_tasks.push(fn);
}

/**
 * Synchronously run any queued tasks.
 */
function flush_tasks() {
	if (micro_tasks.length > 0) {
		run_micro_tasks();
	}

	if (idle_tasks.length > 0) {
		run_idle_tasks();
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/dom/template.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/dom/template.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign_nodes: () => (/* binding */ assign_nodes),
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   mathml_template: () => (/* binding */ mathml_template),
/* harmony export */   ns_template: () => (/* binding */ ns_template),
/* harmony export */   props_id: () => (/* binding */ props_id),
/* harmony export */   reset_props_id: () => (/* binding */ reset_props_id),
/* harmony export */   svg_template_with_script: () => (/* binding */ svg_template_with_script),
/* harmony export */   template: () => (/* binding */ template),
/* harmony export */   template_with_script: () => (/* binding */ template_with_script),
/* harmony export */   text: () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var _hydration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _reconciler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reconciler.js */ "./node_modules/svelte/src/internal/client/dom/reconciler.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/** @import { Effect, TemplateNode } from '#client' */






/**
 * @param {TemplateNode} start
 * @param {TemplateNode | null} end
 */
function assign_nodes(start, end) {
	var effect = /** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect);
	if (effect.nodes_start === null) {
		effect.nodes_start = start;
		effect.nodes_end = end;
	}
}

/**
 * @param {string} content
 * @param {number} flags
 * @returns {() => Node | Node[]}
 */
/*#__NO_SIDE_EFFECTS__*/
function template(content, flags) {
	var is_fragment = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE_FRAGMENT) !== 0;
	var use_import_node = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE_USE_IMPORT_NODE) !== 0;

	/** @type {Node} */
	var node;

	/**
	 * Whether or not the first item is a text/element node. If not, we need to
	 * create an additional comment node to act as `effect.nodes.start`
	 */
	var has_start = !content.startsWith('<!>');

	return () => {
		if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
			assign_nodes(_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node, null);
			return _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;
		}

		if (node === undefined) {
			node = (0,_reconciler_js__WEBPACK_IMPORTED_MODULE_2__.create_fragment_from_html)(has_start ? content : '<!>' + content);
			if (!is_fragment) node = /** @type {Node} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(node));
		}

		var clone = /** @type {TemplateNode} */ (
			use_import_node || _operations_js__WEBPACK_IMPORTED_MODULE_1__.is_firefox ? document.importNode(node, true) : node.cloneNode(true)
		);

		if (is_fragment) {
			var start = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(clone));
			var end = /** @type {TemplateNode} */ (clone.lastChild);

			assign_nodes(start, end);
		} else {
			assign_nodes(clone, clone);
		}

		return clone;
	};
}

/**
 * @param {string} content
 * @param {number} flags
 * @returns {() => Node | Node[]}
 */
/*#__NO_SIDE_EFFECTS__*/
function template_with_script(content, flags) {
	var fn = template(content, flags);
	return () => run_scripts(/** @type {Element | DocumentFragment} */ (fn()));
}

/**
 * @param {string} content
 * @param {number} flags
 * @param {'svg' | 'math'} ns
 * @returns {() => Node | Node[]}
 */
/*#__NO_SIDE_EFFECTS__*/
function ns_template(content, flags, ns = 'svg') {
	/**
	 * Whether or not the first item is a text/element node. If not, we need to
	 * create an additional comment node to act as `effect.nodes.start`
	 */
	var has_start = !content.startsWith('<!>');

	var is_fragment = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE_FRAGMENT) !== 0;
	var wrapped = `<${ns}>${has_start ? content : '<!>' + content}</${ns}>`;

	/** @type {Element | DocumentFragment} */
	var node;

	return () => {
		if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
			assign_nodes(_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node, null);
			return _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;
		}

		if (!node) {
			var fragment = /** @type {DocumentFragment} */ ((0,_reconciler_js__WEBPACK_IMPORTED_MODULE_2__.create_fragment_from_html)(wrapped));
			var root = /** @type {Element} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(fragment));

			if (is_fragment) {
				node = document.createDocumentFragment();
				while ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(root)) {
					node.appendChild(/** @type {Node} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(root)));
				}
			} else {
				node = /** @type {Element} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(root));
			}
		}

		var clone = /** @type {TemplateNode} */ (node.cloneNode(true));

		if (is_fragment) {
			var start = /** @type {TemplateNode} */ ((0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(clone));
			var end = /** @type {TemplateNode} */ (clone.lastChild);

			assign_nodes(start, end);
		} else {
			assign_nodes(clone, clone);
		}

		return clone;
	};
}

/**
 * @param {string} content
 * @param {number} flags
 * @returns {() => Node | Node[]}
 */
/*#__NO_SIDE_EFFECTS__*/
function svg_template_with_script(content, flags) {
	var fn = ns_template(content, flags);
	return () => run_scripts(/** @type {Element | DocumentFragment} */ (fn()));
}

/**
 * @param {string} content
 * @param {number} flags
 * @returns {() => Node | Node[]}
 */
/*#__NO_SIDE_EFFECTS__*/
function mathml_template(content, flags) {
	return ns_template(content, flags, 'math');
}

/**
 * Creating a document fragment from HTML that contains script tags will not execute
 * the scripts. We need to replace the script tags with new ones so that they are executed.
 * @param {Element | DocumentFragment} node
 * @returns {Node | Node[]}
 */
function run_scripts(node) {
	// scripts were SSR'd, in which case they will run
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) return node;

	const is_fragment = node.nodeType === 11;
	const scripts =
		/** @type {HTMLElement} */ (node).tagName === 'SCRIPT'
			? [/** @type {HTMLScriptElement} */ (node)]
			: node.querySelectorAll('script');
	const effect = /** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect);

	for (const script of scripts) {
		const clone = document.createElement('script');
		for (var attribute of script.attributes) {
			clone.setAttribute(attribute.name, attribute.value);
		}

		clone.textContent = script.textContent;

		// The script has changed - if it's at the edges, the effect now points at dead nodes
		if (is_fragment ? node.firstChild === script : node === script) {
			effect.nodes_start = clone;
		}
		if (is_fragment ? node.lastChild === script : node === script) {
			effect.nodes_end = clone;
		}

		script.replaceWith(clone);
	}
	return node;
}

/**
 * Don't mark this as side-effect-free, hydration needs to walk all nodes
 * @param {any} value
 */
function text(value = '') {
	if (!_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		var t = (0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.create_text)(value + '');
		assign_nodes(t, t);
		return t;
	}

	var node = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;

	if (node.nodeType !== 3) {
		// if an {expression} is empty during SSR, we need to insert an empty text node
		node.before((node = (0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.create_text)()));
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.set_hydrate_node)(node);
	}

	assign_nodes(node, node);
	return node;
}

function comment() {
	// we're not delegating to `template` here for performance reasons
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		assign_nodes(_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node, null);
		return _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;
	}

	var frag = document.createDocumentFragment();
	var start = document.createComment('');
	var anchor = (0,_operations_js__WEBPACK_IMPORTED_MODULE_1__.create_text)();
	frag.append(start, anchor);

	assign_nodes(start, anchor);

	return frag;
}

/**
 * Assign the created (or in hydration mode, traversed) dom elements to the current block
 * and insert the elements into the dom (in client mode).
 * @param {Text | Comment | Element} anchor
 * @param {DocumentFragment | Element} dom
 */
function append(anchor, dom) {
	if (_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating) {
		/** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect).nodes_end = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node;
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_next)();
		return;
	}

	if (anchor === null) {
		// edge case — void `<svelte:element>` with content
		return;
	}

	anchor.before(/** @type {Node} */ (dom));
}

let uid = 1;

function reset_props_id() {
	uid = 1;
}

/**
 * Create (or hydrate) an unique UID for the component instance.
 */
function props_id() {
	if (
		_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrating &&
		_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node &&
		_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node.nodeType === 8 &&
		_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node.textContent?.startsWith('#s')
	) {
		const id = _hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_node.textContent.substring(1);
		(0,_hydration_js__WEBPACK_IMPORTED_MODULE_0__.hydrate_next)();
		return id;
	}

	return 'c' + uid++;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_invalid_checkbox_value: () => (/* binding */ bind_invalid_checkbox_value),
/* harmony export */   bind_invalid_export: () => (/* binding */ bind_invalid_export),
/* harmony export */   bind_not_bindable: () => (/* binding */ bind_not_bindable),
/* harmony export */   component_api_changed: () => (/* binding */ component_api_changed),
/* harmony export */   component_api_invalid_new: () => (/* binding */ component_api_invalid_new),
/* harmony export */   derived_references_self: () => (/* binding */ derived_references_self),
/* harmony export */   each_key_duplicate: () => (/* binding */ each_key_duplicate),
/* harmony export */   effect_in_teardown: () => (/* binding */ effect_in_teardown),
/* harmony export */   effect_in_unowned_derived: () => (/* binding */ effect_in_unowned_derived),
/* harmony export */   effect_orphan: () => (/* binding */ effect_orphan),
/* harmony export */   effect_update_depth_exceeded: () => (/* binding */ effect_update_depth_exceeded),
/* harmony export */   hydration_failed: () => (/* binding */ hydration_failed),
/* harmony export */   invalid_snippet: () => (/* binding */ invalid_snippet),
/* harmony export */   lifecycle_legacy_only: () => (/* binding */ lifecycle_legacy_only),
/* harmony export */   props_invalid_value: () => (/* binding */ props_invalid_value),
/* harmony export */   props_rest_readonly: () => (/* binding */ props_rest_readonly),
/* harmony export */   rune_outside_svelte: () => (/* binding */ rune_outside_svelte),
/* harmony export */   state_descriptors_fixed: () => (/* binding */ state_descriptors_fixed),
/* harmony export */   state_prototype_fixed: () => (/* binding */ state_prototype_fixed),
/* harmony export */   state_unsafe_local_read: () => (/* binding */ state_unsafe_local_read),
/* harmony export */   state_unsafe_mutation: () => (/* binding */ state_unsafe_mutation)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* This file is generated by scripts/process-messages/index.js. Do not edit! */



/**
 * Using `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead
 * @returns {never}
 */
function bind_invalid_checkbox_value() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`bind_invalid_checkbox_value\nUsing \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
	}
}

/**
 * Component %component% has an export named `%key%` that a consumer component is trying to access using `bind:%key%`, which is disallowed. Instead, use `bind:this` (e.g. `<%name% bind:this={component} />`) and then access the property on the bound component instance (e.g. `component.%key%`)
 * @param {string} component
 * @param {string} key
 * @param {string} name
 * @returns {never}
 */
function bind_invalid_export(component, key, name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`bind_invalid_export\nComponent ${component} has an export named \`${key}\` that a consumer component is trying to access using \`bind:${key}\`, which is disallowed. Instead, use \`bind:this\` (e.g. \`<${name} bind:this={component} />\`) and then access the property on the bound component instance (e.g. \`component.${key}\`)\nhttps://svelte.dev/e/bind_invalid_export`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/bind_invalid_export`);
	}
}

/**
 * A component is attempting to bind to a non-bindable property `%key%` belonging to %component% (i.e. `<%name% bind:%key%={...}>`). To mark a property as bindable: `let { %key% = $bindable() } = $props()`
 * @param {string} key
 * @param {string} component
 * @param {string} name
 * @returns {never}
 */
function bind_not_bindable(key, component, name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`bind_not_bindable\nA component is attempting to bind to a non-bindable property \`${key}\` belonging to ${component} (i.e. \`<${name} bind:${key}={...}>\`). To mark a property as bindable: \`let { ${key} = $bindable() } = $props()\`\nhttps://svelte.dev/e/bind_not_bindable`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/bind_not_bindable`);
	}
}

/**
 * %parent% called `%method%` on an instance of %component%, which is no longer valid in Svelte 5
 * @param {string} parent
 * @param {string} method
 * @param {string} component
 * @returns {never}
 */
function component_api_changed(parent, method, component) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`component_api_changed\n${parent} called \`${method}\` on an instance of ${component}, which is no longer valid in Svelte 5\nhttps://svelte.dev/e/component_api_changed`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/component_api_changed`);
	}
}

/**
 * Attempted to instantiate %component% with `new %name%`, which is no longer valid in Svelte 5. If this component is not under your control, set the `compatibility.componentApi` compiler option to `4` to keep it working.
 * @param {string} component
 * @param {string} name
 * @returns {never}
 */
function component_api_invalid_new(component, name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`component_api_invalid_new\nAttempted to instantiate ${component} with \`new ${name}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.\nhttps://svelte.dev/e/component_api_invalid_new`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/component_api_invalid_new`);
	}
}

/**
 * A derived value cannot reference itself recursively
 * @returns {never}
 */
function derived_references_self() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/derived_references_self`);
	}
}

/**
 * Keyed each block has duplicate key `%value%` at indexes %a% and %b%
 * @param {string} a
 * @param {string} b
 * @param {string | undefined | null} [value]
 * @returns {never}
 */
function each_key_duplicate(a, b, value) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`each_key_duplicate\n${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}\nhttps://svelte.dev/e/each_key_duplicate`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/each_key_duplicate`);
	}
}

/**
 * `%rune%` cannot be used inside an effect cleanup function
 * @param {string} rune
 * @returns {never}
 */
function effect_in_teardown(rune) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`effect_in_teardown\n\`${rune}\` cannot be used inside an effect cleanup function\nhttps://svelte.dev/e/effect_in_teardown`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/effect_in_teardown`);
	}
}

/**
 * Effect cannot be created inside a `$derived` value that was not itself created inside an effect
 * @returns {never}
 */
function effect_in_unowned_derived() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`effect_in_unowned_derived\nEffect cannot be created inside a \`$derived\` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
	}
}

/**
 * `%rune%` can only be used inside an effect (e.g. during component initialisation)
 * @param {string} rune
 * @returns {never}
 */
function effect_orphan(rune) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`effect_orphan\n\`${rune}\` can only be used inside an effect (e.g. during component initialisation)\nhttps://svelte.dev/e/effect_orphan`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/effect_orphan`);
	}
}

/**
 * Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
 * @returns {never}
 */
function effect_update_depth_exceeded() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`effect_update_depth_exceeded\nMaximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops\nhttps://svelte.dev/e/effect_update_depth_exceeded`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
	}
}

/**
 * Failed to hydrate the application
 * @returns {never}
 */
function hydration_failed() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`hydration_failed\nFailed to hydrate the application\nhttps://svelte.dev/e/hydration_failed`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/hydration_failed`);
	}
}

/**
 * Could not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`
 * @returns {never}
 */
function invalid_snippet() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`invalid_snippet\nCould not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`\nhttps://svelte.dev/e/invalid_snippet`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/invalid_snippet`);
	}
}

/**
 * `%name%(...)` cannot be used in runes mode
 * @param {string} name
 * @returns {never}
 */
function lifecycle_legacy_only(name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`lifecycle_legacy_only\n\`${name}(...)\` cannot be used in runes mode\nhttps://svelte.dev/e/lifecycle_legacy_only`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/lifecycle_legacy_only`);
	}
}

/**
 * Cannot do `bind:%key%={undefined}` when `%key%` has a fallback value
 * @param {string} key
 * @returns {never}
 */
function props_invalid_value(key) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`props_invalid_value\nCannot do \`bind:${key}={undefined}\` when \`${key}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/props_invalid_value`);
	}
}

/**
 * Rest element properties of `$props()` such as `%property%` are readonly
 * @param {string} property
 * @returns {never}
 */
function props_rest_readonly(property) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`props_rest_readonly\nRest element properties of \`$props()\` such as \`${property}\` are readonly\nhttps://svelte.dev/e/props_rest_readonly`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/props_rest_readonly`);
	}
}

/**
 * The `%rune%` rune is only available inside `.svelte` and `.svelte.js/ts` files
 * @param {string} rune
 * @returns {never}
 */
function rune_outside_svelte(rune) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`rune_outside_svelte\nThe \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
	}
}

/**
 * Property descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.
 * @returns {never}
 */
function state_descriptors_fixed() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`state_descriptors_fixed\nProperty descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.\nhttps://svelte.dev/e/state_descriptors_fixed`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
	}
}

/**
 * Cannot set prototype of `$state` object
 * @returns {never}
 */
function state_prototype_fixed() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`state_prototype_fixed\nCannot set prototype of \`$state\` object\nhttps://svelte.dev/e/state_prototype_fixed`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
	}
}

/**
 * Reading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state
 * @returns {never}
 */
function state_unsafe_local_read() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`state_unsafe_local_read\nReading state that was created inside the same derived is forbidden. Consider using \`untrack\` to read locally created state\nhttps://svelte.dev/e/state_unsafe_local_read`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
	}
}

/**
 * Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`
 * @returns {never}
 */
function state_unsafe_mutation() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`\nhttps://svelte.dev/e/state_unsafe_mutation`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
	}
}

/***/ }),

/***/ "./node_modules/svelte/src/internal/client/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_OWNER: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.ADD_OWNER),
/* harmony export */   CLASS: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.CLASS),
/* harmony export */   FILENAME: () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.FILENAME),
/* harmony export */   HMR: () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.HMR),
/* harmony export */   NAMESPACE_SVG: () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE_SVG),
/* harmony export */   STYLE: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.STYLE),
/* harmony export */   action: () => (/* reexport safe */ _dom_elements_actions_js__WEBPACK_IMPORTED_MODULE_22__.action),
/* harmony export */   add_legacy_event_listener: () => (/* reexport safe */ _dom_legacy_misc_js__WEBPACK_IMPORTED_MODULE_42__.add_legacy_event_listener),
/* harmony export */   add_locations: () => (/* reexport safe */ _dev_elements_js__WEBPACK_IMPORTED_MODULE_4__.add_locations),
/* harmony export */   add_owner: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.add_owner),
/* harmony export */   add_owner_effect: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.add_owner_effect),
/* harmony export */   add_owner_to_class: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.add_owner_to_class),
/* harmony export */   animation: () => (/* reexport safe */ _dom_elements_transitions_js__WEBPACK_IMPORTED_MODULE_28__.animation),
/* harmony export */   append: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.append),
/* harmony export */   append_styles: () => (/* reexport safe */ _dom_css_js__WEBPACK_IMPORTED_MODULE_21__.append_styles),
/* harmony export */   apply: () => (/* reexport safe */ _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_25__.apply),
/* harmony export */   assign: () => (/* reexport safe */ _dev_assign_js__WEBPACK_IMPORTED_MODULE_2__.assign),
/* harmony export */   assign_and: () => (/* reexport safe */ _dev_assign_js__WEBPACK_IMPORTED_MODULE_2__.assign_and),
/* harmony export */   assign_nullish: () => (/* reexport safe */ _dev_assign_js__WEBPACK_IMPORTED_MODULE_2__.assign_nullish),
/* harmony export */   assign_or: () => (/* reexport safe */ _dev_assign_js__WEBPACK_IMPORTED_MODULE_2__.assign_or),
/* harmony export */   attr: () => (/* reexport safe */ _shared_attributes_js__WEBPACK_IMPORTED_MODULE_57__.attr),
/* harmony export */   autofocus: () => (/* reexport safe */ _dom_elements_misc_js__WEBPACK_IMPORTED_MODULE_26__.autofocus),
/* harmony export */   "await": () => (/* reexport safe */ _dom_blocks_await_js__WEBPACK_IMPORTED_MODULE_10__.await_block),
/* harmony export */   bind_active_element: () => (/* reexport safe */ _dom_elements_bindings_document_js__WEBPACK_IMPORTED_MODULE_29__.bind_active_element),
/* harmony export */   bind_buffered: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_buffered),
/* harmony export */   bind_checked: () => (/* reexport safe */ _dom_elements_bindings_input_js__WEBPACK_IMPORTED_MODULE_30__.bind_checked),
/* harmony export */   bind_content_editable: () => (/* reexport safe */ _dom_elements_bindings_universal_js__WEBPACK_IMPORTED_MODULE_37__.bind_content_editable),
/* harmony export */   bind_current_time: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_current_time),
/* harmony export */   bind_element_size: () => (/* reexport safe */ _dom_elements_bindings_size_js__WEBPACK_IMPORTED_MODULE_35__.bind_element_size),
/* harmony export */   bind_ended: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_ended),
/* harmony export */   bind_files: () => (/* reexport safe */ _dom_elements_bindings_input_js__WEBPACK_IMPORTED_MODULE_30__.bind_files),
/* harmony export */   bind_focused: () => (/* reexport safe */ _dom_elements_bindings_universal_js__WEBPACK_IMPORTED_MODULE_37__.bind_focused),
/* harmony export */   bind_group: () => (/* reexport safe */ _dom_elements_bindings_input_js__WEBPACK_IMPORTED_MODULE_30__.bind_group),
/* harmony export */   bind_muted: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_muted),
/* harmony export */   bind_online: () => (/* reexport safe */ _dom_elements_bindings_navigator_js__WEBPACK_IMPORTED_MODULE_32__.bind_online),
/* harmony export */   bind_paused: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_paused),
/* harmony export */   bind_playback_rate: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_playback_rate),
/* harmony export */   bind_played: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_played),
/* harmony export */   bind_prop: () => (/* reexport safe */ _dom_elements_bindings_props_js__WEBPACK_IMPORTED_MODULE_33__.bind_prop),
/* harmony export */   bind_property: () => (/* reexport safe */ _dom_elements_bindings_universal_js__WEBPACK_IMPORTED_MODULE_37__.bind_property),
/* harmony export */   bind_ready_state: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_ready_state),
/* harmony export */   bind_resize_observer: () => (/* reexport safe */ _dom_elements_bindings_size_js__WEBPACK_IMPORTED_MODULE_35__.bind_resize_observer),
/* harmony export */   bind_seekable: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_seekable),
/* harmony export */   bind_seeking: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_seeking),
/* harmony export */   bind_select_value: () => (/* reexport safe */ _dom_elements_bindings_select_js__WEBPACK_IMPORTED_MODULE_34__.bind_select_value),
/* harmony export */   bind_this: () => (/* reexport safe */ _dom_elements_bindings_this_js__WEBPACK_IMPORTED_MODULE_36__.bind_this),
/* harmony export */   bind_value: () => (/* reexport safe */ _dom_elements_bindings_input_js__WEBPACK_IMPORTED_MODULE_30__.bind_value),
/* harmony export */   bind_volume: () => (/* reexport safe */ _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__.bind_volume),
/* harmony export */   bind_window_scroll: () => (/* reexport safe */ _dom_elements_bindings_window_js__WEBPACK_IMPORTED_MODULE_38__.bind_window_scroll),
/* harmony export */   bind_window_size: () => (/* reexport safe */ _dom_elements_bindings_window_js__WEBPACK_IMPORTED_MODULE_38__.bind_window_size),
/* harmony export */   boundary: () => (/* reexport safe */ _dom_blocks_boundary_js__WEBPACK_IMPORTED_MODULE_49__.boundary),
/* harmony export */   bubble_event: () => (/* reexport safe */ _dom_legacy_misc_js__WEBPACK_IMPORTED_MODULE_42__.bubble_event),
/* harmony export */   check_target: () => (/* reexport safe */ _dev_legacy_js__WEBPACK_IMPORTED_MODULE_7__.check_target),
/* harmony export */   child: () => (/* reexport safe */ _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__.child),
/* harmony export */   cleanup_styles: () => (/* reexport safe */ _dev_css_js__WEBPACK_IMPORTED_MODULE_3__.cleanup_styles),
/* harmony export */   clsx: () => (/* reexport safe */ _shared_attributes_js__WEBPACK_IMPORTED_MODULE_57__.clsx),
/* harmony export */   comment: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.comment),
/* harmony export */   component: () => (/* reexport safe */ _dom_blocks_svelte_component_js__WEBPACK_IMPORTED_MODULE_18__.component),
/* harmony export */   create_custom_element: () => (/* reexport safe */ _dom_elements_custom_element_js__WEBPACK_IMPORTED_MODULE_55__.create_custom_element),
/* harmony export */   css_props: () => (/* reexport safe */ _dom_blocks_css_props_js__WEBPACK_IMPORTED_MODULE_13__.css_props),
/* harmony export */   deep_read: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.deep_read),
/* harmony export */   deep_read_state: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.deep_read_state),
/* harmony export */   delegate: () => (/* reexport safe */ _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_25__.delegate),
/* harmony export */   derived: () => (/* reexport safe */ _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_44__.derived),
/* harmony export */   derived_safe_equal: () => (/* reexport safe */ _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_44__.derived_safe_equal),
/* harmony export */   document: () => (/* reexport safe */ _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__.$document),
/* harmony export */   each: () => (/* reexport safe */ _dom_blocks_each_js__WEBPACK_IMPORTED_MODULE_14__.each),
/* harmony export */   effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.effect),
/* harmony export */   effect_root: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.effect_root),
/* harmony export */   effect_tracking: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.effect_tracking),
/* harmony export */   element: () => (/* reexport safe */ _dom_blocks_svelte_element_js__WEBPACK_IMPORTED_MODULE_19__.element),
/* harmony export */   equals: () => (/* reexport safe */ _dev_equality_js__WEBPACK_IMPORTED_MODULE_61__.equals),
/* harmony export */   event: () => (/* reexport safe */ _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_25__.event),
/* harmony export */   exclude_from_object: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.exclude_from_object),
/* harmony export */   fallback: () => (/* reexport safe */ _shared_utils_js__WEBPACK_IMPORTED_MODULE_59__.fallback),
/* harmony export */   first_child: () => (/* reexport safe */ _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__.first_child),
/* harmony export */   flush: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.flushSync),
/* harmony export */   get: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.get),
/* harmony export */   head: () => (/* reexport safe */ _dom_blocks_svelte_head_js__WEBPACK_IMPORTED_MODULE_20__.head),
/* harmony export */   hmr: () => (/* reexport safe */ _dev_hmr_js__WEBPACK_IMPORTED_MODULE_5__.hmr),
/* harmony export */   html: () => (/* reexport safe */ _dom_blocks_html_js__WEBPACK_IMPORTED_MODULE_15__.html),
/* harmony export */   hydrate_template: () => (/* reexport safe */ _dom_hydration_js__WEBPACK_IMPORTED_MODULE_39__.hydrate_template),
/* harmony export */   "if": () => (/* reexport safe */ _dom_blocks_if_js__WEBPACK_IMPORTED_MODULE_11__.if_block),
/* harmony export */   index: () => (/* reexport safe */ _dom_blocks_each_js__WEBPACK_IMPORTED_MODULE_14__.index),
/* harmony export */   init: () => (/* reexport safe */ _dom_legacy_lifecycle_js__WEBPACK_IMPORTED_MODULE_41__.init),
/* harmony export */   init_select: () => (/* reexport safe */ _dom_elements_bindings_select_js__WEBPACK_IMPORTED_MODULE_34__.init_select),
/* harmony export */   inspect: () => (/* reexport safe */ _dev_inspect_js__WEBPACK_IMPORTED_MODULE_9__.inspect),
/* harmony export */   invalid_default_snippet: () => (/* reexport safe */ _shared_validate_js__WEBPACK_IMPORTED_MODULE_60__.invalid_default_snippet),
/* harmony export */   invalidate_inner_signals: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.invalidate_inner_signals),
/* harmony export */   invalidate_store: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.invalidate_store),
/* harmony export */   key: () => (/* reexport safe */ _dom_blocks_key_js__WEBPACK_IMPORTED_MODULE_12__.key_block),
/* harmony export */   legacy_api: () => (/* reexport safe */ _dev_legacy_js__WEBPACK_IMPORTED_MODULE_7__.legacy_api),
/* harmony export */   legacy_pre_effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.legacy_pre_effect),
/* harmony export */   legacy_pre_effect_reset: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.legacy_pre_effect_reset),
/* harmony export */   legacy_rest_props: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.legacy_rest_props),
/* harmony export */   log_if_contains_state: () => (/* reexport safe */ _dev_console_log_js__WEBPACK_IMPORTED_MODULE_62__.log_if_contains_state),
/* harmony export */   mark_module_end: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.mark_module_end),
/* harmony export */   mark_module_start: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.mark_module_start),
/* harmony export */   mark_store_binding: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.mark_store_binding),
/* harmony export */   mathml_template: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.mathml_template),
/* harmony export */   mutable_state: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.mutable_state),
/* harmony export */   mutate: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.mutate),
/* harmony export */   next: () => (/* reexport safe */ _dom_hydration_js__WEBPACK_IMPORTED_MODULE_39__.next),
/* harmony export */   noop: () => (/* reexport safe */ _shared_utils_js__WEBPACK_IMPORTED_MODULE_59__.noop),
/* harmony export */   ns_template: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.ns_template),
/* harmony export */   once: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.once),
/* harmony export */   pop: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_1__.pop),
/* harmony export */   preventDefault: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.preventDefault),
/* harmony export */   prop: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.prop),
/* harmony export */   props_id: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.props_id),
/* harmony export */   proxy: () => (/* reexport safe */ _proxy_js__WEBPACK_IMPORTED_MODULE_54__.proxy),
/* harmony export */   push: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_1__.push),
/* harmony export */   raf: () => (/* reexport safe */ _timing_js__WEBPACK_IMPORTED_MODULE_53__.raf),
/* harmony export */   reactive_import: () => (/* reexport safe */ _dom_legacy_misc_js__WEBPACK_IMPORTED_MODULE_42__.reactive_import),
/* harmony export */   remove_input_defaults: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.remove_input_defaults),
/* harmony export */   remove_textarea_child: () => (/* reexport safe */ _dom_elements_misc_js__WEBPACK_IMPORTED_MODULE_26__.remove_textarea_child),
/* harmony export */   render_effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.render_effect),
/* harmony export */   replay_events: () => (/* reexport safe */ _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_25__.replay_events),
/* harmony export */   reset: () => (/* reexport safe */ _dom_hydration_js__WEBPACK_IMPORTED_MODULE_39__.reset),
/* harmony export */   rest_props: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.rest_props),
/* harmony export */   safe_get: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.safe_get),
/* harmony export */   sanitize_slots: () => (/* reexport safe */ _dom_blocks_slot_js__WEBPACK_IMPORTED_MODULE_16__.sanitize_slots),
/* harmony export */   select_option: () => (/* reexport safe */ _dom_elements_bindings_select_js__WEBPACK_IMPORTED_MODULE_34__.select_option),
/* harmony export */   self: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.self),
/* harmony export */   set: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.set),
/* harmony export */   set_attribute: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_attribute),
/* harmony export */   set_attributes: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_attributes),
/* harmony export */   set_checked: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_checked),
/* harmony export */   set_class: () => (/* reexport safe */ _dom_elements_class_js__WEBPACK_IMPORTED_MODULE_24__.set_class),
/* harmony export */   set_custom_element_data: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_custom_element_data),
/* harmony export */   set_default_checked: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_default_checked),
/* harmony export */   set_default_value: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_default_value),
/* harmony export */   set_selected: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_selected),
/* harmony export */   set_style: () => (/* reexport safe */ _dom_elements_style_js__WEBPACK_IMPORTED_MODULE_27__.set_style),
/* harmony export */   set_text: () => (/* reexport safe */ _render_js__WEBPACK_IMPORTED_MODULE_50__.set_text),
/* harmony export */   set_value: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_value),
/* harmony export */   set_xlink_attribute: () => (/* reexport safe */ _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__.set_xlink_attribute),
/* harmony export */   setup_stores: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.setup_stores),
/* harmony export */   sibling: () => (/* reexport safe */ _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__.sibling),
/* harmony export */   skip_ownership_validation: () => (/* reexport safe */ _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__.skip_ownership_validation),
/* harmony export */   slot: () => (/* reexport safe */ _dom_blocks_slot_js__WEBPACK_IMPORTED_MODULE_16__.slot),
/* harmony export */   snapshot: () => (/* reexport safe */ _shared_clone_js__WEBPACK_IMPORTED_MODULE_58__.snapshot),
/* harmony export */   snippet: () => (/* reexport safe */ _dom_blocks_snippet_js__WEBPACK_IMPORTED_MODULE_17__.snippet),
/* harmony export */   spread_props: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.spread_props),
/* harmony export */   state: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.state),
/* harmony export */   stopImmediatePropagation: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.stopImmediatePropagation),
/* harmony export */   stopPropagation: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.stopPropagation),
/* harmony export */   store_get: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.store_get),
/* harmony export */   store_mutate: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.store_mutate),
/* harmony export */   store_set: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.store_set),
/* harmony export */   store_unsub: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.store_unsub),
/* harmony export */   strict_equals: () => (/* reexport safe */ _dev_equality_js__WEBPACK_IMPORTED_MODULE_61__.strict_equals),
/* harmony export */   svg_template_with_script: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.svg_template_with_script),
/* harmony export */   template: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.template),
/* harmony export */   template_effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.template_effect),
/* harmony export */   template_with_script: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.template_with_script),
/* harmony export */   text: () => (/* reexport safe */ _dom_template_js__WEBPACK_IMPORTED_MODULE_43__.text),
/* harmony export */   tick: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.tick),
/* harmony export */   trace: () => (/* reexport safe */ _dev_tracing_js__WEBPACK_IMPORTED_MODULE_8__.trace),
/* harmony export */   transition: () => (/* reexport safe */ _dom_elements_transitions_js__WEBPACK_IMPORTED_MODULE_28__.transition),
/* harmony export */   trusted: () => (/* reexport safe */ _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__.trusted),
/* harmony export */   untrack: () => (/* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_51__.untrack),
/* harmony export */   update: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.update),
/* harmony export */   update_legacy_props: () => (/* reexport safe */ _dom_legacy_misc_js__WEBPACK_IMPORTED_MODULE_42__.update_legacy_props),
/* harmony export */   update_pre: () => (/* reexport safe */ _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__.update_pre),
/* harmony export */   update_pre_prop: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.update_pre_prop),
/* harmony export */   update_pre_store: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.update_pre_store),
/* harmony export */   update_prop: () => (/* reexport safe */ _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__.update_prop),
/* harmony export */   update_store: () => (/* reexport safe */ _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__.update_store),
/* harmony export */   user_effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.user_effect),
/* harmony export */   user_pre_effect: () => (/* reexport safe */ _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__.user_pre_effect),
/* harmony export */   validate_binding: () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_52__.validate_binding),
/* harmony export */   validate_dynamic_element_tag: () => (/* reexport safe */ _shared_validate_js__WEBPACK_IMPORTED_MODULE_60__.validate_dynamic_element_tag),
/* harmony export */   validate_each_keys: () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_52__.validate_each_keys),
/* harmony export */   validate_store: () => (/* reexport safe */ _shared_validate_js__WEBPACK_IMPORTED_MODULE_60__.validate_store),
/* harmony export */   validate_void_dynamic_element: () => (/* reexport safe */ _shared_validate_js__WEBPACK_IMPORTED_MODULE_60__.validate_void_dynamic_element),
/* harmony export */   window: () => (/* reexport safe */ _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__.$window),
/* harmony export */   wrap_snippet: () => (/* reexport safe */ _dom_blocks_snippet_js__WEBPACK_IMPORTED_MODULE_17__.wrap_snippet)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _dev_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev/assign.js */ "./node_modules/svelte/src/internal/client/dev/assign.js");
/* harmony import */ var _dev_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev/css.js */ "./node_modules/svelte/src/internal/client/dev/css.js");
/* harmony import */ var _dev_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/elements.js */ "./node_modules/svelte/src/internal/client/dev/elements.js");
/* harmony import */ var _dev_hmr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/hmr.js */ "./node_modules/svelte/src/internal/client/dev/hmr.js");
/* harmony import */ var _dev_ownership_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/ownership.js */ "./node_modules/svelte/src/internal/client/dev/ownership.js");
/* harmony import */ var _dev_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/legacy.js */ "./node_modules/svelte/src/internal/client/dev/legacy.js");
/* harmony import */ var _dev_tracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dev/tracing.js */ "./node_modules/svelte/src/internal/client/dev/tracing.js");
/* harmony import */ var _dev_inspect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dev/inspect.js */ "./node_modules/svelte/src/internal/client/dev/inspect.js");
/* harmony import */ var _dom_blocks_await_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/blocks/await.js */ "./node_modules/svelte/src/internal/client/dom/blocks/await.js");
/* harmony import */ var _dom_blocks_if_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom/blocks/if.js */ "./node_modules/svelte/src/internal/client/dom/blocks/if.js");
/* harmony import */ var _dom_blocks_key_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/blocks/key.js */ "./node_modules/svelte/src/internal/client/dom/blocks/key.js");
/* harmony import */ var _dom_blocks_css_props_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/blocks/css-props.js */ "./node_modules/svelte/src/internal/client/dom/blocks/css-props.js");
/* harmony import */ var _dom_blocks_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom/blocks/each.js */ "./node_modules/svelte/src/internal/client/dom/blocks/each.js");
/* harmony import */ var _dom_blocks_html_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom/blocks/html.js */ "./node_modules/svelte/src/internal/client/dom/blocks/html.js");
/* harmony import */ var _dom_blocks_slot_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/blocks/slot.js */ "./node_modules/svelte/src/internal/client/dom/blocks/slot.js");
/* harmony import */ var _dom_blocks_snippet_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dom/blocks/snippet.js */ "./node_modules/svelte/src/internal/client/dom/blocks/snippet.js");
/* harmony import */ var _dom_blocks_svelte_component_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/blocks/svelte-component.js */ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js");
/* harmony import */ var _dom_blocks_svelte_element_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dom/blocks/svelte-element.js */ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js");
/* harmony import */ var _dom_blocks_svelte_head_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dom/blocks/svelte-head.js */ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js");
/* harmony import */ var _dom_css_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dom/css.js */ "./node_modules/svelte/src/internal/client/dom/css.js");
/* harmony import */ var _dom_elements_actions_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dom/elements/actions.js */ "./node_modules/svelte/src/internal/client/dom/elements/actions.js");
/* harmony import */ var _dom_elements_attributes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dom/elements/attributes.js */ "./node_modules/svelte/src/internal/client/dom/elements/attributes.js");
/* harmony import */ var _dom_elements_class_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dom/elements/class.js */ "./node_modules/svelte/src/internal/client/dom/elements/class.js");
/* harmony import */ var _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dom/elements/events.js */ "./node_modules/svelte/src/internal/client/dom/elements/events.js");
/* harmony import */ var _dom_elements_misc_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dom/elements/misc.js */ "./node_modules/svelte/src/internal/client/dom/elements/misc.js");
/* harmony import */ var _dom_elements_style_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dom/elements/style.js */ "./node_modules/svelte/src/internal/client/dom/elements/style.js");
/* harmony import */ var _dom_elements_transitions_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dom/elements/transitions.js */ "./node_modules/svelte/src/internal/client/dom/elements/transitions.js");
/* harmony import */ var _dom_elements_bindings_document_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dom/elements/bindings/document.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/document.js");
/* harmony import */ var _dom_elements_bindings_input_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dom/elements/bindings/input.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/input.js");
/* harmony import */ var _dom_elements_bindings_media_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dom/elements/bindings/media.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/media.js");
/* harmony import */ var _dom_elements_bindings_navigator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dom/elements/bindings/navigator.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js");
/* harmony import */ var _dom_elements_bindings_props_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dom/elements/bindings/props.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/props.js");
/* harmony import */ var _dom_elements_bindings_select_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dom/elements/bindings/select.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/select.js");
/* harmony import */ var _dom_elements_bindings_size_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dom/elements/bindings/size.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/size.js");
/* harmony import */ var _dom_elements_bindings_this_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dom/elements/bindings/this.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/this.js");
/* harmony import */ var _dom_elements_bindings_universal_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dom/elements/bindings/universal.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js");
/* harmony import */ var _dom_elements_bindings_window_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dom/elements/bindings/window.js */ "./node_modules/svelte/src/internal/client/dom/elements/bindings/window.js");
/* harmony import */ var _dom_hydration_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dom/hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dom/legacy/event-modifiers.js */ "./node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js");
/* harmony import */ var _dom_legacy_lifecycle_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dom/legacy/lifecycle.js */ "./node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js");
/* harmony import */ var _dom_legacy_misc_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dom/legacy/misc.js */ "./node_modules/svelte/src/internal/client/dom/legacy/misc.js");
/* harmony import */ var _dom_template_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dom/template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./reactivity/deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _reactivity_props_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./reactivity/props.js */ "./node_modules/svelte/src/internal/client/reactivity/props.js");
/* harmony import */ var _reactivity_store_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./reactivity/store.js */ "./node_modules/svelte/src/internal/client/reactivity/store.js");
/* harmony import */ var _dom_blocks_boundary_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dom/blocks/boundary.js */ "./node_modules/svelte/src/internal/client/dom/blocks/boundary.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./validate.js */ "./node_modules/svelte/src/internal/client/validate.js");
/* harmony import */ var _timing_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./timing.js */ "./node_modules/svelte/src/internal/client/timing.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./proxy.js */ "./node_modules/svelte/src/internal/client/proxy.js");
/* harmony import */ var _dom_elements_custom_element_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dom/elements/custom-element.js */ "./node_modules/svelte/src/internal/client/dom/elements/custom-element.js");
/* harmony import */ var _dom_operations_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./dom/operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _shared_attributes_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../shared/attributes.js */ "./node_modules/svelte/src/internal/shared/attributes.js");
/* harmony import */ var _shared_clone_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../shared/clone.js */ "./node_modules/svelte/src/internal/shared/clone.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _shared_validate_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../shared/validate.js */ "./node_modules/svelte/src/internal/shared/validate.js");
/* harmony import */ var _dev_equality_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./dev/equality.js */ "./node_modules/svelte/src/internal/client/dev/equality.js");
/* harmony import */ var _dev_console_log_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./dev/console-log.js */ "./node_modules/svelte/src/internal/client/dev/console-log.js");

































































/***/ }),

/***/ "./node_modules/svelte/src/internal/client/loop.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/loop.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loop: () => (/* binding */ loop)
/* harmony export */ });
/* harmony import */ var _timing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing.js */ "./node_modules/svelte/src/internal/client/timing.js");
/** @import { TaskCallback, Task, TaskEntry } from '#client' */


// TODO move this into timing.js where it probably belongs

/**
 * @returns {void}
 */
function run_tasks() {
	// use `raf.now()` instead of the `requestAnimationFrame` callback argument, because
	// otherwise things can get wonky https://github.com/sveltejs/svelte/pull/14541
	const now = _timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.now();

	_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.forEach((task) => {
		if (!task.c(now)) {
			_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.delete(task);
			task.f();
		}
	});

	if (_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.size !== 0) {
		_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tick(run_tasks);
	}
}

/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 * @param {TaskCallback} callback
 * @returns {Task}
 */
function loop(callback) {
	/** @type {TaskEntry} */
	let task;

	if (_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.size === 0) {
		_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tick(run_tasks);
	}

	return {
		promise: new Promise((fulfill) => {
			_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.add((task = { c: callback, f: fulfill }));
		}),
		abort() {
			_timing_js__WEBPACK_IMPORTED_MODULE_0__.raf.tasks.delete(task);
		}
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/proxy.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/proxy.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_proxied_value: () => (/* binding */ get_proxied_value),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   proxy: () => (/* binding */ proxy)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _dev_ownership_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/ownership.js */ "./node_modules/svelte/src/internal/client/dev/ownership.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _dev_tracing_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dev/tracing.js */ "./node_modules/svelte/src/internal/client/dev/tracing.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/** @import { ProxyMetadata, Source } from '#client' */












/**
 * @template T
 * @param {T} value
 * @param {ProxyMetadata | null} [parent]
 * @param {Source<T>} [prev] dev mode only
 * @returns {T}
 */
function proxy(value, parent = null, prev) {
	/** @type {Error | null} */
	var stack = null;
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && _flags_index_js__WEBPACK_IMPORTED_MODULE_10__.tracing_mode_flag) {
		stack = (0,_dev_tracing_js__WEBPACK_IMPORTED_MODULE_9__.get_stack)('CreatedAt');
	}
	// if non-proxyable, or is already a proxy, return `value`
	if (typeof value !== 'object' || value === null || _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL in value) {
		return value;
	}

	const prototype = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_prototype_of)(value);

	if (prototype !== _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.object_prototype && prototype !== _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.array_prototype) {
		return value;
	}

	/** @type {Map<any, Source<any>>} */
	var sources = new Map();
	var is_proxied_array = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.is_array)(value);
	var version = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(0);

	if (is_proxied_array) {
		// We need to create the length source eagerly to ensure that
		// mutations to the array are properly synced with our proxy
		sources.set('length', (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(/** @type {any[]} */ (value).length, stack));
	}

	/** @type {ProxyMetadata} */
	var metadata;

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		metadata = {
			parent,
			owners: null
		};

		if (prev) {
			// Reuse owners from previous state; necessary because reassignment is not guaranteed to have correct component context.
			// If no previous proxy exists we play it safe and assume ownerless state
			// @ts-expect-error
			const prev_owners = prev.v?.[_constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL_METADATA]?.owners;
			metadata.owners = prev_owners ? new Set(prev_owners) : null;
		} else {
			metadata.owners =
				parent === null
					? _context_js__WEBPACK_IMPORTED_MODULE_2__.component_context !== null
						? new Set([_context_js__WEBPACK_IMPORTED_MODULE_2__.component_context.function])
						: null
					: new Set();
		}
	}

	return new Proxy(/** @type {any} */ (value), {
		defineProperty(_, prop, descriptor) {
			if (
				!('value' in descriptor) ||
				descriptor.configurable === false ||
				descriptor.enumerable === false ||
				descriptor.writable === false
			) {
				// we disallow non-basic descriptors, because unless they are applied to the
				// target object — which we avoid, so that state can be forked — we will run
				// afoul of the various invariants
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor#invariants
				_errors_js__WEBPACK_IMPORTED_MODULE_8__.state_descriptors_fixed();
			}

			var s = sources.get(prop);

			if (s === undefined) {
				s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(descriptor.value, stack);
				sources.set(prop, s);
			} else {
				(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(s, proxy(descriptor.value, metadata));
			}

			return true;
		},

		deleteProperty(target, prop) {
			var s = sources.get(prop);

			if (s === undefined) {
				if (prop in target) {
					sources.set(prop, (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED, stack));
				}
			} else {
				// When working with arrays, we need to also ensure we update the length when removing
				// an indexed property
				if (is_proxied_array && typeof prop === 'string') {
					var ls = /** @type {Source<number>} */ (sources.get('length'));
					var n = Number(prop);

					if (Number.isInteger(n) && n < ls.v) {
						(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(ls, n);
					}
				}
				(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(s, _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED);
				update_version(version);
			}

			return true;
		},

		get(target, prop, receiver) {
			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && prop === _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL_METADATA) {
				return metadata;
			}

			if (prop === _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL) {
				return value;
			}

			var s = sources.get(prop);
			var exists = prop in target;

			// create a source, but only if it's an own property and not a prototype property
			if (s === undefined && (!exists || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(target, prop)?.writable)) {
				s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(proxy(exists ? target[prop] : _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED, metadata), stack);
				sources.set(prop, s);
			}

			if (s !== undefined) {
				var v = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(s);

				// In case of something like `foo = bar.map(...)`, foo would have ownership
				// of the array itself, while the individual items would have ownership
				// of the component that created bar. That means if we later do `foo[0].baz = 42`,
				// we could get a false-positive ownership violation, since the two proxies
				// are not connected to each other via the parent metadata relationship.
				// For this reason, we need to widen the ownership of the children
				// upon access when we detect they are not connected.
				if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
					/** @type {ProxyMetadata | undefined} */
					var prop_metadata = v?.[_constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL_METADATA];
					if (prop_metadata && prop_metadata?.parent !== metadata) {
						(0,_dev_ownership_js__WEBPACK_IMPORTED_MODULE_4__.widen_ownership)(metadata, prop_metadata);
					}
				}

				return v === _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED ? undefined : v;
			}

			return Reflect.get(target, prop, receiver);
		},

		getOwnPropertyDescriptor(target, prop) {
			var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);

			if (descriptor && 'value' in descriptor) {
				var s = sources.get(prop);
				if (s) descriptor.value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(s);
			} else if (descriptor === undefined) {
				var source = sources.get(prop);
				var value = source?.v;

				if (source !== undefined && value !== _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED) {
					return {
						enumerable: true,
						configurable: true,
						value,
						writable: true
					};
				}
			}

			return descriptor;
		},

		has(target, prop) {
			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && prop === _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL_METADATA) {
				return true;
			}

			if (prop === _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL) {
				return true;
			}

			var s = sources.get(prop);
			var has = (s !== undefined && s.v !== _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED) || Reflect.has(target, prop);

			if (
				s !== undefined ||
				(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect !== null && (!has || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(target, prop)?.writable))
			) {
				if (s === undefined) {
					s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(has ? proxy(target[prop], metadata) : _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED, stack);
					sources.set(prop, s);
				}

				var value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(s);
				if (value === _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED) {
					return false;
				}
			}

			return has;
		},

		set(target, prop, value, receiver) {
			var s = sources.get(prop);
			var has = prop in target;

			// variable.length = value -> clear all signals with index >= value
			if (is_proxied_array && prop === 'length') {
				for (var i = value; i < /** @type {Source<number>} */ (s).v; i += 1) {
					var other_s = sources.get(i + '');
					if (other_s !== undefined) {
						(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(other_s, _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED);
					} else if (i in target) {
						// If the item exists in the original, we need to create a uninitialized source,
						// else a later read of the property would result in a source being created with
						// the value of the original item at that index.
						other_s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED, stack);
						sources.set(i + '', other_s);
					}
				}
			}

			// If we haven't yet created a source for this property, we need to ensure
			// we do so otherwise if we read it later, then the write won't be tracked and
			// the heuristics of effects will be different vs if we had read the proxied
			// object property before writing to that property.
			if (s === undefined) {
				if (!has || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.get_descriptor)(target, prop)?.writable) {
					s = (0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.source)(undefined, stack);
					(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(s, proxy(value, metadata));
					sources.set(prop, s);
				}
			} else {
				has = s.v !== _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED;
				(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(s, proxy(value, metadata));
			}

			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
				/** @type {ProxyMetadata | undefined} */
				var prop_metadata = value?.[_constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL_METADATA];
				if (prop_metadata && prop_metadata?.parent !== metadata) {
					(0,_dev_ownership_js__WEBPACK_IMPORTED_MODULE_4__.widen_ownership)(metadata, prop_metadata);
				}
				(0,_dev_ownership_js__WEBPACK_IMPORTED_MODULE_4__.check_ownership)(metadata);
			}

			var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);

			// Set the new value before updating any signals so that any listeners get the new value
			if (descriptor?.set) {
				descriptor.set.call(receiver, value);
			}

			if (!has) {
				// If we have mutated an array directly, we might need to
				// signal that length has also changed. Do it before updating metadata
				// to ensure that iterating over the array as a result of a metadata update
				// will not cause the length to be out of sync.
				if (is_proxied_array && typeof prop === 'string') {
					var ls = /** @type {Source<number>} */ (sources.get('length'));
					var n = Number(prop);

					if (Number.isInteger(n) && n >= ls.v) {
						(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(ls, n + 1);
					}
				}

				update_version(version);
			}

			return true;
		},

		ownKeys(target) {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(version);

			var own_keys = Reflect.ownKeys(target).filter((key) => {
				var source = sources.get(key);
				return source === undefined || source.v !== _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED;
			});

			for (var [key, source] of sources) {
				if (source.v !== _constants_js__WEBPACK_IMPORTED_MODULE_7__.UNINITIALIZED && !(key in target)) {
					own_keys.push(key);
				}
			}

			return own_keys;
		},

		setPrototypeOf() {
			_errors_js__WEBPACK_IMPORTED_MODULE_8__.state_prototype_fixed();
		}
	});
}

/**
 * @param {Source<number>} signal
 * @param {1 | -1} [d]
 */
function update_version(signal, d = 1) {
	(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(signal, signal.v + d);
}

/**
 * @param {any} value
 */
function get_proxied_value(value) {
	if (value !== null && typeof value === 'object' && _constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL in value) {
		return value[_constants_js__WEBPACK_IMPORTED_MODULE_6__.STATE_SYMBOL];
	}

	return value;
}

/**
 * @param {any} a
 * @param {any} b
 */
function is(a, b) {
	return Object.is(get_proxied_value(a), get_proxied_value(b));
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js":
/*!************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/deriveds.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   derived: () => (/* binding */ derived),
/* harmony export */   derived_safe_equal: () => (/* binding */ derived_safe_equal),
/* harmony export */   destroy_derived_effects: () => (/* binding */ destroy_derived_effects),
/* harmony export */   update_derived: () => (/* binding */ update_derived)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _equality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _dev_tracing_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dev/tracing.js */ "./node_modules/svelte/src/internal/client/dev/tracing.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/** @import { Derived, Effect } from '#client' */











/**
 * @template V
 * @param {() => V} fn
 * @returns {Derived<V>}
 */
/*#__NO_SIDE_EFFECTS__*/
function derived(fn) {
	var flags = _constants_js__WEBPACK_IMPORTED_MODULE_1__.DERIVED | _constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY;
	var parent_derived =
		_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_reaction !== null && (_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.DERIVED) !== 0
			? /** @type {Derived} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_reaction)
			: null;

	if (_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect === null || (parent_derived !== null && (parent_derived.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.UNOWNED) !== 0)) {
		flags |= _constants_js__WEBPACK_IMPORTED_MODULE_1__.UNOWNED;
	} else {
		// Since deriveds are evaluated lazily, any effects created inside them are
		// created too late to ensure that the parent effect is added to the tree
		_runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect.f |= _constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_HAS_DERIVED;
	}

	/** @type {Derived<V>} */
	const signal = {
		ctx: _context_js__WEBPACK_IMPORTED_MODULE_9__.component_context,
		deps: null,
		effects: null,
		equals: _equality_js__WEBPACK_IMPORTED_MODULE_3__.equals,
		f: flags,
		fn,
		reactions: null,
		rv: 0,
		v: /** @type {V} */ (null),
		wv: 0,
		parent: parent_derived ?? _runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect
	};

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && _flags_index_js__WEBPACK_IMPORTED_MODULE_8__.tracing_mode_flag) {
		signal.created = (0,_dev_tracing_js__WEBPACK_IMPORTED_MODULE_7__.get_stack)('CreatedAt');
	}

	return signal;
}

/**
 * @template V
 * @param {() => V} fn
 * @returns {Derived<V>}
 */
/*#__NO_SIDE_EFFECTS__*/
function derived_safe_equal(fn) {
	const signal = derived(fn);
	signal.equals = _equality_js__WEBPACK_IMPORTED_MODULE_3__.safe_equals;
	return signal;
}

/**
 * @param {Derived} derived
 * @returns {void}
 */
function destroy_derived_effects(derived) {
	var effects = derived.effects;

	if (effects !== null) {
		derived.effects = null;

		for (var i = 0; i < effects.length; i += 1) {
			(0,_effects_js__WEBPACK_IMPORTED_MODULE_5__.destroy_effect)(/** @type {Effect} */ (effects[i]));
		}
	}
}

/**
 * The currently updating deriveds, used to detect infinite recursion
 * in dev mode and provide a nicer error than 'too much recursion'
 * @type {Derived[]}
 */
let stack = [];

/**
 * @param {Derived} derived
 * @returns {Effect | null}
 */
function get_derived_parent_effect(derived) {
	var parent = derived.parent;
	while (parent !== null) {
		if ((parent.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.DERIVED) === 0) {
			return /** @type {Effect} */ (parent);
		}
		parent = parent.parent;
	}
	return null;
}

/**
 * @template T
 * @param {Derived} derived
 * @returns {T}
 */
function execute_derived(derived) {
	var value;
	var prev_active_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_2__.active_effect;

	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_effect)(get_derived_parent_effect(derived));

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		let prev_inspect_effects = _sources_js__WEBPACK_IMPORTED_MODULE_6__.inspect_effects;
		(0,_sources_js__WEBPACK_IMPORTED_MODULE_6__.set_inspect_effects)(new Set());
		try {
			if (stack.includes(derived)) {
				_errors_js__WEBPACK_IMPORTED_MODULE_4__.derived_references_self();
			}

			stack.push(derived);

			destroy_derived_effects(derived);
			value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.update_reaction)(derived);
		} finally {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_effect)(prev_active_effect);
			(0,_sources_js__WEBPACK_IMPORTED_MODULE_6__.set_inspect_effects)(prev_inspect_effects);
			stack.pop();
		}
	} else {
		try {
			destroy_derived_effects(derived);
			value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.update_reaction)(derived);
		} finally {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_active_effect)(prev_active_effect);
		}
	}

	return value;
}

/**
 * @param {Derived} derived
 * @returns {void}
 */
function update_derived(derived) {
	var value = execute_derived(derived);
	var status =
		(_runtime_js__WEBPACK_IMPORTED_MODULE_2__.skip_reaction || (derived.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.UNOWNED) !== 0) && derived.deps !== null ? _constants_js__WEBPACK_IMPORTED_MODULE_1__.MAYBE_DIRTY : _constants_js__WEBPACK_IMPORTED_MODULE_1__.CLEAN;

	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.set_signal_status)(derived, status);

	if (!derived.equals(value)) {
		derived.v = value;
		derived.wv = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_2__.increment_write_version)();
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/effects.js":
/*!***********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/effects.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   block: () => (/* binding */ block),
/* harmony export */   branch: () => (/* binding */ branch),
/* harmony export */   component_root: () => (/* binding */ component_root),
/* harmony export */   destroy_block_effect_children: () => (/* binding */ destroy_block_effect_children),
/* harmony export */   destroy_effect: () => (/* binding */ destroy_effect),
/* harmony export */   destroy_effect_children: () => (/* binding */ destroy_effect_children),
/* harmony export */   effect: () => (/* binding */ effect),
/* harmony export */   effect_root: () => (/* binding */ effect_root),
/* harmony export */   effect_tracking: () => (/* binding */ effect_tracking),
/* harmony export */   execute_effect_teardown: () => (/* binding */ execute_effect_teardown),
/* harmony export */   inspect_effect: () => (/* binding */ inspect_effect),
/* harmony export */   legacy_pre_effect: () => (/* binding */ legacy_pre_effect),
/* harmony export */   legacy_pre_effect_reset: () => (/* binding */ legacy_pre_effect_reset),
/* harmony export */   pause_children: () => (/* binding */ pause_children),
/* harmony export */   pause_effect: () => (/* binding */ pause_effect),
/* harmony export */   render_effect: () => (/* binding */ render_effect),
/* harmony export */   resume_effect: () => (/* binding */ resume_effect),
/* harmony export */   run_out_transitions: () => (/* binding */ run_out_transitions),
/* harmony export */   teardown: () => (/* binding */ teardown),
/* harmony export */   template_effect: () => (/* binding */ template_effect),
/* harmony export */   unlink_effect: () => (/* binding */ unlink_effect),
/* harmony export */   user_effect: () => (/* binding */ user_effect),
/* harmony export */   user_pre_effect: () => (/* binding */ user_pre_effect),
/* harmony export */   validate_effect: () => (/* binding */ validate_effect)
/* harmony export */ });
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _dom_operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _deriveds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/** @import { ComponentContext, ComponentContextLegacy, Derived, Effect, TemplateNode, TransitionManager } from '#client' */










/**
 * @param {'$effect' | '$effect.pre' | '$inspect'} rune
 */
function validate_effect(rune) {
	if (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect === null && _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction === null) {
		_errors_js__WEBPACK_IMPORTED_MODULE_3__.effect_orphan(rune);
	}

	if (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction !== null && (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.UNOWNED) !== 0 && _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect === null) {
		_errors_js__WEBPACK_IMPORTED_MODULE_3__.effect_in_unowned_derived();
	}

	if (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.is_destroying_effect) {
		_errors_js__WEBPACK_IMPORTED_MODULE_3__.effect_in_teardown(rune);
	}
}

/**
 * @param {Effect} effect
 * @param {Effect} parent_effect
 */
function push_effect(effect, parent_effect) {
	var parent_last = parent_effect.last;
	if (parent_last === null) {
		parent_effect.last = parent_effect.first = effect;
	} else {
		parent_last.next = effect;
		effect.prev = parent_last;
		parent_effect.last = effect;
	}
}

/**
 * @param {number} type
 * @param {null | (() => void | (() => void))} fn
 * @param {boolean} sync
 * @param {boolean} push
 * @returns {Effect}
 */
function create_effect(type, fn, sync, push = true) {
	var is_root = (type & _constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_EFFECT) !== 0;
	var parent_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect;

	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		// Ensure the parent is never an inspect effect
		while (parent_effect !== null && (parent_effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.INSPECT_EFFECT) !== 0) {
			parent_effect = parent_effect.parent;
		}
	}

	/** @type {Effect} */
	var effect = {
		ctx: _context_js__WEBPACK_IMPORTED_MODULE_8__.component_context,
		deps: null,
		nodes_start: null,
		nodes_end: null,
		f: type | _constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY,
		first: null,
		fn,
		last: null,
		next: null,
		parent: is_root ? null : parent_effect,
		prev: null,
		teardown: null,
		transitions: null,
		wv: 0
	};

	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		effect.component_function = _context_js__WEBPACK_IMPORTED_MODULE_8__.dev_current_component_function;
	}

	if (sync) {
		try {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.update_effect)(effect);
			effect.f |= _constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_RAN;
		} catch (e) {
			destroy_effect(effect);
			throw e;
		}
	} else if (fn !== null) {
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.schedule_effect)(effect);
	}

	// if an effect has no dependencies, no DOM and no teardown function,
	// don't bother adding it to the effect tree
	var inert =
		sync &&
		effect.deps === null &&
		effect.first === null &&
		effect.nodes_start === null &&
		effect.teardown === null &&
		(effect.f & (_constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_HAS_DERIVED | _constants_js__WEBPACK_IMPORTED_MODULE_1__.BOUNDARY_EFFECT)) === 0;

	if (!inert && !is_root && push) {
		if (parent_effect !== null) {
			push_effect(effect, parent_effect);
		}

		// if we're in a derived, add the effect there too
		if (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction !== null && (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.DERIVED) !== 0) {
			var derived = /** @type {Derived} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction);
			(derived.effects ??= []).push(effect);
		}
	}

	return effect;
}

/**
 * Internal representation of `$effect.tracking()`
 * @returns {boolean}
 */
function effect_tracking() {
	return _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction !== null && !_runtime_js__WEBPACK_IMPORTED_MODULE_0__.untracking;
}

/**
 * @param {() => void} fn
 */
function teardown(fn) {
	const effect = create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER_EFFECT, null, false);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_signal_status)(effect, _constants_js__WEBPACK_IMPORTED_MODULE_1__.CLEAN);
	effect.teardown = fn;
	return effect;
}

/**
 * Internal representation of `$effect(...)`
 * @param {() => void | (() => void)} fn
 */
function user_effect(fn) {
	validate_effect('$effect');

	// Non-nested `$effect(...)` in a component should be deferred
	// until the component is mounted
	var defer =
		_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect !== null &&
		(_runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.BRANCH_EFFECT) !== 0 &&
		_context_js__WEBPACK_IMPORTED_MODULE_8__.component_context !== null &&
		!_context_js__WEBPACK_IMPORTED_MODULE_8__.component_context.m;

	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.define_property)(fn, 'name', {
			value: '$effect'
		});
	}

	if (defer) {
		var context = /** @type {ComponentContext} */ (_context_js__WEBPACK_IMPORTED_MODULE_8__.component_context);
		(context.e ??= []).push({
			fn,
			effect: _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_effect,
			reaction: _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction
		});
	} else {
		var signal = effect(fn);
		return signal;
	}
}

/**
 * Internal representation of `$effect.pre(...)`
 * @param {() => void | (() => void)} fn
 * @returns {Effect}
 */
function user_pre_effect(fn) {
	validate_effect('$effect.pre');
	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.define_property)(fn, 'name', {
			value: '$effect.pre'
		});
	}
	return render_effect(fn);
}

/** @param {() => void | (() => void)} fn */
function inspect_effect(fn) {
	return create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.INSPECT_EFFECT, fn, true);
}

/**
 * Internal representation of `$effect.root(...)`
 * @param {() => void | (() => void)} fn
 * @returns {() => void}
 */
function effect_root(fn) {
	const effect = create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_EFFECT, fn, true);

	return () => {
		destroy_effect(effect);
	};
}

/**
 * An effect root whose children can transition out
 * @param {() => void} fn
 * @returns {(options?: { outro?: boolean }) => Promise<void>}
 */
function component_root(fn) {
	const effect = create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_EFFECT, fn, true);

	return (options = {}) => {
		return new Promise((fulfil) => {
			if (options.outro) {
				pause_effect(effect, () => {
					destroy_effect(effect);
					fulfil(undefined);
				});
			} else {
				destroy_effect(effect);
				fulfil(undefined);
			}
		});
	};
}

/**
 * @param {() => void | (() => void)} fn
 * @returns {Effect}
 */
function effect(fn) {
	return create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT, fn, false);
}

/**
 * Internal representation of `$: ..`
 * @param {() => any} deps
 * @param {() => void | (() => void)} fn
 */
function legacy_pre_effect(deps, fn) {
	var context = /** @type {ComponentContextLegacy} */ (_context_js__WEBPACK_IMPORTED_MODULE_8__.component_context);

	/** @type {{ effect: null | Effect, ran: boolean }} */
	var token = { effect: null, ran: false };
	context.l.r1.push(token);

	token.effect = render_effect(() => {
		deps();

		// If this legacy pre effect has already run before the end of the reset, then
		// bail out to emulate the same behavior.
		if (token.ran) return;

		token.ran = true;
		(0,_sources_js__WEBPACK_IMPORTED_MODULE_2__.set)(context.l.r2, true);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(fn);
	});
}

function legacy_pre_effect_reset() {
	var context = /** @type {ComponentContextLegacy} */ (_context_js__WEBPACK_IMPORTED_MODULE_8__.component_context);

	render_effect(() => {
		if (!(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.get)(context.l.r2)) return;

		// Run dirty `$:` statements
		for (var token of context.l.r1) {
			var effect = token.effect;

			// If the effect is CLEAN, then make it MAYBE_DIRTY. This ensures we traverse through
			// the effects dependencies and correctly ensure each dependency is up-to-date.
			if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.CLEAN) !== 0) {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_signal_status)(effect, _constants_js__WEBPACK_IMPORTED_MODULE_1__.MAYBE_DIRTY);
			}

			if ((0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.check_dirtiness)(effect)) {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.update_effect)(effect);
			}

			token.ran = false;
		}

		context.l.r2.v = false; // set directly to avoid rerunning this effect
	});
}

/**
 * @param {() => void | (() => void)} fn
 * @returns {Effect}
 */
function render_effect(fn) {
	return create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER_EFFECT, fn, true);
}

/**
 * @param {(...expressions: any) => void | (() => void)} fn
 * @param {Array<() => any>} thunks
 * @returns {Effect}
 */
function template_effect(fn, thunks = [], d = _deriveds_js__WEBPACK_IMPORTED_MODULE_7__.derived) {
	const deriveds = thunks.map(d);
	const effect = () => fn(...deriveds.map(_runtime_js__WEBPACK_IMPORTED_MODULE_0__.get));

	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_5__.define_property)(effect, 'name', {
			value: '{expression}'
		});
	}

	return block(effect);
}

/**
 * @param {(() => void)} fn
 * @param {number} flags
 */
function block(fn, flags = 0) {
	return create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER_EFFECT | _constants_js__WEBPACK_IMPORTED_MODULE_1__.BLOCK_EFFECT | flags, fn, true);
}

/**
 * @param {(() => void)} fn
 * @param {boolean} [push]
 */
function branch(fn, push = true) {
	return create_effect(_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER_EFFECT | _constants_js__WEBPACK_IMPORTED_MODULE_1__.BRANCH_EFFECT, fn, true, push);
}

/**
 * @param {Effect} effect
 */
function execute_effect_teardown(effect) {
	var teardown = effect.teardown;
	if (teardown !== null) {
		const previously_destroying_effect = _runtime_js__WEBPACK_IMPORTED_MODULE_0__.is_destroying_effect;
		const previous_reaction = _runtime_js__WEBPACK_IMPORTED_MODULE_0__.active_reaction;
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_is_destroying_effect)(true);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_active_reaction)(null);
		try {
			teardown.call(null);
		} finally {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_is_destroying_effect)(previously_destroying_effect);
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_active_reaction)(previous_reaction);
		}
	}
}

/**
 * @param {Effect} signal
 * @param {boolean} remove_dom
 * @returns {void}
 */
function destroy_effect_children(signal, remove_dom = false) {
	var effect = signal.first;
	signal.first = signal.last = null;

	while (effect !== null) {
		var next = effect.next;
		destroy_effect(effect, remove_dom);
		effect = next;
	}
}

/**
 * @param {Effect} signal
 * @returns {void}
 */
function destroy_block_effect_children(signal) {
	var effect = signal.first;

	while (effect !== null) {
		var next = effect.next;
		if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.BRANCH_EFFECT) === 0) {
			destroy_effect(effect);
		}
		effect = next;
	}
}

/**
 * @param {Effect} effect
 * @param {boolean} [remove_dom]
 * @returns {void}
 */
function destroy_effect(effect, remove_dom = true) {
	var removed = false;

	if ((remove_dom || (effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.HEAD_EFFECT) !== 0) && effect.nodes_start !== null) {
		/** @type {TemplateNode | null} */
		var node = effect.nodes_start;
		var end = effect.nodes_end;

		while (node !== null) {
			/** @type {TemplateNode | null} */
			var next = node === end ? null : /** @type {TemplateNode} */ ((0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_6__.get_next_sibling)(node));

			node.remove();
			node = next;
		}

		removed = true;
	}

	destroy_effect_children(effect, remove_dom && !removed);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.remove_reactions)(effect, 0);
	(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_signal_status)(effect, _constants_js__WEBPACK_IMPORTED_MODULE_1__.DESTROYED);

	var transitions = effect.transitions;

	if (transitions !== null) {
		for (const transition of transitions) {
			transition.stop();
		}
	}

	execute_effect_teardown(effect);

	var parent = effect.parent;

	// If the parent doesn't have any children, then skip this work altogether
	if (parent !== null && parent.first !== null) {
		unlink_effect(effect);
	}

	if (esm_env__WEBPACK_IMPORTED_MODULE_4__.DEV) {
		effect.component_function = null;
	}

	// `first` and `child` are nulled out in destroy_effect_children
	// we don't null out `parent` so that error propagation can work correctly
	effect.next =
		effect.prev =
		effect.teardown =
		effect.ctx =
		effect.deps =
		effect.fn =
		effect.nodes_start =
		effect.nodes_end =
			null;
}

/**
 * Detach an effect from the effect tree, freeing up memory and
 * reducing the amount of work that happens on subsequent traversals
 * @param {Effect} effect
 */
function unlink_effect(effect) {
	var parent = effect.parent;
	var prev = effect.prev;
	var next = effect.next;

	if (prev !== null) prev.next = next;
	if (next !== null) next.prev = prev;

	if (parent !== null) {
		if (parent.first === effect) parent.first = next;
		if (parent.last === effect) parent.last = prev;
	}
}

/**
 * When a block effect is removed, we don't immediately destroy it or yank it
 * out of the DOM, because it might have transitions. Instead, we 'pause' it.
 * It stays around (in memory, and in the DOM) until outro transitions have
 * completed, and if the state change is reversed then we _resume_ it.
 * A paused effect does not update, and the DOM subtree becomes inert.
 * @param {Effect} effect
 * @param {() => void} [callback]
 */
function pause_effect(effect, callback) {
	/** @type {TransitionManager[]} */
	var transitions = [];

	pause_children(effect, transitions, true);

	run_out_transitions(transitions, () => {
		destroy_effect(effect);
		if (callback) callback();
	});
}

/**
 * @param {TransitionManager[]} transitions
 * @param {() => void} fn
 */
function run_out_transitions(transitions, fn) {
	var remaining = transitions.length;
	if (remaining > 0) {
		var check = () => --remaining || fn();
		for (var transition of transitions) {
			transition.out(check);
		}
	} else {
		fn();
	}
}

/**
 * @param {Effect} effect
 * @param {TransitionManager[]} transitions
 * @param {boolean} local
 */
function pause_children(effect, transitions, local) {
	if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.INERT) !== 0) return;
	effect.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_1__.INERT;

	if (effect.transitions !== null) {
		for (const transition of effect.transitions) {
			if (transition.is_global || local) {
				transitions.push(transition);
			}
		}
	}

	var child = effect.first;

	while (child !== null) {
		var sibling = child.next;
		var transparent = (child.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_TRANSPARENT) !== 0 || (child.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.BRANCH_EFFECT) !== 0;
		// TODO we don't need to call pause_children recursively with a linked list in place
		// it's slightly more involved though as we have to account for `transparent` changing
		// through the tree.
		pause_children(child, transitions, transparent ? local : false);
		child = sibling;
	}
}

/**
 * The opposite of `pause_effect`. We call this if (for example)
 * `x` becomes falsy then truthy: `{#if x}...{/if}`
 * @param {Effect} effect
 */
function resume_effect(effect) {
	resume_children(effect, true);
}

/**
 * @param {Effect} effect
 * @param {boolean} local
 */
function resume_children(effect, local) {
	if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.INERT) === 0) return;
	effect.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_1__.INERT;

	// Ensure the effect is marked as clean again so that any dirty child
	// effects can schedule themselves for execution
	if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.CLEAN) === 0) {
		effect.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_1__.CLEAN;
	}

	// If a dependency of this effect changed while it was paused,
	// schedule the effect to update
	if ((0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.check_dirtiness)(effect)) {
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.set_signal_status)(effect, _constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY);
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_0__.schedule_effect)(effect);
	}

	var child = effect.first;

	while (child !== null) {
		var sibling = child.next;
		var transparent = (child.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.EFFECT_TRANSPARENT) !== 0 || (child.f & _constants_js__WEBPACK_IMPORTED_MODULE_1__.BRANCH_EFFECT) !== 0;
		// TODO we don't need to call resume_children recursively with a linked list in place
		// it's slightly more involved though as we have to account for `transparent` changing
		// through the tree.
		resume_children(child, transparent ? local : false);
		child = sibling;
	}

	if (effect.transitions !== null) {
		for (const transition of effect.transitions) {
			if (transition.is_global || local) {
				transition.in();
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/equality.js":
/*!************************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/equality.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   not_equal: () => (/* binding */ not_equal),
/* harmony export */   safe_equals: () => (/* binding */ safe_equals),
/* harmony export */   safe_not_equal: () => (/* binding */ safe_not_equal)
/* harmony export */ });
/** @import { Equals } from '#client' */
/** @type {Equals} */
function equals(value) {
	return value === this.v;
}

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function not_equal(a, b) {
	return a !== b;
}

/** @type {Equals} */
function safe_equals(value) {
	return !safe_not_equal(value, this.v);
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/props.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacy_rest_props: () => (/* binding */ legacy_rest_props),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   rest_props: () => (/* binding */ rest_props),
/* harmony export */   spread_props: () => (/* binding */ spread_props),
/* harmony export */   update_pre_prop: () => (/* binding */ update_pre_prop),
/* harmony export */   update_prop: () => (/* binding */ update_prop)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _deriveds_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _equality_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../proxy.js */ "./node_modules/svelte/src/internal/client/proxy.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store.js */ "./node_modules/svelte/src/internal/client/reactivity/store.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/** @import { Source } from './types.js' */













/**
 * @param {((value?: number) => number)} fn
 * @param {1 | -1} [d]
 * @returns {number}
 */
function update_prop(fn, d = 1) {
	const value = fn();
	fn(value + d);
	return value;
}

/**
 * @param {((value?: number) => number)} fn
 * @param {1 | -1} [d]
 * @returns {number}
 */
function update_pre_prop(fn, d = 1) {
	const value = fn() + d;
	fn(value);
	return value;
}

/**
 * The proxy handler for rest props (i.e. `const { x, ...rest } = $props()`).
 * Is passed the full `$$props` object and excludes the named props.
 * @type {ProxyHandler<{ props: Record<string | symbol, unknown>, exclude: Array<string | symbol>, name?: string }>}}
 */
const rest_props_handler = {
	get(target, key) {
		if (target.exclude.includes(key)) return;
		return target.props[key];
	},
	set(target, key) {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			// TODO should this happen in prod too?
			_errors_js__WEBPACK_IMPORTED_MODULE_7__.props_rest_readonly(`${target.name}.${String(key)}`);
		}

		return false;
	},
	getOwnPropertyDescriptor(target, key) {
		if (target.exclude.includes(key)) return;
		if (key in target.props) {
			return {
				enumerable: true,
				configurable: true,
				value: target.props[key]
			};
		}
	},
	has(target, key) {
		if (target.exclude.includes(key)) return false;
		return key in target.props;
	},
	ownKeys(target) {
		return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
	}
};

/**
 * @param {Record<string, unknown>} props
 * @param {string[]} exclude
 * @param {string} [name]
 * @returns {Record<string, unknown>}
 */
/*#__NO_SIDE_EFFECTS__*/
function rest_props(props, exclude, name) {
	return new Proxy(
		esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ? { props, exclude, name, other: {}, to_proxy: [] } : { props, exclude },
		rest_props_handler
	);
}

/**
 * The proxy handler for legacy $$restProps and $$props
 * @type {ProxyHandler<{ props: Record<string | symbol, unknown>, exclude: Array<string | symbol>, special: Record<string | symbol, (v?: unknown) => unknown>, version: Source<number> }>}}
 */
const legacy_rest_props_handler = {
	get(target, key) {
		if (target.exclude.includes(key)) return;
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(target.version);
		return key in target.special ? target.special[key]() : target.props[key];
	},
	set(target, key, value) {
		if (!(key in target.special)) {
			// Handle props that can temporarily get out of sync with the parent
			/** @type {Record<string, (v?: unknown) => unknown>} */
			target.special[key] = prop(
				{
					get [key]() {
						return target.props[key];
					}
				},
				/** @type {string} */ (key),
				_constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_UPDATED
			);
		}

		target.special[key](value);
		(0,_sources_js__WEBPACK_IMPORTED_MODULE_3__.update)(target.version); // $$props is coarse-grained: when $$props.x is updated, usages of $$props.y etc are also rerun
		return true;
	},
	getOwnPropertyDescriptor(target, key) {
		if (target.exclude.includes(key)) return;
		if (key in target.props) {
			return {
				enumerable: true,
				configurable: true,
				value: target.props[key]
			};
		}
	},
	deleteProperty(target, key) {
		// Svelte 4 allowed for deletions on $$restProps
		if (target.exclude.includes(key)) return true;
		target.exclude.push(key);
		(0,_sources_js__WEBPACK_IMPORTED_MODULE_3__.update)(target.version);
		return true;
	},
	has(target, key) {
		if (target.exclude.includes(key)) return false;
		return key in target.props;
	},
	ownKeys(target) {
		return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
	}
};

/**
 * @param {Record<string, unknown>} props
 * @param {string[]} exclude
 * @returns {Record<string, unknown>}
 */
function legacy_rest_props(props, exclude) {
	return new Proxy({ props, exclude, special: {}, version: (0,_sources_js__WEBPACK_IMPORTED_MODULE_3__.source)(0) }, legacy_rest_props_handler);
}

/**
 * The proxy handler for spread props. Handles the incoming array of props
 * that looks like `() => { dynamic: props }, { static: prop }, ..` and wraps
 * them so that the whole thing is passed to the component as the `$$props` argument.
 * @template {Record<string | symbol, unknown>} T
 * @type {ProxyHandler<{ props: Array<T | (() => T)> }>}}
 */
const spread_props_handler = {
	get(target, key) {
		let i = target.props.length;
		while (i--) {
			let p = target.props[i];
			if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(p)) p = p();
			if (typeof p === 'object' && p !== null && key in p) return p[key];
		}
	},
	set(target, key, value) {
		let i = target.props.length;
		while (i--) {
			let p = target.props[i];
			if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(p)) p = p();
			const desc = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_descriptor)(p, key);
			if (desc && desc.set) {
				desc.set(value);
				return true;
			}
		}
		return false;
	},
	getOwnPropertyDescriptor(target, key) {
		let i = target.props.length;
		while (i--) {
			let p = target.props[i];
			if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(p)) p = p();
			if (typeof p === 'object' && p !== null && key in p) {
				const descriptor = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_descriptor)(p, key);
				if (descriptor && !descriptor.configurable) {
					// Prevent a "Non-configurability Report Error": The target is an array, it does
					// not actually contain this property. If it is now described as non-configurable,
					// the proxy throws a validation error. Setting it to true avoids that.
					descriptor.configurable = true;
				}
				return descriptor;
			}
		}
	},
	has(target, key) {
		// To prevent a false positive `is_entry_props` in the `prop` function
		if (key === _constants_js__WEBPACK_IMPORTED_MODULE_8__.STATE_SYMBOL || key === _constants_js__WEBPACK_IMPORTED_MODULE_8__.LEGACY_PROPS) return false;

		for (let p of target.props) {
			if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(p)) p = p();
			if (p != null && key in p) return true;
		}

		return false;
	},
	ownKeys(target) {
		/** @type {Array<string | symbol>} */
		const keys = [];

		for (let p of target.props) {
			if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(p)) p = p();
			for (const key in p) {
				if (!keys.includes(key)) keys.push(key);
			}
		}

		return keys;
	}
};

/**
 * @param {Array<Record<string, unknown> | (() => Record<string, unknown>)>} props
 * @returns {any}
 */
function spread_props(...props) {
	return new Proxy({ props }, spread_props_handler);
}

/**
 * This function is responsible for synchronizing a possibly bound prop with the inner component state.
 * It is used whenever the compiler sees that the component writes to the prop, or when it has a default prop_value.
 * @template V
 * @param {Record<string, unknown>} props
 * @param {string} key
 * @param {number} flags
 * @param {V | (() => V)} [fallback]
 * @returns {(() => V | ((arg: V) => V) | ((arg: V, mutation: boolean) => V))}
 */
function prop(props, key, flags, fallback) {
	var immutable = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_IMMUTABLE) !== 0;
	var runes = !_flags_index_js__WEBPACK_IMPORTED_MODULE_11__.legacy_mode_flag || (flags & _constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_RUNES) !== 0;
	var bindable = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_BINDABLE) !== 0;
	var lazy = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_LAZY_INITIAL) !== 0;
	var is_store_sub = false;
	var prop_value;

	if (bindable) {
		[prop_value, is_store_sub] = (0,_store_js__WEBPACK_IMPORTED_MODULE_10__.capture_store_binding)(() => /** @type {V} */ (props[key]));
	} else {
		prop_value = /** @type {V} */ (props[key]);
	}

	// Can be the case when someone does `mount(Component, props)` with `let props = $state({...})`
	// or `createClassComponent(Component, props)`
	var is_entry_props = _constants_js__WEBPACK_IMPORTED_MODULE_8__.STATE_SYMBOL in props || _constants_js__WEBPACK_IMPORTED_MODULE_8__.LEGACY_PROPS in props;

	var setter =
		(bindable &&
			((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_descriptor)(props, key)?.set ??
				(is_entry_props && key in props && ((v) => (props[key] = v))))) ||
		undefined;

	var fallback_value = /** @type {V} */ (fallback);
	var fallback_dirty = true;
	var fallback_used = false;

	var get_fallback = () => {
		fallback_used = true;
		if (fallback_dirty) {
			fallback_dirty = false;
			if (lazy) {
				fallback_value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.untrack)(/** @type {() => V} */ (fallback));
			} else {
				fallback_value = /** @type {V} */ (fallback);
			}
		}

		return fallback_value;
	};

	if (prop_value === undefined && fallback !== undefined) {
		if (setter && runes) {
			_errors_js__WEBPACK_IMPORTED_MODULE_7__.props_invalid_value(key);
		}

		prop_value = get_fallback();
		if (setter) setter(prop_value);
	}

	/** @type {() => V} */
	var getter;
	if (runes) {
		getter = () => {
			var value = /** @type {V} */ (props[key]);
			if (value === undefined) return get_fallback();
			fallback_dirty = true;
			fallback_used = false;
			return value;
		};
	} else {
		// Svelte 4 did not trigger updates when a primitive value was updated to the same value.
		// Replicate that behavior through using a derived
		var derived_getter = (immutable ? _deriveds_js__WEBPACK_IMPORTED_MODULE_4__.derived : _deriveds_js__WEBPACK_IMPORTED_MODULE_4__.derived_safe_equal)(
			() => /** @type {V} */ (props[key])
		);
		derived_getter.f |= _constants_js__WEBPACK_IMPORTED_MODULE_8__.LEGACY_DERIVED_PROP;
		getter = () => {
			var value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(derived_getter);
			if (value !== undefined) fallback_value = /** @type {V} */ (undefined);
			return value === undefined ? fallback_value : value;
		};
	}

	// easy mode — prop is never written to
	if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_1__.PROPS_IS_UPDATED) === 0) {
		return getter;
	}

	// intermediate mode — prop is written to, but the parent component had
	// `bind:foo` which means we can just call `$$props.foo = value` directly
	if (setter) {
		var legacy_parent = props.$$legacy;
		return function (/** @type {any} */ value, /** @type {boolean} */ mutation) {
			if (arguments.length > 0) {
				// We don't want to notify if the value was mutated and the parent is in runes mode.
				// In that case the state proxy (if it exists) should take care of the notification.
				// If the parent is not in runes mode, we need to notify on mutation, too, that the prop
				// has changed because the parent will not be able to detect the change otherwise.
				if (!runes || !mutation || legacy_parent || is_store_sub) {
					/** @type {Function} */ (setter)(mutation ? getter() : value);
				}
				return value;
			} else {
				return getter();
			}
		};
	}

	// hard mode. this is where it gets ugly — the value in the child should
	// synchronize with the parent, but it should also be possible to temporarily
	// set the value to something else locally.
	var from_child = false;
	var was_from_child = false;

	// The derived returns the current value. The underlying mutable
	// source is written to from various places to persist this value.
	var inner_current_value = (0,_sources_js__WEBPACK_IMPORTED_MODULE_3__.mutable_source)(prop_value);
	var current_value = (0,_deriveds_js__WEBPACK_IMPORTED_MODULE_4__.derived)(() => {
		var parent_value = getter();
		var child_value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(inner_current_value);

		if (from_child) {
			from_child = false;
			was_from_child = true;
			return child_value;
		}

		was_from_child = false;
		return (inner_current_value.v = parent_value);
	});

	if (!immutable) current_value.equals = _equality_js__WEBPACK_IMPORTED_MODULE_6__.safe_equals;

	return function (/** @type {any} */ value, /** @type {boolean} */ mutation) {
		// legacy nonsense — need to ensure the source is invalidated when necessary
		// also needed for when handling inspect logic so we can inspect the correct source signal
		if (_runtime_js__WEBPACK_IMPORTED_MODULE_5__.captured_signals !== null) {
			// set this so that we don't reset to the parent value if `d`
			// is invalidated because of `invalidate_inner_signals` (rather
			// than because the parent or child value changed)
			from_child = was_from_child;
			// invoke getters so that signals are picked up by `invalidate_inner_signals`
			getter();
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(inner_current_value);
		}

		if (arguments.length > 0) {
			const new_value = mutation ? (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(current_value) : runes && bindable ? (0,_proxy_js__WEBPACK_IMPORTED_MODULE_9__.proxy)(value) : value;

			if (!current_value.equals(new_value)) {
				from_child = true;
				(0,_sources_js__WEBPACK_IMPORTED_MODULE_3__.set)(inner_current_value, new_value);
				// To ensure the fallback value is consistent when used with proxies, we
				// update the local fallback_value, but only if the fallback is actively used
				if (fallback_used && fallback_value !== undefined) {
					fallback_value = new_value;
				}
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.untrack)(() => (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(current_value)); // force a synchronisation immediately
			}

			return value;
		}
		return (0,_runtime_js__WEBPACK_IMPORTED_MODULE_5__.get)(current_value);
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/sources.js":
/*!***********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/sources.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inspect_effects: () => (/* binding */ inspect_effects),
/* harmony export */   internal_set: () => (/* binding */ internal_set),
/* harmony export */   mutable_source: () => (/* binding */ mutable_source),
/* harmony export */   mutable_state: () => (/* binding */ mutable_state),
/* harmony export */   mutate: () => (/* binding */ mutate),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   set_inspect_effects: () => (/* binding */ set_inspect_effects),
/* harmony export */   source: () => (/* binding */ source),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   update_pre: () => (/* binding */ update_pre)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _equality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/* harmony import */ var _dev_tracing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dev/tracing.js */ "./node_modules/svelte/src/internal/client/dev/tracing.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context.js */ "./node_modules/svelte/src/internal/client/context.js");
/** @import { Derived, Effect, Reaction, Source, Value } from '#client' */









let inspect_effects = new Set();

/**
 * @param {Set<any>} v
 */
function set_inspect_effects(v) {
	inspect_effects = v;
}

/**
 * @template V
 * @param {V} v
 * @param {Error | null} [stack]
 * @returns {Source<V>}
 */
function source(v, stack) {
	/** @type {Value} */
	var signal = {
		f: 0, // TODO ideally we could skip this altogether, but it causes type errors
		v,
		reactions: null,
		equals: _equality_js__WEBPACK_IMPORTED_MODULE_2__.equals,
		rv: 0,
		wv: 0
	};

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && _flags_index_js__WEBPACK_IMPORTED_MODULE_5__.tracing_mode_flag) {
		signal.created = stack ?? (0,_dev_tracing_js__WEBPACK_IMPORTED_MODULE_6__.get_stack)('CreatedAt');
		signal.debug = null;
	}

	return signal;
}

/**
 * @template V
 * @param {V} v
 */
function state(v) {
	return push_derived_source(source(v));
}

/**
 * @template V
 * @param {V} initial_value
 * @param {boolean} [immutable]
 * @returns {Source<V>}
 */
/*#__NO_SIDE_EFFECTS__*/
function mutable_source(initial_value, immutable = false) {
	const s = source(initial_value);
	if (!immutable) {
		s.equals = _equality_js__WEBPACK_IMPORTED_MODULE_2__.safe_equals;
	}

	// bind the signal to the component context, in case we need to
	// track updates to trigger beforeUpdate/afterUpdate callbacks
	if (_flags_index_js__WEBPACK_IMPORTED_MODULE_5__.legacy_mode_flag && _context_js__WEBPACK_IMPORTED_MODULE_7__.component_context !== null && _context_js__WEBPACK_IMPORTED_MODULE_7__.component_context.l !== null) {
		(_context_js__WEBPACK_IMPORTED_MODULE_7__.component_context.l.s ??= []).push(s);
	}

	return s;
}

/**
 * @template V
 * @param {V} v
 * @param {boolean} [immutable]
 * @returns {Source<V>}
 */
function mutable_state(v, immutable = false) {
	return push_derived_source(mutable_source(v, immutable));
}

/**
 * @template V
 * @param {Source<V>} source
 */
/*#__NO_SIDE_EFFECTS__*/
function push_derived_source(source) {
	if (_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_reaction !== null && !_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untracking && (_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0) {
		if (_runtime_js__WEBPACK_IMPORTED_MODULE_1__.derived_sources === null) {
			(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_derived_sources)([source]);
		} else {
			_runtime_js__WEBPACK_IMPORTED_MODULE_1__.derived_sources.push(source);
		}
	}

	return source;
}

/**
 * @template V
 * @param {Value<V>} source
 * @param {V} value
 */
function mutate(source, value) {
	set(
		source,
		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untrack)(() => (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(source))
	);
	return value;
}

/**
 * @template V
 * @param {Source<V>} source
 * @param {V} value
 * @returns {V}
 */
function set(source, value) {
	if (
		_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_reaction !== null &&
		!_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untracking &&
		(0,_context_js__WEBPACK_IMPORTED_MODULE_7__.is_runes)() &&
		(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_reaction.f & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED | _constants_js__WEBPACK_IMPORTED_MODULE_3__.BLOCK_EFFECT)) !== 0 &&
		// If the source was created locally within the current derived, then
		// we allow the mutation.
		(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.derived_sources === null || !_runtime_js__WEBPACK_IMPORTED_MODULE_1__.derived_sources.includes(source))
	) {
		_errors_js__WEBPACK_IMPORTED_MODULE_4__.state_unsafe_mutation();
	}

	return internal_set(source, value);
}

/**
 * @template V
 * @param {Source<V>} source
 * @param {V} value
 * @returns {V}
 */
function internal_set(source, value) {
	if (!source.equals(value)) {
		var old_value = source.v;
		source.v = value;
		source.wv = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.increment_write_version)();

		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && _flags_index_js__WEBPACK_IMPORTED_MODULE_5__.tracing_mode_flag) {
			source.updated = (0,_dev_tracing_js__WEBPACK_IMPORTED_MODULE_6__.get_stack)('UpdatedAt');
			if (_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect != null) {
				source.trace_need_increase = true;
				source.trace_v ??= old_value;
			}
		}

		mark_reactions(source, _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY);

		// It's possible that the current reaction might not have up-to-date dependencies
		// whilst it's actively running. So in the case of ensuring it registers the reaction
		// properly for itself, we need to ensure the current effect actually gets
		// scheduled. i.e: `$effect(() => x++)`
		if (
			(0,_context_js__WEBPACK_IMPORTED_MODULE_7__.is_runes)() &&
			_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect !== null &&
			(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) !== 0 &&
			(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect.f & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.BRANCH_EFFECT | _constants_js__WEBPACK_IMPORTED_MODULE_3__.ROOT_EFFECT)) === 0
		) {
			if (_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untracked_writes === null) {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_untracked_writes)([source]);
			} else {
				_runtime_js__WEBPACK_IMPORTED_MODULE_1__.untracked_writes.push(source);
			}
		}

		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && inspect_effects.size > 0) {
			const inspects = Array.from(inspect_effects);

			for (const effect of inspects) {
				// Mark clean inspect-effects as maybe dirty and then check their dirtiness
				// instead of just updating the effects - this way we avoid overfiring.
				if ((effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) !== 0) {
					(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_signal_status)(effect, _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY);
				}
				if ((0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.check_dirtiness)(effect)) {
					(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.update_effect)(effect);
				}
			}

			inspect_effects.clear();
		}
	}

	return value;
}

/**
 * @template {number | bigint} T
 * @param {Source<T>} source
 * @param {1 | -1} [d]
 * @returns {T}
 */
function update(source, d = 1) {
	var value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(source);
	var result = d === 1 ? value++ : value--;

	set(source, value);

	// @ts-expect-error
	return result;
}

/**
 * @template {number | bigint} T
 * @param {Source<T>} source
 * @param {1 | -1} [d]
 * @returns {T}
 */
function update_pre(source, d = 1) {
	var value = (0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.get)(source);

	// @ts-expect-error
	return set(source, d === 1 ? ++value : --value);
}

/**
 * @param {Value} signal
 * @param {number} status should be DIRTY or MAYBE_DIRTY
 * @returns {void}
 */
function mark_reactions(signal, status) {
	var reactions = signal.reactions;
	if (reactions === null) return;

	var runes = (0,_context_js__WEBPACK_IMPORTED_MODULE_7__.is_runes)();
	var length = reactions.length;

	for (var i = 0; i < length; i++) {
		var reaction = reactions[i];
		var flags = reaction.f;

		// Skip any effects that are already dirty
		if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY) !== 0) continue;

		// In legacy mode, skip the current effect to prevent infinite loops
		if (!runes && reaction === _runtime_js__WEBPACK_IMPORTED_MODULE_1__.active_effect) continue;

		// Inspect effects need to run immediately, so that the stack trace makes sense
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.INSPECT_EFFECT) !== 0) {
			inspect_effects.add(reaction);
			continue;
		}

		(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.set_signal_status)(reaction, status);

		// If the signal a) was previously clean or b) is an unowned derived, then mark it
		if ((flags & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN | _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED)) !== 0) {
			if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0) {
				mark_reactions(/** @type {Derived} */ (reaction), _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY);
			} else {
				(0,_runtime_js__WEBPACK_IMPORTED_MODULE_1__.schedule_effect)(/** @type {Effect} */ (reaction));
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/reactivity/store.js":
/*!*********************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/reactivity/store.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capture_store_binding: () => (/* binding */ capture_store_binding),
/* harmony export */   invalidate_store: () => (/* binding */ invalidate_store),
/* harmony export */   mark_store_binding: () => (/* binding */ mark_store_binding),
/* harmony export */   setup_stores: () => (/* binding */ setup_stores),
/* harmony export */   store_get: () => (/* binding */ store_get),
/* harmony export */   store_mutate: () => (/* binding */ store_mutate),
/* harmony export */   store_set: () => (/* binding */ store_set),
/* harmony export */   store_unsub: () => (/* binding */ store_unsub),
/* harmony export */   update_pre_store: () => (/* binding */ update_pre_store),
/* harmony export */   update_store: () => (/* binding */ update_store)
/* harmony export */ });
/* harmony import */ var _store_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/utils.js */ "./node_modules/svelte/src/store/utils.js");
/* harmony import */ var _store_shared_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/shared/index.js */ "./node_modules/svelte/src/store/shared/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/** @import { StoreReferencesContainer } from '#client' */
/** @import { Store } from '#shared' */







/**
 * Whether or not the prop currently being read is a store binding, as in
 * `<Child bind:x={$y} />`. If it is, we treat the prop as mutable even in
 * runes mode, and skip `binding_property_non_reactive` validation
 */
let is_store_binding = false;

let IS_UNMOUNTED = Symbol();

/**
 * Gets the current value of a store. If the store isn't subscribed to yet, it will create a proxy
 * signal that will be updated when the store is. The store references container is needed to
 * track reassignments to stores and to track the correct component context.
 * @template V
 * @param {Store<V> | null | undefined} store
 * @param {string} store_name
 * @param {StoreReferencesContainer} stores
 * @returns {V}
 */
function store_get(store, store_name, stores) {
	const entry = (stores[store_name] ??= {
		store: null,
		source: (0,_sources_js__WEBPACK_IMPORTED_MODULE_5__.mutable_source)(undefined),
		unsubscribe: _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.noop
	});

	// if the component that setup this is already unmounted we don't want to register a subscription
	if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
		entry.unsubscribe();
		entry.store = store ?? null;

		if (store == null) {
			entry.source.v = undefined; // see synchronous callback comment below
			entry.unsubscribe = _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.noop;
		} else {
			var is_synchronous_callback = true;

			entry.unsubscribe = (0,_store_utils_js__WEBPACK_IMPORTED_MODULE_0__.subscribe_to_store)(store, (v) => {
				if (is_synchronous_callback) {
					// If the first updates to the store value (possibly multiple of them) are synchronously
					// inside a derived, we will hit the `state_unsafe_mutation` error if we `set` the value
					entry.source.v = v;
				} else {
					(0,_sources_js__WEBPACK_IMPORTED_MODULE_5__.set)(entry.source, v);
				}
			});

			is_synchronous_callback = false;
		}
	}

	// if the component that setup this stores is already unmounted the source will be out of sync
	// so we just use the `get` for the stores, less performant but it avoids to create a memory leak
	// and it will keep the value consistent
	if (store && IS_UNMOUNTED in stores) {
		return (0,_store_shared_index_js__WEBPACK_IMPORTED_MODULE_1__.get)(store);
	}

	return (0,_runtime_js__WEBPACK_IMPORTED_MODULE_3__.get)(entry.source);
}

/**
 * Unsubscribe from a store if it's not the same as the one in the store references container.
 * We need this in addition to `store_get` because someone could unsubscribe from a store but
 * then never subscribe to the new one (if any), causing the subscription to stay open wrongfully.
 * @param {Store<any> | null | undefined} store
 * @param {string} store_name
 * @param {StoreReferencesContainer} stores
 */
function store_unsub(store, store_name, stores) {
	/** @type {StoreReferencesContainer[''] | undefined} */
	let entry = stores[store_name];

	if (entry && entry.store !== store) {
		// Don't reset store yet, so that store_get above can resubscribe to new store if necessary
		entry.unsubscribe();
		entry.unsubscribe = _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.noop;
	}

	return store;
}

/**
 * Sets the new value of a store and returns that value.
 * @template V
 * @param {Store<V>} store
 * @param {V} value
 * @returns {V}
 */
function store_set(store, value) {
	store.set(value);
	return value;
}

/**
 * @param {StoreReferencesContainer} stores
 * @param {string} store_name
 */
function invalidate_store(stores, store_name) {
	var entry = stores[store_name];
	if (entry.store !== null) {
		store_set(entry.store, entry.source.v);
	}
}

/**
 * Unsubscribes from all auto-subscribed stores on destroy
 * @returns {[StoreReferencesContainer, ()=>void]}
 */
function setup_stores() {
	/** @type {StoreReferencesContainer} */
	const stores = {};

	function cleanup() {
		(0,_effects_js__WEBPACK_IMPORTED_MODULE_4__.teardown)(() => {
			for (var store_name in stores) {
				const ref = stores[store_name];
				ref.unsubscribe();
			}
			(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.define_property)(stores, IS_UNMOUNTED, {
				enumerable: false,
				value: true
			});
		});
	}

	return [stores, cleanup];
}

/**
 * Updates a store with a new value.
 * @param {Store<V>} store  the store to update
 * @param {any} expression  the expression that mutates the store
 * @param {V} new_value  the new store value
 * @template V
 */
function store_mutate(store, expression, new_value) {
	store.set(new_value);
	return expression;
}

/**
 * @param {Store<number>} store
 * @param {number} store_value
 * @param {1 | -1} [d]
 * @returns {number}
 */
function update_store(store, store_value, d = 1) {
	store.set(store_value + d);
	return store_value;
}

/**
 * @param {Store<number>} store
 * @param {number} store_value
 * @param {1 | -1} [d]
 * @returns {number}
 */
function update_pre_store(store, store_value, d = 1) {
	const value = store_value + d;
	store.set(value);
	return value;
}

/**
 * Called inside prop getters to communicate that the prop is a store binding
 */
function mark_store_binding() {
	is_store_binding = true;
}

/**
 * Returns a tuple that indicates whether `fn()` reads a prop that is a store binding.
 * Used to prevent `binding_property_non_reactive` validation false positives and
 * ensure that these props are treated as mutable even in runes mode
 * @template T
 * @param {() => T} fn
 * @returns {[T, boolean]}
 */
function capture_store_binding(fn) {
	var previous_is_store_binding = is_store_binding;

	try {
		is_store_binding = false;
		return [fn(), is_store_binding];
	} finally {
		is_store_binding = previous_is_store_binding;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/render.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/render.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hydrate: () => (/* binding */ hydrate),
/* harmony export */   mount: () => (/* binding */ mount),
/* harmony export */   set_should_intro: () => (/* binding */ set_should_intro),
/* harmony export */   set_text: () => (/* binding */ set_text),
/* harmony export */   should_intro: () => (/* binding */ should_intro),
/* harmony export */   unmount: () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _dom_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/hydration.js */ "./node_modules/svelte/src/internal/client/dom/hydration.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/elements/events.js */ "./node_modules/svelte/src/internal/client/dom/elements/events.js");
/* harmony import */ var _dom_blocks_svelte_head_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/blocks/svelte-head.js */ "./node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _dom_template_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/template.js */ "./node_modules/svelte/src/internal/client/dom/template.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/svelte/src/utils.js");
/** @import { ComponentContext, Effect, TemplateNode } from '#client' */
/** @import { Component, ComponentType, SvelteComponent, MountOptions } from '../../index.js' */















/**
 * This is normally true — block effects should run their intro transitions —
 * but is false during hydration (unless `options.intro` is `true`) and
 * when creating the children of a `<svelte:element>` that just changed tag
 */
let should_intro = true;

/** @param {boolean} value */
function set_should_intro(value) {
	should_intro = value;
}

/**
 * @param {Element} text
 * @param {string} value
 * @returns {void}
 */
function set_text(text, value) {
	// For objects, we apply string coercion (which might make things like $state array references in the template reactive) before diffing
	var str = value == null ? '' : typeof value === 'object' ? value + '' : value;
	// @ts-expect-error
	if (str !== (text.__t ??= text.nodeValue)) {
		// @ts-expect-error
		text.__t = str;
		text.nodeValue = str + '';
	}
}

/**
 * Mounts a component to the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component.
 * Transitions will play during the initial render unless the `intro` option is set to `false`.
 *
 * @template {Record<string, any>} Props
 * @template {Record<string, any>} Exports
 * @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
 * @param {MountOptions<Props>} options
 * @returns {Exports}
 */
function mount(component, options) {
	return _mount(component, options);
}

/**
 * Hydrates a component on the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component
 *
 * @template {Record<string, any>} Props
 * @template {Record<string, any>} Exports
 * @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
 * @param {{} extends Props ? {
 * 		target: Document | Element | ShadowRoot;
 * 		props?: Props;
 * 		events?: Record<string, (e: any) => any>;
 *  	context?: Map<any, any>;
 * 		intro?: boolean;
 * 		recover?: boolean;
 * 	} : {
 * 		target: Document | Element | ShadowRoot;
 * 		props: Props;
 * 		events?: Record<string, (e: any) => any>;
 *  	context?: Map<any, any>;
 * 		intro?: boolean;
 * 		recover?: boolean;
 * 	}} options
 * @returns {Exports}
 */
function hydrate(component, options) {
	(0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.init_operations)();
	options.intro = options.intro ?? false;
	const target = options.target;
	const was_hydrating = _dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating;
	const previous_hydrate_node = _dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_node;

	try {
		var anchor = /** @type {TemplateNode} */ ((0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_first_child)(target));
		while (
			anchor &&
			(anchor.nodeType !== 8 || /** @type {Comment} */ (anchor).data !== _constants_js__WEBPACK_IMPORTED_MODULE_2__.HYDRATION_START)
		) {
			anchor = /** @type {TemplateNode} */ ((0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.get_next_sibling)(anchor));
		}

		if (!anchor) {
			throw _constants_js__WEBPACK_IMPORTED_MODULE_2__.HYDRATION_ERROR;
		}

		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrating)(true);
		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrate_node)(/** @type {Comment} */ (anchor));
		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_next)();

		const instance = _mount(component, { ...options, anchor });

		if (
			_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_node === null ||
			_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_node.nodeType !== 8 ||
			/** @type {Comment} */ (_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_node).data !== _constants_js__WEBPACK_IMPORTED_MODULE_2__.HYDRATION_END
		) {
			_warnings_js__WEBPACK_IMPORTED_MODULE_10__.hydration_mismatch();
			throw _constants_js__WEBPACK_IMPORTED_MODULE_2__.HYDRATION_ERROR;
		}

		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrating)(false);

		return /**  @type {Exports} */ (instance);
	} catch (error) {
		if (error === _constants_js__WEBPACK_IMPORTED_MODULE_2__.HYDRATION_ERROR) {
			if (options.recover === false) {
				_errors_js__WEBPACK_IMPORTED_MODULE_11__.hydration_failed();
			}

			// If an error occured above, the operations might not yet have been initialised.
			(0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.init_operations)();
			(0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.clear_text_content)(target);

			(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrating)(false);
			return mount(component, options);
		}

		throw error;
	} finally {
		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrating)(was_hydrating);
		(0,_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.set_hydrate_node)(previous_hydrate_node);
		(0,_dom_blocks_svelte_head_js__WEBPACK_IMPORTED_MODULE_9__.reset_head_anchor)();
	}
}

/** @type {Map<string, number>} */
const document_listeners = new Map();

/**
 * @template {Record<string, any>} Exports
 * @param {ComponentType<SvelteComponent<any>> | Component<any>} Component
 * @param {MountOptions} options
 * @returns {Exports}
 */
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
	(0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.init_operations)();

	var registered_events = new Set();

	/** @param {Array<string>} events */
	var event_handle = (events) => {
		for (var i = 0; i < events.length; i++) {
			var event_name = events[i];

			if (registered_events.has(event_name)) continue;
			registered_events.add(event_name);

			var passive = (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.is_passive_event)(event_name);

			// Add the event listener to both the container and the document.
			// The container listener ensures we catch events from within in case
			// the outer content stops propagation of the event.
			target.addEventListener(event_name, _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.handle_event_propagation, { passive });

			var n = document_listeners.get(event_name);

			if (n === undefined) {
				// The document listener ensures we catch events that originate from elements that were
				// manually moved outside of the container (e.g. via manual portals).
				document.addEventListener(event_name, _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.handle_event_propagation, { passive });
				document_listeners.set(event_name, 1);
			} else {
				document_listeners.set(event_name, n + 1);
			}
		}
	};

	event_handle((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_7__.array_from)(_dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.all_registered_events));
	_dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.root_event_handles.add(event_handle);

	/** @type {Exports} */
	// @ts-expect-error will be defined because the render effect runs synchronously
	var component = undefined;

	var unmount = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_5__.component_root)(() => {
		var anchor_node = anchor ?? target.appendChild((0,_dom_operations_js__WEBPACK_IMPORTED_MODULE_1__.create_text)());

		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_5__.branch)(() => {
			if (context) {
				(0,_context_js__WEBPACK_IMPORTED_MODULE_4__.push)({});
				var ctx = /** @type {ComponentContext} */ (_context_js__WEBPACK_IMPORTED_MODULE_4__.component_context);
				ctx.c = context;
			}

			if (events) {
				// We can't spread the object or else we'd lose the state proxy stuff, if it is one
				/** @type {any} */ (props).$$events = events;
			}

			if (_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating) {
				(0,_dom_template_js__WEBPACK_IMPORTED_MODULE_12__.assign_nodes)(/** @type {TemplateNode} */ (anchor_node), null);
			}

			should_intro = intro;
			// @ts-expect-error the public typings are not what the actual function looks like
			component = Component(anchor_node, props) || {};
			should_intro = true;

			if (_dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrating) {
				/** @type {Effect} */ (_runtime_js__WEBPACK_IMPORTED_MODULE_3__.active_effect).nodes_end = _dom_hydration_js__WEBPACK_IMPORTED_MODULE_6__.hydrate_node;
			}

			if (context) {
				(0,_context_js__WEBPACK_IMPORTED_MODULE_4__.pop)();
			}
		});

		return () => {
			for (var event_name of registered_events) {
				target.removeEventListener(event_name, _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.handle_event_propagation);

				var n = /** @type {number} */ (document_listeners.get(event_name));

				if (--n === 0) {
					document.removeEventListener(event_name, _dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.handle_event_propagation);
					document_listeners.delete(event_name);
				} else {
					document_listeners.set(event_name, n);
				}
			}

			_dom_elements_events_js__WEBPACK_IMPORTED_MODULE_8__.root_event_handles.delete(event_handle);

			if (anchor_node !== anchor) {
				anchor_node.parentNode?.removeChild(anchor_node);
			}
		};
	});

	mounted_components.set(component, unmount);
	return component;
}

/**
 * References of the components that were mounted or hydrated.
 * Uses a `WeakMap` to avoid memory leaks.
 */
let mounted_components = new WeakMap();

/**
 * Unmounts a component that was previously mounted using `mount` or `hydrate`.
 *
 * Since 5.13.0, if `options.outro` is `true`, [transitions](https://svelte.dev/docs/svelte/transition) will play before the component is removed from the DOM.
 *
 * Returns a `Promise` that resolves after transitions have completed if `options.outro` is true, or immediately otherwise (prior to 5.13.0, returns `void`).
 *
 * ```js
 * import { mount, unmount } from 'svelte';
 * import App from './App.svelte';
 *
 * const app = mount(App, { target: document.body });
 *
 * // later...
 * unmount(app, { outro: true });
 * ```
 * @param {Record<string, any>} component
 * @param {{ outro?: boolean }} [options]
 * @returns {Promise<void>}
 */
function unmount(component, options) {
	const fn = mounted_components.get(component);

	if (fn) {
		mounted_components.delete(component);
		return fn(options);
	}

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_10__.lifecycle_double_unmount();
	}

	return Promise.resolve();
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/runtime.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/runtime.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   active_effect: () => (/* binding */ active_effect),
/* harmony export */   active_reaction: () => (/* binding */ active_reaction),
/* harmony export */   captured_signals: () => (/* binding */ captured_signals),
/* harmony export */   check_dirtiness: () => (/* binding */ check_dirtiness),
/* harmony export */   deep_read: () => (/* binding */ deep_read),
/* harmony export */   deep_read_state: () => (/* binding */ deep_read_state),
/* harmony export */   derived_sources: () => (/* binding */ derived_sources),
/* harmony export */   exclude_from_object: () => (/* binding */ exclude_from_object),
/* harmony export */   flushSync: () => (/* binding */ flushSync),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   handle_error: () => (/* binding */ handle_error),
/* harmony export */   increment_write_version: () => (/* binding */ increment_write_version),
/* harmony export */   invalidate_inner_signals: () => (/* binding */ invalidate_inner_signals),
/* harmony export */   is_destroying_effect: () => (/* binding */ is_destroying_effect),
/* harmony export */   remove_reactions: () => (/* binding */ remove_reactions),
/* harmony export */   reset_is_throwing_error: () => (/* binding */ reset_is_throwing_error),
/* harmony export */   safe_get: () => (/* binding */ safe_get),
/* harmony export */   schedule_effect: () => (/* binding */ schedule_effect),
/* harmony export */   set_active_effect: () => (/* binding */ set_active_effect),
/* harmony export */   set_active_reaction: () => (/* binding */ set_active_reaction),
/* harmony export */   set_captured_signals: () => (/* binding */ set_captured_signals),
/* harmony export */   set_derived_sources: () => (/* binding */ set_derived_sources),
/* harmony export */   set_is_destroying_effect: () => (/* binding */ set_is_destroying_effect),
/* harmony export */   set_signal_status: () => (/* binding */ set_signal_status),
/* harmony export */   set_untracked_writes: () => (/* binding */ set_untracked_writes),
/* harmony export */   skip_reaction: () => (/* binding */ skip_reaction),
/* harmony export */   tick: () => (/* binding */ tick),
/* harmony export */   untrack: () => (/* binding */ untrack),
/* harmony export */   untracked_writes: () => (/* binding */ untracked_writes),
/* harmony export */   untracking: () => (/* binding */ untracking),
/* harmony export */   update_effect: () => (/* binding */ update_effect),
/* harmony export */   update_reaction: () => (/* binding */ update_reaction)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _dom_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/task.js */ "./node_modules/svelte/src/internal/client/dom/task.js");
/* harmony import */ var _reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactivity/deriveds.js */ "./node_modules/svelte/src/internal/client/reactivity/deriveds.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flags/index.js */ "./node_modules/svelte/src/internal/flags/index.js");
/* harmony import */ var _dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dev/tracing.js */ "./node_modules/svelte/src/internal/client/dev/tracing.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _dom_operations_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/operations.js */ "./node_modules/svelte/src/internal/client/dom/operations.js");
/** @import { ComponentContext, Derived, Effect, Reaction, Signal, Source, Value } from '#client' */














// Used for DEV time error handling
/** @param {WeakSet<Error>} value */
const handled_errors = new WeakSet();
let is_throwing_error = false;

let is_flushing = false;

/** @type {Effect | null} */
let last_scheduled_effect = null;

let is_updating_effect = false;

let is_destroying_effect = false;

/** @param {boolean} value */
function set_is_destroying_effect(value) {
	is_destroying_effect = value;
}

// Handle effect queues

/** @type {Effect[]} */
let queued_root_effects = [];

/** @type {Effect[]} Stack of effects, dev only */
let dev_effect_stack = [];
// Handle signal reactivity tree dependencies and reactions

/** @type {null | Reaction} */
let active_reaction = null;

let untracking = false;

/** @param {null | Reaction} reaction */
function set_active_reaction(reaction) {
	active_reaction = reaction;
}

/** @type {null | Effect} */
let active_effect = null;

/** @param {null | Effect} effect */
function set_active_effect(effect) {
	active_effect = effect;
}

/**
 * When sources are created within a derived, we record them so that we can safely allow
 * local mutations to these sources without the side-effect error being invoked unnecessarily.
 * @type {null | Source[]}
 */
let derived_sources = null;

/**
 * @param {Source[] | null} sources
 */
function set_derived_sources(sources) {
	derived_sources = sources;
}

/**
 * The dependencies of the reaction that is currently being executed. In many cases,
 * the dependencies are unchanged between runs, and so this will be `null` unless
 * and until a new dependency is accessed — we track this via `skipped_deps`
 * @type {null | Value[]}
 */
let new_deps = null;

let skipped_deps = 0;

/**
 * Tracks writes that the effect it's executed in doesn't listen to yet,
 * so that the dependency can be added to the effect later on if it then reads it
 * @type {null | Source[]}
 */
let untracked_writes = null;

/** @param {null | Source[]} value */
function set_untracked_writes(value) {
	untracked_writes = value;
}

/**
 * @type {number} Used by sources and deriveds for handling updates.
 * Version starts from 1 so that unowned deriveds differentiate between a created effect and a run one for tracing
 **/
let write_version = 1;

/** @type {number} Used to version each read of a source of derived to avoid duplicating depedencies inside a reaction */
let read_version = 0;

// If we are working with a get() chain that has no active container,
// to prevent memory leaks, we skip adding the reaction.
let skip_reaction = false;
// Handle collecting all signals which are read during a specific time frame
/** @type {Set<Value> | null} */
let captured_signals = null;

/** @param {Set<Value> | null} value */
function set_captured_signals(value) {
	captured_signals = value;
}

function increment_write_version() {
	return ++write_version;
}

/**
 * Determines whether a derived or effect is dirty.
 * If it is MAYBE_DIRTY, will set the status to CLEAN
 * @param {Reaction} reaction
 * @returns {boolean}
 */
function check_dirtiness(reaction) {
	var flags = reaction.f;

	if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY) !== 0) {
		return true;
	}

	if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY) !== 0) {
		var dependencies = reaction.deps;
		var is_unowned = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED) !== 0;

		if (dependencies !== null) {
			var i;
			var dependency;
			var is_disconnected = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DISCONNECTED) !== 0;
			var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
			var length = dependencies.length;

			// If we are working with a disconnected or an unowned signal that is now connected (due to an active effect)
			// then we need to re-connect the reaction to the dependency
			if (is_disconnected || is_unowned_connected) {
				var derived = /** @type {Derived} */ (reaction);
				var parent = derived.parent;

				for (i = 0; i < length; i++) {
					dependency = dependencies[i];

					// We always re-add all reactions (even duplicates) if the derived was
					// previously disconnected, however we don't if it was unowned as we
					// de-duplicate dependencies in that case
					if (is_disconnected || !dependency?.reactions?.includes(derived)) {
						(dependency.reactions ??= []).push(derived);
					}
				}

				if (is_disconnected) {
					derived.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.DISCONNECTED;
				}
				// If the unowned derived is now fully connected to the graph again (it's unowned and reconnected, has a parent
				// and the parent is not unowned), then we can mark it as connected again, removing the need for the unowned
				// flag
				if (is_unowned_connected && parent !== null && (parent.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED) === 0) {
					derived.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED;
				}
			}

			for (i = 0; i < length; i++) {
				dependency = dependencies[i];

				if (check_dirtiness(/** @type {Derived} */ (dependency))) {
					(0,_reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_6__.update_derived)(/** @type {Derived} */ (dependency));
				}

				if (dependency.wv > reaction.wv) {
					return true;
				}
			}
		}

		// Unowned signals should never be marked as clean unless they
		// are used within an active_effect without skip_reaction
		if (!is_unowned || (active_effect !== null && !skip_reaction)) {
			set_signal_status(reaction, _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN);
		}
	}

	return false;
}

/**
 * @param {unknown} error
 * @param {Effect} effect
 */
function propagate_error(error, effect) {
	/** @type {Effect | null} */
	var current = effect;

	while (current !== null) {
		if ((current.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.BOUNDARY_EFFECT) !== 0) {
			try {
				// @ts-expect-error
				current.fn(error);
				return;
			} catch {
				// Remove boundary flag from effect
				current.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.BOUNDARY_EFFECT;
			}
		}

		current = current.parent;
	}

	is_throwing_error = false;
	throw error;
}

/**
 * @param {Effect} effect
 */
function should_rethrow_error(effect) {
	return (
		(effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DESTROYED) === 0 &&
		(effect.parent === null || (effect.parent.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.BOUNDARY_EFFECT) === 0)
	);
}

function reset_is_throwing_error() {
	is_throwing_error = false;
}

/**
 * @param {unknown} error
 * @param {Effect} effect
 * @param {Effect | null} previous_effect
 * @param {ComponentContext | null} component_context
 */
function handle_error(error, effect, previous_effect, component_context) {
	if (is_throwing_error) {
		if (previous_effect === null) {
			is_throwing_error = false;
		}

		if (should_rethrow_error(effect)) {
			throw error;
		}

		return;
	}

	if (previous_effect !== null) {
		is_throwing_error = true;
	}

	if (
		!esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ||
		component_context === null ||
		!(error instanceof Error) ||
		handled_errors.has(error)
	) {
		propagate_error(error, effect);
		return;
	}

	handled_errors.add(error);

	const component_stack = [];

	const effect_name = effect.fn?.name;

	if (effect_name) {
		component_stack.push(effect_name);
	}

	/** @type {ComponentContext | null} */
	let current_context = component_context;

	while (current_context !== null) {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			/** @type {string} */
			var filename = current_context.function?.[_constants_js__WEBPACK_IMPORTED_MODULE_8__.FILENAME];

			if (filename) {
				const file = filename.split('/').pop();
				component_stack.push(file);
			}
		}

		current_context = current_context.p;
	}

	const indent = _dom_operations_js__WEBPACK_IMPORTED_MODULE_12__.is_firefox ? '  ' : '\t';
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.define_property)(error, 'message', {
		value: error.message + `\n${component_stack.map((name) => `\n${indent}in ${name}`).join('')}\n`
	});
	(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.define_property)(error, 'component_stack', {
		value: component_stack
	});

	const stack = error.stack;

	// Filter out internal files from callstack
	if (stack) {
		const lines = stack.split('\n');
		const new_lines = [];
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			if (line.includes('svelte/src/internal')) {
				continue;
			}
			new_lines.push(line);
		}
		(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.define_property)(error, 'stack', {
			value: new_lines.join('\n')
		});
	}

	propagate_error(error, effect);

	if (should_rethrow_error(effect)) {
		throw error;
	}
}

/**
 * @param {Value} signal
 * @param {Effect} effect
 * @param {boolean} [root]
 */
function schedule_possible_effect_self_invalidation(signal, effect, root = true) {
	var reactions = signal.reactions;
	if (reactions === null) return;

	for (var i = 0; i < reactions.length; i++) {
		var reaction = reactions[i];
		if ((reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0) {
			schedule_possible_effect_self_invalidation(/** @type {Derived} */ (reaction), effect, false);
		} else if (effect === reaction) {
			if (root) {
				set_signal_status(reaction, _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY);
			} else if ((reaction.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) !== 0) {
				set_signal_status(reaction, _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY);
			}
			schedule_effect(/** @type {Effect} */ (reaction));
		}
	}
}

/**
 * @template V
 * @param {Reaction} reaction
 * @returns {V}
 */
function update_reaction(reaction) {
	var previous_deps = new_deps;
	var previous_skipped_deps = skipped_deps;
	var previous_untracked_writes = untracked_writes;
	var previous_reaction = active_reaction;
	var previous_skip_reaction = skip_reaction;
	var prev_derived_sources = derived_sources;
	var previous_component_context = _context_js__WEBPACK_IMPORTED_MODULE_11__.component_context;
	var previous_untracking = untracking;
	var flags = reaction.f;

	new_deps = /** @type {null | Value[]} */ (null);
	skipped_deps = 0;
	untracked_writes = null;
	skip_reaction =
		(flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
	active_reaction = (flags & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.BRANCH_EFFECT | _constants_js__WEBPACK_IMPORTED_MODULE_3__.ROOT_EFFECT)) === 0 ? reaction : null;

	derived_sources = null;
	(0,_context_js__WEBPACK_IMPORTED_MODULE_11__.set_component_context)(reaction.ctx);
	untracking = false;
	read_version++;

	try {
		var result = /** @type {Function} */ (0, reaction.fn)();
		var deps = reaction.deps;

		if (new_deps !== null) {
			var i;

			remove_reactions(reaction, skipped_deps);

			if (deps !== null && skipped_deps > 0) {
				deps.length = skipped_deps + new_deps.length;
				for (i = 0; i < new_deps.length; i++) {
					deps[skipped_deps + i] = new_deps[i];
				}
			} else {
				reaction.deps = deps = new_deps;
			}

			if (!skip_reaction) {
				for (i = skipped_deps; i < deps.length; i++) {
					(deps[i].reactions ??= []).push(reaction);
				}
			}
		} else if (deps !== null && skipped_deps < deps.length) {
			remove_reactions(reaction, skipped_deps);
			deps.length = skipped_deps;
		}

		// If we're inside an effect and we have untracked writes, then we need to
		// ensure that if any of those untracked writes result in re-invalidation
		// of the current effect, then that happens accordingly
		if (
			(0,_context_js__WEBPACK_IMPORTED_MODULE_11__.is_runes)() &&
			untracked_writes !== null &&
			!untracking &&
			deps !== null &&
			(reaction.f & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED | _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY | _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY)) === 0
		) {
			for (i = 0; i < /** @type {Source[]} */ (untracked_writes).length; i++) {
				schedule_possible_effect_self_invalidation(
					untracked_writes[i],
					/** @type {Effect} */ (reaction)
				);
			}
		}

		// If we are returning to an previous reaction then
		// we need to increment the read version to ensure that
		// any dependencies in this reaction aren't marked with
		// the same version
		if (previous_reaction !== null) {
			read_version++;
		}

		return result;
	} finally {
		new_deps = previous_deps;
		skipped_deps = previous_skipped_deps;
		untracked_writes = previous_untracked_writes;
		active_reaction = previous_reaction;
		skip_reaction = previous_skip_reaction;
		derived_sources = prev_derived_sources;
		(0,_context_js__WEBPACK_IMPORTED_MODULE_11__.set_component_context)(previous_component_context);
		untracking = previous_untracking;
	}
}

/**
 * @template V
 * @param {Reaction} signal
 * @param {Value<V>} dependency
 * @returns {void}
 */
function remove_reaction(signal, dependency) {
	let reactions = dependency.reactions;
	if (reactions !== null) {
		var index = _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.index_of.call(reactions, signal);
		if (index !== -1) {
			var new_length = reactions.length - 1;
			if (new_length === 0) {
				reactions = dependency.reactions = null;
			} else {
				// Swap with last element and then remove.
				reactions[index] = reactions[new_length];
				reactions.pop();
			}
		}
	}
	// If the derived has no reactions, then we can disconnect it from the graph,
	// allowing it to either reconnect in the future, or be GC'd by the VM.
	if (
		reactions === null &&
		(dependency.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0 &&
		// Destroying a child effect while updating a parent effect can cause a dependency to appear
		// to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
		// allows us to skip the expensive work of disconnecting and immediately reconnecting it
		(new_deps === null || !new_deps.includes(dependency))
	) {
		set_signal_status(dependency, _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY);
		// If we are working with a derived that is owned by an effect, then mark it as being
		// disconnected.
		if ((dependency.f & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED | _constants_js__WEBPACK_IMPORTED_MODULE_3__.DISCONNECTED)) === 0) {
			dependency.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.DISCONNECTED;
		}
		// Disconnect any reactions owned by this reaction
		(0,_reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_6__.destroy_derived_effects)(/** @type {Derived} **/ (dependency));
		remove_reactions(/** @type {Derived} **/ (dependency), 0);
	}
}

/**
 * @param {Reaction} signal
 * @param {number} start_index
 * @returns {void}
 */
function remove_reactions(signal, start_index) {
	var dependencies = signal.deps;
	if (dependencies === null) return;

	for (var i = start_index; i < dependencies.length; i++) {
		remove_reaction(signal, dependencies[i]);
	}
}

/**
 * @param {Effect} effect
 * @returns {void}
 */
function update_effect(effect) {
	var flags = effect.f;

	if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DESTROYED) !== 0) {
		return;
	}

	set_signal_status(effect, _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN);

	var previous_effect = active_effect;
	var previous_component_context = _context_js__WEBPACK_IMPORTED_MODULE_11__.component_context;
	var was_updating_effect = is_updating_effect;

	active_effect = effect;
	is_updating_effect = true;

	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		var previous_component_fn = _context_js__WEBPACK_IMPORTED_MODULE_11__.dev_current_component_function;
		(0,_context_js__WEBPACK_IMPORTED_MODULE_11__.set_dev_current_component_function)(effect.component_function);
	}

	try {
		if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.BLOCK_EFFECT) !== 0) {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.destroy_block_effect_children)(effect);
		} else {
			(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.destroy_effect_children)(effect);
		}

		(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.execute_effect_teardown)(effect);
		var teardown = update_reaction(effect);
		effect.teardown = typeof teardown === 'function' ? teardown : null;
		effect.wv = write_version;

		var deps = effect.deps;

		// In DEV, we need to handle a case where $inspect.trace() might
		// incorrectly state a source dependency has not changed when it has.
		// That's beacuse that source was changed by the same effect, causing
		// the versions to match. We can avoid this by incrementing the version
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && _flags_index_js__WEBPACK_IMPORTED_MODULE_9__.tracing_mode_flag && (effect.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY) !== 0 && deps !== null) {
			for (let i = 0; i < deps.length; i++) {
				var dep = deps[i];
				if (dep.trace_need_increase) {
					dep.wv = increment_write_version();
					dep.trace_need_increase = undefined;
					dep.trace_v = undefined;
				}
			}
		}

		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			dev_effect_stack.push(effect);
		}
	} catch (error) {
		handle_error(error, effect, previous_effect, previous_component_context || effect.ctx);
	} finally {
		is_updating_effect = was_updating_effect;
		active_effect = previous_effect;

		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			(0,_context_js__WEBPACK_IMPORTED_MODULE_11__.set_dev_current_component_function)(previous_component_fn);
		}
	}
}

function log_effect_stack() {
	// eslint-disable-next-line no-console
	console.error(
		'Last ten effects were: ',
		dev_effect_stack.slice(-10).map((d) => d.fn)
	);
	dev_effect_stack = [];
}

function infinite_loop_guard() {
	try {
		_errors_js__WEBPACK_IMPORTED_MODULE_7__.effect_update_depth_exceeded();
	} catch (error) {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			// stack is garbage, ignore. Instead add a console.error message.
			(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.define_property)(error, 'stack', {
				value: ''
			});
		}
		// Try and handle the error so it can be caught at a boundary, that's
		// if there's an effect available from when it was last scheduled
		if (last_scheduled_effect !== null) {
			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
				try {
					handle_error(error, last_scheduled_effect, null, null);
				} catch (e) {
					// Only log the effect stack if the error is re-thrown
					log_effect_stack();
					throw e;
				}
			} else {
				handle_error(error, last_scheduled_effect, null, null);
			}
		} else {
			if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
				log_effect_stack();
			}
			throw error;
		}
	}
}

function flush_queued_root_effects() {
	try {
		var flush_count = 0;

		while (queued_root_effects.length > 0) {
			if (flush_count++ > 1000) {
				infinite_loop_guard();
			}

			var root_effects = queued_root_effects;
			var length = root_effects.length;

			queued_root_effects = [];

			for (var i = 0; i < length; i++) {
				var root = root_effects[i];

				if ((root.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) === 0) {
					root.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN;
				}

				var collected_effects = process_effects(root);
				flush_queued_effects(collected_effects);
			}
		}
	} finally {
		is_flushing = false;

		last_scheduled_effect = null;
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			dev_effect_stack = [];
		}
	}
}

/**
 * @param {Array<Effect>} effects
 * @returns {void}
 */
function flush_queued_effects(effects) {
	var length = effects.length;
	if (length === 0) return;

	for (var i = 0; i < length; i++) {
		var effect = effects[i];

		if ((effect.f & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.DESTROYED | _constants_js__WEBPACK_IMPORTED_MODULE_3__.INERT)) === 0) {
			try {
				if (check_dirtiness(effect)) {
					update_effect(effect);

					// Effects with no dependencies or teardown do not get added to the effect tree.
					// Deferred effects (e.g. `$effect(...)`) _are_ added to the tree because we
					// don't know if we need to keep them until they are executed. Doing the check
					// here (rather than in `update_effect`) allows us to skip the work for
					// immediate effects.
					if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
						if (effect.teardown === null) {
							// remove this effect from the graph
							(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_2__.unlink_effect)(effect);
						} else {
							// keep the effect in the graph, but free up some memory
							effect.fn = null;
						}
					}
				}
			} catch (error) {
				handle_error(error, effect, null, effect.ctx);
			}
		}
	}
}

/**
 * @param {Effect} signal
 * @returns {void}
 */
function schedule_effect(signal) {
	if (!is_flushing) {
		is_flushing = true;
		queueMicrotask(flush_queued_root_effects);
	}

	var effect = (last_scheduled_effect = signal);

	while (effect.parent !== null) {
		effect = effect.parent;
		var flags = effect.f;

		if ((flags & (_constants_js__WEBPACK_IMPORTED_MODULE_3__.ROOT_EFFECT | _constants_js__WEBPACK_IMPORTED_MODULE_3__.BRANCH_EFFECT)) !== 0) {
			if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) === 0) return;
			effect.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN;
		}
	}

	queued_root_effects.push(effect);
}

/**
 *
 * This function both runs render effects and collects user effects in topological order
 * from the starting effect passed in. Effects will be collected when they match the filtered
 * bitwise flag passed in only. The collected effects array will be populated with all the user
 * effects to be flushed.
 *
 * @param {Effect} root
 * @returns {Effect[]}
 */
function process_effects(root) {
	/** @type {Effect[]} */
	var effects = [];

	var effect = root.first;

	while (effect !== null) {
		var flags = effect.f;
		var is_branch = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.BRANCH_EFFECT) !== 0;
		var is_skippable_branch = is_branch && (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN) !== 0;

		if (!is_skippable_branch && (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.INERT) === 0) {
			if ((flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.EFFECT) !== 0) {
				effects.push(effect);
			} else if (is_branch) {
				effect.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN;
			} else {
				// Ensure we set the effect to be the active reaction
				// to ensure that unowned deriveds are correctly tracked
				// because we're flushing the current effect
				var previous_active_reaction = active_reaction;
				try {
					active_reaction = effect;
					if (check_dirtiness(effect)) {
						update_effect(effect);
					}
				} catch (error) {
					handle_error(error, effect, null, effect.ctx);
				} finally {
					active_reaction = previous_active_reaction;
				}
			}

			var child = effect.first;

			if (child !== null) {
				effect = child;
				continue;
			}
		}

		var parent = effect.parent;
		effect = effect.next;

		while (effect === null && parent !== null) {
			effect = parent.next;
			parent = parent.parent;
		}
	}

	return effects;
}

/**
 * Synchronously flush any pending updates.
 * Returns void if no callback is provided, otherwise returns the result of calling the callback.
 * @template [T=void]
 * @param {(() => T) | undefined} [fn]
 * @returns {T}
 */
function flushSync(fn) {
	var result;

	if (fn) {
		is_flushing = true;
		flush_queued_root_effects();
		result = fn();
	}

	(0,_dom_task_js__WEBPACK_IMPORTED_MODULE_4__.flush_tasks)();

	while (queued_root_effects.length > 0) {
		is_flushing = true;
		flush_queued_root_effects();
		(0,_dom_task_js__WEBPACK_IMPORTED_MODULE_4__.flush_tasks)();
	}

	return /** @type {T} */ (result);
}

/**
 * Returns a promise that resolves once any pending state changes have been applied.
 * @returns {Promise<void>}
 */
async function tick() {
	await Promise.resolve();
	// By calling flushSync we guarantee that any pending state changes are applied after one tick.
	// TODO look into whether we can make flushing subsequent updates synchronously in the future.
	flushSync();
}

/**
 * @template V
 * @param {Value<V>} signal
 * @returns {V}
 */
function get(signal) {
	var flags = signal.f;
	var is_derived = (flags & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) !== 0;

	if (captured_signals !== null) {
		captured_signals.add(signal);
	}

	// Register the dependency on the current reaction signal.
	if (active_reaction !== null && !untracking) {
		if (derived_sources !== null && derived_sources.includes(signal)) {
			_errors_js__WEBPACK_IMPORTED_MODULE_7__.state_unsafe_local_read();
		}
		var deps = active_reaction.deps;
		if (signal.rv < read_version) {
			signal.rv = read_version;
			// If the signal is accessing the same dependencies in the same
			// order as it did last time, increment `skipped_deps`
			// rather than updating `new_deps`, which creates GC cost
			if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
				skipped_deps++;
			} else if (new_deps === null) {
				new_deps = [signal];
			} else if (!skip_reaction || !new_deps.includes(signal)) {
				// Normally we can push duplicated dependencies to `new_deps`, but if we're inside
				// an unowned derived because skip_reaction is true, then we need to ensure that
				// we don't have duplicates
				new_deps.push(signal);
			}
		}
	} else if (
		is_derived &&
		/** @type {Derived} */ (signal).deps === null &&
		/** @type {Derived} */ (signal).effects === null
	) {
		var derived = /** @type {Derived} */ (signal);
		var parent = derived.parent;

		if (parent !== null && (parent.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED) === 0) {
			// If the derived is owned by another derived then mark it as unowned
			// as the derived value might have been referenced in a different context
			// since and thus its parent might not be its true owner anymore
			derived.f ^= _constants_js__WEBPACK_IMPORTED_MODULE_3__.UNOWNED;
		}
	}

	if (is_derived) {
		derived = /** @type {Derived} */ (signal);

		if (check_dirtiness(derived)) {
			(0,_reactivity_deriveds_js__WEBPACK_IMPORTED_MODULE_6__.update_derived)(derived);
		}
	}

	if (
		esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV &&
		_flags_index_js__WEBPACK_IMPORTED_MODULE_9__.tracing_mode_flag &&
		_dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__.tracing_expressions !== null &&
		active_reaction !== null &&
		_dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__.tracing_expressions.reaction === active_reaction
	) {
		// Used when mapping state between special blocks like `each`
		if (signal.debug) {
			signal.debug();
		} else if (signal.created) {
			var entry = _dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__.tracing_expressions.entries.get(signal);

			if (entry === undefined) {
				entry = { read: [] };
				_dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__.tracing_expressions.entries.set(signal, entry);
			}

			entry.read.push((0,_dev_tracing_js__WEBPACK_IMPORTED_MODULE_10__.get_stack)('TracedAt'));
		}
	}

	return signal.v;
}

/**
 * Like `get`, but checks for `undefined`. Used for `var` declarations because they can be accessed before being declared
 * @template V
 * @param {Value<V> | undefined} signal
 * @returns {V | undefined}
 */
function safe_get(signal) {
	return signal && get(signal);
}

/**
 * Capture an array of all the signals that are read when `fn` is called
 * @template T
 * @param {() => T} fn
 */
function capture_signals(fn) {
	var previous_captured_signals = captured_signals;
	captured_signals = new Set();

	var captured = captured_signals;
	var signal;

	try {
		untrack(fn);
		if (previous_captured_signals !== null) {
			for (signal of captured_signals) {
				previous_captured_signals.add(signal);
			}
		}
	} finally {
		captured_signals = previous_captured_signals;
	}

	return captured;
}

/**
 * Invokes a function and captures all signals that are read during the invocation,
 * then invalidates them.
 * @param {() => any} fn
 */
function invalidate_inner_signals(fn) {
	var captured = capture_signals(() => untrack(fn));

	for (var signal of captured) {
		// Go one level up because derived signals created as part of props in legacy mode
		if ((signal.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.LEGACY_DERIVED_PROP) !== 0) {
			for (const dep of /** @type {Derived} */ (signal).deps || []) {
				if ((dep.f & _constants_js__WEBPACK_IMPORTED_MODULE_3__.DERIVED) === 0) {
					// Use internal_set instead of set here and below to avoid mutation validation
					(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.internal_set)(dep, dep.v);
				}
			}
		} else {
			(0,_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_5__.internal_set)(signal, signal.v);
		}
	}
}

/**
 * When used inside a [`$derived`](https://svelte.dev/docs/svelte/$derived) or [`$effect`](https://svelte.dev/docs/svelte/$effect),
 * any state read inside `fn` will not be treated as a dependency.
 *
 * ```ts
 * $effect(() => {
 *   // this will run when `data` changes, but not when `time` changes
 *   save(data, {
 *     timestamp: untrack(() => time)
 *   });
 * });
 * ```
 * @template T
 * @param {() => T} fn
 * @returns {T}
 */
function untrack(fn) {
	var previous_untracking = untracking;
	try {
		untracking = true;
		return fn();
	} finally {
		untracking = previous_untracking;
	}
}

const STATUS_MASK = ~(_constants_js__WEBPACK_IMPORTED_MODULE_3__.DIRTY | _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAYBE_DIRTY | _constants_js__WEBPACK_IMPORTED_MODULE_3__.CLEAN);

/**
 * @param {Signal} signal
 * @param {number} status
 * @returns {void}
 */
function set_signal_status(signal, status) {
	signal.f = (signal.f & STATUS_MASK) | status;
}

/**
 * @param {Record<string, unknown>} obj
 * @param {string[]} keys
 * @returns {Record<string, unknown>}
 */
function exclude_from_object(obj, keys) {
	/** @type {Record<string, unknown>} */
	var result = {};

	for (var key in obj) {
		if (!keys.includes(key)) {
			result[key] = obj[key];
		}
	}

	return result;
}

/**
 * Possibly traverse an object and read all its properties so that they're all reactive in case this is `$state`.
 * Does only check first level of an object for performance reasons (heuristic should be good for 99% of all cases).
 * @param {any} value
 * @returns {void}
 */
function deep_read_state(value) {
	if (typeof value !== 'object' || !value || value instanceof EventTarget) {
		return;
	}

	if (_constants_js__WEBPACK_IMPORTED_MODULE_3__.STATE_SYMBOL in value) {
		deep_read(value);
	} else if (!Array.isArray(value)) {
		for (let key in value) {
			const prop = value[key];
			if (typeof prop === 'object' && prop && _constants_js__WEBPACK_IMPORTED_MODULE_3__.STATE_SYMBOL in prop) {
				deep_read(prop);
			}
		}
	}
}

/**
 * Deeply traverse an object and read all its properties
 * so that they're all reactive in case this is `$state`
 * @param {any} value
 * @param {Set<any>} visited
 * @returns {void}
 */
function deep_read(value, visited = new Set()) {
	if (
		typeof value === 'object' &&
		value !== null &&
		// We don't want to traverse DOM elements
		!(value instanceof EventTarget) &&
		!visited.has(value)
	) {
		visited.add(value);
		// When working with a possible SvelteDate, this
		// will ensure we capture changes to it.
		if (value instanceof Date) {
			value.getTime();
		}
		for (let key in value) {
			try {
				deep_read(value[key], visited);
			} catch (e) {
				// continue
			}
		}
		const proto = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.get_prototype_of)(value);
		if (
			proto !== Object.prototype &&
			proto !== Array.prototype &&
			proto !== Map.prototype &&
			proto !== Set.prototype &&
			proto !== Date.prototype
		) {
			const descriptors = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.get_descriptors)(proto);
			for (let key in descriptors) {
				const get = descriptors[key].get;
				if (get) {
					try {
						get.call(value);
					} catch (e) {
						// continue
					}
				}
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/timing.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/timing.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   raf: () => (/* binding */ raf)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/** @import { Raf } from '#client' */




const now = esm_env__WEBPACK_IMPORTED_MODULE_1__.BROWSER ? () => performance.now() : () => Date.now();

/** @type {Raf} */
const raf = {
	// don't access requestAnimationFrame eagerly outside method
	// this allows basic testing of user code without JSDOM
	// bunder will eval and remove ternary when the user's app is built
	tick: /** @param {any} _ */ (_) => (esm_env__WEBPACK_IMPORTED_MODULE_1__.BROWSER ? requestAnimationFrame : _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop)(_),
	now: () => now(),
	tasks: new Set()
};


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate_binding: () => (/* binding */ validate_binding),
/* harmony export */   validate_each_keys: () => (/* binding */ validate_each_keys)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.js */ "./node_modules/svelte/src/internal/client/errors.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var _reactivity_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactivity/store.js */ "./node_modules/svelte/src/internal/client/reactivity/store.js");








/**
 * @param {() => any} collection
 * @param {(item: any, index: number) => string} key_fn
 * @returns {void}
 */
function validate_each_keys(collection, key_fn) {
	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__.render_effect)(() => {
		const keys = new Map();
		const maybe_array = collection();
		const array = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.is_array)(maybe_array)
			? maybe_array
			: maybe_array == null
				? []
				: Array.from(maybe_array);
		const length = array.length;
		for (let i = 0; i < length; i++) {
			const key = key_fn(array[i], i);
			if (keys.has(key)) {
				const a = String(keys.get(key));
				const b = String(i);

				/** @type {string | null} */
				let k = String(key);
				if (k.startsWith('[object ')) k = null;

				_errors_js__WEBPACK_IMPORTED_MODULE_2__.each_key_duplicate(a, b, k);
			}
			keys.set(key, i);
		}
	});
}

/**
 * @param {string} binding
 * @param {() => Record<string, any>} get_object
 * @param {() => string} get_property
 * @param {number} line
 * @param {number} column
 */
function validate_binding(binding, get_object, get_property, line, column) {
	var warned = false;

	var filename = _context_js__WEBPACK_IMPORTED_MODULE_0__.dev_current_component_function?.[_constants_js__WEBPACK_IMPORTED_MODULE_3__.FILENAME];

	(0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__.render_effect)(() => {
		if (warned) return;

		var [object, is_store_sub] = (0,_reactivity_store_js__WEBPACK_IMPORTED_MODULE_6__.capture_store_binding)(get_object);

		if (is_store_sub) return;

		var property = get_property();

		var ran = false;

		// by making the (possibly false, but it would be an extreme edge case) assumption
		// that a getter has a corresponding setter, we can determine if a property is
		// reactive by seeing if this effect has dependencies
		var effect = (0,_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_4__.render_effect)(() => {
			if (ran) return;

			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			object[property];
		});

		ran = true;

		if (effect.deps === null) {
			var location = `${filename}:${line}:${column}`;
			_warnings_js__WEBPACK_IMPORTED_MODULE_5__.binding_property_non_reactive(binding, location);

			warned = true;
		}
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/client/warnings.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/internal/client/warnings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignment_value_stale: () => (/* binding */ assignment_value_stale),
/* harmony export */   binding_property_non_reactive: () => (/* binding */ binding_property_non_reactive),
/* harmony export */   console_log_state: () => (/* binding */ console_log_state),
/* harmony export */   event_handler_invalid: () => (/* binding */ event_handler_invalid),
/* harmony export */   hydration_attribute_changed: () => (/* binding */ hydration_attribute_changed),
/* harmony export */   hydration_html_changed: () => (/* binding */ hydration_html_changed),
/* harmony export */   hydration_mismatch: () => (/* binding */ hydration_mismatch),
/* harmony export */   invalid_raw_snippet_render: () => (/* binding */ invalid_raw_snippet_render),
/* harmony export */   legacy_recursive_reactive_block: () => (/* binding */ legacy_recursive_reactive_block),
/* harmony export */   lifecycle_double_unmount: () => (/* binding */ lifecycle_double_unmount),
/* harmony export */   ownership_invalid_binding: () => (/* binding */ ownership_invalid_binding),
/* harmony export */   ownership_invalid_mutation: () => (/* binding */ ownership_invalid_mutation),
/* harmony export */   state_proxy_equality_mismatch: () => (/* binding */ state_proxy_equality_mismatch),
/* harmony export */   transition_slide_display: () => (/* binding */ transition_slide_display)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* This file is generated by scripts/process-messages/index.js. Do not edit! */



var bold = 'font-weight: bold';
var normal = 'font-weight: normal';

/**
 * Assignment to `%property%` property (%location%) will evaluate to the right-hand side, not the value of `%property%` following the assignment. This may result in unexpected behaviour.
 * @param {string} property
 * @param {string} location
 */
function assignment_value_stale(property, location) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] assignment_value_stale\n%cAssignment to \`${property}\` property (${location}) will evaluate to the right-hand side, not the value of \`${property}\` following the assignment. This may result in unexpected behaviour.\nhttps://svelte.dev/e/assignment_value_stale`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/assignment_value_stale`);
	}
}

/**
 * `%binding%` (%location%) is binding to a non-reactive property
 * @param {string} binding
 * @param {string | undefined | null} [location]
 */
function binding_property_non_reactive(binding, location) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] binding_property_non_reactive\n%c${location ? `\`${binding}\` (${location}) is binding to a non-reactive property` : `\`${binding}\` is binding to a non-reactive property`}\nhttps://svelte.dev/e/binding_property_non_reactive`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/binding_property_non_reactive`);
	}
}

/**
 * Your `console.%method%` contained `$state` proxies. Consider using `$inspect(...)` or `$state.snapshot(...)` instead
 * @param {string} method
 */
function console_log_state(method) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] console_log_state\n%cYour \`console.${method}\` contained \`$state\` proxies. Consider using \`$inspect(...)\` or \`$state.snapshot(...)\` instead\nhttps://svelte.dev/e/console_log_state`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/console_log_state`);
	}
}

/**
 * %handler% should be a function. Did you mean to %suggestion%?
 * @param {string} handler
 * @param {string} suggestion
 */
function event_handler_invalid(handler, suggestion) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] event_handler_invalid\n%c${handler} should be a function. Did you mean to ${suggestion}?\nhttps://svelte.dev/e/event_handler_invalid`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/event_handler_invalid`);
	}
}

/**
 * The `%attribute%` attribute on `%html%` changed its value between server and client renders. The client value, `%value%`, will be ignored in favour of the server value
 * @param {string} attribute
 * @param {string} html
 * @param {string} value
 */
function hydration_attribute_changed(attribute, html, value) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] hydration_attribute_changed\n%cThe \`${attribute}\` attribute on \`${html}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value\nhttps://svelte.dev/e/hydration_attribute_changed`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
	}
}

/**
 * The value of an `{@html ...}` block %location% changed between server and client renders. The client value will be ignored in favour of the server value
 * @param {string | undefined | null} [location]
 */
function hydration_html_changed(location) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] hydration_html_changed\n%c${location ? `The value of an \`{@html ...}\` block ${location} changed between server and client renders. The client value will be ignored in favour of the server value` : 'The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value'}\nhttps://svelte.dev/e/hydration_html_changed`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/hydration_html_changed`);
	}
}

/**
 * Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near %location%
 * @param {string | undefined | null} [location]
 */
function hydration_mismatch(location) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] hydration_mismatch\n%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : 'Hydration failed because the initial UI does not match what was rendered on the server'}\nhttps://svelte.dev/e/hydration_mismatch`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/hydration_mismatch`);
	}
}

/**
 * The `render` function passed to `createRawSnippet` should return HTML for a single element
 */
function invalid_raw_snippet_render() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] invalid_raw_snippet_render\n%cThe \`render\` function passed to \`createRawSnippet\` should return HTML for a single element\nhttps://svelte.dev/e/invalid_raw_snippet_render`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/invalid_raw_snippet_render`);
	}
}

/**
 * Detected a migrated `$:` reactive block in `%filename%` that both accesses and updates the same reactive value. This may cause recursive updates when converted to an `$effect`.
 * @param {string} filename
 */
function legacy_recursive_reactive_block(filename) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] legacy_recursive_reactive_block\n%cDetected a migrated \`$:\` reactive block in \`${filename}\` that both accesses and updates the same reactive value. This may cause recursive updates when converted to an \`$effect\`.\nhttps://svelte.dev/e/legacy_recursive_reactive_block`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/legacy_recursive_reactive_block`);
	}
}

/**
 * Tried to unmount a component that was not mounted
 */
function lifecycle_double_unmount() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] lifecycle_double_unmount\n%cTried to unmount a component that was not mounted\nhttps://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
	}
}

/**
 * %parent% passed a value to %child% with `bind:`, but the value is owned by %owner%. Consider creating a binding between %owner% and %parent%
 * @param {string} parent
 * @param {string} child
 * @param {string} owner
 */
function ownership_invalid_binding(parent, child, owner) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] ownership_invalid_binding\n%c${parent} passed a value to ${child} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}\nhttps://svelte.dev/e/ownership_invalid_binding`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/ownership_invalid_binding`);
	}
}

/**
 * %component% mutated a value owned by %owner%. This is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead
 * @param {string | undefined | null} [component]
 * @param {string | undefined | null} [owner]
 */
function ownership_invalid_mutation(component, owner) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] ownership_invalid_mutation\n%c${component ? `${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : 'Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead'}\nhttps://svelte.dev/e/ownership_invalid_mutation`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/ownership_invalid_mutation`);
	}
}

/**
 * Reactive `$state(...)` proxies and the values they proxy have different identities. Because of this, comparisons with `%operator%` will produce unexpected results
 * @param {string} operator
 */
function state_proxy_equality_mismatch(operator) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
	}
}

/**
 * The `slide` transition does not work correctly for elements with `display: %value%`
 * @param {string} value
 */
function transition_slide_display(value) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] transition_slide_display\n%cThe \`slide\` transition does not work correctly for elements with \`display: ${value}\`\nhttps://svelte.dev/e/transition_slide_display`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/transition_slide_display`);
	}
}

/***/ }),

/***/ "./node_modules/svelte/src/internal/disclose-version.js":
/*!**************************************************************!*\
  !*** ./node_modules/svelte/src/internal/disclose-version.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version.js */ "./node_modules/svelte/src/version.js");


if (typeof window !== 'undefined')
	// @ts-ignore
	(window.__svelte ||= { v: new Set() }).v.add(_version_js__WEBPACK_IMPORTED_MODULE_0__.PUBLIC_VERSION);


/***/ }),

/***/ "./node_modules/svelte/src/internal/flags/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/internal/flags/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enable_legacy_mode_flag: () => (/* binding */ enable_legacy_mode_flag),
/* harmony export */   enable_tracing_mode_flag: () => (/* binding */ enable_tracing_mode_flag),
/* harmony export */   legacy_mode_flag: () => (/* binding */ legacy_mode_flag),
/* harmony export */   tracing_mode_flag: () => (/* binding */ tracing_mode_flag)
/* harmony export */ });
let legacy_mode_flag = false;
let tracing_mode_flag = false;

function enable_legacy_mode_flag() {
	legacy_mode_flag = true;
}

function enable_tracing_mode_flag() {
	tracing_mode_flag = true;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/flags/legacy.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/internal/flags/legacy.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/svelte/src/internal/flags/index.js");


(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.enable_legacy_mode_flag)();


/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/attributes.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/attributes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   to_class: () => (/* binding */ to_class)
/* harmony export */ });
/* harmony import */ var _escaping_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../escaping.js */ "./node_modules/svelte/src/escaping.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.js");



/**
 * `<div translate={false}>` should be rendered as `<div translate="no">` and _not_
 * `<div translate="false">`, which is equivalent to `<div translate="yes">`. There
 * may be other odd cases that need to be added to this list in future
 * @type {Record<string, Map<any, string>>}
 */
const replacements = {
	translate: new Map([
		[true, 'yes'],
		[false, 'no']
	])
};

/**
 * @template V
 * @param {string} name
 * @param {V} value
 * @param {boolean} [is_boolean]
 * @returns {string}
 */
function attr(name, value, is_boolean = false) {
	if (value == null || (!value && is_boolean) || (value === '' && name === 'class')) return '';
	const normalized = (name in replacements && replacements[name].get(value)) || value;
	const assignment = is_boolean ? '' : `="${(0,_escaping_js__WEBPACK_IMPORTED_MODULE_0__.escape_html)(normalized, true)}"`;
	return ` ${name}${assignment}`;
}

/**
 * Small wrapper around clsx to preserve Svelte's (weird) handling of falsy values.
 * TODO Svelte 6 revisit this, and likely turn all falsy values into the empty string (what clsx also does)
 * @param  {any} value
 */
function clsx(value) {
	if (typeof value === 'object') {
		return (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(value);
	} else {
		return value ?? '';
	}
}

const whitespace = [...' \t\n\r\f\u00a0\u000b\ufeff'];

/**
 * @param {any} value
 * @param {string | null} [hash]
 * @param {Record<string, boolean>} [directives]
 * @returns {string | null}
 */
function to_class(value, hash, directives) {
	var classname = value == null ? '' : '' + value;

	if (hash) {
		classname = classname ? classname + ' ' + hash : hash;
	}

	if (directives) {
		for (var key in directives) {
			if (directives[key]) {
				classname = classname ? classname + ' ' + key : key;
			} else if (classname.length) {
				var len = key.length;
				var a = 0;

				while ((a = classname.indexOf(key, a)) >= 0) {
					var b = a + len;

					if (
						(a === 0 || whitespace.includes(classname[a - 1])) &&
						(b === classname.length || whitespace.includes(classname[b]))
					) {
						classname = (a === 0 ? '' : classname.substring(0, a)) + classname.substring(b + 1);
					} else {
						a = b;
					}
				}
			}
		}
	}

	return classname === '' ? null : classname;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snapshot: () => (/* binding */ snapshot)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warnings.js */ "./node_modules/svelte/src/internal/shared/warnings.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/** @import { Snapshot } from './types' */




/**
 * In dev, we keep track of which properties could not be cloned. In prod
 * we don't bother, but we keep a dummy array around so that the
 * signature stays the same
 * @type {string[]}
 */
const empty = [];

/**
 * @template T
 * @param {T} value
 * @param {boolean} [skip_warning]
 * @returns {Snapshot<T>}
 */
function snapshot(value, skip_warning = false) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV && !skip_warning) {
		/** @type {string[]} */
		const paths = [];

		const copy = clone(value, new Map(), '', paths);
		if (paths.length === 1 && paths[0] === '') {
			// value could not be cloned
			_warnings_js__WEBPACK_IMPORTED_MODULE_1__.state_snapshot_uncloneable();
		} else if (paths.length > 0) {
			// some properties could not be cloned
			const slice = paths.length > 10 ? paths.slice(0, 7) : paths.slice(0, 10);
			const excess = paths.length - slice.length;

			let uncloned = slice.map((path) => `- <value>${path}`).join('\n');
			if (excess > 0) uncloned += `\n- ...and ${excess} more`;

			_warnings_js__WEBPACK_IMPORTED_MODULE_1__.state_snapshot_uncloneable(uncloned);
		}

		return copy;
	}

	return clone(value, new Map(), '', empty);
}

/**
 * @template T
 * @param {T} value
 * @param {Map<T, Snapshot<T>>} cloned
 * @param {string} path
 * @param {string[]} paths
 * @param {null | T} original The original value, if `value` was produced from a `toJSON` call
 * @returns {Snapshot<T>}
 */
function clone(value, cloned, path, paths, original = null) {
	if (typeof value === 'object' && value !== null) {
		var unwrapped = cloned.get(value);
		if (unwrapped !== undefined) return unwrapped;

		if (value instanceof Map) return /** @type {Snapshot<T>} */ (new Map(value));
		if (value instanceof Set) return /** @type {Snapshot<T>} */ (new Set(value));

		if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_array)(value)) {
			var copy = /** @type {Snapshot<any>} */ (Array(value.length));
			cloned.set(value, copy);

			if (original !== null) {
				cloned.set(original, copy);
			}

			for (var i = 0; i < value.length; i += 1) {
				var element = value[i];
				if (i in value) {
					copy[i] = clone(element, cloned, esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ? `${path}[${i}]` : path, paths);
				}
			}

			return copy;
		}

		if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.get_prototype_of)(value) === _utils_js__WEBPACK_IMPORTED_MODULE_2__.object_prototype) {
			/** @type {Snapshot<any>} */
			copy = {};
			cloned.set(value, copy);

			if (original !== null) {
				cloned.set(original, copy);
			}

			for (var key in value) {
				// @ts-expect-error
				copy[key] = clone(value[key], cloned, esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ? `${path}.${key}` : path, paths);
			}

			return copy;
		}

		if (value instanceof Date) {
			return /** @type {Snapshot<T>} */ (structuredClone(value));
		}

		if (typeof (/** @type {T & { toJSON?: any } } */ (value).toJSON) === 'function') {
			return clone(
				/** @type {T & { toJSON(): any } } */ (value).toJSON(),
				cloned,
				esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV ? `${path}.toJSON()` : path,
				paths,
				// Associate the instance with the toJSON clone
				value
			);
		}
	}

	if (value instanceof EventTarget) {
		// can't be cloned
		return /** @type {Snapshot<T>} */ (value);
	}

	try {
		return /** @type {Snapshot<T>} */ (structuredClone(value));
	} catch (e) {
		if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
			paths.push(path);
		}

		return /** @type {Snapshot<T>} */ (value);
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalid_default_snippet: () => (/* binding */ invalid_default_snippet),
/* harmony export */   lifecycle_outside_component: () => (/* binding */ lifecycle_outside_component),
/* harmony export */   store_invalid_shape: () => (/* binding */ store_invalid_shape),
/* harmony export */   svelte_element_invalid_this_value: () => (/* binding */ svelte_element_invalid_this_value)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* This file is generated by scripts/process-messages/index.js. Do not edit! */



/**
 * Cannot use `{@render children(...)}` if the parent component uses `let:` directives. Consider using a named snippet instead
 * @returns {never}
 */
function invalid_default_snippet() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`invalid_default_snippet\nCannot use \`{@render children(...)}\` if the parent component uses \`let:\` directives. Consider using a named snippet instead\nhttps://svelte.dev/e/invalid_default_snippet`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/invalid_default_snippet`);
	}
}

/**
 * `%name%(...)` can only be used during component initialisation
 * @param {string} name
 * @returns {never}
 */
function lifecycle_outside_component(name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`lifecycle_outside_component\n\`${name}(...)\` can only be used during component initialisation\nhttps://svelte.dev/e/lifecycle_outside_component`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
	}
}

/**
 * `%name%` is not a store with a `subscribe` method
 * @param {string} name
 * @returns {never}
 */
function store_invalid_shape(name) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`store_invalid_shape\n\`${name}\` is not a store with a \`subscribe\` method\nhttps://svelte.dev/e/store_invalid_shape`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/store_invalid_shape`);
	}
}

/**
 * The `this` prop on `<svelte:element>` must be a string, if defined
 * @returns {never}
 */
function svelte_element_invalid_this_value() {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		const error = new Error(`svelte_element_invalid_this_value\nThe \`this\` prop on \`<svelte:element>\` must be a string, if defined\nhttps://svelte.dev/e/svelte_element_invalid_this_value`);

		error.name = 'Svelte error';
		throw error;
	} else {
		throw new Error(`https://svelte.dev/e/svelte_element_invalid_this_value`);
	}
}

/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   array_from: () => (/* binding */ array_from),
/* harmony export */   array_prototype: () => (/* binding */ array_prototype),
/* harmony export */   deferred: () => (/* binding */ deferred),
/* harmony export */   define_property: () => (/* binding */ define_property),
/* harmony export */   fallback: () => (/* binding */ fallback),
/* harmony export */   get_descriptor: () => (/* binding */ get_descriptor),
/* harmony export */   get_descriptors: () => (/* binding */ get_descriptors),
/* harmony export */   get_prototype_of: () => (/* binding */ get_prototype_of),
/* harmony export */   index_of: () => (/* binding */ index_of),
/* harmony export */   is_array: () => (/* binding */ is_array),
/* harmony export */   is_function: () => (/* binding */ is_function),
/* harmony export */   is_promise: () => (/* binding */ is_promise),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   object_keys: () => (/* binding */ object_keys),
/* harmony export */   object_prototype: () => (/* binding */ object_prototype),
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   run_all: () => (/* binding */ run_all)
/* harmony export */ });
// Store the references to globals in case someone tries to monkey patch these, causing the below
// to de-opt (this occurs often when using popular extensions).
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;

/**
 * @param {any} thing
 * @returns {thing is Function}
 */
function is_function(thing) {
	return typeof thing === 'function';
}

const noop = () => {};

// Adapted from https://github.com/then/is-promise/blob/master/index.js
// Distributed under MIT License https://github.com/then/is-promise/blob/master/LICENSE

/**
 * @template [T=any]
 * @param {any} value
 * @returns {value is PromiseLike<T>}
 */
function is_promise(value) {
	return typeof value?.then === 'function';
}

/** @param {Function} fn */
function run(fn) {
	return fn();
}

/** @param {Array<() => void>} arr */
function run_all(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i]();
	}
}

/**
 * TODO replace with Promise.withResolvers once supported widely enough
 * @template T
 */
function deferred() {
	/** @type {(value: T) => void} */
	var resolve;

	/** @type {(reason: any) => void} */
	var reject;

	/** @type {Promise<T>} */
	var promise = new Promise((res, rej) => {
		resolve = res;
		reject = rej;
	});

	// @ts-expect-error
	return { promise, resolve, reject };
}

/**
 * @template V
 * @param {V} value
 * @param {V | (() => V)} fallback
 * @param {boolean} [lazy]
 * @returns {V}
 */
function fallback(value, fallback, lazy = false) {
	return value === undefined
		? lazy
			? /** @type {() => V} */ (fallback)()
			: /** @type {V} */ (fallback)
		: value;
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalid_default_snippet: () => (/* reexport safe */ _errors_js__WEBPACK_IMPORTED_MODULE_2__.invalid_default_snippet),
/* harmony export */   validate_dynamic_element_tag: () => (/* binding */ validate_dynamic_element_tag),
/* harmony export */   validate_store: () => (/* binding */ validate_store),
/* harmony export */   validate_void_dynamic_element: () => (/* binding */ validate_void_dynamic_element)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/svelte/src/utils.js");
/* harmony import */ var _warnings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warnings.js */ "./node_modules/svelte/src/internal/shared/warnings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.js */ "./node_modules/svelte/src/internal/shared/errors.js");
/** @import { TemplateNode } from '#client' */
/** @import { Getters } from '#shared' */






/**
 * @param {() => string} tag_fn
 * @returns {void}
 */
function validate_void_dynamic_element(tag_fn) {
	const tag = tag_fn();
	if (tag && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_void)(tag)) {
		_warnings_js__WEBPACK_IMPORTED_MODULE_1__.dynamic_void_element_content(tag);
	}
}

/** @param {() => unknown} tag_fn */
function validate_dynamic_element_tag(tag_fn) {
	const tag = tag_fn();
	const is_string = typeof tag === 'string';
	if (tag && !is_string) {
		_errors_js__WEBPACK_IMPORTED_MODULE_2__.svelte_element_invalid_this_value();
	}
}

/**
 * @param {any} store
 * @param {string} name
 */
function validate_store(store, name) {
	if (store != null && typeof store.subscribe !== 'function') {
		_errors_js__WEBPACK_IMPORTED_MODULE_2__.store_invalid_shape(name);
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/internal/shared/warnings.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/internal/shared/warnings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamic_void_element_content: () => (/* binding */ dynamic_void_element_content),
/* harmony export */   state_snapshot_uncloneable: () => (/* binding */ state_snapshot_uncloneable)
/* harmony export */ });
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* This file is generated by scripts/process-messages/index.js. Do not edit! */



var bold = 'font-weight: bold';
var normal = 'font-weight: normal';

/**
 * `<svelte:element this="%tag%">` is a void element — it cannot have content
 * @param {string} tag
 */
function dynamic_void_element_content(tag) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] dynamic_void_element_content\n%c\`<svelte:element this="${tag}">\` is a void element — it cannot have content\nhttps://svelte.dev/e/dynamic_void_element_content`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/dynamic_void_element_content`);
	}
}

/**
 * The following properties cannot be cloned with `$state.snapshot` — the return value contains the originals:
 * 
 * %properties%
 * @param {string | undefined | null} [properties]
 */
function state_snapshot_uncloneable(properties) {
	if (esm_env__WEBPACK_IMPORTED_MODULE_0__.DEV) {
		console.warn(`%c[svelte] state_snapshot_uncloneable\n%c${properties
			? `The following properties cannot be cloned with \`$state.snapshot\` — the return value contains the originals:

${properties}`
			: 'Value cannot be cloned with `$state.snapshot` — the original value was returned'}\nhttps://svelte.dev/e/state_snapshot_uncloneable`, bold, normal);
	} else {
		console.warn(`https://svelte.dev/e/state_snapshot_uncloneable`);
	}
}

/***/ }),

/***/ "./node_modules/svelte/src/legacy/legacy-client.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/legacy/legacy-client.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asClassComponent: () => (/* binding */ asClassComponent),
/* harmony export */   createBubbler: () => (/* binding */ createBubbler),
/* harmony export */   createClassComponent: () => (/* binding */ createClassComponent),
/* harmony export */   handlers: () => (/* binding */ handlers),
/* harmony export */   nonpassive: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.nonpassive),
/* harmony export */   once: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.once),
/* harmony export */   passive: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.passive),
/* harmony export */   preventDefault: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.preventDefault),
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   self: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.self),
/* harmony export */   stopImmediatePropagation: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.stopImmediatePropagation),
/* harmony export */   stopPropagation: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.stopPropagation),
/* harmony export */   trusted: () => (/* reexport safe */ _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__.trusted)
/* harmony export */ });
/* harmony import */ var _internal_client_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/client/constants.js */ "./node_modules/svelte/src/internal/client/constants.js");
/* harmony import */ var _internal_client_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/client/reactivity/effects.js */ "./node_modules/svelte/src/internal/client/reactivity/effects.js");
/* harmony import */ var _internal_client_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/client/reactivity/sources.js */ "./node_modules/svelte/src/internal/client/reactivity/sources.js");
/* harmony import */ var _internal_client_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/client/render.js */ "./node_modules/svelte/src/internal/client/render.js");
/* harmony import */ var _internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/client/runtime.js */ "./node_modules/svelte/src/internal/client/runtime.js");
/* harmony import */ var _internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/shared/errors.js */ "./node_modules/svelte/src/internal/shared/errors.js");
/* harmony import */ var _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _internal_client_warnings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/client/warnings.js */ "./node_modules/svelte/src/internal/client/warnings.js");
/* harmony import */ var esm_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esm-env */ "./node_modules/esm-env/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants.js */ "./node_modules/svelte/src/constants.js");
/* harmony import */ var _internal_client_context_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/client/context.js */ "./node_modules/svelte/src/internal/client/context.js");
/* harmony import */ var _internal_client_dom_legacy_event_modifiers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/client/dom/legacy/event-modifiers.js */ "./node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js");
/** @import { ComponentConstructorOptions, ComponentType, SvelteComponent, Component } from 'svelte' */












/**
 * Takes the same options as a Svelte 4 component and the component function and returns a Svelte 4 compatible component.
 *
 * @deprecated Use this only as a temporary solution to migrate your imperative component code to Svelte 5.
 *
 * @template {Record<string, any>} Props
 * @template {Record<string, any>} Exports
 * @template {Record<string, any>} Events
 * @template {Record<string, any>} Slots
 *
 * @param {ComponentConstructorOptions<Props> & {
 * 	component: ComponentType<SvelteComponent<Props, Events, Slots>> | Component<Props>;
 * }} options
 * @returns {SvelteComponent<Props, Events, Slots> & Exports}
 */
function createClassComponent(options) {
	// @ts-expect-error $$prop_def etc are not actually defined
	return new Svelte4Component(options);
}

/**
 * Takes the component function and returns a Svelte 4 compatible component constructor.
 *
 * @deprecated Use this only as a temporary solution to migrate your imperative component code to Svelte 5.
 *
 * @template {Record<string, any>} Props
 * @template {Record<string, any>} Exports
 * @template {Record<string, any>} Events
 * @template {Record<string, any>} Slots
 *
 * @param {SvelteComponent<Props, Events, Slots> | Component<Props>} component
 * @returns {ComponentType<SvelteComponent<Props, Events, Slots> & Exports>}
 */
function asClassComponent(component) {
	// @ts-expect-error $$prop_def etc are not actually defined
	return class extends Svelte4Component {
		/** @param {any} options */
		constructor(options) {
			super({
				component,
				...options
			});
		}
	};
}

/**
 * Support using the component as both a class and function during the transition period
 * @typedef  {{new (o: ComponentConstructorOptions): SvelteComponent;(...args: Parameters<Component<Record<string, any>>>): ReturnType<Component<Record<string, any>, Record<string, any>>>;}} LegacyComponentType
 */

class Svelte4Component {
	/** @type {any} */
	#events;

	/** @type {Record<string, any>} */
	#instance;

	/**
	 * @param {ComponentConstructorOptions & {
	 *  component: any;
	 * }} options
	 */
	constructor(options) {
		var sources = new Map();

		/**
		 * @param {string | symbol} key
		 * @param {unknown} value
		 */
		var add_source = (key, value) => {
			var s = (0,_internal_client_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_2__.mutable_source)(value);
			sources.set(key, s);
			return s;
		};

		// Replicate coarse-grained props through a proxy that has a version source for
		// each property, which is incremented on updates to the property itself. Do not
		// use our $state proxy because that one has fine-grained reactivity.
		const props = new Proxy(
			{ ...(options.props || {}), $$events: {} },
			{
				get(target, prop) {
					return (0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__.get)(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
				},
				has(target, prop) {
					// Necessary to not throw "invalid binding" validation errors on the component side
					if (prop === _internal_client_constants_js__WEBPACK_IMPORTED_MODULE_0__.LEGACY_PROPS) return true;

					(0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__.get)(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
					return Reflect.has(target, prop);
				},
				set(target, prop, value) {
					(0,_internal_client_reactivity_sources_js__WEBPACK_IMPORTED_MODULE_2__.set)(sources.get(prop) ?? add_source(prop, value), value);
					return Reflect.set(target, prop, value);
				}
			}
		);

		this.#instance = (options.hydrate ? _internal_client_render_js__WEBPACK_IMPORTED_MODULE_3__.hydrate : _internal_client_render_js__WEBPACK_IMPORTED_MODULE_3__.mount)(options.component, {
			target: options.target,
			anchor: options.anchor,
			props,
			context: options.context,
			intro: options.intro ?? false,
			recover: options.recover
		});

		// We don't flushSync for custom element wrappers or if the user doesn't want it
		if (!options?.props?.$$host || options.sync === false) {
			(0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__.flushSync)();
		}

		this.#events = props.$$events;

		for (const key of Object.keys(this.#instance)) {
			if (key === '$set' || key === '$destroy' || key === '$on') continue;
			(0,_internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_6__.define_property)(this, key, {
				get() {
					return this.#instance[key];
				},
				/** @param {any} value */
				set(value) {
					this.#instance[key] = value;
				},
				enumerable: true
			});
		}

		this.#instance.$set = /** @param {Record<string, any>} next */ (next) => {
			Object.assign(props, next);
		};

		this.#instance.$destroy = () => {
			(0,_internal_client_render_js__WEBPACK_IMPORTED_MODULE_3__.unmount)(this.#instance);
		};
	}

	/** @param {Record<string, any>} props */
	$set(props) {
		this.#instance.$set(props);
	}

	/**
	 * @param {string} event
	 * @param {(...args: any[]) => any} callback
	 * @returns {any}
	 */
	$on(event, callback) {
		this.#events[event] = this.#events[event] || [];

		/** @param {any[]} args */
		const cb = (...args) => callback.call(this, ...args);
		this.#events[event].push(cb);
		return () => {
			this.#events[event] = this.#events[event].filter(/** @param {any} fn */ (fn) => fn !== cb);
		};
	}

	$destroy() {
		this.#instance.$destroy();
	}
}

/**
 * Runs the given function once immediately on the server, and works like `$effect.pre` on the client.
 *
 * @deprecated Use this only as a temporary solution to migrate your component code to Svelte 5.
 * @param {() => void | (() => void)} fn
 * @returns {void}
 */
function run(fn) {
	(0,_internal_client_reactivity_effects_js__WEBPACK_IMPORTED_MODULE_1__.user_pre_effect)(() => {
		fn();
		var effect = /** @type {import('#client').Effect} */ (_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__.active_effect);
		// If the effect is immediately made dirty again, mark it as maybe dirty to emulate legacy behaviour
		if ((effect.f & _internal_client_constants_js__WEBPACK_IMPORTED_MODULE_0__.DIRTY) !== 0) {
			let filename = "a file (we can't know which one)";
			if (esm_env__WEBPACK_IMPORTED_MODULE_8__.DEV) {
				// @ts-ignore
				filename = _internal_client_context_js__WEBPACK_IMPORTED_MODULE_10__.dev_current_component_function?.[_constants_js__WEBPACK_IMPORTED_MODULE_9__.FILENAME] ?? filename;
			}
			_internal_client_warnings_js__WEBPACK_IMPORTED_MODULE_7__.legacy_recursive_reactive_block(filename);
			(0,_internal_client_runtime_js__WEBPACK_IMPORTED_MODULE_4__.set_signal_status)(effect, _internal_client_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAYBE_DIRTY);
		}
	});
}

/**
 * Function to mimic the multiple listeners available in svelte 4
 * @deprecated
 * @param {EventListener[]} handlers
 * @returns {EventListener}
 */
function handlers(...handlers) {
	return function (event) {
		const { stopImmediatePropagation } = event;
		let stopped = false;

		event.stopImmediatePropagation = () => {
			stopped = true;
			stopImmediatePropagation.call(event);
		};

		const errors = [];

		for (const handler of handlers) {
			try {
				// @ts-expect-error `this` is not typed
				handler?.call(this, event);
			} catch (e) {
				errors.push(e);
			}

			if (stopped) {
				break;
			}
		}

		for (let error of errors) {
			queueMicrotask(() => {
				throw error;
			});
		}
	};
}

/**
 * Function to create a `bubble` function that mimic the behavior of `on:click` without handler available in svelte 4.
 * @deprecated Use this only as a temporary solution to migrate your automatically delegated events in Svelte 5.
 */
function createBubbler() {
	const active_component_context = _internal_client_context_js__WEBPACK_IMPORTED_MODULE_10__.component_context;
	if (active_component_context === null) {
		(0,_internal_shared_errors_js__WEBPACK_IMPORTED_MODULE_5__.lifecycle_outside_component)('createBubbler');
	}

	return (/**@type {string}*/ type) => (/**@type {Event}*/ event) => {
		const events = /** @type {Record<string, Function | Function[]>} */ (
			active_component_context.s.$$events
		)?.[/** @type {any} */ (type)];

		if (events) {
			const callbacks = (0,_internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_6__.is_array)(events) ? events.slice() : [events];
			for (const fn of callbacks) {
				fn.call(active_component_context.x, event);
			}
			return !event.defaultPrevented;
		}
		return true;
	};
}




/***/ }),

/***/ "./node_modules/svelte/src/store/shared/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/svelte/src/store/shared/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   derived: () => (/* binding */ derived),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   readable: () => (/* binding */ readable),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   writable: () => (/* binding */ writable)
/* harmony export */ });
/* harmony import */ var _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/* harmony import */ var _internal_client_reactivity_equality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/client/reactivity/equality.js */ "./node_modules/svelte/src/internal/client/reactivity/equality.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/svelte/src/store/utils.js");
/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */




/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Creates a `Readable` store that allows reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Readable<T>}
 */
function readable(value, start) {
	return {
		subscribe: writable(value, start).subscribe
	};
}

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if ((0,_internal_client_reactivity_equality_js__WEBPACK_IMPORTED_MODULE_1__.safe_not_equal)(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>, set: (value: T) => void, update: (fn: Updater<T>) => void) => Unsubscriber | void} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>) => T} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * @template {Stores} S
 * @template T
 * @param {S} stores
 * @param {Function} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
function derived(stores, fn, initial_value) {
	const single = !Array.isArray(stores);
	/** @type {Array<Readable<any>>} */
	const stores_array = single ? [stores] : stores;
	if (!stores_array.every(Boolean)) {
		throw new Error('derived() expects stores as input, got a falsy value');
	}
	const auto = fn.length < 2;
	return readable(initial_value, (set, update) => {
		let started = false;
		/** @type {T[]} */
		const values = [];
		let pending = 0;
		let cleanup = _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
		const sync = () => {
			if (pending) {
				return;
			}
			cleanup();
			const result = fn(single ? values[0] : values, set, update);
			if (auto) {
				set(result);
			} else {
				cleanup = typeof result === 'function' ? result : _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
			}
		};
		const unsubscribers = stores_array.map((store, i) =>
			(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.subscribe_to_store)(
				store,
				(value) => {
					values[i] = value;
					pending &= ~(1 << i);
					if (started) {
						sync();
					}
				},
				() => {
					pending |= 1 << i;
				}
			)
		);
		started = true;
		sync();
		return function stop() {
			(0,_internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(unsubscribers);
			cleanup();
			// We need to set this to false because callbacks can still happen despite having unsubscribed:
			// Callbacks might already be placed in the queue which doesn't know it should no longer
			// invoke this derived store.
			started = false;
		};
	});
}

/**
 * Takes a store and returns a new one derived from the old one that is readable.
 *
 * @template T
 * @param {Readable<T>} store  - store to make readonly
 * @returns {Readable<T>}
 */
function readonly(store) {
	return {
		// @ts-expect-error TODO i suspect the bind is unnecessary
		subscribe: store.subscribe.bind(store)
	};
}

/**
 * Get the current value from a store by subscribing and immediately unsubscribing.
 *
 * @template T
 * @param {Readable<T>} store
 * @returns {T}
 */
function get(store) {
	let value;
	(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.subscribe_to_store)(store, (_) => (value = _))();
	// @ts-expect-error
	return value;
}


/***/ }),

/***/ "./node_modules/svelte/src/store/utils.js":
/*!************************************************!*\
  !*** ./node_modules/svelte/src/store/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribe_to_store: () => (/* binding */ subscribe_to_store)
/* harmony export */ });
/* harmony import */ var _index_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index-client.js */ "./node_modules/svelte/src/index-client.js");
/* harmony import */ var _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/shared/utils.js */ "./node_modules/svelte/src/internal/shared/utils.js");
/** @import { Readable } from './public' */



/**
 * @template T
 * @param {Readable<T> | null | undefined} store
 * @param {(value: T) => void} run
 * @param {(value: T) => void} [invalidate]
 * @returns {() => void}
 */
function subscribe_to_store(store, run, invalidate) {
	if (store == null) {
		// @ts-expect-error
		run(undefined);

		// @ts-expect-error
		if (invalidate) invalidate(undefined);

		return _internal_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noop;
	}

	// Svelte store takes a private second argument
	// StartStopNotifier could mutate state, and we want to silence the corresponding validation error
	const unsub = (0,_index_client_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(() =>
		store.subscribe(
			run,
			// @ts-expect-error
			invalidate
		)
	);

	// Also support RxJS
	// @ts-expect-error TODO fix this in the types?
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}


/***/ }),

/***/ "./node_modules/svelte/src/utils.js":
/*!******************************************!*\
  !*** ./node_modules/svelte/src/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cannot_be_set_statically: () => (/* binding */ cannot_be_set_statically),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   is_boolean_attribute: () => (/* binding */ is_boolean_attribute),
/* harmony export */   is_capture_event: () => (/* binding */ is_capture_event),
/* harmony export */   is_content_editable_binding: () => (/* binding */ is_content_editable_binding),
/* harmony export */   is_delegated: () => (/* binding */ is_delegated),
/* harmony export */   is_dom_property: () => (/* binding */ is_dom_property),
/* harmony export */   is_load_error_element: () => (/* binding */ is_load_error_element),
/* harmony export */   is_mathml: () => (/* binding */ is_mathml),
/* harmony export */   is_passive_event: () => (/* binding */ is_passive_event),
/* harmony export */   is_raw_text_element: () => (/* binding */ is_raw_text_element),
/* harmony export */   is_reserved: () => (/* binding */ is_reserved),
/* harmony export */   is_rune: () => (/* binding */ is_rune),
/* harmony export */   is_svg: () => (/* binding */ is_svg),
/* harmony export */   is_void: () => (/* binding */ is_void),
/* harmony export */   normalize_attribute: () => (/* binding */ normalize_attribute),
/* harmony export */   sanitize_location: () => (/* binding */ sanitize_location)
/* harmony export */ });
const regex_return_characters = /\r/g;

/**
 * @param {string} str
 * @returns {string}
 */
function hash(str) {
	str = str.replace(regex_return_characters, '');
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return (hash >>> 0).toString(36);
}

const VOID_ELEMENT_NAMES = [
	'area',
	'base',
	'br',
	'col',
	'command',
	'embed',
	'hr',
	'img',
	'input',
	'keygen',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr'
];

/**
 * Returns `true` if `name` is of a void element
 * @param {string} name
 */
function is_void(name) {
	return VOID_ELEMENT_NAMES.includes(name) || name.toLowerCase() === '!doctype';
}

const RESERVED_WORDS = [
	'arguments',
	'await',
	'break',
	'case',
	'catch',
	'class',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'else',
	'enum',
	'eval',
	'export',
	'extends',
	'false',
	'finally',
	'for',
	'function',
	'if',
	'implements',
	'import',
	'in',
	'instanceof',
	'interface',
	'let',
	'new',
	'null',
	'package',
	'private',
	'protected',
	'public',
	'return',
	'static',
	'super',
	'switch',
	'this',
	'throw',
	'true',
	'try',
	'typeof',
	'var',
	'void',
	'while',
	'with',
	'yield'
];

/**
 * Returns `true` if `word` is a reserved JavaScript keyword
 * @param {string} word
 */
function is_reserved(word) {
	return RESERVED_WORDS.includes(word);
}

/**
 * @param {string} name
 */
function is_capture_event(name) {
	return name.endsWith('capture') && name !== 'gotpointercapture' && name !== 'lostpointercapture';
}

/** List of Element events that will be delegated */
const DELEGATED_EVENTS = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];

/**
 * Returns `true` if `event_name` is a delegated event
 * @param {string} event_name
 */
function is_delegated(event_name) {
	return DELEGATED_EVENTS.includes(event_name);
}

/**
 * Attributes that are boolean, i.e. they are present or not present.
 */
const DOM_BOOLEAN_ATTRIBUTES = [
	'allowfullscreen',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'disabled',
	'formnovalidate',
	'hidden',
	'indeterminate',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'seamless',
	'selected',
	'webkitdirectory',
	'defer',
	'disablepictureinpicture',
	'disableremoteplayback'
];

/**
 * Returns `true` if `name` is a boolean attribute
 * @param {string} name
 */
function is_boolean_attribute(name) {
	return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}

/**
 * @type {Record<string, string>}
 * List of attribute names that should be aliased to their property names
 * because they behave differently between setting them as an attribute and
 * setting them as a property.
 */
const ATTRIBUTE_ALIASES = {
	// no `class: 'className'` because we handle that separately
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject',
	novalidate: 'noValidate',
	allowfullscreen: 'allowFullscreen',
	disablepictureinpicture: 'disablePictureInPicture',
	disableremoteplayback: 'disableRemotePlayback'
};

/**
 * @param {string} name
 */
function normalize_attribute(name) {
	name = name.toLowerCase();
	return ATTRIBUTE_ALIASES[name] ?? name;
}

const DOM_PROPERTIES = [
	...DOM_BOOLEAN_ATTRIBUTES,
	'formNoValidate',
	'isMap',
	'noModule',
	'playsInline',
	'readOnly',
	'value',
	'volume',
	'defaultValue',
	'defaultChecked',
	'srcObject',
	'noValidate',
	'allowFullscreen',
	'disablePictureInPicture',
	'disableRemotePlayback'
];

/**
 * @param {string} name
 */
function is_dom_property(name) {
	return DOM_PROPERTIES.includes(name);
}

const NON_STATIC_PROPERTIES = ['autofocus', 'muted', 'defaultValue', 'defaultChecked'];

/**
 * Returns `true` if the given attribute cannot be set through the template
 * string, i.e. needs some kind of JavaScript handling to work.
 * @param {string} name
 */
function cannot_be_set_statically(name) {
	return NON_STATIC_PROPERTIES.includes(name);
}

/**
 * Subset of delegated events which should be passive by default.
 * These two are already passive via browser defaults on window, document and body.
 * But since
 * - we're delegating them
 * - they happen often
 * - they apply to mobile which is generally less performant
 * we're marking them as passive by default for other elements, too.
 */
const PASSIVE_EVENTS = ['touchstart', 'touchmove'];

/**
 * Returns `true` if `name` is a passive event
 * @param {string} name
 */
function is_passive_event(name) {
	return PASSIVE_EVENTS.includes(name);
}

const CONTENT_EDITABLE_BINDINGS = ['textContent', 'innerHTML', 'innerText'];

/** @param {string} name */
function is_content_editable_binding(name) {
	return CONTENT_EDITABLE_BINDINGS.includes(name);
}

const LOAD_ERROR_ELEMENTS = [
	'body',
	'embed',
	'iframe',
	'img',
	'link',
	'object',
	'script',
	'style',
	'track'
];

/**
 * Returns `true` if the element emits `load` and `error` events
 * @param {string} name
 */
function is_load_error_element(name) {
	return LOAD_ERROR_ELEMENTS.includes(name);
}

const SVG_ELEMENTS = [
	'altGlyph',
	'altGlyphDef',
	'altGlyphItem',
	'animate',
	'animateColor',
	'animateMotion',
	'animateTransform',
	'circle',
	'clipPath',
	'color-profile',
	'cursor',
	'defs',
	'desc',
	'discard',
	'ellipse',
	'feBlend',
	'feColorMatrix',
	'feComponentTransfer',
	'feComposite',
	'feConvolveMatrix',
	'feDiffuseLighting',
	'feDisplacementMap',
	'feDistantLight',
	'feDropShadow',
	'feFlood',
	'feFuncA',
	'feFuncB',
	'feFuncG',
	'feFuncR',
	'feGaussianBlur',
	'feImage',
	'feMerge',
	'feMergeNode',
	'feMorphology',
	'feOffset',
	'fePointLight',
	'feSpecularLighting',
	'feSpotLight',
	'feTile',
	'feTurbulence',
	'filter',
	'font',
	'font-face',
	'font-face-format',
	'font-face-name',
	'font-face-src',
	'font-face-uri',
	'foreignObject',
	'g',
	'glyph',
	'glyphRef',
	'hatch',
	'hatchpath',
	'hkern',
	'image',
	'line',
	'linearGradient',
	'marker',
	'mask',
	'mesh',
	'meshgradient',
	'meshpatch',
	'meshrow',
	'metadata',
	'missing-glyph',
	'mpath',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'radialGradient',
	'rect',
	'set',
	'solidcolor',
	'stop',
	'svg',
	'switch',
	'symbol',
	'text',
	'textPath',
	'tref',
	'tspan',
	'unknown',
	'use',
	'view',
	'vkern'
];

/** @param {string} name */
function is_svg(name) {
	return SVG_ELEMENTS.includes(name);
}

const MATHML_ELEMENTS = [
	'annotation',
	'annotation-xml',
	'maction',
	'math',
	'merror',
	'mfrac',
	'mi',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mprescripts',
	'mroot',
	'mrow',
	'ms',
	'mspace',
	'msqrt',
	'mstyle',
	'msub',
	'msubsup',
	'msup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics'
];

/** @param {string} name */
function is_mathml(name) {
	return MATHML_ELEMENTS.includes(name);
}

const RUNES = /** @type {const} */ ([
	'$state',
	'$state.raw',
	'$state.snapshot',
	'$props',
	'$props.id',
	'$bindable',
	'$derived',
	'$derived.by',
	'$effect',
	'$effect.pre',
	'$effect.tracking',
	'$effect.root',
	'$inspect',
	'$inspect().with',
	'$inspect.trace',
	'$host'
]);

/**
 * @param {string} name
 * @returns {name is RUNES[number]}
 */
function is_rune(name) {
	return RUNES.includes(/** @type {RUNES[number]} */ (name));
}

/** List of elements that require raw contents and should not have SSR comments put in them */
const RAW_TEXT_ELEMENTS = /** @type {const} */ (['textarea', 'script', 'style', 'title']);

/** @param {string} name */
function is_raw_text_element(name) {
	return RAW_TEXT_ELEMENTS.includes(/** @type {RAW_TEXT_ELEMENTS[number]} */ (name));
}

/**
 * Prevent devtools trying to make `location` a clickable link by inserting a zero-width space
 * @param {string | undefined} location
 */
function sanitize_location(location) {
	return location?.replace(/\//g, '/\u200b');
}


/***/ }),

/***/ "./node_modules/svelte/src/version.js":
/*!********************************************!*\
  !*** ./node_modules/svelte/src/version.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PUBLIC_VERSION: () => (/* binding */ PUBLIC_VERSION),
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
// generated during release, do not modify

/**
 * The current version, as set in package.json.
 * @type {string}
 */
const VERSION = '5.20.5';
const PUBLIC_VERSION = '5';


/***/ }),

/***/ "./src/App.svelte":
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/internal/disclose-version.js");
/* harmony import */ var svelte_internal_flags_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/flags/legacy */ "./node_modules/svelte/src/internal/flags/legacy.js");
/* harmony import */ var svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/internal/client */ "./node_modules/svelte/src/internal/client/index.js");




var root = svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.template(`<main class="svelte-1gqwiq3"><h1 class="svelte-1gqwiq3"> </h1> <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p></main>`);

const $$css = {
	hash: 'svelte-1gqwiq3',
	code: 'main.svelte-1gqwiq3 {text-align:center;padding:1em;max-width:240px;margin:0 auto;}h1.svelte-1gqwiq3 {color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100;}\n\n	@media (min-width: 640px) {main.svelte-1gqwiq3 {max-width:none;}\n	}'
};

function App($$anchor, $$props) {
	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.append_styles($$anchor, $$css);

	let name = svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.prop($$props, 'name', 8);
	var main = root();
	var h1 = svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.child(main);
	var text = svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.child(h1);

	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.reset(h1);
	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.next(2);
	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.reset(main);
	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.template_effect(() => svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.set_text(text, `Hello ${name() ?? ''}!`));
	svelte_internal_client__WEBPACK_IMPORTED_MODULE_2__.append($$anchor, main);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");

const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
    target: document.body,
    props: {
        name: 'world',
    },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

})();

/******/ })()
;
//# sourceMappingURL=dataeditor.js.map
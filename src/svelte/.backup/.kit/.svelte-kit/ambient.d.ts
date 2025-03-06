
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const USER_ZDOTDIR: string;
	export const ZLE_RPROMPT_INDENT: string;
	export const npm_package_scripts_nodeclean: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const npm_package_devDependencies__types_node: string;
	export const LESS: string;
	export const npm_package_main: string;
	export const npm_package_dependencies_xdg_app_paths: string;
	export const XDG_SESSION_PATH: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const npm_package_repository_url: string;
	export const npm_package_scripts_test_svelte: string;
	export const npm_package_dependencies_jsonc_parser: string;
	export const npm_package_devDependencies__vscode_debugadapter_testsupport: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies_svelte_loader: string;
	export const WLR_NO_HARDWARE_CURSORS: string;
	export const WLR_RENDERER_ALLOW_SOFTWARE: string;
	export const npm_package_devDependencies__tsconfig_svelte: string;
	export const XDG_BACKEND: string;
	export const CLUTTER_BACKEND: string;
	export const npm_package_scripts_scalaclean: string;
	export const npm_package_dependencies_xml_formatter: string;
	export const npm_package_scripts_sbt: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const npm_package_engines_vscode: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_scripts_prewatch: string;
	export const npm_package_devDependencies_glob: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const npm_package_scripts_compile_tdmlEditorJS: string;
	export const npm_package_devDependencies_chai: string;
	export const npm_config_argv: string;
	export const LIBVA_DRIVER_NAME: string;
	export const npm_config_bin_links: string;
	export const DESKTOP_SESSION: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const NO_AT_BRIDGE: string;
	export const npm_package_dependencies_wait_port: string;
	export const npm_package_displayName: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_config_save_prefix: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const APPIMAGELAUNCHER_DISABLE: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_categories_1: string;
	export const npm_package_categories_0: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_webpack_pkg: string;
	export const _: string;
	export const npm_package_devDependencies__types_glob: string;
	export const npm_package_devDependencies_prettier: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_devDependencies_esbuild: string;
	export const POSH_SHELL: string;
	export const npm_package_devDependencies_concurrently: string;
	export const npm_package_packageManager: string;
	export const npm_package_bugs_url: string;
	export const MOTD_SHOWN: string;
	export const npm_package_devDependencies_css_loader: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_scripts_package: string;
	export const HOME: string;
	export const npm_package_devDependencies__vscode_test_electron: string;
	export const COREPACK_ROOT: string;
	export const npm_package_icon: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const npm_package_devDependencies_webpack: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vscode_extension_tester: string;
	export const LS_COLORS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_dependencies__viperproject_locate_java_home: string;
	export const POSH_SHELL_VERSION: string;
	export const npm_config_init_license: string;
	export const npm_package_devDependencies__types_vscode_webview: string;
	export const npm_package_version: string;
	export const POSH_SESSION_ID: string;
	export const BOOST_VERSION: string;
	export const npm_package_devDependencies__vscode_vsce: string;
	export const npm_package_scripts_webpack_svelte: string;
	export const npm_package_scripts_webpack_root: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_prepare: string;
	export const npm_package_scripts_gen_version_ts: string;
	export const npm_package_devDependencies_html_webpack_plugin: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_package_repository_type: string;
	export const OSTYPE: string;
	export const npm_config_wrap_output: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_mini_css_extract_plugin: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_css_minimizer_webpack_plugin: string;
	export const npm_package_noticeText: string;
	export const INIT_CWD: string;
	export const npm_package_daffodilVersion: string;
	export const CHROME_DESKTOP: string;
	export const QT_QPA_PLATFORM: string;
	export const MOZ_DISABLE_RDD_SANDBOX: string;
	export const npm_package_scripts_preview: string;
	export const EGL_PLATFORM: string;
	export const npm_package_devDependencies_mocha: string;
	export const npm_package_dependencies_await_notify: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const npm_package_scripts_pretest: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_ts_loader: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const npm_package_devDependencies_tsconfig_paths: string;
	export const npm_package_scripts_svelte_check: string;
	export const npm_package_dependencies__vscode_debugadapter: string;
	export const ZDOTDIR: string;
	export const npm_package_scripts_lint_fix: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_package_scripts_watch_svelte: string;
	export const SDL_VIDEODRIVER: string;
	export const npm_package_devDependencies_webpack_cli: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const OZONE_PLATFORM: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const npm_package_scripts_watch: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const Boost_INCLUDE_DIR: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const npm_config_version_git_message: string;
	export const PAGER: string;
	export const npm_package_devDependencies_ts_node: string;
	export const npm_package_devDependencies_copy_webpack_plugin: string;
	export const npm_package_scripts_precompile: string;
	export const XDG_VTNR: string;
	export const npm_package_workspaceTrust_request: string;
	export const npm_package_dependencies__vscode_webview_ui_toolkit: string;
	export const npm_package_dependencies_xml_js: string;
	export const XDG_SESSION_ID: string;
	export const npm_package_scripts_clean: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const DIRHISTORY_SIZE: string;
	export const WLR_DRM_NO_ATOMIC: string;
	export const npm_execpath: string;
	export const POSH_THEME: string;
	export const npm_package_dependencies_semver: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_compile: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_strict_ssl: string;
	export const npm_package_dependencies_iso_639_1: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_devDependencies_run_func: string;
	export const npm_package_scripts_dev: string;
	export const BOOST_ROOT: string;
	export const npm_package_devDependencies__types_vscode: string;
	export const npm_package_devDependencies_sv: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const npm_package_scripts_check: string;
	export const GDK_BACKEND: string;
	export const PATH: string;
	export const npm_package_dependencies__omega_edit_client: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const GDK_SCALE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_author_name: string;
	export const npm_package_dependencies_hexy: string;
	export const npm_package_scripts_prepackage: string;
	export const GBM_BACKEND: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies_sass: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_license: string;
	export const __VK_LAYER_NV_optimus: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const POWERLINE_COMMAND: string;
	export const __NV_PRIME_RENDER_OFFLOAD: string;
	export const npm_package_dependencies_unzip_stream: string;
	export const npm_package_publisher: string;
	export const npm_package_scripts_watch_svelte_tests: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies__types_mocha: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const npm_package_extensionDependencies_1: string;
	export const npm_package_extensionDependencies_0: string;
	export const npm_package_scripts_watch_tdmlEditorJS: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_null_loader: string;
	export const npm_config_init_version: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		USER_ZDOTDIR: string;
		ZLE_RPROMPT_INDENT: string;
		npm_package_scripts_nodeclean: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		npm_package_devDependencies__types_node: string;
		LESS: string;
		npm_package_main: string;
		npm_package_dependencies_xdg_app_paths: string;
		XDG_SESSION_PATH: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		npm_package_repository_url: string;
		npm_package_scripts_test_svelte: string;
		npm_package_dependencies_jsonc_parser: string;
		npm_package_devDependencies__vscode_debugadapter_testsupport: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies_svelte_loader: string;
		WLR_NO_HARDWARE_CURSORS: string;
		WLR_RENDERER_ALLOW_SOFTWARE: string;
		npm_package_devDependencies__tsconfig_svelte: string;
		XDG_BACKEND: string;
		CLUTTER_BACKEND: string;
		npm_package_scripts_scalaclean: string;
		npm_package_dependencies_xml_formatter: string;
		npm_package_scripts_sbt: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		npm_package_engines_vscode: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		npm_package_scripts_prewatch: string;
		npm_package_devDependencies_glob: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		npm_package_scripts_compile_tdmlEditorJS: string;
		npm_package_devDependencies_chai: string;
		npm_config_argv: string;
		LIBVA_DRIVER_NAME: string;
		npm_config_bin_links: string;
		DESKTOP_SESSION: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		NO_AT_BRIDGE: string;
		npm_package_dependencies_wait_port: string;
		npm_package_displayName: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		npm_config_save_prefix: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		APPIMAGELAUNCHER_DISABLE: string;
		npm_package_readmeFilename: string;
		npm_package_categories_1: string;
		npm_package_categories_0: string;
		npm_package_scripts_build: string;
		npm_package_scripts_webpack_pkg: string;
		_: string;
		npm_package_devDependencies__types_glob: string;
		npm_package_devDependencies_prettier: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_devDependencies_esbuild: string;
		POSH_SHELL: string;
		npm_package_devDependencies_concurrently: string;
		npm_package_packageManager: string;
		npm_package_bugs_url: string;
		MOTD_SHOWN: string;
		npm_package_devDependencies_css_loader: string;
		VSCODE_INJECTION: string;
		npm_package_scripts_package: string;
		HOME: string;
		npm_package_devDependencies__vscode_test_electron: string;
		COREPACK_ROOT: string;
		npm_package_icon: string;
		npm_config_version_git_tag: string;
		LANG: string;
		npm_package_devDependencies_webpack: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vscode_extension_tester: string;
		LS_COLORS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_dependencies__viperproject_locate_java_home: string;
		POSH_SHELL_VERSION: string;
		npm_config_init_license: string;
		npm_package_devDependencies__types_vscode_webview: string;
		npm_package_version: string;
		POSH_SESSION_ID: string;
		BOOST_VERSION: string;
		npm_package_devDependencies__vscode_vsce: string;
		npm_package_scripts_webpack_svelte: string;
		npm_package_scripts_webpack_root: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_prepare: string;
		npm_package_scripts_gen_version_ts: string;
		npm_package_devDependencies_html_webpack_plugin: string;
		npm_config_version_commit_hooks: string;
		npm_package_repository_type: string;
		OSTYPE: string;
		npm_config_wrap_output: string;
		CONDA_PROMPT_MODIFIER: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_mini_css_extract_plugin: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_css_minimizer_webpack_plugin: string;
		npm_package_noticeText: string;
		INIT_CWD: string;
		npm_package_daffodilVersion: string;
		CHROME_DESKTOP: string;
		QT_QPA_PLATFORM: string;
		MOZ_DISABLE_RDD_SANDBOX: string;
		npm_package_scripts_preview: string;
		EGL_PLATFORM: string;
		npm_package_devDependencies_mocha: string;
		npm_package_dependencies_await_notify: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		npm_package_scripts_pretest: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_version_tag_prefix: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_ts_loader: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		npm_package_devDependencies_tsconfig_paths: string;
		npm_package_scripts_svelte_check: string;
		npm_package_dependencies__vscode_debugadapter: string;
		ZDOTDIR: string;
		npm_package_scripts_lint_fix: string;
		npm_package_type: string;
		USER: string;
		npm_package_scripts_watch_svelte: string;
		SDL_VIDEODRIVER: string;
		npm_package_devDependencies_webpack_cli: string;
		VSCODE_GIT_IPC_HANDLE: string;
		OZONE_PLATFORM: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		npm_package_scripts_watch: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		Boost_INCLUDE_DIR: string;
		MOZ_ENABLE_WAYLAND: string;
		npm_config_version_git_message: string;
		PAGER: string;
		npm_package_devDependencies_ts_node: string;
		npm_package_devDependencies_copy_webpack_plugin: string;
		npm_package_scripts_precompile: string;
		XDG_VTNR: string;
		npm_package_workspaceTrust_request: string;
		npm_package_dependencies__vscode_webview_ui_toolkit: string;
		npm_package_dependencies_xml_js: string;
		XDG_SESSION_ID: string;
		npm_package_scripts_clean: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		DIRHISTORY_SIZE: string;
		WLR_DRM_NO_ATOMIC: string;
		npm_execpath: string;
		POSH_THEME: string;
		npm_package_dependencies_semver: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		npm_package_scripts_compile: string;
		npm_package_devDependencies_svelte_preprocess: string;
		XDG_RUNTIME_DIR: string;
		npm_config_strict_ssl: string;
		npm_package_dependencies_iso_639_1: string;
		DEBUGINFOD_URLS: string;
		npm_package_devDependencies_run_func: string;
		npm_package_scripts_dev: string;
		BOOST_ROOT: string;
		npm_package_devDependencies__types_vscode: string;
		npm_package_devDependencies_sv: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		npm_package_scripts_check: string;
		GDK_BACKEND: string;
		PATH: string;
		npm_package_dependencies__omega_edit_client: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		GDK_SCALE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_author_name: string;
		npm_package_dependencies_hexy: string;
		npm_package_scripts_prepackage: string;
		GBM_BACKEND: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies_sass: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_license: string;
		__VK_LAYER_NV_optimus: string;
		MAIL: string;
		npm_config_registry: string;
		POWERLINE_COMMAND: string;
		__NV_PRIME_RENDER_OFFLOAD: string;
		npm_package_dependencies_unzip_stream: string;
		npm_package_publisher: string;
		npm_package_scripts_watch_svelte_tests: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies__types_mocha: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		npm_package_extensionDependencies_1: string;
		npm_package_extensionDependencies_0: string;
		npm_package_scripts_watch_tdmlEditorJS: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_null_loader: string;
		npm_config_init_version: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

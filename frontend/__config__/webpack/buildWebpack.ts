import { BuildOptions } from "./types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from 'webpack';
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";

export function buildWebpack(options: BuildOptions): webpack.Configuration {

	const {mode, paths} = options
	const isDev = options.mode === 'development';

	return {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
			publicPath: "/",
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev ? buildDevServer(options) : undefined,
		resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        }
	}
}
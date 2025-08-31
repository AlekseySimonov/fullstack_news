import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types";
import path from "path";

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [];

    if (isProd) {

        plugins.push(
            new HtmlWebpackPlugin({
                template: paths.html,
                favicon: path.resolve(paths.public, 'favicon.png'),
                inject: true,
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        );
    }

    if (isDev) {
        plugins.push(
            new HtmlWebpackPlugin({
                template: paths.html,
                favicon: path.resolve(paths.public, 'favicon.png'),
            }),
            new webpack.ProgressPlugin(),
            new ReactRefreshWebpackPlugin(),
        );
    }

    return plugins;
}

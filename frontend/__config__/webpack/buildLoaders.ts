import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders({ mode }: BuildOptions) {
	const isDev = mode === "development";

	return [

		{
			test: /\.tsx?$/,
			use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
			exclude: /node_modules/,
		},

		{
			test: /\.module\.s[ac]ss$/i,
			use: [
				isDev ? "style-loader" : MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						modules: {
							localIdentName: isDev
								? "[path][name]__[local]"
								: "[hash:base64:8]"
						},
						sourceMap: isDev,
					},
				},
				"sass-loader",
			],
		},

		{
			test: /\.s[ac]ss$/i,
			exclude: /\.module\.s[ac]ss$/i,
			use: [
				isDev ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader",
			],
		},

		{
			test: /\.css$/i,
			use: [
				isDev ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader"
			]
		},

		{
			test: /\.(png|jpg|jpeg|gif|svg)$/i,
			type: "asset/resource"
		}
	];
}

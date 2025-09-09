import { ConfigProvider, Flex, Layout } from 'antd';
import './styles/_resetStyles.scss';
import themeLight from "./styles/lightTheme.json";
import { RouterProvider } from 'react-router';
import { layoutStyle } from './styles/layoutStyle';
import { FooterLayout, HeaderLayout } from '@/layouts';
import '@/shared/assets/fonts/fonts.scss'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api';
import { appRouter } from './providers';

export const App: React.FC = () => {

	return ((
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ConfigProvider theme={{ ...themeLight, cssVar: true }}>
				<Flex gap="middle" wrap>
					<Layout style={layoutStyle}>
						<HeaderLayout />
						<RouterProvider router={appRouter} />
						<FooterLayout />
					</Layout>
				</Flex>
			</ConfigProvider>
		</QueryClientProvider>

	))
}
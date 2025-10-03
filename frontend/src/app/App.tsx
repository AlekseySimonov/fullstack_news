import { ConfigProvider } from 'antd';
import './styles/_resetStyles.scss';
import themeLight from "@/shared/styles/themes/lightTheme.json";
import '@/shared/assets/fonts/fonts.scss'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api';
import { RouterProvider } from 'react-router';
import { appRouter } from './providers';

export const App: React.FC = () => {

	return ((
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ConfigProvider theme={{ ...themeLight, cssVar: true }}>
				<RouterProvider router={appRouter} />
			</ConfigProvider>
		</QueryClientProvider>

	))
}
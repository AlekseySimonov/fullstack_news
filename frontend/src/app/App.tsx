import { ConfigProvider, Flex, Layout } from 'antd';
import './styles/__reset-styles.scss';
import themeLight from "./styles/lightTheme.json";
import { RouterProvider } from 'react-router';
import { layoutStyle } from './styles/layoutStyle';
import { ContentLayout, FooterLayout, HeaderLayout } from '@/layouts';

export const App: React.FC = () => {

	return ((
		<ConfigProvider theme={themeLight}>
			<Flex gap="middle" wrap>
				<Layout style={layoutStyle}>
					<HeaderLayout />
					<ContentLayout />
					<FooterLayout />
				</Layout>
			</Flex>
		</ConfigProvider>
	))
}
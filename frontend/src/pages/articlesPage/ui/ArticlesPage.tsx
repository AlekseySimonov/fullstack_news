import { useParams } from "react-router";


const ArticlesPage: React.FC = () => {
	const { category } = useParams<{ category: string }>();
	return (
		<div>
			Articles List {category}
		</div>
	)
};

export default ArticlesPage
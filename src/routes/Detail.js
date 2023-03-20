import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState({});
	const getDetail = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();

		setDetail(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getDetail();
	}, []);
	console.log(detail);
	return (
		<div>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<div>
					<img src={detail.large_cover_image} alt={detail.title}></img>
					<h2>{detail.title_long}</h2>
					<span>{detail.description_full}</span>
					<hr />
					<span>{detail.description_intro}</span>
				</div>
			)}
		</div>
	);
}
export default Detail;

import { Link, useLocation } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = ({ id, text, author }) => {
	const location = useLocation();
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{text}</p>
				</blockquote>
				<figcaption>{author}</figcaption>
			</figure>
			<Link className='btn' to={`${location.pathname}/${id}`}>
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;

import Callout from './Callout.astro';
import Card from './Card.astro';
import CardGrid from './CardGrid.astro';
import ConnectionModel from './ConnectionModel.astro';
import ConnectionModels from './ConnectionModels.astro';
import ContentLink from './ContentLink.astro';
import NextTokenDemo from './NextTokenDemo.astro';
import Pyramid from './Pyramid.astro';
import PyramidLevel from './PyramidLevel.astro';
import Question from './Question.astro';
import QuestionList from './QuestionList.astro';

// Components that MDX content can use without importing them, plus `a`, which
// renders every Markdown link. Layouts and pages pass these to
// `<Content components={mdxComponents} />`.
export const mdxComponents = {
	a: ContentLink,
	Callout,
	Card,
	CardGrid,
	ConnectionModel,
	ConnectionModels,
	NextTokenDemo,
	Pyramid,
	PyramidLevel,
	Question,
	QuestionList,
};

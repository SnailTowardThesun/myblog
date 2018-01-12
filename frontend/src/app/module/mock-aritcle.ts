import { Article, Comment, Category } from './article';

export const ARTICLES: Article[] = [
    { id: "1", title: "first-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my first blog", category: ['ca1', 'ca2'] },
    { id: "2", title: "second-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my second blog", category: ['ca1', 'ca2'] },
    { id: "3", title: "third-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my third blog", category: ['ca1', 'ca2'] },
    { id: "4", title: "forth-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my forth blog", category: ['ca1', 'ca2'] },
    { id: "5", title: "fifth-article", author: "SnailTowardThesun", publish_date: "2018-01-05 19:00:00", content: "#my fifth blog", category: ['ca1', 'ca2'] }
];

export const COMMENTS: Comment[] = [
    { id: "1", article_id: "1", author: "guest", publish_date: "2018-01-05 19:00:01", content: "wonderful" },
    { id: "2", article_id: "1", author: "guest", publish_date: "2018-01-05 19:00:02", content: "wonderful again" }
];

export const CATEGORIES: Category[] = [
    {name: "ca1", count: 5},
    {name: "ca2", count: 5}
];
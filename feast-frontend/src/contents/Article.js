import styles from './Article.module.css';

const Article = ({ content, className = '' }) => {
  return (
    <article className={`${styles.article} ${className}`}>
      <p>{content}</p>
    </article>
  );
};

export default Article;

import css from './LoadMoreBtn.module.css';

type Props = {
  onPage: any;
  page: number;
};
export default function LoadMoreBtn({ page, onPage }: Props) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onPage(page + 1)}>
        Load more
      </button>
    </div>
  );
}
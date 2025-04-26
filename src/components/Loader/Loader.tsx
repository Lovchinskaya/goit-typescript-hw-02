import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

interface Loader {
  loading: boolean;
}

export default function Loader({ loading }: Loader) {
  return (
    <div className={css.loader}>
      <ClipLoader color="#36d7b7" loading={loading} size={150} />
    </div>
  );
}
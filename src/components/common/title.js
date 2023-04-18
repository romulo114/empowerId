import { Helmet } from 'react-helmet';
import { useSelector } from 'contexts/app';

export const Title = () => {
  const title = useSelector((state) => state.title);
  return (
    <Helmet>
      <title>{`EmpowerID - ${title}`}</title>
    </Helmet>
  );
};

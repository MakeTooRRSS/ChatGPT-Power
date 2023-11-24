import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · ChatGPT Power` : 'ChatGPT Power';
  }, [title]);

  return null;
});

export default PageTitle;

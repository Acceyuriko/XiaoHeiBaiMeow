import { useCallback } from 'react';

export default () => {
  const onClick = useCallback(() => {
    console.log('成了');
  }, []);

  return (
    <div>
      <button onClick={onClick}>测试</button>
      空开应该怎么配
    </div>
  );
};

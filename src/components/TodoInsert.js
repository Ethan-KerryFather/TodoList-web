import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value !== '') {
        onInsert(value);
      } else {
        alert('아무것도 입력되지 않았습니다.');
      }
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시키므로 방지하기 위해서
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
}

export default TodoInsert;

import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { MdAdd } from 'react-icons/md';
import Modal from 'components/common/Modal';
import palette from 'lib/styles/palette';

const Utils = styled.ul`
  display: flex;

  li {
    padding: 0 12px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

function HeaderUtils({ user }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const onCreate = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    router.push('/create');
    window.localStorage.removeItem('_id');
  };

  return (
    <>
      <Utils>
        {user && (
          <li>
            <button onClick={onCreate}>
              <MdAdd size={24} color={palette.cyan[5]} />
            </button>
          </li>
        )}

        <li>
          <Link href="/search">
            <MdAdd size={24} />
          </Link>
        </li>
        <li>
          <Link href={user ? '/accounts' : '/login'}>
            <MdAdd size={24} />
          </Link>
        </li>
      </Utils>

      <Modal
        visible={modal}
        title="포스트 등록"
        description="포스트를 등록하시겠습니까?"
        confirmText="등록"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}

export default HeaderUtils;

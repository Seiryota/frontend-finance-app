import { useState } from 'react';
import Modal from 'react-modal';
import { Button } from '../../../components/button';
import { Loading } from '../../../components/loading';
import { Remove } from '../functions/remove';
import { BodyBtn, Row, Text, Title } from './styles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export function ModalRemove({ open, close, setError, refresh, id }) {

  const [loading, setLoading] = useState(false)

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Remove Modal"
    >
      {loading && <Loading />}
      {!loading &&
        <>
          <Title>Remover Entrada</Title>
          <Text>Tem certeza que deseja remover esse item</Text>
          <BodyBtn>
            <Row>
              <Button classStyle="btn-danger" onClick={() => Remove(setLoading, setError, refresh, id)}>Excluir</Button>
              <Button classStyle="btn-secondary" onClick={close}>Fechar</Button>
            </Row>
          </BodyBtn>
        </>
      }
    </Modal>
  );
}
import React from 'react'
import Modal from 'components/common/Modal'

function RemoveModal({ visible, onConfirm, onCancel }) {
  return (
    <Modal 
        visible={visible} 
        title='포스트 삭제' 
        description='포스트를 삭제하시겠습니까?'
        confirmText='삭제'
        onConfirm={onConfirm} 
        onCancel={onCancel} 
    />
  )
}

export default RemoveModal
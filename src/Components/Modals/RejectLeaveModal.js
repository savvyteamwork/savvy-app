import React, {useContext, useState} from 'react';
import {Center, FormControl, Input, Modal, Button} from 'native-base';
import {AppState} from '../../context/AppContext';
import {CONSTANTS} from '../../constants';

export const RejectLeaveModal = ({showModal, setShowModal, empData}) => {
  const {token} = useContext(AppState);
  const [comments, setComments] = useState('');
  console.log(' empData here.............................', empData);
  const formHandler = e => {
    setComments(e);
  };

  const submitForm = () => {
    const data = {
      cancel_reason: comments,
      request_id: 33,
      reviewer_id: token.id,
    };
    const submit = fetch(`${CONSTANTS.BACKEND_URL}reject_leave_request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      Authorization: `Bearer ${token.access_tokens}`,
      body: data,
    });
  };

  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        transparent={true}
        hasBackdrop={true}
        backdropColor={'rgba(0, 0, 0, 0.8)'}
        backdropOpacity={0.3}>
        <Modal.Content
          maxWidth="400px"
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Modal.CloseButton />
          <Modal.Header>Rejection Reason</Modal.Header>
          <Modal.Body style={{backgroundColor: '#FFF'}}>
            <FormControl>
              <FormControl.Label>Reason</FormControl.Label>
              <Input onChangeText={formHandler} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="Gray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onPress={() => {
                  setShowModal(false);
                  submitForm();
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

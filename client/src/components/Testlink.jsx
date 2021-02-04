import React, {useCallback, useState} from 'react';

export default ({ messages = [], onCreateNewMessage }) => {

  const [newMessage, setNewMessage] = useState('');

  const onNewMessageChange = useCallback((event) => {
    setNewMessage(event.target.value);
  }, []);

  const onAddMessage = useCallback((event) => {
    event.preventDefault();
    on
  })

  return (
    <div>
      <span></span>
      <hr />
    </div>
  )
}

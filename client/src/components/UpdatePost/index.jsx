/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Button, Header } from 'semantic-ui-react';
import CloseButton from 'src/components/CloseButton';

import styles from './styles.module.scss';

const UpdatePost = ({ post, updatePost, toggleExpandedUpdatedPost }) => {
  const [postBody, setPostBody] = useState(post.body);

  const handleUpdatePost = async () => {
    if (!postBody) {
      return;
    }
    const updatedPost = { id: post.id, body: postBody };
    await updatePost(updatedPost);
    setPostBody('');
    toggleExpandedUpdatedPost();
  };

  return (
    <>
      <Segment>
        <Header as="div" className={styles.header}>
          <p>Edit Post</p>
          <CloseButton onClose={() => toggleExpandedUpdatedPost()} />
        </Header>
        <Form onSubmit={handleUpdatePost}>
          <Form.TextArea
            name="body"
            value={postBody}
            onChange={event => setPostBody(event.target.value)}
          />
          <Header as="div">
            <Button className={styles.submitBtn} color="blue" type="submit">
              Update
            </Button>
          </Header>
        </Form>
      </Segment>
    </>
  );
};

UpdatePost.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  updatePost: PropTypes.func.isRequired,
  toggleExpandedUpdatedPost: PropTypes.func.isRequired
};

export default UpdatePost;

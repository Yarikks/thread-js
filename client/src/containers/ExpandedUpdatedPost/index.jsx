/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import Spinner from 'src/components/Spinner';
import { bindActionCreators } from 'redux';
import { toggleExpandedUpdatedPost, updatePost } from 'src/containers/Thread/actions';
import { connect } from 'react-redux';
import UpdatePost from 'src/components/UpdatePost';

const ExpandedUpdatedPost = ({
  post,
  updatePost: update,
  toggleExpandedUpdatedPost: toggle
}) => (
  <Modal dimmer="blurring" centered={false} open onClose={() => toggle()}>
    {post
      ? (
        <Modal.Content>
          <UpdatePost
            post={post}
            updatePost={update}
            toggleExpandedUpdatedPost={toggle}
          />
        </Modal.Content>
      )
      : <Spinner />}
  </Modal>
);

ExpandedUpdatedPost.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  updatePost: PropTypes.func.isRequired,
  toggleExpandedUpdatedPost: PropTypes.func.isRequired
};

const mapStateToProps = rooState => ({
  post: rooState.posts.expandedUpdatedPost
});

const actions = { updatePost, toggleExpandedUpdatedPost };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedUpdatedPost);

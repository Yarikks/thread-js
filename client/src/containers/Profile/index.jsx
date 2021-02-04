import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserImgLink } from 'src/helpers/imageHelper';
import {
  Grid,
  Image,
  Input,
  Button
} from 'semantic-ui-react';
import { updateUserStatus } from './actions';

const Profile = ({ user, updateUserStatus: update }) => {
  const [status, setStatus] = useState(user.status);
  const handleChanges = () => {
    if (status) {
      update({ id: user.id, status });
    }
    console.log(user.status);
    setStatus('');
  };

  const style = {
    marginTop: '20px'
  };

  return (
    <Grid container textAlign="center" style={{ paddingTop: 30 }}>
      <Grid.Column style={{ flex: 1, flexDirection: 'row' }}>
        <Image centered src={getUserImgLink(user.image)} size="medium" circular />
        <div>
          <Input
            style={style}
            icon="user"
            iconPosition="left"
            placeholder="Username"
            type="text"
            disabled
            value={user.username}
          />
        </div>
        <div>
          <Input
            style={style}
            icon="at"
            iconPosition="left"
            placeholder="Email"
            type="email"
            disabled
            value={user.email}
          />
        </div>
        <div>
          <Input
            style={style}
            icon="info circle"
            iconPosition="left"
            placeholder="Status"
            type="text"
            value={user.status}
            onChange={e => setStatus(e.target.value)}
          />
        </div>

        <div>{user.status}</div>

        <Button style={style} secondary type="button" onClick={handleChanges}>Save changes</Button>
      </Grid.Column>
    </Grid>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  updateUserStatus: PropTypes.func.isRequired
};

Profile.defaultProps = {
  user: {}
};

const mapStateToProps = rootState => ({
  user: rootState.profile.user
});

const actions = {
  updateUserStatus
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

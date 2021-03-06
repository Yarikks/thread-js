import userRepository from '../../data/repositories/userRepository';

export const getUserById = async userId => {
  const { id, username, email, imageId, image } = await userRepository.getUserById(userId);
  return { id, username, email, imageId, image };
};

export const updateUserStatus = async user => userRepository.updateById(user.id, { status: user.status });

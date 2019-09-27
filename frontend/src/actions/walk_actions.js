import * as WalkApiUtil from '../util/walk_api_util';

export const RECEIVE_ALL_WALKS = 'RECEIVE_ALL_WALKS';
export const RECEIVE_WALK = 'RECEIVE_WALK';
export const REMOVE_WALK = 'REMOVE_WALK';

const receiveAllWalks = walks => ({
  type: RECEIVE_ALL_WALKS,
  walks
});

const receiveWalk = walk => ({
  type: RECEIVE_WALK,
  walk
});

const removeWalk = walkId => ({
  type: REMOVE_WALK,
  walkId
});

export const fetchWalks = () => dispatch => (
  WalkApiUtil.fetchWalks()
    .then(walks => dispatch(receiveAllWalks(walks)))
)

export const fetchWalk = walk => dispatch => (
  WalkApiUtil.fetchWalk(walk)
    .then(walk => dispatch(receiveWalk(walk)))
)

export const createWalk = walk => dispatch => {
  console.log(walk)
  return (
    WalkApiUtil.createWalk(walk)
      .then(walk => dispatch(receiveWalk(walk)))
  )
}

export const deleteWalk = walkId => dispatch => (
  WalkApiUtil.deleteWalk(walkId)
    .then(walk => dispatch(removeWalk(walkId)))
)
import { put } from "redux-saga/effects";
import _ from "lodash";

import logger from "utils/logger";

// Inspired by https://github.com/DataDog/redux-doghouse
// but heavily simplified for our limited use case.

// call with full signature or with `bindActionCreator(action, dispatch)`
export const bindActionCreator = (action, id, ids = [], dispatch) => (
  payload,
  ...rest
) =>
  (_.isFunction(id) ? id : dispatch)({
    ...action(payload, id, ...rest),
    id: _.isFunction(id) ? undefined : id,
    ...ids.reduce((p, i) => ({ ...p, ...i }), {})
  });

const bindActionCreators = (actionCreators, id, ...ids) => dispatch => {
  // in most cases ids will resolve to [id], but for reducer-sharing, e.g. NextFlight/AncillaryOffers
  const actions = {};

  Object.keys(actionCreators).forEach(key => {
    actions[key] = bindActionCreator(actionCreators[key], id, ids, dispatch);
  });

  return { actions };
};

export const injectBoundActionCreatorsFactory = (
  actions,
  getId = _.noop
) => saga =>
  function* sagaWithBoundActions(action, ...args) {
    const id = action.id || getId(_.get(action, "meta.form"));
    if (_.isUndefined(id)) {
      logger.error(
        `action of type ${action.type} has neither id nor form`,
        action
      );
    }
    yield* saga(
      Object.assign(
        {},
        action,
        bindActionCreators(actions, id)(actionObj => put(actionObj))
      ),
      args
    );
  };

export default bindActionCreators;

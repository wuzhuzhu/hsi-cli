// import * as usersService from '../../../services/users';
// import Immutable from 'seamless-immutable'
import key from 'keymaster';
import AV from 'leancloud-storage'

export default {
  namespace: 'event',
  state: {
    asqList: [],
  },
  reducers: {
    add(state, action) {
      const ac = action
      return { ...state, cumulate: state.cumulate + ac.payload.add };
      // debugger
      /* return Immutable.set(
        state,
        'cumulate',
        state.cumulate + add,
      ); */
    },
    rehydrate(state, { payload: { cumulate } }) {
      return { ...state, cumulate }
    },
  },
  effects: {
    * fetchAsqList(action, { call, select, put }) {
      try {
        const asqQuery = new AV.Query('Asq')
        const asqs = yield asqQuery.find();
        // const { data: gameTypes } = yield call(mockServices.getGameTypes);
        yield put({
          type: 'saveAsqs',
          payload: {
            asqs,
          },
        })
      } catch (error) {
        console.error(error);
      }
    },
  },
  subscriptions: {
  },
};

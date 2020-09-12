/* eslint-disable no-unused-vars */
import { apiFunc } from "@/utils/util";
import { getSkils } from "@/api/skils-service";
import _get from 'lodash/get';

const getDefaultState = () => ({
  skilList: [],
});

const _getters = {};

export const MUTATIONS_SKILS = {
  SET_SKILS: 'SET_SKILS',
}


const _mutations = {
  [MUTATIONS_SKILS.SET_SKILS]: (state, payload) => state.skilList = payload,
};

export const ACTIONS_SKILS = {
  GET_SKILS: 'GET_SKILS',
}

const _actions = {
  async [ACTIONS_SKILS.GET_SKILS]({ commit }) {
    const req = await apiFunc(getSkils);
    if (req.error) {
      console.log('get skils error', req.error)
      return req;
    }
    const data = _get(req, 'result.data');
    commit(MUTATIONS_SKILS.SET_SKILS, data);
  }
};

const skilStore = {
  namespaced: true,
  state: getDefaultState(),
  getters: _getters,
  mutations: _mutations,
  actions: _actions,
};

export default skilStore;

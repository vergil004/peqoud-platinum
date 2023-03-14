import dataApi from './mockApi.json'
import { sortItem } from '@/helpers'

export const state = () => ({
  list: [],
  isLoading: true,
  isFiltered: false,
  filterList: [],
  rarityTo: 100,
  rarityFrom: 0,
  isHard: false,
  currentGame: '',
})

export const mutations = {
  SET_DATA: (state, list) => Object.assign(state, list),
  SET_FILTER: (state, list) => Object.assign(state, list),
  SET_CURRENT_GAME: (state, list) => Object.assign(state, list),
  SET_SORT_GAME: (state, list) => Object.assign(state, list),
}

export const actions = {
  fetchData({ commit }) {
    commit('SET_DATA', { list: dataApi, isLoading: false })
  },
  setCurrentGAme({ commit }, slug) {
    commit('SET_CURRENT_GAME', { ...state, currentGame: slug })
  },
  setSortGame({ commit, state }, payload) {
    let sortedGames = []
    console.log(payload.reverse)
    sortedGames = state.isFiltered
      ? sortItem([...state.filterList], payload.type, payload.reverse)
      : sortItem([...state.list], payload.type, payload.reverse)

    commit('SET_SORT_GAME', {
      ...state,
      filterList: sortedGames,
      isFiltered: true,
    })
  },
  filterData({ commit, rootGetters, state }, payload) {
    let filtered = rootGetters.getAllList
    if (payload.isHard) {
      filtered = filtered.filter((item) => item.is_hard)
    }

    if (
      state.rarityTo !== payload.rarityTo ||
      state.rarityFrom !== payload.rarityFrom
    ) {
      filtered = filtered.filter(
        (item) =>
          Number(item.rarity) <= Number(payload.rarityTo) &&
          Number(item.rarity) >= Number(payload.rarityFrom)
      )
    }
    if (payload.gameRanks.length !== 0) {
      filtered = filtered.filter((item) =>
        payload.gameRanks.includes(item.game_rank)
      )
    }
    if (payload.platinumRanks.length !== 0) {
      filtered = filtered.filter((item) =>
        payload.platinumRanks.includes(item.platinum_rank)
      )
    }
    if (payload.gamePlatform.length !== 0) {
      filtered = filtered.filter((item) =>
        payload.gamePlatform.includes(item.platform)
      )
    }
    commit('SET_FILTER', {
      ...state,
      filterList: filtered,
      isHard: payload.isHard,
      isFiltered: true,
    })
  },
}

export const getters = {
  getAllList: (state) => {
    return state.list
  },
  getFilteredList: (state) => {
    return state.filterList
  },
  getCurrentGame: (state) => {
    return state.list.filter((item) => item.slug === state.currentGame)
  },
  getSerialGames: (state) => (game) => {
    return state.list.filter(
      (item) => item.serial === game.serial && item.id !== game.id
    )
  },
}

import _ from 'lodash'

export const state = () => ({
  // tree: null,
  tree: process.client ? JSON.parse(localStorage.getItem("tree")) : {},
  treeMove: {},
  source: "Công ty CP An toàn thông tin MVS/",
  sourceMove: "Công ty CP An toàn thông tin MVS/",
  fileSelected: [],
  fileSelectedMove: [],
  isClickMove: false,
  menuTree: false,
  menuBackground: false,
  nodeRClicked: ""
});

export const getters = {
  nodeRightClicked(state) {
    return state.nodeRClicked
  },
  sourceData(state) {
    return state.source
  },
  sourceMoveData(state) {
    return state.sourceMove
  },
  treeData(state) {
    return state.tree
    // console.log("state: ", state)
    // return process.client ? JSON.parse(localStorage.getItem("tree")) : {}
  },
  treeMoveData(state) {
    return JSON.parse(JSON.stringify(state.tree));
  },
  fileSelectedData(state) {
    return _.uniq(state.fileSelected)
  },
  fileSelectedMoveData(state) {
    return _.uniq(state.fileSelectedMove)
  },
  isMoved(state) {
    return state.isClickMove
  },
  isShowMenuTree(state) {
    return state.menuTree
  },
  isShowMenuBackground(state) {
    return state.menuBackground
  },
};

export const mutations = {
  SET_NODE_RIGHT_CLICKED(state, data) {
    state.nodeRClicked = data;
  },

  CHANGE_MENU_TREE(state, data) {
    state.menuTree = data;
  },

  CHANGE_MENU_BACKGROUND(state, data) {
    state.menuBackground = data;
  },

  CHANGE_TREE_MOVE(state, data) {
    state.treeMove = data;
  },

  CHANGE_TREE(state, data) {
    state.tree = data;
    localStorage.setItem("tree", JSON.stringify(data));
  },

  APPEND_SOURCE(state, data) {
    state.source += data;
  },

  APPEND_SOURCE_MOVE(state, data) {
    state.sourceMove += data;
  },

  COLLAPSE_TREE(state, data) {
    state.source = state.source.replace(data, '');
  },

  COLLAPSE_TREE_MOVE(state, data) {
    state.sourceMove = state.sourceMove.replace(data, '');
  },

  SELECT_FILE(state, data) {
    state.fileSelected.push(data)
  },

  UNSELECT_FILE(state, data) {
    state.fileSelected = state.fileSelected.filter(o => {
      return o !== data
    })
  },

  RESET_FILE_SELECTED(state) {
    state.fileSelected = []
  },

  SELECT_FILE_MOVE(state, data) {
    state.fileSelectedMove.push(data)
  },

  UNSELECT_FILE_MOVE(state, data) {
    state.fileSelectedMove = state.fileSelectedMove.filter(o => {
      return o !== data
    })
  },

  RESET_FILE_SELECTED_MOVE(state) {
    state.fileSelectedMove = []
  },

  SET_SOURCE_MOVE(state, data) {
    state.sourceMove = data
  },

  SET_CLICK_MOVE(state, data) {
    state.isClickMove = data
  }
};

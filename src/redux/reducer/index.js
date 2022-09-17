const initialState = {
    work: [],
    works: [],
    seenWorks: [],
    objectIds: [],
    departments: [],
    searchResults: [],
    searchInputs: '',
    searchMade: false,
    departmentSearchMade: false,
    departmentWorks: [],
    departmentWorkIds: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_WORK":
     // console.log(payload);
      return { ...state, work: payload };
    case "GET_WORKS":
      return { ...state, works: payload, searchMade: true };
    case "GET_WORKS_D":
      return { ...state, departmentWorks: payload , departmentSearchMade: true};
    case "SEARCH_STARTED":
      return { ...state, searchMade: false };
    case "ADD_WORK":
        console.log(state.seenWorks, "seen works from reducer");
        return { ...state, seenWorks: [...state.seenWorks, payload] };
    case "GET_OBJECT_IDS":
        console.log('tenemos objectIDs ', payload);
        return { ...state, objectIds: payload };
    case "GET_ALL_DEPARTMENTS":
        console.log('tenemos deapartmentId ', payload);
        return { ...state, departments: payload };
    case "SEARCH_COMPLETE":
        console.log('tenemos un search ', payload);
        return { ...state, searchResults: payload };
    case "GET_DEPARTMENT_WORKS":
        console.log('tenemos departmentWorkIds ', payload);
        return { ...state, departmentWorkIds: payload };
    case "DEPARTMENT_SEARCH_STARTED":
        return { ...state, departmentSearchMade: false };
    case "CLEAR_DEPARTMENT_WORKS":
        return { ...state, departmentWorks: [], departmentWorkIds: {}};
    case "CLEAR_SEARCH_RESULTS":
        console.log('clearing search results');
        return { ...state, searchResults: [], searchMade: false, works: [], searchInputs: ''};
    case "REMOVE_FROM_SEEN_WORKS":
        console.log('removing from seen works');
        return { ...state, seenWorks: state.seenWorks.filter((work) => work.objectID !== payload)};
        default:
      return state;
  }
};
export default rootReducer;

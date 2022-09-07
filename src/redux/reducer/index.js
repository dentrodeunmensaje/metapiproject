const initialState = {
    work: [],
    works: [],
    seenWorks: [],
    objectIds: [],
    departments: [],
    searchResults: [],
    searchInputs: '',
    searchMade: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_WORK":
     // console.log(payload);
      return { ...state, work: payload };
    case "GET_WORKS":
      return { ...state, works: payload, searchMade: true };
    case "SEARCH_STARTED":
      return { ...state, searchMade: false };
    case "ADD_WORK":
        console.log(state.seenWorks);
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
        console.log('tenemos un search ', payload);
        return { ...state, objectIds: payload };
        default:
      return state;
  }
};
export default rootReducer;

export const getWork = (id) => {
  return async (dispatch) => {
    return fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "GET_WORK",
          payload: data,
        });
      });
  };
};

export const getWorks = (ids) => {
  var promises = ids.map((id) => {
    return `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  }  );
  console.log(promises, 'start search of many works');
  return async (dispatch) => {
    return Promise.all(promises.map((url) => fetch(url).then((res) => res.json())))
      .then((data) => {
        console.log(data, 'from getWorks in actions');
        dispatch({
          type: "GET_WORKS",
          payload: data,
        });
      });
  }
}

export const addWork = (work) => {
  return {
    type: "ADD_WORK",
    payload: work,
  };
}

export const startSearch = () => {
  return {
    type: "SEARCH_STARTED",
  };
}

export const departmentSearchStarted = () => {
  return {
    type: "DEPARTMENT_SEARCH_STARTED",
  };
}

export const getObjectIds = () => {
  return async (dispatch) => {
    return fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects'
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_OBJECT_IDS",
          payload: data,
        });
      });
  };
}

export const getAllDepartments = () => {

  return async (dispatch) => {
    return fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/departments'
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_ALL_DEPARTMENTS",
          payload: data,
        });
      });
  };
}

export const searchByQuery =({q, departmentId, hasImages, isHighlight})=>{
  let compiledSearchQuery = '';
  if (departmentId !== 0){
    compiledSearchQuery += `&departmentId=${departmentId}`;
  }
  if (hasImages===true){
    compiledSearchQuery += `&hasImages=${hasImages}`;
  }
  if (isHighlight===true){
    compiledSearchQuery += `&isHighlight=${isHighlight}`;
  }
  if (q !== ''){
    compiledSearchQuery += `&q=${q}`;
  }
  compiledSearchQuery = compiledSearchQuery.substring(1);
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?${compiledSearchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const searchByQueryandhasImage =(q, hasImages )=>{
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=${hasImages}&q=${q}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const searchByQueryandIsHighlight = (q, isHighlight) => {
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=${isHighlight}&q=${q}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const searchByQueryanddepartmentId = (departmentId, q) => {
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=${q}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const searchByQueryandartistOrCulture = (artistOrCulture, q) => {
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=${artistOrCulture}&q=${q}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const searByQueryandmedium = (q, medium) => {
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=${medium}&q=${q}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SEARCH_COMPLETE",
          payload: data,
        });
      }
      );
  }
}
export const getDepartmentWorks = (departmentId) => {
  return async (dispatch) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=*&hasImages=true`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'from getDepartmentWorks in actions');
        dispatch({
          type: "GET_DEPARTMENT_WORKS",
          payload: data,
        });
      }
      );
  }
}

export const getWorksD= (ids1) => {
  var promises = ids1.map((id) => {
    return `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  }  );
  console.log(promises, 'start search of many works Dept');
  return async (dispatch) => {
    return Promise.all(promises.map((url) => fetch(url).then((res) => res.json())))
      .then((data) => {
        console.log(data, 'from getWorksD in actions');
        dispatch({
          type: "GET_WORKS_D",
          payload: data,
        });
      });
  }
}

export const clearDepartmentWorks = () => {
  return {
    type: "CLEAR_DEPARTMENT_WORKS",
  };
}

export const clearSearchResults = () => {
  return {
    type: "CLEAR_SEARCH_RESULTS",
  };
}

export const loadImg = () => {
    return (dispatch) => {
        dispatch({
            type: 'start'
        })
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=12')
            .then(response => response.json())
            .then(json =>{
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}
export const deleteImg = (id) =>{
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/photos${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}
const initState = {
    projects : [
        {
            id: '1',
            title: 'Visualization of data structures',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestiae, beatae eum, sunt in aperiam ipsam ex ratione et fuga delectus perferendis cum totam consequuntur, quod animi repudiandae qui. Cum!'
        },
        {
            id: '2',
            title: 'Todo-App',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestiae, beatae eum, sunt in aperiam ipsam ex ratione et fuga delectus perferendis cum totam consequuntur, quod animi repudiandae qui. Cum!'
        },
        {
            id: '3',
            title: 'Blog Writer',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestiae, beatae eum, sunt in aperiam ipsam ex ratione et fuga delectus perferendis cum totam consequuntur, quod animi repudiandae qui. Cum!'
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('project crated', action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('project creation error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer

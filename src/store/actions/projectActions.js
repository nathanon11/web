export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authurId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authurId: authurId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

// export const ProjectDetails = (project) => {
//   return (dispatch, getState, {getFirestore}) => {
//     const firestore = getFirestore();
//     const profile = getState().firebase.profile;
//     const authurId = getState().firebase.auth.uid;
    
//     firestore.collection('projects').add({
//       ...project,
//       authorFirstName: profile.firstName,
//       authorLastName: profile.lastName,
//       authurId: authurId,
//       createdAt: new Date(),
//       command :command
//     }).then(() => {
//       dispatch({ type: 'SUCCESS' });
//     }).catch(err => {
//       dispatch({ type: 'ERROR' }, err);
//     });
//   }
// };
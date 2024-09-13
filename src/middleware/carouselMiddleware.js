import {
  FETCH_CAROUSEL_PICTURES,
  storePictureList,
  ADD_PICTURE,
  carouselFailure,
  fetchCarouselPictures,
  DELETE_PICTURE,
  // DELETE_NEWS,
  // POST_EDIT_NEWS_FORM,
} from '../actions/carouselActions';
import { logout, loginFailure } from '../actions/loginActions';

const carouselMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAROUSEL_PICTURES: {
      (async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel`,
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storePictureList(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ADD_PICTURE: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const picture64 = store.getState().carousel.newPictureInput;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel?user_id=${user_id}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                picture64,
              }),
            },
          );
          if (!response.ok) {
            const error = await response.json();
            if (error.status === 401) {
              store.dispatch(logout());
              store.dispatch(
                loginFailure(['The session has expired, please log in again.']),
              );
              throw new Error(error.errors);
            }
            store.dispatch(carouselFailure(error.errors));
            throw new Error(error.errors);
          }
          store.dispatch(fetchCarouselPictures());
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case DELETE_PICTURE: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const picture_id = action.pictureId;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel/${picture_id}?user_id=${user_id}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (!response.ok) {
            const error = await response.json();
            if (error.status === 401) {
              store.dispatch(logout());
              store.dispatch(
                loginFailure(['The session has expired, please log in again.']),
              );
              throw new Error(error.errors);
            }
            store.dispatch(carouselFailure(error.errors));
            throw new Error(error.errors);
          }
          store.dispatch(fetchCarouselPictures());
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    // case POST_EDIT_NEWS_FORM: {
    //   (async () => {
    //     try {
    //       const user_id = store.getState().login.loggedId;
    //       const token = store.getState().login.token;
    //       const form = store.getState().news.form;
    //       const news_id = store.getState().news.newsDetails.id;

    //       const response = await fetch(
    //         `${import.meta.env.VITE_API_URL}/posts/${news_id}?user_id=${user_id}`,
    //         {
    //           method: 'PUT',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${token}`,
    //           },
    //           body: JSON.stringify(form),
    //         },
    //       );
    //       if (!response.ok) {
    //         const error = await response.json();
    //         if (error.status === 401) {
    //           store.dispatch(logout());
    //           store.dispatch(
    //             loginFailure(['The session has expired, please log in again.']),
    //           );
    //           throw new Error(error.errors);
    //         }
    //         store.dispatch(newsFailure(error.errors));
    //         throw new Error(error.errors);
    //       }
    //       action.navigate('/admin/news');
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   })();
    //   break;
    // }

    default:
  }
  return next(action);
};

export default carouselMiddleware;

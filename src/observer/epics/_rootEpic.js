import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";


const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;

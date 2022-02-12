import { from, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as actions from "_state/actions/index";
import store from "_state/store/store";
import i18n from "../../_localization/i18n";

const handleResponse = (response, dispatch, reducerProperty = null) => {
  let data = response;
  let isCompletedResponse = data.errors ? true : false;

  if (isCompletedResponse) {
    let hasErrors = data.errors.length > 0;
    let logoutCommand = false;

    if (hasErrors) {
      let filteredErrors = data.errors.filter(
        (err) => err.message === "LOGOUT"
      );
      if (filteredErrors && filteredErrors.length > 0) logoutCommand = true;
    }

    if (logoutCommand) {
      dispatch(actions.userLogout());
      return data;
    }

    if (hasErrors) {
      dispatch(actions.setErrors(data.errors, reducerProperty));
    } else {
      dispatch(actions.clearErrors(reducerProperty));
    }

    return data;
  }

  if (isCompletedResponse && process.env.REACT_APP_ENV === "dev") {
    return {
      isSuccessfull: false,
      // errors: [
      //   {
      //     message: i18n.t("The application is offline!"),
      //     correspondingField: null,
      //   },
      // ],
      errors: [
      ],
    };
  } else if (isCompletedResponse && process.env.REACT_APP_ENV !== "dev") {
    return {
      isSuccessfull: false,
      errors: [],
    };
  }

  return data;
};

const dispatchActions = (data, actions) => {
  return of.apply(
    this,
    actions.map((el) => el(data))
  );
};

export const handleEpic = (
  serviceFunc,
  serviceFuncParams,
  successDispatchActions,
  failDispatchActions,
  dispatchToSuccessReducer,
  reduxErrorProp = null
) => {
  if (dispatchToSuccessReducer === true) {
    successDispatchActions.push((data) =>
      actions.setSuccessMessage(data.successMessage)
    );
    successDispatchActions.push(() =>
      actions.clearSuccessMessageAfterSetting()
    );
  }
  return from(serviceFunc.apply(this, serviceFuncParams)).pipe(
    map((res) => handleResponse(res, store.dispatch, reduxErrorProp)),
    mergeMap((data) => {
      if (data.isSuccessfull) {
        return dispatchActions(data, successDispatchActions);
      }

      if (!data.isSuccessfull)
        return dispatchActions(data, failDispatchActions);
    }),
    catchError((error) => {
      let hasStatus = error.status ? true : false;

      if (!hasStatus && process.env.REACT_APP_ENV === "dev") {
        return dispatchActions(
          {
            // errors: [
            //   {
            //     message: i18n.t("The application is offline!"),
            //     correspondingField: null,
            //   },
            // ],
            errors: [
            ],
          },
          [...failDispatchActions, (data) => actions.setErrors(data.errors)]
        );
      } else if (!hasStatus && process.env.REACT_APP_ENV !== "dev") {
        return dispatchActions(
          {
            errors: [],
          },
          [...failDispatchActions, (data) => actions.setErrors(data.errors)]
        );
      } else {
        if (error.status === 401) {
          return dispatchActions({}, [actions.userLogout]);
        }

        return dispatchActions(
          {
            errors: [{ message: i18n.t("Error"), correspondingField: null }],
          },
          [...failDispatchActions, (data) => actions.setErrors(data.errors)]
        );
      }
    })
  );
};

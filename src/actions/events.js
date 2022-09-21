import { getAllEventsAPI } from "../utils/api/eventAPI";
import { showLoading, hideLoading } from "./loading";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveEvents = (returnDataArr) => {
  return {
    type: RECEIVE_EVENTS,
    events: returnDataArr,
  };
};

export const getEventData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    getAllEventsAPI().then((returnDataArr) => {
      dispatch(receiveEvents(returnDataArr));
      dispatch(hideLoading());
    });
  };
};

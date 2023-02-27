"use strict";

import { DateTime } from './luxon/src/luxon.js';

const displayDate = document.querySelector('.date-and-time');

const getDate = () => {
  const now = DateTime.now();
  const time = now.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
  displayDate.textContent = time;
};

setInterval(getDate, 1000);
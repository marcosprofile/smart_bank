import React from 'react';

import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const light = <BsSunFill size="24px" />;
const dark = <BsMoonStarsFill size="24px" />;

// eslint-disable-next-line import/no-anonymous-default-export
export default (({ theme }) => (theme ? dark : light));

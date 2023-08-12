import React from 'react';

import {
  FaShop,
  FaHeartCircleCheck,
  FaTaxi,
  FaBasketShopping,
  FaGrip,
} from 'react-icons/fa6';

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
  const Images = {
    Restaurante: <FaShop size="24px" />,
    Utilidades: <FaBasketShopping size="24px" />,
    Saude: <FaHeartCircleCheck size="24px" />,
    Transporte: <FaTaxi size="24px" />,
    default: <FaGrip size="24px" />,
  };

  return Images[type] || Images.default;
};

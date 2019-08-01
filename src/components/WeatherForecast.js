import React from "react";
import { useTranslation } from "react-i18next";

const WeatherForecast = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("weather.title")}</h1>
    </div>
  );
};

export default WeatherForecast;

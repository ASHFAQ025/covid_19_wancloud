import React from "react";
import { Card } from "antd";

const CustomCard = (props) => {
  const { title, record, color } = props;
  return (
    <Card style={{ width: 200, backgroundColor: color }}>
      <h1>{title}</h1>
      <span style={{ fontSize: 30, textAlign: "center" }}>
        <p>{record}</p>
      </span>
    </Card>
  );
};

export default CustomCard;

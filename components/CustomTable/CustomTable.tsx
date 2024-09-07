"use client";

import React from 'react';
import { Table } from 'antd';

interface DataType {
  [key: string]: any;
}

interface CustomTableProps {
  data: DataType[];
}

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  const allKeys = Array.from(new Set(data.flatMap(Object.keys)));
    const columns = allKeys.map((key) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    dataIndex: key,
    key,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;

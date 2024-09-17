"use client";

import React from "react";
import { Table, Button, Flex } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface TableData {
  [key: string]: any;
}

interface CustomTableProps {
  data: TableData[];
  showActionButtons: boolean;
}

const CustomTable = ({ data, showActionButtons }: CustomTableProps) => {
  const allKeys = Array.from(new Set(data.flatMap(Object.keys)));
  const convertToNaturalString = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const columns: ColumnsType<TableData> = allKeys.map((key) => ({
    title: convertToNaturalString(key),
    dataIndex: key,
    key,
  }));

  if (showActionButtons) {
    columns.push({
      title: "Actions",
      key: "actions",
      render: () => (
        <Flex gap="small" vertical>
          <Flex wrap gap="small">
            <Button>
              <EditTwoTone />
            </Button>
            <Button>
              <DeleteTwoTone />
            </Button>
          </Flex>
        </Flex>
      ),
    });
  }

  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;

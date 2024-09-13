"use client";

import React from "react";
import { Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { boolean } from "zod";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

interface DataTable {
  [key: string]: any;
  flagSetting: boolean;
}

interface DataTableProps {
  data: DataTable[];
}

const CustomTable = ({ data }: DataTableProps) => {
  const allKeys = Array.from(new Set(data.flatMap(Object.keys)));
  const convertToNaturalString = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };
  const columns = allKeys.map((key) => {
    if (key === "flagSetting") {
      return {
        title: "Setting",
        dataIndex: key,
        key,
        render: (flagSetting: boolean) =>
          flagSetting ? (
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
          ) : (
            ""
          ),
      };
    }

    return {
      title: convertToNaturalString(key),
      dataIndex: key,
      key,
    };
  });
  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;

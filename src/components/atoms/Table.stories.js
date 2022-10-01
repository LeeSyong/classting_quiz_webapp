import Table from "./Table";

import palette from "../../styles/palette";

export default {
  title: "atoms/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const ResultTable = Template.bind({});
ResultTable.args = {
  tableHead: ["풀이 시간", "정답 개수", "오답 개수"],
  tableData: ["00분 12초", 2, 3],
  borderStyle: "hidden",
  textAlign: "center",
  boxShadow: `0 0 0 2px ${palette.green}`,
  fontSize: "1.3rem",
};

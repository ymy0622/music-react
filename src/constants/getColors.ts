interface JsonObject {
  [key: string]: string
}

function convertDataSourceToJSON(dataSource: string): JsonObject {
  const jsonData: JsonObject = {};

  // 正则表达式用于匹配数据源中的键值对信息
  const keyValueRegex: RegExp = /@(\w+):\s*#([0-9a-fA-F]{6});/;

  // 遍历数据源中的每一行
  dataSource.split('\n').forEach((line: string) => {
    const match: RegExpMatchArray | null = line.match(keyValueRegex);

    // 如果匹配成功，将键值对信息添加到JSON数据中
    if (match) {
      const key: string = match[1];
      const color: string = `#${match[2]}`.toUpperCase();

      // 将颜色信息添加到JSON数据中
      jsonData[key] = color;
    }
  });

  return jsonData;
}

const dataSource: string = `
/*********** primary ***********/
@primary: #21D49B;


/*********** success ***********/


/*********** danger ***********/


/*********** warning ***********/


/*********** link ***********/
`;

export const colors = convertDataSourceToJSON(dataSource)

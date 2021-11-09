import React from 'react';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {ScrollView, View} from 'native-base';
import {Table, Row} from 'react-native-table-component';

interface Props {
  tableData: string[][];
  tableHead: string[];
  widthArr: number[];
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  textStyle?: TextStyle;
  childColor?: string;
  childColorOdd?: string;
}

const CustomTable = ({
  tableData,
  tableHead,
  widthArr,
  headerStyle,
  headerTextStyle,
  textStyle,
  childColor = '#e4e4e7',
  childColorOdd = '#fafafa',
}: Props) => {
  const styles = {
    header: headerStyle || defaultStyles.header,
    headerText: headerTextStyle || defaultStyles.headerText,
    text: textStyle || defaultStyles.text,
    row: {
      ...defaultStyles.row,
      backgroundColor: childColor,
    } as ViewStyle,
  };
  return (
    <ScrollView horizontal={true} my="6">
      <View>
        <Table>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={styles.header}
            textStyle={styles.headerText}
          />
        </Table>
        <ScrollView style={defaultStyles.dataWrapper}>
          <Table>
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={widthArr}
                // @ts-ignore: Unreachable code error
                style={[
                  styles.row,
                  index % 2 && {backgroundColor: childColorOdd},
                ]}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const defaultStyles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'white',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#dc2626',
  },
  text: {
    textAlign: 'center',
    fontWeight: '300',
    color: '#000',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#e4e4e7',
  },
});

export default CustomTable;

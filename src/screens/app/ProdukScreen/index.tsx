/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, View, Container, Text, Center, useTheme} from 'native-base';
import {ProdukNavProps} from '../../../types/navigation';
import {StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import withAppLayout from '../../../components/Layout/AppLayout';
import CustomTable from '../../../components/CustomTable';

const mock = [
  {
    id: 1,
    first_name: 'Waylin',
    last_name: 'Edmundson',
    email: 'wedmundson0@businesswire.com',
    gender: 'Agender',
    ip_address: '5.68.159.178',
  },
  {
    id: 2,
    first_name: 'Bartholomeus',
    last_name: 'Gable',
    email: 'bgable1@mapy.cz',
    gender: 'Genderfluid',
    ip_address: '254.148.145.235',
  },
  {
    id: 3,
    first_name: 'Lynnell',
    last_name: 'Ackroyd',
    email: 'lackroyd2@about.com',
    gender: 'Genderqueer',
    ip_address: '254.231.45.224',
  },
  {
    id: 4,
    first_name: 'Marla',
    last_name: 'Gaughan',
    email: 'mgaughan3@auda.org.au',
    gender: 'Male',
    ip_address: '155.15.48.14',
  },
  {
    id: 5,
    first_name: 'Bernarr',
    last_name: 'Richemond',
    email: 'brichemond4@wikia.com',
    gender: 'Genderqueer',
    ip_address: '61.128.120.232',
  },
  {
    id: 6,
    first_name: 'Reinald',
    last_name: 'Cyson',
    email: 'rcyson5@4shared.com',
    gender: 'Genderfluid',
    ip_address: '114.9.217.105',
  },
  {
    id: 7,
    first_name: 'Rorie',
    last_name: 'Lachaize',
    email: 'rlachaize6@unc.edu',
    gender: 'Female',
    ip_address: '26.224.144.143',
  },
  {
    id: 8,
    first_name: 'Pet',
    last_name: 'Rostron',
    email: 'prostron7@mlb.com',
    gender: 'Polygender',
    ip_address: '122.246.235.28',
  },
  {
    id: 9,
    first_name: 'Emmalynne',
    last_name: 'Shields',
    email: 'eshields8@umich.edu',
    gender: 'Female',
    ip_address: '220.164.25.168',
  },
  {
    id: 10,
    first_name: 'Sula',
    last_name: 'Petri',
    email: 'spetri9@opera.com',
    gender: 'Male',
    ip_address: '18.15.233.209',
  },
];

const tableHead = ['Name', 'Email', 'Gender'];
const widthArr = [200, 200, 100];
const tableData = mock.map(data => [data.first_name, data.email, data.gender]);

interface Props extends ProdukNavProps {}

const ProdukScreen = ({}: Props) => {
  const theme = useTheme();
  console.log(
    '🚀 ~ file: index.tsx ~ line 101 ~ ProdukScreen ~ theme',
    JSON.stringify(theme.colors.gray),
  );
  return (
    <ScrollView w="full">
      <Center>
        <CustomTable
          tableData={tableData}
          tableHead={tableHead}
          widthArr={widthArr}
        />
      </Center>
      <View>
        <Container>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            nostrum eligendi delectus fugiat quam, repudiandae mollitia autem
            necessitatibus quibusdam, sed ab aperiam. Quasi sunt dignissimos qui
            porro recusandae, vitae non, minus molestiae quae, deleniti iusto
            quam? Nesciunt amet numquam facilis veniam ducimus, blanditiis dicta
            laboriosam beatae facere, non totam, tempore perspiciatis nobis ipsa
            odio reiciendis aliquam minus. Nam sunt ut voluptas voluptatum
            expedita tenetur dolorum cupiditate illum placeat deleniti excepturi
            illo non aspernatur eveniet nemo unde, adipisci facilis dolor
            laudantium vero est molestias impedit tempore? Excepturi, ut
            repellat rerum error, incidunt cupiditate et consequatur explicabo
            sapiente blanditiis dolorum distinctio cum?
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            nostrum eligendi delectus fugiat quam, repudiandae mollitia autem
            necessitatibus quibusdam, sed ab aperiam. Quasi sunt dignissimos qui
            porro recusandae, vitae non, minus molestiae quae, deleniti iusto
            quam? Nesciunt amet numquam facilis veniam ducimus, blanditiis dicta
            laboriosam beatae facere, non totam, tempore perspiciatis nobis ipsa
            odio reiciendis aliquam minus. Nam sunt ut voluptas voluptatum
            expedita tenetur dolorum cupiditate illum placeat deleniti excepturi
            illo non aspernatur eveniet nemo unde, adipisci facilis dolor
            laudantium vero est molestias impedit tempore? Excepturi, ut
            repellat rerum error, incidunt cupiditate et consequatur explicabo
            sapiente blanditiis dolorum distinctio cum?
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            nostrum eligendi delectus fugiat quam, repudiandae mollitia autem
            necessitatibus quibusdam, sed ab aperiam. Quasi sunt dignissimos qui
            porro recusandae, vitae non, minus molestiae quae, deleniti iusto
            quam? Nesciunt amet numquam facilis veniam ducimus, blanditiis dicta
            laboriosam beatae facere, non totam, tempore perspiciatis nobis ipsa
            odio reiciendis aliquam minus. Nam sunt ut voluptas voluptatum
            expedita tenetur dolorum cupiditate illum placeat deleniti excepturi
            illo non aspernatur eveniet nemo unde, adipisci facilis dolor
            laudantium vero est molestias impedit tempore? Excepturi, ut
            repellat rerum error, incidunt cupiditate et consequatur explicabo
            sapiente blanditiis dolorum distinctio cum?
          </Text>
        </Container>
      </View>
    </ScrollView>
  );
};

export default withAppLayout(ProdukScreen);

// const dataFields = [
//   {key: 'code', title: 'MARCA', width: 200},
//   {key: 'responsable', title: 'RESPONSABLE', width: 150},
//   {key: 'piezas', title: 'PZA', width: 100},
//   {key: 'peso', title: 'KG', width: 100},
//   {key: 'inicio', title: 'INICIO', width: 100},
//   {key: 'termino', title: 'ENTREGA', width: 100},
//   {key: 'hab', title: 'HABILITADO', width: 100},
//   {key: 'arm', title: 'ARMADO', width: 100},
//   {key: 'bar', title: 'BARRENADO', width: 100},
//   {key: 'sol', title: 'SOLDADO', width: 100},
//   {key: 'insp', title: 'LIBERACIÓN', width: 100},
// ];
// const dataRows: {
//   [key: string]: string | number;
// }[] = Array.apply(null, Array(10)).map((item, idx) => ({
//   code: `TEST-MARK-AREA-X-ITEM-${idx}`,
//   responsable: `RESPONSABLE-${idx}`,
//   piezas: 1,
//   peso: idx * 312,
//   inicio: '2019-02-01',
//   termino: '2019-04-30',
//   hab: 0,
//   arm: 0,
//   bar: 0,
//   sol: 0,
//   insp: 0,
// }));
// const data = dataRows.map(row => dataFields.map(field => row[field.key]));
// const tableHead = dataFields.map(field => field.title);
// const widthArr = dataFields.map(field => field.width);
// const tableData: string[][] = [];
// for (let i = 0; i < dataRows.length; i += 1) {
//   const rowData = [];
//   for (let j = 0; j < dataFields.length; j += 1) {
//     rowData.push(`${i}:${j}`);
//   }
//   tableData.push(rowData);
// }

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {API_COVID} from './src/utils/constants';
import styled from 'styled-components/native';
import {Colors} from './src/styles/main';
import {HeaderText} from './src/styles/typography';

interface IGlobal {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IData {
  Date?: string;
  Global?: IGlobal;
}

const App = () => {
  const [data, setData] = useState<IData>({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_COVID);

      setData(result.data);
    };

    fetchData().catch((error) => {
      console.log(error);
    });
  }, [data]);

  // console.log(data);

  return (
    <Container>
      <View>
        <Text>{data.Date}</Text>
        <HeaderText>Corona virus Cases</HeaderText>
        <Text>{data.Global ? data.Global.TotalConfirmed : 0}</Text>
      </View>
      <View>
        <Text>Deaths</Text>
        <Text>{data.Global ? data.Global.TotalDeaths : 0}</Text>
      </View>
      <View>
        <Text>Recovered</Text>
        <Text>{data.Global ? data.Global.TotalRecovered : 0}</Text>
      </View>
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  justify-content: center;
  align-items: center;
`;

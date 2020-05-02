import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { API_WHO } from './src/utils/constants';


const App = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        API_WHO
      );
 
      setData(result.data);
    };
 
    fetchData()
  }, []);

  
  console.log(data.hits);

  
  return (
    <>
    <View>
      <Text>Coronax</Text>
    </View>
    </>
  );
};


export default App;

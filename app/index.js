import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Div, Icon, Image, Input, Text } from "react-native-magnus";
import NavBar from "../components/header"
import Footer from "../components/footer"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const dropdownRef = React.createRef();

export default function Index() {

  const [hoten, setHoten] = useState('');
  const [diachi, setDiaChi] = useState('');
  const [sodienthoai, setSoDienThoai] = useState('');
  const [gioitinh, setGioiTinh] = useState('');
  const [lydokham, setLyDoKham] = useState('');


  const [data, setData] = useState([{}]);


  const limit = 5;
  const handleGetData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`).then(reponse => setData(reponse.data));
  }

  const styles = StyleSheet.create({
    scrollView: {
      flex: 1
    }
  })

  const handleClick = async () => {
    const view = {
      hoten,
      diachi,
      sodienthoai,
      gioitinh,
      lydokham
    }
    console.log("ly do kham: ", view);

    try {

      const response = await axios.post(`http://localhost:5179/api/DatLich`, {
        "id": uuidv4(),
        "hoten": view.hoten,
        "diachi": view.diachi,
        "sodienthoai": view.sodienthoai,
        "gioitinh": view.gioitinh,
        "lydokham": view.lydokham
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ height: "100%" }}>
      <NavBar />
      <ScrollView style={styles.scrollView}>
        <Div>
          <Image
            h={200}
            w="100%"
            mt={10}
            justifyContent="center"
            source={{
              uri: "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
            }}
          />
        </Div>
        <Div row mt={10} justifyContent="center">
          <Text style={{ fontSize: 36, fontWeight: "bold" }}>Đặt Khám</Text>
        </Div>
        <Div mt={10}>
          <Input
            placeholder="Họ Và Tên"
            focusBorderColor="blue700"
            onChangeText={(e) => setHoten(e)}
          />
          <Input
            mt={10}
            placeholder="Địa Chỉ"
            focusBorderColor="blue700"
            onChangeText={(e) => setDiaChi(e)}
          />
          <Div mt={10} row justifyContent="space-between">
            <Input
              placeholder="Số điện thoại"
              focusBorderColor="blue700"
              flex={1}
              mr={10}
              onChangeText={(e) => setSoDienThoai(e)}
            />
            <Input
              placeholder="Giới Tính"
              focusBorderColor="blue700"
              flex={1}
              onChangeText={(e) => setGioiTinh(e)}
            />
          </Div>
          <Input
            mt={10}
            placeholder="Lý Do Khám"
            focusBorderColor="blue700"
            onChangeText={(e) => setLyDoKham(e)}
          />
        </Div>
        <Div row justifyContent="center" mt={10}>
          <Button onPress={handleClick}>Đặt Ngay</Button>
        </Div>
        <Div row mt={50} justifyContent="center">
          <Text style={{ fontSize: 36, fontWeight: "bold" }}>Tin Tức</Text>
        </Div>
        <Div style={{
          height: "auto",
          flexDirection: "column",
          justifyContent: "space-around"
        }}>
          {/* <Div row style={{ justifyContent: "flex-start" }}>
            <Image
              h={60}
              w={60}
              justifyContent="center"
              source={{
                uri: "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
              }}
            />
            <Link href={"/blogs/1"}>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>Tin Tức 1</Text>
            </Link>
          </Div> */}
          {data && data.map(post => (
            <Div key={post?.id} row style={{ justifyContent: "flex-start" }}>
              <Image
                h={60}
                w={60}
                justifyContent="center"
                source={{
                  uri: "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
                }}
              />
              <Link href={"/blogs/1"}>
                <Text style={{ fontSize: 13, fontWeight: "bold" }}>{post?.title}</Text>
              </Link>
            </Div>
          ))}
        </Div>
        <Div>
          <Button
            onPress={handleGetData} height={50} width={50}>
            Lấy Data
          </Button>
          <Button
            onPress={() => setData([])} height={50} width={50}>
            Refresh Data
          </Button>
        </Div>
      </ScrollView>
      <Footer />
    </View>
  );
}

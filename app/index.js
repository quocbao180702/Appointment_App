import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Div, Icon, Image, Input, Text } from "react-native-magnus";
import { Dropdown } from "react-native-magnus";
import NavBar from "../components/header"


const dropdownRef = React.createRef();

export default function Index() {

  const styles = StyleSheet.create({
    scrollView: {
      flex: 1
    }
  })

  return (
    <View style={{
      height: "100%"
    }}>
      <NavBar />
      <ScrollView style={styles.ScrollView}>
        <Div>
          <Image
            h={200}
            w="100%"
            mt={10}
            justifyContent="center"
            source={{
              uri:
                "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
            }}
          />
        </Div>
        <Div row mt={10} justifyContent="center">
          <Text style={{
            fontSize: 36,
            fontWeight: "bold",
          }}>Đặt Khám</Text>
        </Div>
        <Div mt={10}>
          <Input
            placeholder="Họ Và Tên"
            focusBorderColor="blue700"
          />
          <Input
            mt={10}
            placeholder="Địa Chỉ"
            focusBorderColor="blue700"
          />
          <Div mt={10} row justifyContent="space-between">
            <Input
              placeholder="Số điện thoại"
              focusBorderColor="blue700"
              flex={1}
              mr={10} // Margin right để tạo khoảng cách giữa hai input
            />
            <Input
              placeholder="Giới Tính"
              focusBorderColor="blue700"
              flex={1}
            />
          </Div>

          <Input
            mt={10}
            placeholder="Lý Do Khám"
            focusBorderColor="blue700"
          />
        </Div>
        <Div row justifyContent="center" mt={10}>
          <Button>
            Đặt Ngay
          </Button>
        </Div>

        <Div row mt={50} justifyContent="center">
          <Text style={{
            fontSize: 36,
            fontWeight: "bold",
          }}>Tin Tức</Text>
        </Div>

        <Div >
          <Div row style={{
            justifyContent: "flex-start"
          }}>
            <Image
              h={60}
              w={60}
              justifyContent="center"
              source={{
                uri:
                  "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
              }}
            />
            <Link href={"/blogs/1"}>

              <Text style={{
                fontSize: 13,
                fontWeight: "normal",
              }}>Tin Tức 1</Text>
            </Link>
          </Div>

          <Div row style={{
            justifyContent: "flex-start"
          }}>
            <Image
              h={60}
              w={60}
              justifyContent="center"
              source={{
                uri:
                  "https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/05/Boost-Your-Healthcare-Career-with-TrueProfile.io-shutterstock_1708515637.jpg",
              }}
            />
            <Link href={"/blogs/2"}>

              <Text style={{
                fontSize: 13,
                fontWeight: "normal",
              }}>Tin Tức 2</Text>
            </Link>
          </Div>


        </Div>
      </ScrollView>

      {/* <Div row style={{
        position: "absolute",
        bottom: 65,
        left: 150
      }} justifyContent="center">
        <Button
          bg="blue500"
          h={60}
          w={60}
          mx="xl"
          rounded="circle"
          shadow="md"
          position="absolute"
          bottom="0"
          borderless
        >
          <Icon name="home" color="white" fontFamily="Feather" />
        </Button>
      </Div> */}
    </View>
  );
}

import { Link } from "expo-router";
import { View } from "react-native";
import { Button, Div } from "react-native-magnus";

function Index() {
    return (
        <View>
            <Div row justifyContent="space-between">
                <Button
                    mt="lg"
                    px="xl"
                    py="lg"
                    bg="white"
                    color="black"
                    underlayColor="red100"
                >
                    <Link href={"/"}>
                        Trang Chủ
                    </Link>
                </Button>
                <Button
                    mt="lg"
                    px="xl"
                    py="lg"
                    bg="white"
                    color="black"
                    underlayColor="red100"
                >
                    <Link href={"/aboutUs"}>
                        Về Chúng Tôi
                    </Link>
                </Button>
                <Button
                    mt="lg"
                    px="xl"
                    py="lg"
                    bg="white"
                    color="black"
                    underlayColor="red100"
                >
                    <Link href={"/recruiment"}>
                        Tuyển Dụng
                    </Link>
                </Button>
            </Div>
        </View>
    );
}

export default Index;
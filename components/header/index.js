import { Link } from "expo-router";
import { Button, Div } from "react-native-magnus";

function NavBar() {
    return (
        <Div row style={{
            justifyContent: "space-between",
            alignContent: "center"
        }}>
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
    );
}

export default NavBar;
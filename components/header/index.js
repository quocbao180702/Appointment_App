import { Link } from "expo-router";
import { Button, Div } from "react-native-magnus";

function NavBar() {
    return (
        <Div row style={{
            justifyContent: "flex-start",
            alignContent: "center"
        }}>
            <Button
                /* mt="lg"
                px="xl"
                py="lg" */
                bg="white"
                color="black"
                underlayColor="red100"
                style={{
                    flex: 1
                }}
            >
                <Link href={"/"}>
                    Trang Chủ
                </Link>
            </Button>
            <Button
               /*  mt="lg"
                px="xl"
                py="lg" */
                bg="white"
                color="black"
                underlayColor="red100"
                style={{
                    flex: 1
                }}
            >
                <Link href={"/aboutUs"}>
                    Về Chúng Tôi
                </Link>
            </Button>
            <Button
               /*  mt="lg"
                px="xl"
                py="lg" */
                bg="white"
                color="black"
                underlayColor="red100"
                style={{
                    flex: 1
                }}
            >
                <Link href={"/recruiment"}>
                    Tuyển Dụng
                </Link>
            </Button>
        </Div>
    );
}

export default NavBar;
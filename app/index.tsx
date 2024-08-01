import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/aboutUs"}>About Us</Link>
      <Link href="/aboutUs" asChild>
        <Pressable>
          <Text>Home</Text>
          <Text>About Us</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: '/user/[id]',
          params: { id: 'bacon' }
        }}>
          View user
        </Link>
    </View>
  );
}

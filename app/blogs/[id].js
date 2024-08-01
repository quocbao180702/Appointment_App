import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";


function BlogDetail() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>tin số: {id}</Text>
        </View>
    );
}

export default BlogDetail;
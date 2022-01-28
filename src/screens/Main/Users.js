import React from "react";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globalstyles } from "../../../assets/styles/globalstyles";
import useFetchAllUser from "../../components/useFetchAllUsers";
import IconButton from "../../components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import useDeleteSingleUser from "../../components/useDeleteSingleUser";

const Users = ({ navigation }) => {
  const { loading, users } = useFetchAllUser();

  const deleteUser = (id) => {
    const result = useDeleteSingleUser(id);
    result
      .then((res) => {
        if (res.status == 204) {
          Alert.alert("Info", "User is deleted", [
            {
              text: "OK",
              onPress: () => {
                navigation.push("Users");
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.col}>
      <View style={styles.row}>
        <View style={styles.row}>
          {item.status == "active" ? (
            <Ionicons
              name="ellipse"
              size={20}
              color="green"
              style={{ marginRight: 10 }}
            />
          ) : (
            <Ionicons
              name="ellipse"
              size={20}
              color="red"
              style={{ marginRight: 10 }}
            />
          )}
          <Text style={globalstyles.regularText}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <IconButton
            name="eye-outline"
            color="dodgerblue"
            clicked={() =>
              navigation.push("User", {
                id: item.id,
              })
            }
          />
          <IconButton
            name="pencil-outline"
            color="orange"
            clicked={() =>
              navigation.push("Edit User", {
                user: item,
              })
            }
          />
          <IconButton
            name="trash-outline"
            color="red"
            clicked={async () => {
              await Alert.alert(
                "Attention",
                "Are you sure you want to delete?",
                [
                  {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel deleting"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => deleteUser(item.id),
                  },
                ],
                {
                  cancelable: true,
                  onDismiss: () => Alert.alert("Cancel deleting"),
                }
              );
            }}
          />
        </View>
      </View>
      <Text style={globalstyles.regularText}>{item.email}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={globalstyles.container}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={globalstyles.safeViewContainer}>
      <Button
        title="Add New User"
        onPress={() => navigation.navigate("Create User")}
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Users;

const styles = StyleSheet.create({
  col: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: "dodgerblue",
  },
});

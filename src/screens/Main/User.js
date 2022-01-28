import React from "react";
import { Button, Text, View } from "react-native";
import { globalstyles } from "../../../assets/styles/globalstyles";
import useFetchSingleUser from "../../components/useFetchSingleUser";

const User = ({ navigation, route }) => {
  const { id } = route.params;
  const { loading, userData, error } = useFetchSingleUser(id);

  if (loading) {
    return (
      <View style={globalstyles.container}>
        <Text style={globalstyles.mediumText}>Loading</Text>
      </View>
    );
  }
  if (error) {
    <View style={globalstyles.container}>
      <Text style={globalstyles.mediumText}>User isn't found</Text>
    </View>;
  }
  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.mediumText}>Name :{userData.name}</Text>
      <Text style={globalstyles.regularText}>Email :{userData.email}</Text>
      <Text style={globalstyles.regularText}>Gender :{userData.gender}</Text>
      <Text style={globalstyles.regularText}>Status :{userData.status}</Text>
      <Button title="back to user" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default User;

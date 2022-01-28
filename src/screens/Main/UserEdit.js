import React, { useState } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import {
  clrPrimaryDark,
  globalstyles,
} from "../../../assets/styles/globalstyles";
import ButtonInputs from "../../components/ButtonInputs";

import InputField from "../../components/InputField";
import useEditUser from "../../components/useEditUser";

const UserEdit = ({ navigation, route }) => {
  const userData = route.params.user;

  const [user, setUser] = useState(userData);
  const [genderValue, setGenderValue] = useState(0);
  const [statusValue, setStatusValue] = useState(0);

  const handleEditUser = (user) => {
    // console.log(user);
    if (user.name && user.email) {
      const result = useEditUser(user);
      result
        .then((res) => {
          if (res.status == 200 || res.status == 201) {
            alert("User edited");
            navigation.push("Users");
          }
        })
        .catch((err) => {
          alert("wrong format");
        });
    } else {
      alert("field can't be empty");
    }
  };

  return (
    <SafeAreaView style={globalstyles.safeViewContainer}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={globalstyles.titleText}>Edit User</Text>
        <InputField
          command="Enter name"
          placeholder="E.g John Doe"
          onChange={(text) => setUser({ ...user, name: text })}
          thevalue={user.name}
        />
        <InputField
          command="Enter email"
          placeholder="Johndoe@yahoo.com"
          onChange={(text) => setUser({ ...user, email: text })}
          thevalue={user.email}
        />
        <ButtonInputs
          title="Select Gender"
          option0="female"
          option1="male"
          onPress0={() => {
            setGenderValue(0);
            setUser({ ...user, gender: "female" });
          }}
          onPress1={() => {
            setGenderValue(1);
            setUser({ ...user, gender: "male" });
          }}
          selectValue={genderValue}
        />
        <ButtonInputs
          title="Select Activity"
          option0="active"
          option1="inactive"
          onPress0={() => {
            setStatusValue(0);
            setUser({ ...user, status: "active" });
          }}
          onPress1={() => {
            setStatusValue(1);
            setUser({ ...user, status: "inactive" });
          }}
          selectValue={statusValue}
        />
        <Button
          title="Edit"
          color={clrPrimaryDark}
          onPress={() => {
            handleEditUser(user);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserEdit;

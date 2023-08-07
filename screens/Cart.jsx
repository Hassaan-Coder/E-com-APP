import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
export const cartItems = [
  {
    name: "macbok",
    image:
      "https://th.bing.com/th/id/OIP.eyfLxRHg7Vuy0hd56Hl2GgHaHa?pid=ImgDet&rs=1",
    product: ";lwkjfnifniw",
    stock: 3,
    price: 3232434,
    quantiy: 2,
  },
  {
    name: "iphone",
    image: "https://www.dslr-zone.com/wp-content/uploads/2021/10/1-2.jpeg",
    product: ";lwkjfnifnsdsdfvsdviw",
    stock: 3,
    price: 34,
    quantiy: 2,
  },
  {
    name: "iphone",
    image: "https://www.dslr-zone.com/wp-content/uploads/2021/10/1-2.jpeg",
    product: ";lwkjfnifnsseddvsdviw",
    stock: 3,
    price: 34,
    quantiy: 2,
  },
  {
    name: "iphone",
    image: "https://www.dslr-zone.com/wp-content/uploads/2021/10/1-2.jpeg",
    product: ";lwkjfnifnsddsfvsdviw",
    stock: 3,
    price: 34,
    quantiy: 2,
  },
  {
    name: "iphone",
    image: "https://www.dslr-zone.com/wp-content/uploads/2021/10/1-2.jpeg",
    product: ";lwkjfnifnsdvdsfvfvsdviw",
    stock: 3,
    price: 34,
    quantiy: 2,
  },
  {
    name: "phone",
    image: "https://i.ytimg.com/vi/WogsKiS-5bk/maxresdefault.jpg",
    product: ";lwkjfnisdcfniw",
    stock: 3,
    price: 324,
    quantiy: 2,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum value added",
      });
  };

  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity - 1;

    // if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id-={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantiy}
              incrementhandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>{cartItems.length} Items</Text>
        <Text>
          ₹234
          {/* {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )} */}
        </Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

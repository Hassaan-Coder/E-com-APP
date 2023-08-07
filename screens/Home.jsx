import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SeachModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Nice", _id: "lund" },
  { category: "Nce", _id: "lun" },
  { category: "Ne", _id: "lud" },
  { category: "Ne", _id: "ud" },
  { category: "Ne", _id: "d" },
  { category: "Ne", _id: "y" },
  { category: "Ne", _id: "udds" },
  { category: "Ne", _id: "la;rsgkmud" },
];

const products = [
  {
    price: 22332,
    name: "sample",
    stock: 23,
    images: [
      {
        url: "https://th.bing.com/th/id/R.ce197da109f47238ee3d0fc288161c51?rik=Hyins6m0JmSk7Q&pid=ImgRaw&r=0",
      },
    ],
    _id: "kdfvdfsnaskdvjniefsn",
  },
  {
    price: 22332,
    name: "sahelomple",
    stock: 23,
    images: [
      {
        url: "https://th.bing.com/th/id/R.ce197da109f47238ee3d0fc288161c51?rik=Hyins6m0JmSk7Q&pid=ImgRaw&r=0",
      },
    ],
    _id: "kdfvdfsnascascaskdvjniefsn",
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryBtnHandler = (id) => {
    setCategory(id);
  };

  const addTOCartHandler = (id) => {
    console.log("ADD TO CART", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defaultStyle}>
        <Header />

        {/* Heading Row */}

        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}

          <Heading text1="Our" text2="Products" />

          {/* SearchBAr */}

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                size={50}
                icon={"magnify"}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color3 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryBtnHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "left",
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* Products */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addTOCartHandler={addTOCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;

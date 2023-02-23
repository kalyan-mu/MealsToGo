import React, { Fragment } from "react";
import { Text, View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import styles from "./restaurants-info.component.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Fragment>
      <View style={styles.card}>
        <Favourite restaurant={restaurant} />
        <Image style={styles.img1} key={name} source={{ uri: photos[0] }} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.section}>
            <View style={styles.row}>
              {ratingArray.map((_, i) => (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`star-${placeId}-${i}`}
                />
              ))}
            </View>
            <View style={styles.sectionEnd}>
              {isClosedTemporarily && (
                <Text style={styles.Closed}>CLOSED TEMPORARILY</Text>
              )}
              <View style={styles.OpenClose} />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <View style={styles.OpenClose} />
              <Image style={styles.Img2} source={{ uri: icon }} />
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </Fragment>
  );
}

export default RestaurantInfo;

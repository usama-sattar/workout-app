import React, { useContext, useState } from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { UserContext } from "../../context/user";
import Excercises from "../../components/Exercises";
import styles from './styles'
import Search from '../../components/Search'
import { colors } from "../../utils/colors";

export default function Home({navigation}) {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([
    {
      "id": 1,
      "name": "Push Up",
      "mainMuscles": "Chest",
      "secondaryMuscles": "Triceps",
      "image": "data/images/pushup.png",
      "description": "A push-up is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms. Push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, or in some martial arts dojos."
  },
  {
      "id": 2,
      "name": "Pull Up",
      "mainMuscles": "Lats",
      "secondaryMuscles": "Biceps",
      "image": "data/images/pullup.png",
      "description": "A pull-up is a variety of upper-body compound pulling motions for the purpose of exercise. The most popular current meaning refers to a closed-chain bodyweight movement where the body is suspended by the arms, gripping something, and pulled up with muscular effort. As this happens, the wrists remain in neutral (straight, neither flexed or extended) position, the elbows flex and the shoulder adducts and/or extends to bring the elbows to or sometimes behind the torso. A traditional pull-up relies on upper body strength with no swinging or 'kipping' (using a forceful initial movement of the legs in order to gain momentum). The exercise often targets the latissimus dorsi muscle in the back along with many other assisting muscles."
  },
  {
      "id": 3,
      "name": "Leg Raise",
      "mainMuscles": "Abdominals",
      "secondaryMuscles": "Hip Flexor",
      "image": "data/images/legraise.png",
      "description": "The lying leg raise is done by lying on the floor on the back. It is done without apparatus except possibly cushions or weights for added resistance. Practitioners generally caution to keep the lower back in contact with the floor and place hands to sides or under lower back for support. If the back stays flat on floor and abdominals are tight, this keeps the abs engaged. Otherwise it would just be a hip flexor movement. Due to leverage, the hardest portion of a supine (laying) leg raise is generally the first part when the legs are on the floor, as this is when the femur is parallel with the earth and perpendicular to the pull of gravity."
  },
  {
      "id": 4,
      "name": "Bridge",
      "mainMuscles": "Spine Erectors",
      "secondaryMuscles": "Rear Shoulders",
      "image": "data/images/bridge.png",
      "description": "Bridge is an exercise. Many variations of this exercise are employed throughout the world, most commonly the balancing of the body on the head and feet. Hands are occasionally used instead of or along with the head. It is effective in improving lower back strength. Examples of bridging in sportive or self-defense applications are seen in Kung Fu, Yoga, Judo, Brazilian jiu jitsu, Capoeira, mixed martial arts, and wrestling. The bridge can also be done starting in standing position, called a Backbend."
  },
  {
      "id": 5,
      "name": "Handstand Push Up",
      "mainMuscles": "Shoulders",
      "secondaryMuscles": "Traps",
      "image": "data/images/handstandpushup.png",
      "description": "The handstand push-up (press-up) - also called the vertical push-up (press-up) or the inverted push-up (press-up) - is a type of push-up exercise where the body is positioned in a handstand. For a true handstand, the exercise is performed free-standing, held in the air. To prepare the strength until one has built adequate balance, the feet are often placed against a wall, held by a partner, or secured in some other way from falling. Handstand pushups require significant strength, and also balance and control if performed free-standing."
  },
  {
      "id": 6,
      "name": "Squat",
      "mainMuscles": "Legs",
      "secondaryMuscles": "Abdominals",
      "image": "data/images/squat.png",
      "description": "In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form."
  },
  {
    "id": 7,
    "name": "Squat",
    "mainMuscles": "Legs",
    "secondaryMuscles": "Abdominals",
    "image": "data/images/squat.png",
    "description": "In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form."
},
{
  "id": 8,
  "name": "Squat",
  "mainMuscles": "Legs",
  "secondaryMuscles": "Abdominals",
  "image": "data/images/squat.png",
  "description": "In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form."
},
{
  "id": 9,
  "name": "Squat",
  "mainMuscles": "Legs",
  "secondaryMuscles": "Abdominals",
  "image": "data/images/squat.png",
  "description": "In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form."
},
{
  "id": 10,
  "name": "Squat",
  "mainMuscles": "Legs",
  "secondaryMuscles": "Abdominals",
  "image": "data/images/squat.png",
  "description": "In strength training, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quads (vastus lateralus medialis and intermedius), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength and size of the legs and buttocks, as well as developing core strength. Isometrically, the lower back, the upper back, the abdominals, the trunk muscles, the costal muscles, and the shoulders and arms are all essential to the exercise and thus are trained when squatting with the proper form."
}
  ]);

  const searchExercises = (searchText) => {
    const data = [];
    const regex = new RegExp(searchText, "i");
    exercises &&
      exercises.forEach((exercise) => {
        const resultName = exercise.name.search(regex);
        if (resultName > 0) {
          data.push(exercise);
        }
      });
    return data;
  };
  const emptyView = () => {
    return (
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>That's not in the list {"\n"} yet</Text>
        <Text>Try different search</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <FlatList
        style={{ marginBottom: 70, marginTop:20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.searchContainer}>
            <Search setSearch={setSearch} search={search} />
          </View>
        }
        ListEmptyComponent={emptyView()}
        keyExtractor={(item, index) => index.toString()}
        data={search ? searchExercises(search) : exercises}
        renderItem={({ item }) => <Excercises item={item} navigation={navigation} />}
        ListFooterComponent={
          <View style={{marginVertical:10}} /> 
            }
      />
    </View>
  );
}

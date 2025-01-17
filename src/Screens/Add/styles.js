import { StyleSheet } from "react-native";

export default StyleSheet.create({

  formContainer: {
    flexDirection: "column",
    height: '100%',
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  inputTitle: {
    height: '7%',
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 10,
    margin: 5,
    width: '100%',
  },
  inputDescription: {
    height: '15%',
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 10,
    margin: 5,
    width: '100%',
  },
  inputInstruction: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    width: '100%',
    zIndex: -99999
  },
  ingredientContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 40,
    margin: 0,
    padding: 0,
    width: '100%',
  },
  ingredientCount: {
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    backgroundColor: "white",
    width: '10%',
  },
  ingredientInput: {
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

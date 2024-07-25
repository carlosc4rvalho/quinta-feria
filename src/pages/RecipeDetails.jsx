import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const recipesDetails = {
  '1': { /* ... */ },
  '2': { /* ... */ },
  '3': { /* ... */ },
  '4': { /* ... */ },
  '5': { /* ... */ }
};

function RecipeDetails({ route }) {
  const { recipeId } = route.params;
  console.log('ID recebido:', recipeId);
  const recipe = recipesDetails[recipeId];
  console.log('Receita encontrada:', recipe);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Receita não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.sectionTitle}>Grãos e Fermentáveis:</Text>
      {recipe.grains.map((grain, index) => (
        <Text key={index}>{`${grain.name} - ${grain.quantity}`}</Text>
      ))}
      <Text style={styles.sectionTitle}>Lúpulo:</Text>
      {recipe.hops.map((hop, index) => (
        <Text key={index}>{`${hop.name} (${hop.form}) - ${hop.quantity} - ${hop.time}`}</Text>
      ))}
      <Text style={styles.sectionTitle}>Levedura:</Text>
      {recipe.yeast.map((yeast, index) => (
        <Text key={index}>{`${yeast.name} - ${yeast.quantity} - ${yeast.attenuation}`}</Text>
      ))}
      <Text style={styles.sectionTitle}>Perfil da Brassagem:</Text>
      <Text>{recipe.mashingProfile}</Text>
      <Text style={styles.sectionTitle}>Perfil da Fermentação:</Text>
      <Text>{recipe.fermentationProfile}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default RecipeDetails;